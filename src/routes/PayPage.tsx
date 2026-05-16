import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { CheckCircle2, Loader2, ShieldCheck, TriangleAlert } from "lucide-react";
import DeltaButton from "@/components/shared/DeltaButton";
import { siteConfig } from "@/config/site";

type PaymentRequest = {
  ref_id: string;
  wallet_address: string;
  fiat_amount: string;
  fiat_currency: string;
  label: string;
  status: string;
  created_at: string;
};

type CheckoutState = "loading" | "ready" | "opening" | "success" | "error";

const API_BASE_URL =
  "https://api.deltawallet.app";

export default function PayPage() {
  const params = new URLSearchParams(window.location.search);
  const refId = params.get("ref") || "";
  const fallbackAmount = params.get("amount") || "";
  const fallbackCurrency = params.get("currency") || "";
  const fallbackLabel = params.get("label") || "Delta Wallet user";

  const [request, setRequest] = useState<PaymentRequest | null>(null);
  const [state, setState] = useState<CheckoutState>("loading");
  const [error, setError] = useState("");
  const transakRef = useRef<{ close: () => void } | null>(null);

  const displayAmount = useMemo(() => {
    const amount = request?.fiat_amount || fallbackAmount;
    const currency = request?.fiat_currency || fallbackCurrency;
    return amount && currency ? `${amount} ${currency}` : "";
  }, [fallbackAmount, fallbackCurrency, request]);

  useEffect(() => {
    let cancelled = false;

    async function loadRequest() {
      if (!refId) {
        setError("This payment link is missing a reference.");
        setState("error");
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/onramp/request/${refId}/`);
        if (!response.ok) {
          throw new Error("Payment request was not found.");
        }

        const data = (await response.json()) as PaymentRequest;
        if (!cancelled) {
          setRequest(data);
          setState("ready");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unable to load payment request.");
          setState("error");
        }
      }
    }

    loadRequest();

    return () => {
      cancelled = true;
      transakRef.current?.close();
      transakRef.current = null;
    };
  }, [refId]);

  async function openTransak() {
    if (!refId || state === "opening") return;

    setState("opening");
    setError("");

    try {
      const sessionResponse = await fetch(`${API_BASE_URL}/api/onramp/transak-session/`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ref_id: refId }),
      });

      if (!sessionResponse.ok) {
        throw new Error("Unable to start the secure checkout.");
      }

      const { widgetUrl } = (await sessionResponse.json()) as { widgetUrl?: string };
      if (!widgetUrl) {
        throw new Error("Checkout session did not include a widget URL.");
      }

      const { Transak } = await import("@transak/ui-js-sdk");
      const transak = new Transak({ widgetUrl });
      transakRef.current = transak;

      Transak.on(Transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, () => {
        transak.close();
        transakRef.current = null;
        setState("success");
      });

      Transak.on(Transak.EVENTS.TRANSAK_WIDGET_CLOSE, () => {
        setState((current) => (current === "success" ? current : "ready"));
      });

      transak.init();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to open checkout.");
      setState("error");
    }
  }

  return (
    <main className="min-h-screen bg-delta-black text-delta-lightGray">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-8 sm:px-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={siteConfig.iconPath}
              alt=""
              className="h-10 w-10 rounded-lg"
            />
            <span className="text-base font-semibold text-white">{siteConfig.name}</span>
          </div>
          <div className="hidden items-center gap-2 text-sm text-delta-lightGray/70 sm:flex">
            <ShieldCheck className="h-4 w-4 text-delta-orange" />
            Secure checkout
          </div>
        </header>

        <div className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold text-delta-orange">
              Request Money from Abroad
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-normal text-white sm:text-5xl">
              Send money to {request?.label || fallbackLabel}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-delta-lightGray/70">
              Pay by card, Apple Pay, Google Pay, or supported bank methods. Delta receives USDT on BNB Smart Chain and credits the wallet after the blockchain deposit is confirmed.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-delta-nearBlack p-5 shadow-2xl shadow-black/30">
            {state === "loading" ? (
              <StatusBlock
                icon={<Loader2 className="h-7 w-7 animate-spin text-delta-orange" />}
                title="Loading request"
                body="Checking that this payment link is valid."
              />
            ) : state === "success" ? (
              <StatusBlock
                icon={<CheckCircle2 className="h-8 w-8 text-delta-success" />}
                title="Payment started successfully"
                body="The recipient will be credited automatically after the USDT arrives on-chain."
              />
            ) : state === "error" ? (
              <StatusBlock
                icon={<TriangleAlert className="h-8 w-8 text-delta-error" />}
                title="Checkout unavailable"
                body={error}
              />
            ) : (
              <>
                <div className="border-b border-white/10 pb-5">
                  <p className="text-sm text-delta-lightGray/55">Amount requested</p>
                  <p className="mt-2 text-4xl font-semibold text-white">
                    {displayAmount || "Amount unavailable"}
                  </p>
                </div>

                <dl className="mt-5 grid gap-4 text-sm">
                  <InfoRow label="Recipient" value={request?.label || fallbackLabel} />
                  <InfoRow label="Asset" value="USDT on BNB Smart Chain" />
                  <InfoRow
                    label="Wallet"
                    value={shortAddress(request?.wallet_address || params.get("to") || "")}
                  />
                </dl>

                <button
                  type="button"
                  onClick={openTransak}
                  disabled={state === "opening"}
                  className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-delta-orange px-6 text-sm font-semibold text-delta-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {state === "opening" ? "Opening checkout..." : "Continue to secure payment"}
                </button>
              </>
            )}
          </div>
        </div>

        <footer className="border-t border-white/10 pt-5 text-sm text-delta-lightGray/55">
          <DeltaButton href="/" variant="secondary" className="min-h-10 px-4">
            Back to Delta Wallet
          </DeltaButton>
        </footer>
      </section>
    </main>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="text-delta-lightGray/55">{label}</dt>
      <dd className="max-w-[220px] break-words text-right font-medium text-white">{value}</dd>
    </div>
  );
}

function StatusBlock({
  icon,
  title,
  body,
}: {
  icon: ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex min-h-72 flex-col items-center justify-center text-center">
      {icon}
      <h2 className="mt-5 text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-3 max-w-sm text-sm leading-6 text-delta-lightGray/65">{body}</p>
    </div>
  );
}

function shortAddress(address: string) {
  if (address.length <= 16) return address || "Unavailable";
  return `${address.slice(0, 6)}...${address.slice(-6)}`;
}
