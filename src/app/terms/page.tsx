import Container from "@/components/ui/Container";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <main className="bg-navy-950 min-h-screen pt-32 pb-24">
      <Container className="max-w-4xl">
        <div className="rounded-2xl bg-navy-900/60 backdrop-blur-md border border-white/8 p-8 sm:p-12 lg:p-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <div className="space-y-8 text-silver-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the SchemaSync.AI platform and website (&quot;Service&quot;), you agree to be bound by these Terms of Service.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Description of Service</h2>
              <p>SchemaSync.AI provides an AI-powered platform for Salesforce schema analysis, conflict detection, and migration planning in the context of mergers and acquisitions.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. User Accounts</h2>
              <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Authorized Use</h2>
              <p>You agree to use the Service only for lawful purposes and in accordance with these Terms.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Data and Privacy</h2>
              <p>Our handling of your data is governed by our Privacy Policy. SchemaSync.AI accesses only Salesforce schema metadata and does not access your actual business data or customer records.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Intellectual Property</h2>
              <p>The Service and its original content, features, and functionality are owned by SchemaSync.AI. Your Salesforce data and schemas remain your property at all times.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, SchemaSync.AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Termination</h2>
              <p>We may terminate or suspend your access to the Service immediately, without prior notice, for conduct that we believe violates these Terms.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Your continued use of the Service after changes constitutes acceptance.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Contact Information</h2>
              <p>For any questions about these Terms, please contact us at legal@schemasync.ai.</p>
            </section>
            <p className="text-sm text-silver-300/60 pt-4 border-t border-white/5">Last updated: March 2026</p>
          </div>
        </div>
      </Container>
    </main>
  );
}
