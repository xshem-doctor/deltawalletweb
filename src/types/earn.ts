/**
 * Wire types for the Earn dashboard payload.
 * Shape matches ``tasks.serializers`` on the backend.
 */

export type TokenRef = {
  symbol: string;
  name: string;
  network_code: string;
  decimals: number;
  icon_url: string;
};

export type UserTaskDto = {
  code: string;
  title: string;
  kind: "deposit" | "referral_active" | "swap" | "manual";
  goal_amount: string;
  min_unit_amount: string;
  current_progress: string;
  completed: boolean;
  completed_at: string | null;
};

export type UserCampaignRoundDto = {
  id: number;
  round_number: number;
  status: "open" | "completed" | "expired";
  started_at: string;
  completed_at: string | null;
  reward_amount_snapshot: string | null;
  tasks: UserTaskDto[];
};

export type CampaignStatusDto = {
  code: string;
  title: string;
  reward_amount: string;
  reward_token: TokenRef;
  monthly_round_cap: number | null;
  rounds_completed_this_month: number;
  is_open: boolean;
  round: UserCampaignRoundDto | null;
  history: UserCampaignRoundDto[];
};

export type RewardBalanceDto = {
  token: TokenRef;
  balance: string;
  locked_balance: string;
  available: string;
  lifetime_earned: string;
};

export type RewardWithdrawDto = {
  id: number;
  token: TokenRef;
  amount: string;
  status: "pending" | "approved" | "rejected" | "cancelled";
  admin_note: string;
  created_at: string;
  processed_at: string | null;
};

export type EarnDashboardDto = {
  campaigns: CampaignStatusDto[];
  reward_balances: RewardBalanceDto[];
  withdraws: RewardWithdrawDto[];
};
