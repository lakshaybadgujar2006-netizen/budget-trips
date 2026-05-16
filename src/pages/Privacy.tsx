import React from 'react';
import { SectionHeader } from '../components/SectionHeader';

export default function Privacy() {
  return (
    <div className="py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Privacy Policy & Terms"
          subtitle="We value your trust and are committed to protecting your personal data and ensuring a safe booking experience."
        />

        <div className="prose prose-emerald lg:prose-lg max-w-none space-y-12 mt-16 text-gray-600 leading-relaxed">
           <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Data Collection</h3>
              <p>
                We collect personal information that you provide to us directly through our website, such as your name, email address, phone number, and travel preferences when you book a tour or subscribe to our newsletter.
              </p>
           </section>

           <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Information</h3>
              <p>
                The information collected is used solely to process your bookings, communicate with you regarding your trip, improve our services, and send you occasional promotional materials (only if you've opted in).
              </p>
           </section>

           <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Security</h3>
              <p>
                We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. Payment transactions are handled through verified third-party gateways.
              </p>
           </section>

           <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Cancellation & Refunds</h3>
              <ul className="list-disc pl-6 space-y-3">
                 <li>30+ days prior: 100% refund of the package price.</li>
                 <li>15-30 days prior: 50% refund.</li>
                 <li>Less than 15 days: No refund (unless under exceptional circumstances).</li>
              </ul>
           </section>

           <section>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Customer Responsibility</h3>
              <p>
                 Travelers are responsible for ensuring they have the necessary permits, health clearances, and valid identification for domestic travel within India. Budget Trips will assist in the permit process where applicable.
              </p>
           </section>
        </div>

        <div className="mt-20 p-8 bg-emerald-50 rounded-3xl border border-emerald-100 italic text-emerald-800 text-sm">
           Last Updated: May 2024. Budget Trips reserves the right to update these terms at any time. Changes will be posted here immediately to ensure transparency.
        </div>
      </div>
    </div>
  );
}
