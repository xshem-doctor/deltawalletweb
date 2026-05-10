import { useTranslations } from "next-intl";
import Container from "@/components/shared/Container";
import GlowCard from "@/components/shared/GlowCard";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { History, Send, ShoppingBag, Wallet } from "lucide-react";

export default function ProductOverview() {
  const t = useTranslations("overview");

  const items = [
    { key: "wallet", icon: Wallet },
    { key: "send", icon: Send },
    { key: "services", icon: ShoppingBag },
    { key: "track", icon: History },
  ] as const;

  return (
    <section className="py-24">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.key} delay={index * 0.08}>
                <GlowCard>
                  <Icon className="h-7 w-7 text-delta-orange" />
                  <p className="mt-6 text-lg font-semibold text-white">
                    {t(item.key)}
                  </p>
                </GlowCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}