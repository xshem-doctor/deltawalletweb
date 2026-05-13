import ContactCard from "@/components/shared/ContactCard";
import Container from "@/components/shared/Container";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import { siteConfig } from "@/config/site";
import { useT } from "@/i18n/useT";

type ContactOption = {
  title: string;
  body: string;
  emailKey: "supportEmail" | "businessEmail" | "securityEmail";
};

export default function ContactPage() {
  const t = useT();
  const cards = t<ContactOption[]>("contact.cards");
  const checklist = t<string[]>("contact.checklist");

  return (
    <>
      <PageHero
        eyebrow={t("contact.hero.eyebrow")}
        title={t("contact.hero.title")}
        subtitle={t("contact.hero.subtitle")}
      />
      <section className="bg-delta-black py-10 pb-16 sm:pb-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <ContactCard
                key={card.title}
                title={card.title}
                body={card.body}
                email={siteConfig[card.emailKey]}
              />
            ))}
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 bg-delta-nearBlack p-6">
              <SectionHeading title={t("contact.checklistTitle")} align="left" />
              <ul className="mt-6 grid gap-3">
                {checklist.map((item) => (
                  <li key={item} className="text-sm leading-6 text-delta-lightGray/70">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-white/10 bg-delta-nearBlack p-6">
              <h2 className="text-xl font-semibold text-white">
                {t("contact.responseTitle")}
              </h2>
              <p className="mt-4 text-sm leading-6 text-delta-lightGray/70">
                {t("contact.response")}
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
