import { useCallback, useEffect, useState } from "react";

import { fetchEarnDashboard, hasNativeBridge, requestWithdraw } from "@/api/earn";
import type { EarnDashboardDto } from "@/types/earn";

type State = {
  inApp: boolean;
  data: EarnDashboardDto | null;
  loading: boolean;
  error: string | null;
};

export function useEarnApi() {
  const [state, setState] = useState<State>(() => ({
    inApp: hasNativeBridge(),
    data: null,
    loading: hasNativeBridge(),
    error: null,
  }));

  const refresh = useCallback(async () => {
    if (!hasNativeBridge()) {
      setState((s) => ({ ...s, inApp: false, loading: false }));
      return;
    }
    setState((s) => ({ ...s, loading: true, error: null }));
    try {
      const data = await fetchEarnDashboard();
      setState({ inApp: true, data, loading: false, error: null });
    } catch (err) {
      setState((s) => ({
        ...s,
        loading: false,
        error: err instanceof Error ? err.message : "unknown error",
      }));
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  // Native posts a "refresh" event after a withdraw is submitted; re-fetch on it.
  useEffect(() => {
    const previous = window.deltaEarnEvent;
    window.deltaEarnEvent = (event) => {
      if (event?.type === "refresh") {
        void refresh();
      }
    };
    return () => {
      window.deltaEarnEvent = previous;
    };
  }, [refresh]);

  const withdraw = useCallback((campaignCode: string) => {
    requestWithdraw(campaignCode);
  }, []);

  return { ...state, refresh, withdraw };
}
