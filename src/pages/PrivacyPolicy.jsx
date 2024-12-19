import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet untuk SEO

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Privacy Policy - Modernify</title>
        <meta
          name="description"
          content="Read our privacy policy to understand how we handle your personal information."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, user rights"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">Effective Date: January 1, 2024</p>
        <p className="text-gray-700 mb-4">
          This privacy policy describes how we collect, use, and share
          information about you when you use our website and services.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Information We Collect
        </h2>
        <p className="text-gray-700 mb-4">
          We may collect personal information such as your name, email address,
          and phone number when you register for our services or contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-4">
          We use the information we collect to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Provide and improve our services.</li>
          <li>Communicate with you about your account and services.</li>
          <li>Send you marketing communications, if you have opted in.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Information Sharing
        </h2>
        <p className="text-gray-700 mb-4">
          We do not sell or rent your personal information to third parties. We
          may share your information in the following circumstances:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            With service providers who assist us in operating our website.
          </li>
          <li>To comply with legal obligations or to protect our rights.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="text-gray-700 mb-4">
          You have the right to access, correct, or delete your personal
          information. You can also object to the processing of your data or
          request a restriction on its use.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="text-gray-700 mb-4">
          If you have any questions about this privacy policy, please contact us
          at:
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Email:</strong> info@lorem.mail
        </p>

        <button
          onClick={() => navigate(-1)} // Navigasi kembali ke halaman sebelumnya
          className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition duration-300"
        >
          Kembali
        </button>
      </div>
    </>
  );
};

export default PrivacyPolicy;
