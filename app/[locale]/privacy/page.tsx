import Container from "@/components/shared/Container";

export default function PrivacyPage() {
  return (
    <main className="bg-delta-black py-24 text-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-delta-orange">Legal</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 text-delta-lightGray/70">
            Last updated: May 4, 2026
          </p>

          <div className="mt-12 space-y-10 text-delta-lightGray/75">
            <Section title="1. Overview">
              Delta Wallet respects your privacy. This Privacy Policy explains
              how we collect, use, and protect information when you use the
              application or website.
            </Section>

            <Section title="2. Information We May Collect">
              We may collect basic account information, technical usage data,
              device information, logs, and information needed to maintain the
              application and protect against abuse.
            </Section>

            <Section title="3. Wallet Credentials">
              Delta Wallet does not collect private keys, recovery phrases, or
              sensitive wallet credentials. You are responsible for protecting
              your own wallet access.
            </Section>

            <Section title="4. Blockchain Data">
              Blockchain transactions are public by nature. We do not own,
              control, erase, or modify public blockchain records.
            </Section>

            <Section title="5. How We Use Information">
              We use information to provide the application, improve
              performance, secure the platform, prevent abuse, troubleshoot
              issues, and comply with legal obligations.
            </Section>

            <Section title="6. Data Sharing">
              We do not sell your personal information. We may share limited
              information with infrastructure providers, security providers, or
              legal authorities when required by law.
            </Section>

            <Section title="7. Data Security">
              We use reasonable technical and organizational measures to protect
              information. However, no system is completely secure, and users
              must also secure their own devices and credentials.
            </Section>

            <Section title="8. Data Retention">
              We retain information only as long as necessary to provide the
              application, maintain security, resolve disputes, or meet legal
              requirements.
            </Section>

            <Section title="9. Your Rights">
              Depending on your jurisdiction, you may request access,
              correction, deletion, or restriction of your personal information.
            </Section>

            <Section title="10. Third-Party Services">
              Delta Wallet may interact with third-party services. Their privacy
              practices are separate from ours, and we are not responsible for
              their policies.
            </Section>

            <Section title="11. Children’s Privacy">
              Delta Wallet is not intended for users under 18 years old.
            </Section>

            <Section title="12. Changes to This Policy">
              We may update this Privacy Policy from time to time. Updates will
              be posted on this page.
            </Section>

            <Section title="13. Contact">
              For privacy questions, contact us at{" "}
              <span className="text-delta-orange">support@deltawallet.app</span>.
            </Section>
          </div>
        </div>
      </Container>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 leading-7">{children}</p>
    </section>
  );
}