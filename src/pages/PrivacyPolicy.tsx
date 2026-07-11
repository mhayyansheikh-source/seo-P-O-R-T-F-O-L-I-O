import { useEffect } from 'react';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-canvas min-h-screen pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <h1 className="text-4xl md:text-5xl font-display font-medium text-ink mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg text-muted">
          <p className="mb-6 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
          
          <h2 className="text-2xl font-display font-medium text-ink mt-12 mb-4">1. Introduction</h2>
          <p className="mb-6">
            Welcome to <strong>SEO Ustaad</strong> ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href="mailto:support@seoustaad.com" className="text-primary hover:text-primary-active transition-colors">support@seoustaad.com</a>.
          </p>
          <p className="mb-6">
            This Privacy Policy applies to all information collected through our website (including localhost and deployed domains), as well as any related services, sales, marketing, or events.
          </p>

          <h2 className="text-2xl font-display font-medium text-ink mt-12 mb-4">2. Information We Collect</h2>
          <p className="mb-4">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services.</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Personal Information Provided by You:</strong> We may collect names; phone numbers; email addresses; mailing addresses; contact preferences; and other similar information.</li>
            <li><strong>Information Collected Automatically:</strong> We automatically collect certain information when you visit, use, or navigate the Website. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, and location data.</li>
          </ul>

          <h2 className="text-2xl font-display font-medium text-ink mt-12 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use personal information collected via our Website for a variety of business purposes described below:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>To fulfill and manage your orders and services.</strong> We may use your information to fulfill and manage your SEO audits, web development projects, and consultation requests.</li>
            <li><strong>To send administrative information to you.</strong> We may use your personal information to send you product, service, and new feature information and/or information about changes to our terms, conditions, and policies.</li>
            <li><strong>To deliver targeted advertising to you.</strong> We may use your information to develop and display personalized content and advertising tailored to your interests.</li>
          </ul>

          <h2 className="text-2xl font-display font-medium text-ink mt-12 mb-4">4. Will Your Information Be Shared With Anyone?</h2>
          <p className="mb-6">
            We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal data to third parties. We may share your data with trusted third-party vendors (like analytics providers or hosting services) who perform services for us or on our behalf.
          </p>

          <h2 className="text-2xl font-display font-medium text-ink mt-12 mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="mb-6">
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
          </p>

          <h2 className="text-2xl font-display font-medium text-ink mt-12 mb-4">6. How Long Do We Keep Your Information?</h2>
          <p className="mb-6">
            We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).
          </p>

          <h2 className="text-2xl font-display font-medium text-ink mt-12 mb-4">7. Contact Us</h2>
          <p className="mb-6">
            If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO) by email at:
            <br />
            Email: <a href="mailto:support@seoustaad.com" className="text-primary hover:text-primary-active transition-colors">support@seoustaad.com</a>
            <br />
            Phone: +92 337 9912300
          </p>
        </div>
      </div>
    </div>
  );
}
