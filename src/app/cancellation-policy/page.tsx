'use client';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const CancellationPolicy = () => {
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
    <div className={`min-h-screen mt-8 ${bgColor} ${textColor} p-8`}>
      <h1 className="text-4xl font-bold mb-6 text-center">Cancellation Policy</h1>
      <motion.div
        initial="hidden"
        animate="visible"
        className="space-y-8 text-lg"
      >
        <p className="leading-relaxed">
          At our hotel, we aim to provide a seamless experience for every guest, ensuring that your stay is both pleasant and memorable. We understand that sometimes plans change, and we want to make sure you have all the information you need regarding our cancellation policy. We believe in being transparent and fair with our policies, and we appreciate your understanding.
        </p>

        <p className="leading-relaxed">
          Our cancellation policy is designed to be flexible, offering you peace of mind when booking your stay with us. Whether you're planning a quick getaway or a long vacation, we want to make sure that if your plans change, you're not burdened with unnecessary fees or complications. Here's what you need to know:
        </p>

        <motion.ul variants={bulletAnimation} className="list-decimal pl-6 space-y-2">
          <li><strong>Cancellations within 24 hours of booking:</strong> No fees, and a full refund will be issued.</li>
          <li><strong>Cancellations after 24 hours but within 48 hours:</strong> A 50% cancellation fee applies.</li>
          <li><strong>Cancellations within 12 hours of check-in:</strong> Unfortunately, no refunds will be provided.</li>
          <li><strong>Where to cancel:</strong> Cancellations must be made through our official website or app for the process to be completed smoothly.</li>
          <li><strong>Refund processing time:</strong> We’ll process your refund within 7-10 business days.</li>
          <li><strong>Partially used services:</strong> If you've used any part of the service, no refund will be issued.</li>
          <li><strong>Special promotions:</strong> Be aware that special promotions and discounts may have different cancellation rules. Please check the terms at the time of booking.</li>
          <li><strong>Force majeure events:</strong> In case of unforeseen circumstances like natural disasters, full refunds will be issued.</li>
          <li><strong>Refund requests:</strong> All requests for refunds must be submitted in writing for processing.</li>
          <li><strong>Right to modify policy:</strong> We reserve the right to change our cancellation policy at any time, so please review the latest terms before booking.</li>
        </motion.ul>

        <p className="leading-relaxed">
          We strive to provide a stress-free experience at every step of your journey with us, and our cancellation policy reflects that commitment. If you have any questions or need assistance, don’t hesitate to reach out to our customer service team. We're here to help!
        </p>

        <p className="leading-relaxed">
          Your comfort, satisfaction, and trust are our top priorities. We look forward to welcoming you to our hotel soon, and we hope your stay will be nothing short of extraordinary.
        </p>
      </motion.div>
    </div>
  );
};

export default CancellationPolicy;
