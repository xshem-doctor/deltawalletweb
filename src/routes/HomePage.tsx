import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  BadgeCheck,
  Bell,
  Check,
  CircleDollarSign,
  CreditCard,
  History,
  LockKeyhole,
  Repeat2,
  Send,
  ShieldCheck,
  Smartphone,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/shared/Container";
import DownloadButton from "@/components/shared/DownloadButton";
import InfoCard from "@/components/shared/InfoCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { useI18n } from "@/i18n/useT";
import type { InfoItem } from "@/i18n/translations";

type ScreenFeature = {
  tag: string;
  title: string;
  body: string;
  bullets: InfoItem[];
};

const appScreens = [
  {
    src: "/app-screens/wallet-home.jpg",
    alt: "Delta Wallet portfolio and asset list screen",
  },
  {
    src: "/app-screens/cards-services.jpg",
    alt: "Delta Wallet card and service hub screen",
  },
  {
    src: "/app-screens/swap.jpg",
    alt: "Delta Wallet USDT to BNB swap screen",
  },
  {
    src: "/app-screens/card-network.jpg",
    alt: "Delta Wallet card network selection screen",
  },
  {
    src: "/app-screens/buy-usdt.jpg",
    alt: "Delta Wallet buy USDT payment options screen",
  },
  {
    src: "/app-screens/send-review.jpg",
    alt: "Delta Wallet send review confirmation screen",
  },
];

const featureScreens = [
  appScreens[0],
  appScreens[4],
  appScreens[2],
  appScreens[5],
  appScreens[1],
];

