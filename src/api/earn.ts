/**
 * Earn dashboard API client.
 *
 * The page is opened inside an Android WebView. The native side exposes a JS bridge
 * named ``DeltaBridge`` with:
 *
 *   - ``getAuthToken()``   → JWT (string) for the logged-in user, or "" if absent
 *   - ``getLocale()``      → "en" | "ar"
 *   - ``getUserMemo()``    → user's referral memo (for share helpers, optional)
 *   - ``requestWithdraw(jsonPayload)`` → native handles the confirm sheet + POST
 *   - ``close()``          → close the WebView
 *
 * When the page is opened in a regular browser (no bridge), every helper returns
 * null/empty and the page falls back to the "Open in app" state.
 */

import { siteConfig } from "@/config/site";
import type { EarnDashboardDto, RewardWithdrawDto } from "@/types/earn";

type DeltaBridge = {
  getAuthToken?: () => string;
  getLocale?: () => string;
  getUserMemo?: () => string;
  requestWithdraw?: (payload: string) => void;
  close?: () => void;
};

declare global {
  interface Window {
    DeltaBridge?: DeltaBridge;
    /** Native posts here when a withdraw was submitted so the page can re-fetch. */
    deltaEarnEvent?: (event: { type: string }) => void;
  }
}

function bridge(): DeltaBridge | null {
  if (typeof window === "undefined") return null;
  return window.DeltaBridge ?? null;
}

export function hasNativeBridge(): boolean {
  const b = bridge();
  return Boolean(b && typeof b.getAuthToken === "function");
}

export function getAuthToken(): string {
  return bridge()?.getAuthToken?.() ?? "";
}

export function getBridgeLocale(): string | null {
  return bridge()?.getLocale?.() ?? null;
}

export function getUserMemo(): string {
  return bridge()?.getUserMemo?.() ?? "";
}

export function bridgeClose(): void {
  bridge()?.close?.();
}

async function authedFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const token = getAuthToken();
  const headers: HeadersInit = {
    Accept: "application/json",
    "Content-Type": "application/json",
    ...(init?.headers ?? {}),
  };
  if (token) {
    (headers as Record<string, string>).Authorization = `Bearer ${token}`;
  }

  const resp = await fetch(`${siteConfig.earnApiBase}${path}`, {
    ...init,
    headers,
  });

  if (!resp.ok) {
    const body = await resp.text().catch(() => "");
    throw new Error(`HTTP ${resp.status}: ${body || resp.statusText}`);
  }

  return (await resp.json()) as T;
}

export function fetchEarnDashboard(): Promise<EarnDashboardDto> {
  return authedFetch<EarnDashboardDto>("/api/tasks/earn/");
}

/**
 * Trigger the native withdraw flow. The native side renders the confirmation sheet,
 * calls ``POST /api/tasks/earn/withdraw/`` and then re-emits a ``"refresh"`` event so
 * the page can re-fetch the dashboard.
 */
export function requestWithdraw(campaignCode: string): void {
  const b = bridge();
  if (b?.requestWithdraw) {
    b.requestWithdraw(JSON.stringify({ campaign_code: campaignCode }));
    return;
  }
  // Browser fallback — only useful for local dev.
  void authedFetch<RewardWithdrawDto>("/api/tasks/earn/withdraw/", {
    method: "POST",
    body: JSON.stringify({ campaign_code: campaignCode }),
  });
}
