import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal | Andres Dominguez',
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-bg-dark text-white py-28">
      <div className="container max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-semibold text-primary mb-2">Legal</h1>
        <p className="text-white/60 mb-12">Last updated: May 2026</p>

        <section className="mb-10">
          <h2 className="text-xl font-medium text-primary mb-4">Terms of Use</h2>
          <p className="text-white/70 leading-relaxed">
            This website is provided for informational purposes only. All content, including text,
            images, and code samples, is the property of Andres Dominguez unless otherwise noted.
            Unauthorized reproduction or redistribution of any material is prohibited.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-medium text-primary mb-4">Privacy Policy</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            This site does not collect personal data beyond what you voluntarily submit through the
            contact form. Messages sent via the contact form are delivered to the site owner&apos;s
            email using EmailJS and are not stored on any third-party server controlled by this site.
          </p>
          <p className="text-white/70 leading-relaxed">
            No cookies, analytics trackers, or third-party advertising scripts are used on this site.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-medium text-primary mb-4">Disclaimer</h2>
          <p className="text-white/70 leading-relaxed">
            All project links and live demos are provided as-is. External sites are maintained
            independently and may change without notice. Andres Dominguez is not responsible for the
            content or availability of any linked third-party websites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-medium text-primary mb-4">Contact</h2>
          <p className="text-white/70 leading-relaxed">
            For any legal inquiries, please reach out at{' '}
            <a
              href="mailto:adominguezl800@gmail.com"
              className="text-primary hover:underline"
            >
              adominguezl800@gmail.com
            </a>
            .
          </p>
        </section>

        <div className="mt-16">
          <a href="/" className="btn">
            &larr; Back to Portfolio
          </a>
        </div>
      </div>
    </main>
  );
}
