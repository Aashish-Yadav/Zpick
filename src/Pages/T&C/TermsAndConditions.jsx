import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md overflow-y-auto">
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Terms and Conditions
        </h1>

        <section className="mb-6">
          <p className="text-gray-700 mb-4">
            akravi.com (Website) is an online service owned, operated, and managed by AKRAVI itself (‘We’ or ‘Us’).
            The below-mentioned terms and conditions of the company are a legally binding agreement used by the company website:
            www.akravi.com along with the services and products displayed.
          </p>
          <p className="text-gray-700">
            It is the customer's responsibility to carefully read and understand the entire agreement. 
            By submitting an order via the website or any related link, you (Customer) certify that you agree to the terms and conditions 
            without third-party pressure. We reserve the right to change the User Agreement without notice, 
            and you are responsible for reviewing it regularly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Medical Disclaimer</h2>
          <p className="text-gray-700 mb-2">
            None of the information on our website constitutes medical advice or acts as a substitute for professional healthcare. 
            If you experience any health problems while using our products, you should promptly inform us and consult a doctor.
          </p>
          <p className="text-gray-700">
            Always read all instructions and ingredients carefully. Products are not evaluated by Food Drug Administration 
            and are not intended to cure, prevent, diagnose, or treat any disease.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Ownership of Rights</h2>
          <p className="text-gray-700">
            Any use of this Website or its content for purposes other than personal, non-commercial use is prohibited without 
            Akravi’s permission. Content rights may belong to third parties. Unauthorized copying, distribution, 
            or usage is strictly prohibited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">General Terms of Use</h2>
          <p className="text-gray-700 mb-2">
            These terms are governed by Indian laws, and disputes are subject to Indian courts. 
            Akravi’s liability is limited to product replacement. We reserve the right to cancel any order 
            due to invalid details, suspected resale, or malpractice. Additional verification may be required.
          </p>
          <p className="text-gray-700">
            Price modifications may occur without prior notice. By using this website or any platform operated by us, 
            you agree to be bound by these Terms of Use.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Product Disclaimer</h2>
          <p className="text-gray-700">
            Akravi is an Indian supplement company using 100% Herbal ingredients. 
            Products are intended solely for Indian residents. They are not approved for sale internationally 
            or by any government body including Indian authorities.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Pricing Information</h2>
          <p className="text-gray-700 mb-2">
            We strive for accurate pricing, but typographical errors may occur. 
            Prices are confirmed only at the time of order placement. 
            Identification and electronic signature (E.S.) are required during the order process.
          </p>
          <p className="text-gray-700">
            For returns or refunds, please refer to our Return & Refund Policy page. 
            You must contact Customer Support for any returns within 30 days of purchase.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Feedback and User Generated Content</h2>
          <p className="text-gray-700">
            All reviews, comments, and suggestions submitted become our property. 
            Submission constitutes an assignment of all copyrights and intellectual property rights to Akravi.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Copyright and Trademark</h2>
          <p className="text-gray-700">
            All logos, brand names, images, designs, and text are protected by copyright and trademark laws. 
            Unauthorized use is prohibited and may lead to legal action.
          </p>
        </section>

        <div className="mt-10 text-center">
          <p className="text-green-700 font-semibold">
            Thank you for choosing Akravi. We appreciate your understanding and cooperation!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
