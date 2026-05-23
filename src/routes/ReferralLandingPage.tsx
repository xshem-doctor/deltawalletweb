import { useState } from "react";
import { useParams } from "react-router-dom";
import { CheckCircle2, Download, Gift, TriangleAlert } from "lucide-react";
import { siteConfig } from "@/config/site";

/**
 * Invite landing page — ``/r/:memo``.
 *
 * Sideloaded-APK referral hand-off: there is no Play Store, so we can't use the
 * Play Install Referrer API. Instead, on a user gesture we copy a tagged token
 * (``deltawallet-invite:<memo>``) to the clipboard and start the APK download.
 * The Android app reads the clipboard once on first launch and pre-fills the
 * invite code. The raw code is also shown so the user can type it manually if
 * the clipboard hand-off fails.
 */

// Must stay in sync with the Android ReferralCapture INVITE_PREFIX constant.
const INVITE_PREFIX = "deltawallet-invite:";

// A memo is a UUID; accept a lenient url-safe slug so a malformed link is
// rejected client-side rather than copying junk to the clipboard.
function isValidMemo(value: string): boolean {
  return /^[A-Za-z0-9-]{8,64}$/.test(value);
}

export default function ReferralLandingPage() {
  const { memo: rawMemo } = useParams();
  const memo = (rawMemo || "").trim();
  const valid = isValidMemo(memo);

  const [copied, setCopied] = useState(false);

  async function copyInviteToken() {
    try {
      await navigator.clipboard.writeText(`${INVITE_PREFIX}${memo}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be unavailable (older browsers / denied). The user can
      // still read and type the code shown below — no hard failure.
      setCopied(false);
    }
  }

  async function copyAndDownload() {
    await copyInviteToken();
    window.location.href = siteConfig.apkUrl;
  }

  return (
    <main className="min-h-screen bg-delta-black text-delta-lightGray">
      <section className="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 py-8 sm:px-8">
        <header className="flex items-center gap-3">
          <img src={siteConfig.iconPath} alt="" className="h-10 w-10 rounded-lg" />
          <span className="text-base font-semibold text-white">{siteConfig.name}</span>
        </header>

        <div className="flex flex-1 flex-col justify-center py-12">
          {!valid ? (
            <div className="rounded-lg border border-white/10 bg-delta-nearBlack p-6 text-center">
              <TriangleAlert className="mx-auto h-9 w-9 text-delta-warning" />
              <h1 className="mt-4 text-2xl font-semibold text-white">
                Invalid invite link
              </h1>
              <p className="mt-3 text-sm leading-6 text-delta-lightGray/65">
                This invite link is incomplete or incorrect.
              </p>
              <p className="mt-2 font-[Delta Cairo] text-sm leading-7 text-delta-lightGray/65" dir="rtl">
                رابط الدعوة غير مكتمل أو غير صحيح.
              </p>
            </div>
          ) : (
            <div className="rounded-lg border border-white/10 bg-delta-nearBlack p-6 shadow-2xl shadow-black/30">
              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-delta-orange/15">
                  <Gift className="h-6 w-6 text-delta-orange" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-delta-orange">
                    You've been invited
                  </p>
                  <h1 className="mt-1 text-2xl font-semibold text-white">
                    Join Delta Wallet
                  </h1>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-delta-lightGray/75">
                Install the app, then sign up. Your friend's invite code is
                pre-filled automatically — or paste it yourself if it's missing.
              </p>
              <p className="mt-3 font-[Delta Cairo] text-sm leading-7 text-delta-lightGray/75" dir="rtl">
                ثبّت التطبيق ثم سجّل الدخول. سيُملأ رمز دعوة صديقك تلقائياً، أو ألصقه بنفسك إذا لم يظهر.
              </p>

              <div className="mt-5 rounded-lg border border-white/10 bg-delta-black px-4 py-3">
                <p className="text-xs uppercase tracking-wide text-delta-lightGray/55">
                  Your invite code
                </p>
                <p className="mt-1 break-all font-mono text-sm font-medium text-white">
                  {memo}
                </p>
              </div>

              <button
                type="button"
                onClick={copyAndDownload}
                className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-delta-orange px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(245,106,10,0.35)] transition hover:brightness-110"
              >
                <Download className="h-5 w-5" />
                Copy code &amp; download app
              </button>

              <button
                type="button"
                onClick={copyInviteToken}
                className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-delta-nearBlack px-6 text-sm font-semibold text-delta-lightGray transition hover:border-delta-orange hover:text-white"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="h-4 w-4 text-delta-orange" />
                    Code copied
                  </>
                ) : (
                  "Copy code only"
                )}
              </button>

              <ol className="mt-6 grid gap-2 border-t border-white/10 pt-5 text-sm leading-6 text-delta-lightGray/70">
                <li>1. Tap "Copy code &amp; download app".</li>
                <li>2. Install the APK and open Delta Wallet.</li>
                <li>3. On the signup screen, the invite code is already filled in.</li>
              </ol>
            </div>
          )}
        </div>

        <footer className="border-t border-white/10 pt-5 text-sm text-delta-lightGray/55">
          Delta Wallet is not a bank. Digital asset transactions involve risk.
        </footer>
      </section>
    </main>
  );
}
