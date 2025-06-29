import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white py-16 px-6 md:px-20 text-gray-800"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Contact
        </h2>

        <div className="space-y-8">
          {/* Location */}
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-blue-600 text-xl mt-1 animate-pulse" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Location</h4>
              <p className="text-gray-700">
Alpharetta, GA</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-blue-600 text-xl mt-1 animate-pulse" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-700">+1 (678) 208 9897</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-blue-600 text-xl mt-1 animate-pulse" />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Email</h4>
              <p className="text-gray-700">yashwanth99994@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
