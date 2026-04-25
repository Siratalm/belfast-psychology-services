export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-12">Privacy Policy</h1>
        
        <div className="prose prose-blue max-w-none text-gray-600 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Introduction</h2>
            <p>
              Belfast Psychology Services is committed to ensuring that your privacy is protected. This privacy policy explains how we use the information we collect about you and how you can instruct us if you prefer to limit the use of that information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Information Collected</h2>
            <p>We may collect and process the following data about you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Details of your visits to our website including, but not limited to, traffic data, location data, weblogs and other communication data.</li>
              <li>Information that you provide by filling in forms on our website, such as when you register for information or request a consultation.</li>
              <li>If you contact us, we may keep a record of that correspondence.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Use of Cookies</h2>
            <p>
              We may gather information about your general internet use by using a cookie file that is stored on your browser or the hard drive of your computer. Cookies contain information that is transferred to your computer’s hard drive. They help us to improve our website and to deliver a better and more personalised service.
            </p>
            <p className="mt-4">
              You may refuse to accept cookies by activating the setting on your browser which allows you to refuse the setting of cookies. However, if you select this setting you may be unable to access certain parts of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Use of Your Information</h2>
            <p>
              We use the information held about you to provide our services to you and to notify you about changes to our service. We may also use your information to provide you with information about our services which may be of interest to you.
            </p>
            <p className="mt-4 font-bold text-primary uppercase text-xs tracking-widest">
              We do not sell, rent or loan any identifiable information regarding our visitors to any third party.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
            <p>
              The transmission of information via the internet is not completely secure. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our website; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">Your Rights</h2>
            <p>
              The Data Protection Act 1998 gives you the right to access information held about you. Your right of access can be exercised in accordance with the Act. Any access request may be subject to a fee of £10 to meet our costs in providing you with details of the information we hold about you.
            </p>
          </section>

          <section className="pt-8 border-t">
            <p className="text-sm">
              If you have any questions or comments about our privacy policy, please contact us at <a href="mailto:info@belfastpsychologyservices.com" className="text-accent font-bold">info@belfastpsychologyservices.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
