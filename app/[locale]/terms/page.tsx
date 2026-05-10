import Container from "@/components/shared/Container";

export default function TermsPage() {
  return (
    <main className="bg-delta-black py-24 text-white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium text-delta-orange">Legal</p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-5 text-delta-lightGray/70">
            Last updated: May 4, 2026
          </p>

          <div className="mt-12 space-y-10 text-delta-lightGray/75">
            <Section title="1. Overview">
              Delta Wallet provides a software application that enables users to
              manage digital assets and interact with blockchain networks. By
              accessing or using Delta Wallet, you agree to these Terms of
              Service.
            </Section>

            <Section title="2. Nature of the Service">
              Delta Wallet is a software interface for interacting with
              decentralized blockchain networks. We do not custody user funds,
              control blockchain transactions, or guarantee the operation of any
              blockchain network.
            </Section>

            <Section title="3. Eligibility">
              You must be at least 18 years old, or the legal age required in
              your jurisdiction, and you must use Delta Wallet in compliance with
              applicable laws.
            </Section>

            <Section title="4. User Responsibilities">
              You are responsible for protecting your device, account access,
              wallet credentials, and transaction decisions. Blockchain
              transactions may be irreversible once submitted.
            </Section>

            <Section title="5. Prohibited Use">
              You may not use Delta Wallet for unlawful activity, fraud, money
              laundering, abuse, or any action that disrupts the application or
              its infrastructure.
            </Section>

            <Section title="6. No Financial Advice">
              Delta Wallet does not provide investment advice, financial advice,
              trading guidance, or recommendations. Any action you take using the
              application is your own responsibility.
            </Section>

            <Section title="7. Third-Party Services">
              Delta Wallet may integrate with or link to third-party services.
              We do not control their availability, terms, policies, pricing, or
              performance.
            </Section>

            <Section title="8. Fees">
              Blockchain networks and third-party providers may charge fees. We
              do not control network fees or third-party costs.
            </Section>

            <Section title="9. Disclaimer of Warranties">
              Delta Wallet is provided “as is” and “as available” without
              warranties of any kind. We do not guarantee uninterrupted,
              error-free, or fully secure operation.
            </Section>

            <Section title="10. Limitation of Liability">
              To the maximum extent permitted by law, Delta Wallet is not liable
              for loss of funds, user error, network failures, compromised
              devices, unauthorized access, or third-party service issues.
            </Section>

            <Section title="11. Changes to Terms">
              We may update these Terms from time to time. Continued use of
              Delta Wallet after updates means you accept the revised Terms.
            </Section>

            <Section title="12. Contact">
              For questions, contact us at{" "}
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