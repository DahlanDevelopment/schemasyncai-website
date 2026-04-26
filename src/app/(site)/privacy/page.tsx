import Container from "@/components/ui/Container";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <main className="bg-navy-950 min-h-screen pt-32 pb-24">
      <Container className="max-w-4xl">
        <div className="rounded-2xl bg-navy-900/60 backdrop-blur-md border border-white/8 p-8 sm:p-12 lg:p-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <div className="space-y-8 text-silver-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>SchemaSync.AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect information about you in a variety of ways, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-silver-100">Personal Data:</strong> Name, email address, company name, job title, and phone number that you voluntarily provide when contacting us or requesting a demo.</li>
                <li><strong className="text-silver-100">Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent.</li>
                <li><strong className="text-silver-100">Salesforce Metadata:</strong> Schema metadata (object definitions, field configurations, relationships) from connected Salesforce orgs. We do not access or store actual business data or records.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to operate and improve our platform, communicate with you about our services, respond to your inquiries, send relevant marketing communications (with your consent), and ensure the security and integrity of our systems.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Data Security</h2>
              <p>We implement industry-standard security measures to protect your information, including encryption in transit and at rest, access controls, and regular security audits.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Third-Party Services</h2>
              <p>We may use third-party services for analytics, hosting, and customer relationship management. These providers are contractually bound to protect your data.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
              <p>Depending on your location, you may have rights regarding your personal information, including the right to access, correct, delete, or export your data. To exercise these rights, please contact us at privacy@schemasync.ai.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at privacy@schemasync.ai.</p>
            </section>
            <p className="text-sm text-silver-300/60 pt-4 border-t border-white/5">Last updated: March 2026</p>
          </div>
        </div>
      </Container>
    </main>
  );
}
