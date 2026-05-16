import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  CheckCircle2,
  Copy,
  Loader2,
  ShieldCheck,
  TriangleAlert,
  Wallet,
} from "lucide-react";
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
  network: string;
  token: string;
};

type PageState = "loading" | "ready" | "expired" | "error";

const API_BASE_URL = "https://api.deltawallet.app";

export default function PayPage() {
  const params = new URLSearchParams(window.location.search);
  const refId = params.get("ref") || "";

  const [request, setRequest] = useState<PaymentRequest | null>(null);
  const [state, setState] = useState<PageState>("loading");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const displayAmount = useMemo(() => {
    if (!request) return "";
    return `${request.fiat_amount} ${request.fiat_currency}`;
  }, [request]);

  useEffect(() => {
    let cancelled = false;

    async function loadRequest() {
      if (!refId) {
        setError("Payment link is missing a reference. رابط الدفع غير مكتمل.");
        setState("error");
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/api/onramp/request/${refId}/`);
        if (!response.ok) {
          throw new Error("Payment request was not found. لم يتم العثور على طلب الدفع.");
        }

        const data = (await response.json()) as PaymentRequest;
        if (cancelled) return;

        setRequest(data);
        setState(data.status === "pending" ? "ready" : "expired");
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Unable to load payment request. تعذر تحميل طلب الدفع."
          );
          setState("error");
        }
      }
    }

    loadRequest();

    return () => {
      cancelled = true;
    };
  }, [refId]);

  async function copyValue(key: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      window.setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  }

  return (
    <main className="min-h-screen bg-delta-black text-delta-lightGray">
      <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-5 py-8 sm:px-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={siteConfig.iconPath} alt="" className="h-10 w-10 rounded-lg" />
            <span className="text-base font-semibold text-white">{siteConfig.name}</span>
          </div>
          <div className="hidden items-center gap-2 text-sm text-delta-lightGray/70 sm:flex">
            <ShieldCheck className="h-4 w-4 text-delta-orange" />
            Direct USDT payment
          </div>
        </header>

        <div className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold text-delta-orange">
              Request Money from Abroad
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-normal text-white sm:text-5xl">
              Pay with USDT on BSC
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-delta-lightGray/70">
              Send USDT directly to the Delta Wallet address below. The wallet is credited automatically after the blockchain deposit is detected.
            </p>
            <p className="mt-4 max-w-xl font-[Delta Cairo] text-base leading-8 text-delta-lightGray/70" dir="rtl">
              أرسل USDT مباشرة إلى عنوان Delta Wallet أدناه. سيتم إضافة الرصيد تلقائياً بعد تأكيد الإيداع على الشبكة.
            </p>
          </div>

          <div className="rounded-lg border border-white/10 bg-delta-nearBlack p-5 shadow-2xl shadow-black/30">
            {state === "loading" ? (
              <StatusBlock
                icon={<Loader2 className="h-7 w-7 animate-spin text-delta-orange" />}
                title="Loading request"
                body="Checking that this payment link is valid."
              />
            ) : state === "error" ? (
              <StatusBlock
                icon={<TriangleAlert className="h-8 w-8 text-delta-error" />}
                title="Payment request unavailable"
                body={error}
              />
            ) : state === "expired" ? (
              <StatusBlock
                icon={<TriangleAlert className="h-8 w-8 text-delta-warning" />}
                title="This payment request has expired or already completed"
                body="Please ask the recipient to create a new request. الرجاء طلب رابط دفع جديد من المستلم."
              />
            ) : request ? (
              <>
                <div className="flex items-start gap-4 border-b border-white/10 pb-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-delta-orange/15">
                    <Wallet className="h-6 w-6 text-delta-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-delta-lightGray/55">Amount requested</p>
                    <p className="mt-1 text-4xl font-semibold text-white">{displayAmount}</p>
                    <p className="mt-2 text-sm text-delta-lightGray/65">
                      Receiver: {request.label || "Delta Wallet user"}
                    </p>
                  </div>
                </div>

                <dl className="mt-5 grid gap-4 text-sm">
                  <InfoRow label="Token" value={request.token || "USDT"} />
                  <InfoRow label="Network" value={request.network || "BSC"} />
                  <CopyRow
                    label="Wallet address"
                    value={request.wallet_address}
                    copied={copied === "wallet"}
                    onCopy={() => copyValue("wallet", request.wallet_address)}
                  />
                  <CopyRow
                    label="Amount reference"
                    value={displayAmount}
                    copied={copied === "amount"}
                    onCopy={() => copyValue("amount", displayAmount)}
                  />
                </dl>

                <div className="mt-6 rounded-lg border border-delta-orange/25 bg-delta-black p-4">
                  <h2 className="text-base font-semibold text-white">Payment instructions</h2>
                  <ol className="mt-3 grid gap-3 text-sm leading-6 text-delta-lightGray/75">
                    <li>1. Open your crypto wallet or exchange account.</li>
                    <li>2. Choose USDT on BNB Smart Chain/BSC/BEP20.</li>
                    <li>3. Send to the wallet address above.</li>
                    <li>4. Keep the receipt until the recipient confirms the credit.</li>
                  </ol>
                  <div className="mt-4 border-t border-white/10 pt-4 font-[Delta Cairo] text-sm leading-7 text-delta-lightGray/75" dir="rtl">
                    اختر USDT على شبكة BSC أو BEP20 فقط. لا ترسل على Ethereum أو Tron أو أي شبكة أخرى.
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-lg border border-delta-warning/30 bg-delta-warning/10 p-4 text-sm leading-6 text-delta-lightGray/80">
                  <TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-delta-warning" />
                  <p>
                    Send only USDT on BSC/BEP20. Sending another token or network can permanently lose funds.
                  </p>
                </div>
              </>
            ) : null}
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
      <dd className="max-w-[260px] break-words text-right font-medium text-white">{value}</dd>
    </div>
  );
}

function CopyRow({
  label,
  value,
  copied,
  onCopy,
}: {
  label: string;
  value: string;
  copied: boolean;
  onCopy: () => void;
}) {
  return (
    <div className="grid gap-2">
      <dt className="text-delta-lightGray/55">{label}</dt>
      <dd className="flex items-center gap-2 rounded-lg border border-white/10 bg-delta-black px-3 py-3">
        <span className="min-w-0 flex-1 break-all text-sm font-medium text-white">{value}</span>
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex h-9 shrink-0 items-center gap-2 rounded-md border border-white/10 px-3 text-xs font-semibold text-delta-lightGray transition hover:border-delta-orange hover:text-white"
        >
          <Copy className="h-4 w-4" />
          {copied ? "Copied" : "Copy"}
        </button>
      </dd>
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
