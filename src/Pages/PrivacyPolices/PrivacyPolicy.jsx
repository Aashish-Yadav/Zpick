import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
      </header>
      
      {/* Introduction */}
      <div className="prose prose-lg mx-auto mb-10 text-gray-700">
        <p>
          This Privacy Policy describes how www.akravi.com (the "Site" or "we") collects, uses, and discloses your Personal Information 
          when you visit or make a purchase from the Site.
        </p>
      </div>

      {/* Contact Section */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contact
        </h2>
        <p className="mb-4">
          After reviewing this policy, if you have additional questions, want more information about our privacy practices, 
          or would like to make a complaint, please contact us by e-mail at:
        </p>
        <p className="font-medium text-blue-600 mb-2">akravipvtltd@gmail.com</p>
        <p className="mb-2">Or by mail using the details provided below:</p>
        <address className="not-italic font-medium">India</address>
      </section>

      {/* Collecting Personal Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Collecting Personal Information</h2>
        <p className="mb-6 text-gray-700">
          When you visit the Site, we collect certain information about your device, your interaction with the Site, 
          and information necessary to process your purchases. We may also collect additional information if you contact us for customer support. 
          In this Privacy Policy, we refer to any information about an identifiable individual (including the information below) as "Personal Information".
        </p>
        
        {/* Device Information */}
        <div className="mb-8 ml-4 pl-4 border-l-2 border-blue-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Device Information</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-5 w-5 mr-3 mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span><span className="font-medium">Purpose of collection:</span> to load the Site accurately for you, and to perform analytics on Site usage to optimize our Site.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-5 w-5 mr-3 mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span><span className="font-medium">Source of collection:</span> Collected automatically when you access our Site using cookies, log files, web beacons, tags, or pixels.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-5 w-5 mr-3 mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span><span className="font-medium">Disclosure for a business purpose:</span> shared with our processor Shopify.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-5 w-5 mr-3 mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span><span className="font-medium">Personal Information collected:</span> version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site.</span>
            </li>
          </ul>
        </div>
        
        {/* Order Information */}
        <div className="mb-8 ml-4 pl-4 border-l-2 border-blue-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Order Information</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-5 w-5 mr-3 mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span><span className="font-medium">Purpose of collection:</span> to provide products or services to you to fulfill our contract, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations, communicate with you, screen our orders for potential risk or fraud, and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-5 w-5 mr-3 mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span><span className="font-medium">Source of collection:</span> collected from you.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-5 w-5 mr-3 mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span><span className="font-medium">Disclosure for a business purpose:</span> shared with our processor Shopify.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-5 w-5 mr-3 mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span><span className="font-medium">Personal Information collected:</span> name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.</span>
            </li>
          </ul>
        </div>
        
        {/* Customer Support Information */}
        <div className="mb-8 ml-4 pl-4 border-l-2 border-blue-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Customer Support Information</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-5 w-5 mr-3 mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span><span className="font-medium">Purpose of collection:</span> to provide customer support.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-5 w-5 mr-3 mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span><span className="font-medium">Source of collection:</span> collected from you.</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 rounded-full h-5 w-5 mr-3 mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span><span className="font-medium">Personal Information collected:</span> additional information provided when contacting customer support.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Sharing Personal Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Sharing Personal Information</h2>
        <p className="mb-4 text-gray-700">
          We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you, as described above. For example:
        </p>
        <ul className="space-y-3 ml-6">
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            We use Shopify to power our online store. You can read more about how Shopify uses your Personal Information here: <a href="https://www.shopify.com/legal/privacy" className="text-blue-600 hover:text-blue-800 underline">https://www.shopify.com/legal/privacy</a>.
          </li>
          <li className="flex items-start text-gray-700">
            <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
          </li>
        </ul>
      </section>

      {/* Behavioral Advertising */}
      <section className="mb-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Behavioural Advertising</h2>
        <p className="mb-4 text-gray-700">
          As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you.
        </p>
        <p className="mb-4 text-gray-700">
          For more information about how targeted advertising works, you can visit the Network Advertising Initiative's ("NAI") educational page at <a href="https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" className="text-blue-600 hover:text-blue-800 underline">https://www.networkadvertising.org/understanding-online-advertising/how-does-it-work</a>.
        </p>
        <p className="mb-4 text-gray-700 font-medium">
          You can opt out of targeted advertising by:
        </p>
        <div className="space-y-3 mb-4 bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center">
            <span className="w-6 h-6 mr-3 flex-shrink-0 text-blue-600">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </span>
            <span>FACEBOOK - <a href="https://www.facebook.com/settings/?tab=ads" className="text-blue-600 hover:text-blue-800 underline">https://www.facebook.com/settings/?tab=ads</a></span>
          </div>
          <div className="flex items-center">
            <span className="w-6 h-6 mr-3 flex-shrink-0 text-blue-600">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72
                8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </span>
            <span>GOOGLE - <a href="https://www.google.com/settings/ads/anonymous" className="text-blue-600 hover:text-blue-800 underline">https://www.google.com/settings/ads/anonymous</a></span>
          </div>
          <div className="flex items-center">
            <span className="w-6 h-6 mr-3 flex-shrink-0 text-blue-600">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 18h-2v-6h2v6zm7-12.75C17.5 4.56 16.94 4 16.25 4H4.75C4.06 4 3.5 4.56 3.5 5.25v13.5c0 .69.56 1.25 1.25 1.25h11.5c.69 0 1.25-.56 1.25-1.25V5.25zM5.5 6h10v12h-10V6zm8 11v-6h2v6h-2z" />
              </svg>
            </span>
            <span>BING - <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads" className="text-blue-600 hover:text-blue-800 underline">https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads</a></span>
          </div>
        </div>
        <p className="text-gray-700">
          Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance's opt-out portal at: <a href="https://optout.aboutads.info/" className="text-blue-600 hover:text-blue-800 underline">https://optout.aboutads.info/</a>.
        </p>
      </section>

      {/* Using Personal Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Using Personal Information</h2>
        <p className="text-gray-700">
          We use your personal Information to provide our services to you, which includes: offering products for sale, processing payments, shipping and fulfillment of your order, and keeping you up to date on new products, services, and offers.
        </p>
      </section>

      {/* Retention */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Retention</h2>
        <p className="text-gray-700">
          When you place an order through the Site, we will retain your Personal Information for our records unless and until you ask us to erase this information. For more information on your right of erasure, please see the 'Your rights' section below.
        </p>
      </section>

      {/* Your Rights */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Your Rights</h2>
        
        <div className="mb-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
            <span className="inline-block w-6 h-6 mr-2 text-blue-700">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </span>
            GDPR
          </h3>
          <p className="mb-4 text-gray-700">
            If you are a resident of the EEA, you have the right to access the Personal Information we hold about you, to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information above.
          </p>
          <p className="text-gray-700">
            Your Personal Information will be initially processed in Ireland and then will be transferred outside of Europe for storage and further processing, including to Canada and the United States.
          </p>
        </div>
        
        <div className="mb-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-3 text-gray-800 flex items-center">
            <span className="inline-block w-6 h-6 mr-2 text-blue-700">
              <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </span>
            CCPA
          </h3>
          <p className="mb-4 text-gray-700">
            If you are a resident of California, you have the right to access the Personal Information we hold about you (also known as the 'Right to Know'), to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information above.
          </p>
          <p className="text-gray-700">
            If you would like to designate an authorized agent to submit these requests on your behalf, please contact us at the address above.
          </p>
        </div>
      </section>

      {/* Cookies */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Cookies</h2>
        <div className="flex flex-wrap items-center mb-6">
          <div className="w-16 h-16 mr-4 flex-shrink-0">
            <svg className="w-full h-full text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 2A1.5 1.5 0 0017 3.5v13a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13A1.5 1.5 0 014.5 2h11zm0 1h-11a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5zM7 15a1 1 0 110-2 1 1 0 010 2zm0-4a1 1 0 110-2 1 1 0 010 2zm0-4a1 1 0 110-2 1 1 0 010 2zm4 8a1 1 0 110-2 1 1 0 010 2zm0-4a1 1 0 110-2 1 1 0 010 2zm0-4a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-gray-700 mb-4">
              A cookie is a small amount of information that's downloaded to your computer or device when you visit our Site. We use a number of different cookies, including functional, performance, advertising, and social media or content cookies. Cookies make your browsing experience better by allowing the website to remember your actions and preferences (such as login and region selection). This means you don't have to re-enter this information each time you return to the site or browse from one page to another. Cookies also provide information on how people use the website, for instance whether it's their first time visiting or if they are a frequent visitor.
            </p>
            <p className="text-gray-700">
              We use cookies to optimize your experience on our Site and to provide our services.
            </p>
          </div>
        </div>
      </section>
      
  
      <div>
        <h3 className="text-2xl font-bold mb-4">Cookies Necessary for the Functioning of the Store</h3>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Function</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_ab</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with access to admin.</td>
                <td className="px-6 py-4 text-sm text-gray-600">2y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_secure_session_id</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with navigation through a storefront.</td>
                <td className="px-6 py-4 text-sm text-gray-600">24h</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_shopify_country</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">session</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_shopify_m</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used for managing customer privacy settings.</td>
                <td className="px-6 py-4 text-sm text-gray-600">1y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_shopify_tm</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used for managing customer privacy settings.</td>
                <td className="px-6 py-4 text-sm text-gray-600">30min</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_shopify_tw</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used for managing customer privacy settings.</td>
                <td className="px-6 py-4 text-sm text-gray-600">2w</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_storefront_u</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used to facilitate updating customer account information.</td>
                <td className="px-6 py-4 text-sm text-gray-600">1min</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_tracking_consent</td>
                <td className="px-6 py-4 text-sm text-gray-600">Tracking preferences.</td>
                <td className="px-6 py-4 text-sm text-gray-600">1y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">c</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">1y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">cart</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with shopping cart.</td>
                <td className="px-6 py-4 text-sm text-gray-600">2w</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">cart_currency</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with shopping cart.</td>
                <td className="px-6 py-4 text-sm text-gray-600">2w</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">cart_sig</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">2w</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">cart_ts</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">2w</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">cart_ver</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with shopping cart.</td>
                <td className="px-6 py-4 text-sm text-gray-600">2w</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">checkout</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">4w</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">checkout_token</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">1y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">dynamic_checkout_shown_on_cart</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">30min</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">hide_shopify_pay_for_checkout</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">session</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">keep_alive</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with buyer localization.</td>
                <td className="px-6 py-4 text-sm text-gray-600">2w</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">master_device_id</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with merchant login.</td>
                <td className="px-6 py-4 text-sm text-gray-600">2y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">previous_step</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">1y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">remember_me</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">1y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">secure_customer_sig</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with customer login.</td>
                <td className="px-6 py-4 text-sm text-gray-600">20y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">shopify_pay</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">1y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">shopify_pay_redirect</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">30 minutes, 3w or 1y depending on value</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">storefront_digest</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with customer login.</td>
                <td className="px-6 py-4 text-sm text-gray-600">2y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">tracked_start_checkout</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">1y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">checkout_one_experiment</td>
                <td className="px-6 py-4 text-sm text-gray-600">Used in connection with checkout.</td>
                <td className="px-6 py-4 text-sm text-gray-600">session</td>
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        <div>
        <h3 className="text-2xl font-bold mb-4 mt-4">Reporting & Analytics Cookies</h3>
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Function</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider border-b">Duration</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_landing_page</td>
                <td className="px-6 py-4 text-sm text-gray-600">Track landing pages.</td>
                <td className="px-6 py-4 text-sm text-gray-600">2w</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_orig_referrer</td>
                <td className="px-6 py-4 text-sm text-gray-600">Track landing pages.</td>
                <td className="px-6 py-4 text-sm text-gray-600">2w</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_s</td>
                <td className="px-6 py-4 text-sm text-gray-600">Shopify analytics.</td>
                <td className="px-6 py-4 text-sm text-gray-600">30min</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_shopify_d</td>
                <td className="px-6 py-4 text-sm text-gray-600">Shopify analytics.</td>
                <td className="px-6 py-4 text-sm text-gray-600">session</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_shopify_s</td>
                <td className="px-6 py-4 text-sm text-gray-600">Shopify analytics.</td>
                <td className="px-6 py-4 text-sm text-gray-600">30min</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_shopify_sa_p</td>
                <td className="px-6 py-4 text-sm text-gray-600">Shopify analytics relating to marketing & referrals.</td>
                <td className="px-6 py-4 text-sm text-gray-600">30min</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_shopify_sa_t</td>
                <td className="px-6 py-4 text-sm text-gray-600">Shopify analytics relating to marketing & referrals.</td>
                <td className="px-6 py-4 text-sm text-gray-600">30min</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_shopify_y</td>
                <td className="px-6 py-4 text-sm text-gray-600">Shopify analytics.</td>
                <td className="px-6 py-4 text-sm text-gray-600">1y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_y</td>
                <td className="px-6 py-4 text-sm text-gray-600">Shopify analytics.</td>
                <td className="px-6 py-4 text-sm text-gray-600">1y</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_shopify_evids</td>
                <td className="px-6 py-4 text-sm text-gray-600">Shopify analytics.</td>
                <td className="px-6 py-4 text-sm text-gray-600">session</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-mono text-gray-900">_shopify_ga</td>
                <td className="px-6 py-4 text-sm text-gray-600">Shopify and Google Analytics.</td>
                <td className="px-6 py-4 text-sm text-gray-600">session</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        <section className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-lg shadow">
      {/* --- Cookies & Tracking Technologies --- */}
      <h2 className="text-2xl font-bold mb-4">Cookies & Tracking Technologies</h2>

      <p className="mb-4">
        The length of time that a cookie remains on your computer or mobile
        device depends on whether it is a <strong>persistent</strong> or{" "}
        <strong>session</strong> cookie. Session cookies last until you stop
        browsing and persistent cookies last until they expire or are deleted.
        Most cookies we use are persistent and will expire between&nbsp;30 minutes
        and two years from the date they are downloaded to your device.
      </p>

      <p className="mb-4">
        You can control and manage cookies in various ways. Removing or blocking
        cookies can negatively impact your experience and parts of our website
        may no longer be fully accessible.
      </p>

      <p className="mb-4">
        Most browsers automatically accept cookies, but you can choose whether
        to accept them through your browser controls (often in “Tools” or
        “Preferences”). Learn more at{" "}
        <a
          href="https://www.allaboutcookies.org"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.allaboutcookies.org
        </a>
        .
      </p>

      <p className="mb-6">
        Blocking cookies may not completely prevent how we share information
        with advertising partners. To opt out of certain uses, follow the steps
        in the “Behavioural Advertising” section of our Privacy Policy.
      </p>

      {/* --- Do Not Track --- */}
      <details className="mb-4">
        <summary className="cursor-pointer font-semibold">Do&nbsp;Not&nbsp;Track</summary>
        <p className="mt-2">
          Because there is no consistent industry understanding of how to
          respond to “Do Not Track” signals, we do not alter our data‑collection
          and usage practices when we detect such a signal from your browser.
        </p>
      </details>

      {/* --- Changes --- */}
      <details className="mb-4">
        <summary className="cursor-pointer font-semibold">Changes</summary>
        <p className="mt-2">
          We may update this section from time to time to reflect changes to our
          practices or for operational, legal, or regulatory reasons.
        </p>
      </details>

      {/* --- Complaints --- */}
      <details>
        <summary className="cursor-pointer font-semibold">Complaints</summary>
        <div className="mt-2 space-y-2">
          <p>
            If you would like to make a complaint, please contact us by e‑mail or
            by mail using the details provided in the “Contact” section of our
            Privacy Policy.
          </p>
          <p>
            If you are not satisfied with our response, you have the right to
            lodge a complaint with the relevant data‑protection authority. For
            example, in the UK you can contact the&nbsp;
            <a
              href="https://ico.org.uk/make-a-complaint/"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Information Commissioner’s Office (ICO)
            </a>
            .
          </p>
        </div>
      </details>
    </section>
    </div>
  );
};

export default PrivacyPolicy;    