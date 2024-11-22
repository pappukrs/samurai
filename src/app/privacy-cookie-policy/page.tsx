'use client';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-[#111827]' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-black';

  // Animation for bullet points
  const bulletAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, type: 'spring', bounce: 0.5 },
    },
  };

  return (
    <div className={`min-h-screen mt-16 ${bgColor} ${textColor} p-8`}>
      <h1 className="text-4xl font-bold mb-6 text-center">Privacy & Cookie Policy</h1>
      <motion.div
        initial="hidden"
        animate="visible"
        className="space-y-4 text-lg"
      >
        <p className="leading-relaxed">
          Welcome to the Privacy & Cookie Policy of SLV Sky Suites. We understand the significance of safeguarding your personal information. Our commitment is to ensure that your data is managed securely and responsibly. This policy details how we collect, use, and protect your personal data, as well as how we adhere to data protection regulations. By accessing or utilizing SLV Sky Suites services, including our website, bookings, customer support, and related services, you consent to the terms outlined in this Privacy Policy.
        </p>

        <p className="leading-relaxed">
          Below are the key points of our policy:
        </p>

        <motion.ul variants={bulletAnimation} className="list-decimal pl-6 space-y-2">
          <li><strong>Collection of Personal Data:</strong> We collect personal information through various means, such as when you make a reservation, register or update your account, or use our customer support services.</li>
          <li><strong>Customer Service Interactions:</strong> We gather information from your interactions with our customer service team, whether via email, phone, or live chat.</li>
          <li><strong>Hotel Registration:</strong> Information provided when you check-in at SLV Sky Suites.</li>
          <li><strong>Use of Personal Data:</strong> We use your data to enhance customer experience, process bookings, manage payments, offer personalized recommendations, respond to inquiries, and send transactional updates.</li>
          <li><strong>Fraud Prevention:</strong> Your data is also used to improve website functionality, prevent fraud, and facilitate third-party services that support our operations.</li>
          <li><strong>Marketing and Promotions:</strong> With your consent, we may contact you about special offers, promotions, and updates related to SLV Sky Suites products and services.</li>
          <li><strong>Non-Disclosure to Third Parties:</strong> We do not share, sell, or rent your data to third parties for marketing purposes without your consent. However, we may share data with service providers who assist in offering services on our behalf.</li>
          <li><strong>Cookies and Tracking:</strong> We use cookies to improve your browsing experience, personalize content, and ensure the smooth functioning of our website. You can manage cookie preferences via your browser settings.</li>
          <li><strong>Your Consent and Control:</strong> By using our services, you agree to the collection and use of your data as described. You can opt-out of marketing communications at any time but cannot opt-out of essential booking-related communications.</li>
          <li><strong>Access to Your Data:</strong> You have the right to access, update, or request the deletion of your personal information. Contact us for assistance in managing your data.</li>
          <li><strong>Changes to this Policy:</strong> We may update this Privacy Policy from time to time. Any changes will be posted on our website, and we will notify you of significant updates.</li>
        </motion.ul>

        <p className="leading-relaxed">
          Your privacy is important to us, and we strive to provide a transparent and secure experience. If you have any questions regarding this policy or would like to manage your personal information, please feel free to contact us. We are here to assist you.
        </p>

        <p className="leading-relaxed">
          Thank you for trusting us with your personal information. We value your privacy and are dedicated to keeping your data safe.
        </p>

        <p className="leading-relaxed">
          <strong>Contact Us:</strong>
        </p>
        <p className="leading-relaxed">
          If you have any questions about this Privacy Policy or wish to access, update, or delete your personal information, please reach out to us at:
        </p>
        <p className="leading-relaxed">
          <strong>SLV Sky Suites Customer Support</strong><br />
          Email: <a href="mailto:help@slvskysuites.com" className="text-blue-500">help@slvskysuites.com</a><br />
          Phone: +91 8832675432<br />
          Address: Whitefield
        </p>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
