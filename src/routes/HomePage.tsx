import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  Bell,
  CircleDollarSign,
  History,
  LockKeyhole,
  Repeat2,
  ShieldCheck,
  Smartphone,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/shared/Container";
import DownloadButton from "@/components/shared/DownloadButton";
import InfoCard from "@/components/shared/InfoCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { useI18n } from "@/i18n/useT";
import type { InfoItem } from "@/i18n/translations";

export default function HomePage() {
  const { locale, t } = useI18n();
  const productCards = t<InfoItem[]>("home.productCards");
  const serviceCards = t<InfoItem[]>("home.serviceCards");
  const securityCards = t<InfoItem[]>("home.securityCards");
  const trustItems = t<string[]>("home.trust");
  const heroPanelRows = t<string[]>("home.heroPanelRows");
  const steps = t<string[]>("home.howSteps");

  return (
    <>
      <section className="bg-delta-black py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div>
              <p className="text-sm font-semibold text-delta-orange">
                {t("home.hero.eyebrow")}
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
                {t("home.hero.title")}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-delta-lightGray/70">
                {t("home.hero.subtitle")}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <DownloadButton />
                <Link
                  to={`/${locale}/security`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-delta-charcoal bg-delta-nearBlack px-6 text-sm font-semibold text-delta-softGray hover:border-delta-orange hover:text-white"
                >
                  {t("common.learnSecurity")}
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-white/10 bg-delta-nearBlack p-5">
              <div className="rounded-lg border border-delta-orange/25 bg-delta-black p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-delta-lightGray/60">
                      Delta Wallet
                    </p>
                    <p className="mt-1 text-2xl font-semibold text-white">
                      USDT · BSC
                    </p>
                  </div>
                  <Wallet className="h-9 w-9 text-delta-orange" />
                </div>
                <div className="mt-5 grid gap-3">
                  <MiniRow icon={History} text={heroPanelRows[0]} />
                  <MiniRow icon={Repeat2} text={heroPanelRows[1]} />
                  <MiniRow icon={Bell} text={heroPanelRows[2]} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-delta-nearBlack py-6">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/10 bg-delta-black px-5 py-4 text-center text-sm font-medium text-delta-lightGray"
              >
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <HomeSection title={t("home.productTitle")} subtitle={t("home.productSubtitle")}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productCards.map((card, index) => (
            <InfoCard
              key={card.title}
              title={card.title}
              body={card.body}
              icon={[Wallet, CircleDollarSign, Repeat2, History][index]}
            />
          ))}
        </div>
      </HomeSection>

      <HomeSection title={t("home.servicesTitle")} subtitle={t("home.servicesSubtitle")} muted>
        <div className="grid gap-5 md:grid-cols-3">
          {serviceCards.map((card, index) => (
            <InfoCard
              key={card.title}
              title={card.title}
              body={card.body}
              icon={[Smartphone, CircleDollarSign, Bell][index]}
            />
          ))}
        </div>
      </HomeSection>

      <HomeSection title={t("home.howTitle")}>
        <div className="grid gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step}
              className="rounded-lg border border-white/10 bg-delta-nearBlack p-5"
            >
              <span className="text-sm font-semibold text-delta-orange">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-sm leading-6 text-delta-lightGray/75">
                {step}
              </p>
            </div>
          ))}
        </div>
      </HomeSection>

      <HomeSection title={t("home.securityTitle")} subtitle={t("home.securitySubtitle")} muted>
        <div className="grid gap-5 md:grid-cols-3">
          {securityCards.map((card, index) => (
            <InfoCard
              key={card.title}
              title={card.title}
              body={card.body}
              icon={[ShieldCheck, Smartphone, LockKeyhole][index]}
            />
          ))}
        </div>
      </HomeSection>

      <section className="border-t border-white/10 bg-delta-black py-16">
        <Container>
          <div className="rounded-lg border border-white/10 bg-delta-nearBlackSoft p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-3xl font-semibold text-white">
                  {t("common.downloadAndroid")}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-delta-lightGray/65">
                  {t("common.apkNotice")}
                </p>
              </div>
              <DownloadButton className="w-full sm:w-auto" />
            </div>
          </div>
        </Container>
      </section>

      <HomeSection title={t("home.faqTitle")} subtitle={t("home.faqSubtitle")}>
        <Link
          to={`/${locale}/faq`}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-delta-orange px-6 text-sm font-semibold text-delta-black hover:brightness-110"
        >
          {t("nav.faq")}
        </Link>
      </HomeSection>
    </>
  );
}

function HomeSection({
  title,
  subtitle,
  children,
  muted,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section className={muted ? "bg-delta-nearBlack py-16 sm:py-24" : "bg-delta-black py-16 sm:py-24"}>
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}

function MiniRow({
  icon: Icon,
  text,
}: {
  icon: LucideIcon;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-delta-nearBlack px-4 py-3 text-sm text-delta-lightGray">
      <Icon className="h-5 w-5 text-delta-orange" />
      {text}
    </div>
  );
}
