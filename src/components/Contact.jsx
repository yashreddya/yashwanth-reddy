import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
    id="contact"
    className="bg-white py-16 px-6 text-center text-gray-800"
    data-aos="zoom-in-up"
  >
    <div className="max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-gray-900 animate-pulse">
        Contact
      </h2>
      <div className="space-y-4 text-lg">
        <div className="flex items-center justify-center gap-2 text-pink-600">
          <FaMapMarkerAlt className="animate-bounce" /> <span className="text-gray-800">Atlanta, GA</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-pink-600">
          <FaPhoneAlt className="animate-bounce" /> <span className="text-gray-800">(913)-712-6982</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-pink-600">
          <FaEnvelope className="animate-bounce" /> <span className="text-gray-800">poojamasuram11@gmail.com</span>
        </div>
      </div>
    </div>
  </section>
  );
}