export default function HomePage() {
  const { locale, t } = useI18n();
  const securityCards = t<InfoItem[]>("home.securityCards");
  const trustItems = t<string[]>("home.trust");
  const heroPanelRows = t<string[]>("home.heroPanelRows");
  const steps = t<string[]>("home.howSteps");
  const heroMeta = t<string[]>("home.heroMeta");
  const heroChips = t<InfoItem[]>("home.heroChips");
  const screenFeatures = t<ScreenFeature[]>("home.screenFeatures");
  const howStepTitles = t<string[]>("home.howStepTitles");

  return (
    <>
      <section className="home-hero bg-delta-black py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="home-eyebrow">
                <span />
                {t("home.hero.eyebrow")}
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-normal text-white sm:text-5xl lg:text-7xl">
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
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {heroMeta.map((item, index) => {
                  const Icon = [ShieldCheck, BadgeCheck, CreditCard][index];

                  return (
                    <div
                      key={item}
                      className="inline-flex items-center gap-2 text-sm text-delta-lightGray/65"
                    >
                      <Icon className="h-4 w-4 text-delta-orange" />
                      {item}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="home-phone-stage">
              <div className="home-phone-glow" />
              <FloatChip
                className="home-chip-start"
                icon={CircleDollarSign}
                title={heroChips[0].title}
                body={heroChips[0].body}
              />
              <PhoneFrame
                src={appScreens[0].src}
                alt={appScreens[0].alt}
                className="home-phone-lg home-phone-tilt-right"
                priority
              />
              <FloatChip
                className="home-chip-end"
                icon={Send}
                title={heroChips[1].title}
                body={heroChips[1].body}
              />
              <div className="home-hero-panel">
                <MiniRow icon={History} text={heroPanelRows[0]} />
                <MiniRow icon={Repeat2} text={heroPanelRows[1]} />
                <MiniRow icon={Bell} text={heroPanelRows[2]} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-delta-nearBlack py-6">
        <Container>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item, index) => {
              const Icon = [Check, History, Smartphone, ShieldCheck][index];

              return (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-delta-black px-5 py-4 text-sm font-medium text-delta-lightGray"
                >
                  <Icon className="h-5 w-5 shrink-0 text-delta-orange" />
                  {item}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-delta-black py-16 sm:py-24">
        <Container>
          <div className="space-y-20 sm:space-y-24">
            {screenFeatures.map((feature, index) => (
              <ScreenFeatureRow
                key={feature.title}
                feature={feature}
                screen={featureScreens[index]}
                reverse={index % 2 === 1}
                duo={index === 4}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-delta-black py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              title={t("home.howTitle")}
              subtitle={t("home.howSubtitle")}
            />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-lg border border-white/10 bg-delta-nearBlackSoft p-6"
              >
                <span className="text-sm font-semibold text-delta-orange">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-lg font-semibold text-white">
                  {howStepTitles[index]}
                </h3>
                <p className="mt-3 text-sm leading-6 text-delta-lightGray/70">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-delta-nearBlack py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              title={t("home.securityTitle")}
              subtitle={t("home.securitySubtitle")}
            />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {securityCards.map((card, index) => (
              <InfoCard
                key={card.title}
                title={card.title}
                body={card.body}
                icon={[ShieldCheck, Smartphone, LockKeyhole][index]}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-delta-black py-16 sm:py-24">
        <Container>
          <div className="home-download-card">
            <div>
              <p className="home-feature-tag">{t("home.downloadTag")}</p>
              <h2 className="text-3xl font-bold tracking-normal text-white sm:text-4xl">
                {t("common.downloadAndroid")}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-delta-lightGray/65">
                {t("common.apkNotice")}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <DownloadButton className="w-full sm:w-auto" />
                <Link
                  to={`/${locale}/faq`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10"
                >
                  {t("home.installGuide")}
                </Link>
              </div>
              <p className="mt-6 inline-flex rounded-md bg-white/5 px-3 py-1.5 text-xs font-medium text-delta-lightGray/55">
                {t("home.apkMeta")}
              </p>
            </div>
            <div className="flex justify-center">
              <PhoneFrame
                src={appScreens[1].src}
                alt={appScreens[1].alt}
                className="home-phone-tilt-right"
              />
            </div>
          </div>
        </Container>
      </section>

      <HomeSection title={t("home.faqTitle")} subtitle={t("home.faqSubtitle")}>
        <Link
          to={`/${locale}/faq`}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-delta-orange px-6 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(245,106,10,0.35)] hover:brightness-110"
        >
          {t("nav.faq")}
        </Link>
      </HomeSection>
    </>
  );
}

function ScreenFeatureRow({
  feature,
  screen,
  reverse,
  duo,
}: {
  feature: ScreenFeature;
  screen: { src: string; alt: string };
  reverse?: boolean;
  duo?: boolean;
}) {
  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
      <div className={reverse ? "lg:order-2" : undefined}>
        <p className="home-feature-tag">{feature.tag}</p>
        <h2 className="max-w-xl text-3xl font-bold tracking-normal text-white sm:text-5xl">
          {feature.title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-delta-lightGray/65">
          {feature.body}
        </p>
        <ul className="mt-7 grid gap-4">
          {feature.bullets.map((bullet) => (
            <li key={bullet.title} className="flex items-start gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-delta-orange/30 bg-delta-orange/10 text-delta-orange">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span>
                <strong className="block text-sm font-semibold text-white">
                  {bullet.title}
                </strong>
                <span className="mt-1 block text-sm leading-6 text-delta-lightGray/60">
                  {bullet.body}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className={duo ? "home-duo-stage" : "home-phone-stage"}>
        <div className="home-phone-glow" />
        {duo ? (
          <>
            <PhoneFrame src={screen.src} alt={screen.alt} />
            <PhoneFrame src={appScreens[3].src} alt={appScreens[3].alt} />
          </>
        ) : (
          <PhoneFrame
            src={screen.src}
            alt={screen.alt}
            className={reverse ? "home-phone-tilt-left" : "home-phone-tilt-right"}
          />
        )}
      </div>
    </div>
  );
}

function PhoneFrame({
  src,
  alt,
  className,
  priority,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={["home-phone", className].filter(Boolean).join(" ")}>
      <div className="home-phone-notch" />
      <div className="home-phone-screen">
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
        />
      </div>
    </div>
  );
}

function FloatChip({
  icon: Icon,
  title,
  body,
  className,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div className={["home-float-chip", className].filter(Boolean).join(" ")}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-delta-orange/30 bg-delta-orange/15 text-delta-orange">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{title}</p>
        <p className="mt-1 text-xs text-delta-lightGray/55">{body}</p>
      </div>
    </div>
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
