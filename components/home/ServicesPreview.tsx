import { useTranslations } from "next-intl";
import Container from "@/components/shared/Container";
import GlowCard from "@/components/shared/GlowCard";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { services } from "@/config/services";
import { cn } from "@/utils/cn";

export default function ServicesPreview() {
  const t = useTranslations("services");

  return (
    <section id="services" className="bg-delta-nearBlack py-24">
      <Container>
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.titleKey} delay={index * 0.08}>
                <GlowCard className={cn("min-h-56", service.className)}>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-delta-orange/10">
                    <Icon className="h-6 w-6 text-delta-orange" />
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-white">
                    {t(service.titleKey)}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-6 text-delta-lightGray/60">
                    {t(service.descriptionKey)}
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