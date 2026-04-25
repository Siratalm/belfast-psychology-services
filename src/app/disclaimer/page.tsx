export default function DisclaimerPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-12 uppercase tracking-tighter">Disclaimer</h1>
        
        <div className="prose prose-blue max-w-none text-gray-600 space-y-8 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Terms of Use</h2>
            <p>
              By continuing to use this website, you confirm your acceptance of these terms. If you do not accept these terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Intellectual Property</h2>
            <p>
              The material on this website is owned by or licensed to Belfast Psychology Services. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. You may print or download material from this website for private use only. You must not modify, reproduce, or redistribute any material without our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Site Uptime</h2>
            <p>
              While we strive to ensure this website is available 24 hours a day, we will not be liable if for any reason this website is unavailable at any time or for any period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Third-Party Links</h2>
            <p>
              This website may include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s). Use of any such linked website is at the visitor’s own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Accuracy of Information</h2>
            <p>
              The information contained in this website is for general information purposes only. While we endeavor to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Limitation of Liability</h2>
            <p>
              In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>
          </section>

          <section className="pt-8 border-t">
            <p>
              If you wish to link to our website, you must obtain prior written consent by emailing <a href="mailto:info@belfastpsychologyservices.com" className="text-accent font-bold italic underline">info@belfastpsychologyservices.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
