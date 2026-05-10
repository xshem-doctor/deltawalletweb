export type FaqCategory = "general" | "wallet" | "services" | "download" | "security";

export type FaqItem = {
  id: string;
  category: FaqCategory;
  questionKey: string;
  answerKey: string;
};

export const faqCategories: FaqCategory[] = [
  "general",
  "wallet",
  "services",
  "download",
  "security",
];

export const faqItems: FaqItem[] = [
  {
    id: "what-is-delta",
    category: "general",
    questionKey: "whatIsDelta.question",
    answerKey: "whatIsDelta.answer",
  },
  {
    id: "is-exchange",
    category: "general",
    questionKey: "isExchange.question",
    answerKey: "isExchange.answer",
  },
  {
    id: "supported-currency",
    category: "wallet",
    questionKey: "supportedCurrency.question",
    answerKey: "supportedCurrency.answer",
  },
  {
    id: "deposits-withdrawals",
    category: "wallet",
    questionKey: "depositsWithdrawals.question",
    answerKey: "depositsWithdrawals.answer",
  },
  {
    id: "gift-cards",
    category: "services",
    questionKey: "giftCards.question",
    answerKey: "giftCards.answer",
  },
  {
    id: "esim",
    category: "services",
    questionKey: "esim.question",
    answerKey: "esim.answer",
  },
  {
    id: "service-unavailable",
    category: "services",
    questionKey: "serviceUnavailable.question",
    answerKey: "serviceUnavailable.answer",
  },
  {
    id: "apk-safe",
    category: "download",
    questionKey: "apkSafe.question",
    answerKey: "apkSafe.answer",
  },
  {
    id: "google-play",
    category: "download",
    questionKey: "googlePlay.question",
    answerKey: "googlePlay.answer",
  },
  {
    id: "security",
    category: "security",
    questionKey: "security.question",
    answerKey: "security.answer",
  },
  {
    id: "payment-delay",
    category: "services",
    questionKey: "paymentDelay.question",
    answerKey: "paymentDelay.answer",
  },
];