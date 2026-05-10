import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import InteractiveFaq from "@/components/faq/InteractiveFaq";
import Reveal from "@/components/motion/Reveal";
import { getTranslations } from "next-intl/server";

export default async function FaqPage() {
  const t = await getTranslations("faqPage");

  const dictionary = {
    searchPlaceholder: t("searchPlaceholder"),
    noResults: t("noResults"),
    all: t("all"),
    reactionTitle: t("reactionTitle"),
    yes: t("yes"),
    no: t("no"),
    thanks: t("thanks"),
    categories: {
      general: t("categories.general"),
      wallet: t("categories.wallet"),
      services: t("categories.services"),
      download: t("categories.download"),
      security: t("categories.security"),
    },
    items: {
      whatIsDelta: {
        question: t("items.whatIsDelta.question"),
        answer: t("items.whatIsDelta.answer"),
      },
      isExchange: {
        question: t("items.isExchange.question"),
        answer: t("items.isExchange.answer"),
      },
      supportedCurrency: {
        question: t("items.supportedCurrency.question"),
        answer: t("items.supportedCurrency.answer"),
      },
      depositsWithdrawals: {
        question: t("items.depositsWithdrawals.question"),
        answer: t("items.depositsWithdrawals.answer"),
      },
      giftCards: {
        question: t("items.giftCards.question"),
        answer: t("items.giftCards.answer"),
      },
      esim: {
        question: t("items.esim.question"),
        answer: t("items.esim.answer"),
      },
      serviceUnavailable: {
        question: t("items.serviceUnavailable.question"),
        answer: t("items.serviceUnavailable.answer"),
      },
      apkSafe: {
        question: t("items.apkSafe.question"),
        answer: t("items.apkSafe.answer"),
      },
      googlePlay: {
        question: t("items.googlePlay.question"),
        answer: t("items.googlePlay.answer"),
      },
      security: {
        question: t("items.security.question"),
        answer: t("items.security.answer"),
      },
      paymentDelay: {
        question: t("items.paymentDelay.question"),
        answer: t("items.paymentDelay.answer"),
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-delta-black py-20 sm:py-28">
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-delta-orange/15 blur-[130px]" />
      <div className="absolute inset-0 bg-delta-grid bg-[size:44px_44px] opacity-20" />

      <Container className="relative">
        <Reveal>
          <div className="mx-auto mb-5 flex w-fit items-center rounded-full border border-delta-orange/30 bg-delta-orange/10 px-4 py-2 text-sm font-medium text-delta-orange">
            {t("eyebrow")}
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        </Reveal>

        <Reveal delay={0.1}>
          <InteractiveFaq dictionary={dictionary} />
        </Reveal>
      </Container>
    </section>
  );
}