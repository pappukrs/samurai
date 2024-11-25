'use client';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const TermsConditions = () => {
  const { theme } = useTheme();

  // Dynamic background and text color based on theme
  const bgColor = theme === 'dark' ? 'bg-gradient-to-r from-[#111827] via-[#1a202c] to-[#2d3748]' : 'bg-gradient-to-r from-[#a2c2f1] to-[#e6f0ff]';
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
    <div className={`min-h-screen mt-12 ${bgColor} ${textColor} p-8 md:p-16`}>
      <h1 className="text-5xl font-bold mb-6 text-center font-serif text-indigo-700">
        Terms & Conditions
      </h1>

      <motion.div
        initial="hidden"
        animate="visible"
        className="space-y-6 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto"
      >
        <p className="leading-relaxed text-gray-800">
          Once upon a time, you embarked on a journey across our platform, seeking the wonderful services we offer. But before you dive deeper, we want to ensure you understand the important rules that govern your experience. This is your moment to pause, read, and agree to the terms and conditions that keep everything fair and secure.
        </p>

        <p className="leading-relaxed text-gray-800">
          These terms are designed to guide you through your experience. So, here’s what you need to know:
        </p>

        <motion.ul variants={bulletAnimation} className="list-decimal pl-6 space-y-4">
          <li className="hover:text-indigo-500 transition duration-300"><strong>1. Acceptance of Terms:</strong> By stepping into our world and using our services, you agree to follow the terms and conditions that have been set in place. It’s a simple handshake between us!</li>
          <li className="hover:text-indigo-500 transition duration-300"><strong>2. Changes to Terms:</strong> Life changes, and so do the terms. We may update them from time to time to keep things in line with new developments. We recommend checking back now and then to stay informed.</li>
          <li className="hover:text-indigo-500 transition duration-300"><strong>3. Our Contract:</strong> When you make a booking with slvskysuites, the agreement is formalized once we issue you with a booking reference number for your room and any additional services. A binding contract is formed when this reference number is issued.</li>
          <li className="hover:text-indigo-500 transition duration-300"><strong>4. Management Rights:</strong> We, at slvskysuites, reserve the right to cancel any booking, at any time, if necessary, due to unforeseen circumstances.</li>
          <li className="hover:text-indigo-500 transition duration-300"><strong>5. Booking Details:</strong> You cannot transfer or resell your booking. Any attempt to do so will lead to the termination of your booking, with no refund for payments already made.</li>
          <li className="hover:text-indigo-500 transition duration-300"><strong>6. Cancellations:</strong> Cancellations can be made free of charge up to 24 hours prior to check-in, which begins at 02:00 PM local time on the date of stay. Any cancellations made less than 24 hours before check-in will incur a one-night penalty charge. Add-ons such as extras will be fully refunded if unavailable.</li>
          <li className="hover:text-indigo-500 transition duration-300"><strong>7. Group Bookings:</strong> If you are booking five or more rooms for the same night, your reservation will be treated as a Group Booking and will be subject to specific cancellation terms. Any cancellations within 30 days of your arrival will result in no refund.</li>
          <li className="hover:text-indigo-500 transition duration-300"><strong>8. Modification of Bookings:</strong> You may modify your booking free of charge up to 24 hours before check-in. Modifications are treated as cancellations and new bookings, subject to availability and rates at the time of modification.</li>
          <li className="hover:text-indigo-500 transition duration-300"><strong>9. No-Show Policy:</strong> If you do not cancel or modify your booking before the final booking date, your entire booking will be charged at 100%.</li>
          <li className="hover:text-indigo-500 transition duration-300"><strong>10. Refund Policy:</strong> Refunds will be processed within 20 working days. Please note that refunds will be made to the original payment method.</li>
          <li className="hover:text-indigo-500 transition duration-300"><strong>11. Hotel Policy:</strong> Money, jewelry, and other valuables must be placed in the in-room safe, as slvskysuites is not liable for any losses. Visitors are not allowed in guest rooms to ensure the safety and security of all guests.</li>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default TermsConditions;
