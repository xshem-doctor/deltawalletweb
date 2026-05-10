import { useTranslations } from "next-intl";
import Container from "@/components/shared/Container";
import Reveal from "@/components/motion/Reveal";

export default function TrustStrip() {
  const t = useTranslations("trust");

  const items = ["bep20", "services", "languages", "history"] as const;

  return (
    <section className="border-y border-white/10 bg-delta-nearBlack py-6">
      <Container>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-delta-black px-5 py-4 text-center text-sm font-medium text-delta-lightGray">
                {t(item)}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}