import Card from "@/components/shared/Card";
import Container from "@/components/shared/Container";
import DownloadButton from "@/components/shared/DownloadButton";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { useEarnApi } from "@/hooks/useEarnApi";
import { useT } from "@/i18n/useT";
import type {
  CampaignStatusDto,
  RewardBalanceDto,
  RewardWithdrawDto,
  UserTaskDto,
} from "@/types/earn";
import { fmt, fmtAmount } from "@/utils/fmt";

export default function EarnPage() {
  const t = useT();
  const { inApp, data, loading, error, refresh, withdraw } = useEarnApi();

  // ---------------------------------------------------------------- Fallback when opened in a regular browser.
  if (!inApp) {
    return (
      <>
        <PageHero
          eyebrow={t("earn.hero.eyebrow")}
          title={t("earn.openInApp.title")}
          subtitle={t("earn.openInApp.body")}
          actions={<DownloadButton />}
        />
      </>
    );
  }

  if (loading && !data) {
    return (
      <section className="bg-delta-black py-20">
        <Container>
          <p className="text-center text-sm text-delta-lightGray/70">
            {t("earn.loading")}
          </p>
        </Container>
      </section>
    );
  }

  if (error || !data) {
    return (
      <section className="bg-delta-black py-20">
        <Container>
          <Card className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold text-white">
              {t("earn.error.title")}
            </h2>
            <p className="mt-3 text-sm text-delta-lightGray/70">{error}</p>
            <button
              type="button"
              onClick={refresh}
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full border border-delta-charcoal bg-delta-nearBlack px-6 text-sm font-semibold text-white hover:border-delta-orange"
            >
              {t("earn.error.retry")}
            </button>
          </Card>
        </Container>
      </section>
    );
  }

  const primary = data.campaigns[0];

  return (
    <>
      <EarnHero t={t} campaign={primary} />
      <section className="bg-delta-black pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {data.campaigns.map((campaign) => (
                <CampaignSection key={campaign.code} t={t} campaign={campaign} />
              ))}
              {data.withdraws.length > 0 ? (
                <WithdrawHistory t={t} rows={data.withdraws} />
              ) : null}
            </div>
            <aside className="space-y-6">
              <BalanceCards t={t} balances={data.reward_balances} campaign={primary} onWithdraw={withdraw} />
              {data.campaigns.flatMap((c) => c.history).length > 0 ? (
                <RoundHistory t={t} campaigns={data.campaigns} />
              ) : null}
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

// ---------------------------------------------------------------- pieces

type TFn = ReturnType<typeof useT>;

