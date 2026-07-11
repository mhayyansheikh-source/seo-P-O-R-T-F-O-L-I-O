import { useEffect } from 'react';

export function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-canvas min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-medium text-ink mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg text-muted">
          <p className="mb-6 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <h2 className="text-2xl font-display font-medium text-ink mt-12 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h2 className="text-2xl font-display font-medium text-ink mt-12 mb-4">2. Description of Service</h2>
          <p className="mb-6">
            SEO Ustaad provides digital marketing, search engine optimization, and brand development services. We reserve the right to modify, suspend or discontinue any part of the service at any time with or without notice to you.
          </p>

          <h2 className="text-2xl font-display font-medium text-ink mt-12 mb-4">3. Intellectual Property</h2>
          <p className="mb-6">
            The website and its original content, features, and functionality are owned by SEO Ustaad and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h2 className="text-2xl font-display font-medium text-ink mt-12 mb-4">4. User Obligations</h2>
          <p className="mb-6">
            As a condition of use, you promise not to use the Services for any purpose that is unlawful or prohibited by these Terms, or any other purpose not reasonably intended by SEO Ustaad.
          </p>

          <h2 className="text-2xl font-display font-medium text-ink mt-12 mb-4">5. Limitation of Liability</h2>
          <p className="mb-6">
            In no event shall SEO Ustaad, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>

          <h2 className="text-2xl font-display font-medium text-ink mt-12 mb-4">6. Contact Information</h2>
          <p className="mb-6">
            If you have any questions about these Terms, please contact us at:
            <br />
            Email: <a href="mailto:support@seoustaad.com" className="text-primary hover:text-primary-active transition-colors">support@seoustaad.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