function EarnHero({ t, campaign }: { t: TFn; campaign: CampaignStatusDto | undefined }) {
  const eyebrow = t<string>("earn.hero.eyebrow");
  if (!campaign) {
    return (
      <PageHero
        eyebrow={eyebrow}
        title={t<string>("earn.hero.title")}
        subtitle={t<string>("earn.hero.subtitle")}
      />
    );
  }

  const reward = `${fmtAmount(campaign.reward_amount)} ${campaign.reward_token.symbol}`;
  const cap = campaign.monthly_round_cap;
  const roundsLabel =
    cap === null || cap === 0
      ? t<string>("earn.rounds.unlimited")
      : fmt(t<string>("earn.rounds.progress"), {
          done: campaign.rounds_completed_this_month,
          cap,
        });

  return (
    <section className="bg-delta-black py-14 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-delta-orange">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            {campaign.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-delta-lightGray/70">
            {t<string>("earn.hero.subtitle")}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full bg-delta-orange/15 px-4 py-2 font-semibold text-delta-orange">
              {reward}
            </span>
            <span className="rounded-full border border-white/10 bg-delta-nearBlack px-4 py-2 text-delta-lightGray/80">
              {t<string>("earn.rounds.label")} · {roundsLabel}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CampaignSection({ t, campaign }: { t: TFn; campaign: CampaignStatusDto }) {
  const round = campaign.round;
  const tasks: UserTaskDto[] = round?.tasks ?? [];
  const cap = campaign.monthly_round_cap;
  const capReached =
    cap !== null && cap > 0 && campaign.rounds_completed_this_month >= cap && !round;

  return (
    <Card>
      <SectionHeading title={`${campaign.title} — ${t<string>("earn.tasks.title")}`} align="left" />

      {capReached ? (
        <p className="mt-5 text-sm text-delta-lightGray/70">
          {t<string>("earn.rounds.capReached")}
        </p>
      ) : null}

      <div className="mt-6 space-y-4">
        {tasks.map((task) => (
          <TaskRow key={task.code} t={t} task={task} />
        ))}
      </div>
    </Card>
  );
}

function TaskRow({ t, task }: { t: TFn; task: UserTaskDto }) {
  const goal = Number(task.goal_amount) || 0;
  const current = Math.min(Number(task.current_progress) || 0, goal || 1);
  const pct = goal === 0 ? 0 : Math.round((current / goal) * 100);

  const kindLabel = (() => {
    switch (task.kind) {
      case "deposit":
        return t<string>("earn.tasks.kindDeposit");
      case "referral_active":
        return t<string>("earn.tasks.kindReferralActive");
      case "swap":
        return t<string>("earn.tasks.kindSwap");
      default:
        return t<string>("earn.tasks.kindManual");
    }
  })();

  const minUnit = Number(task.min_unit_amount);
  const hint =
    task.kind === "referral_active" && minUnit > 0
      ? fmt(t<string>("earn.tasks.invitesHint"), { amount: fmtAmount(minUnit) })
      : task.kind === "swap" && minUnit > 0
      ? fmt(t<string>("earn.tasks.minUnit"), { amount: fmtAmount(minUnit) })
      : "";

  return (
    <div className="rounded-md border border-white/10 bg-delta-black/40 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-delta-orange/80">{kindLabel}</p>
          <p className="mt-1 text-sm font-semibold text-white">{task.title}</p>
        </div>
        <span
          className={
            task.completed
              ? "rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300"
              : "rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-delta-lightGray/70"
          }
        >
          {task.completed ? t<string>("earn.tasks.done") : t<string>("earn.tasks.notDone")}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-3">
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5">
          <div
            className="h-full rounded-full bg-delta-orange transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-delta-lightGray/70">
          {fmt(t<string>("earn.tasks.progress"), {
            current: fmtAmount(task.current_progress),
            goal: fmtAmount(task.goal_amount, 0),
          })}
        </span>
      </div>

      {hint ? (
        <p className="mt-3 text-xs leading-5 text-delta-lightGray/55">{hint}</p>
      ) : null}
    </div>
  );
}

function BalanceCards({
  t,
  balances,
  campaign,
  onWithdraw,
}: {
  t: TFn;
  balances: RewardBalanceDto[];
  campaign: CampaignStatusDto | undefined;
  onWithdraw: (campaignCode: string) => void;
}) {
  const main =
    balances.find((b) => b.token.symbol === campaign?.reward_token.symbol) ?? balances[0];
  const available = Number(main?.available ?? 0);
  const required = Number(campaign?.reward_amount ?? 0);
  const canWithdraw = !!campaign && available >= required && required > 0;

  return (
    <Card>
      <p className="text-xs uppercase tracking-wide text-delta-lightGray/55">
        {t<string>("earn.balance.title")}
      </p>
      <p className="mt-3 text-3xl font-semibold text-white">
        {main ? `${fmtAmount(main.available)} ${main.token.symbol}` : "—"}
      </p>
      <p className="mt-1 text-xs text-delta-lightGray/55">
        {t<string>("earn.balance.available")}
      </p>

      {main ? (
        <dl className="mt-5 space-y-2 text-xs text-delta-lightGray/70">
          <div className="flex justify-between">
            <dt>{t<string>("earn.balance.locked")}</dt>
            <dd>{`${fmtAmount(main.locked_balance)} ${main.token.symbol}`}</dd>
          </div>
          <div className="flex justify-between">
            <dt>{t<string>("earn.balance.lifetime")}</dt>
            <dd>{`${fmtAmount(main.lifetime_earned)} ${main.token.symbol}`}</dd>
          </div>
        </dl>
      ) : null}

      {campaign ? (
        <button
          type="button"
          disabled={!canWithdraw}
          onClick={() => onWithdraw(campaign.code)}
          className={
            "mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition " +
            (canWithdraw
              ? "bg-delta-orange text-white shadow-[0_14px_34px_rgba(245,106,10,0.35)] hover:brightness-110"
              : "cursor-not-allowed bg-white/5 text-delta-lightGray/40")
          }
        >
          {canWithdraw
            ? fmt(t<string>("earn.balance.withdraw"), {
                amount: fmtAmount(campaign.reward_amount),
                symbol: campaign.reward_token.symbol,
              })
            : t<string>("earn.balance.withdrawDisabled")}
        </button>
      ) : null}
    </Card>
  );
}

function RoundHistory({ t, campaigns }: { t: TFn; campaigns: CampaignStatusDto[] }) {
  const all = campaigns
    .flatMap((c) =>
      c.history.map((r) => ({
        round: r,
        campaign: c,
      })),
    )
    .slice(0, 10);

  if (all.length === 0) {
    return (
      <Card>
        <p className="text-xs uppercase tracking-wide text-delta-lightGray/55">
          {t<string>("earn.history.title")}
        </p>
        <p className="mt-3 text-sm text-delta-lightGray/70">
          {t<string>("earn.history.empty")}
        </p>
      </Card>
    );
  }

  return (
    <Card>
      <p className="text-xs uppercase tracking-wide text-delta-lightGray/55">
        {t<string>("earn.history.title")}
      </p>
      <ul className="mt-3 space-y-3 text-sm">
        {all.map(({ round, campaign }) => (
          <li
            key={`${campaign.code}-${round.id}`}
            className="flex items-center justify-between border-b border-white/5 pb-2 last:border-0 last:pb-0"
          >
            <span className="text-delta-lightGray/80">
              {fmt(t<string>("earn.history.round"), { number: round.round_number })}
            </span>
            <span className="text-white">
              {round.reward_amount_snapshot
                ? `${fmtAmount(round.reward_amount_snapshot)} ${campaign.reward_token.symbol}`
                : "—"}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function WithdrawHistory({ t, rows }: { t: TFn; rows: RewardWithdrawDto[] }) {
  if (rows.length === 0) return null;

  return (
    <Card>
      <p className="text-xs uppercase tracking-wide text-delta-lightGray/55">
        {t<string>("earn.withdraws.title")}
      </p>
      <ul className="mt-3 space-y-3 text-sm">
        {rows.map((w) => (
          <li
            key={w.id}
            className="flex items-center justify-between gap-3 border-b border-white/5 pb-3 last:border-0 last:pb-0"
          >
            <div>
              <p className="text-white">{`${fmtAmount(w.amount)} ${w.token.symbol}`}</p>
              <p className="text-xs text-delta-lightGray/55">
                {new Date(w.created_at).toLocaleString()}
              </p>
            </div>
            <span
              className={
                w.status === "approved"
                  ? "rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300"
                  : w.status === "rejected"
                  ? "rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-300"
                  : "rounded-full bg-delta-orange/15 px-3 py-1 text-xs font-semibold text-delta-orange"
              }
            >
              {t<string>(`earn.withdraws.status.${w.status}`)}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

