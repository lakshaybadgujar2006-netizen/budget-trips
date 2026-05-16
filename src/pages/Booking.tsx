import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useSearchParams } from 'react-router-dom';
import { TOUR_PACKAGES } from '../constants';
import { Calendar, Users, MapPin, CheckCircle2, Loader2, Heart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { cn } from '../lib/utils';
import { db, collection, addDoc, serverTimestamp } from '../lib/firebase';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { format, parse } from 'date-fns';

import { CreditCard, ShieldCheck, Lock } from 'lucide-react';

export default function Booking() {
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const selectedPkg = searchParams.get('package');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCustomMode, setIsCustomMode] = useState(selectedPkg === 'custom');
  const [currentStep, setCurrentStep] = useState<'form' | 'payment'>('form');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    packageId: selectedPkg || '',
    date: format(new Date(), 'yyyy-MM-dd'),
    travelers: '2',
    message: ''
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        name: prev.name || user.displayName || '',
        email: prev.email || user.email || ''
      }));
    }
  }, [user]);

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const packageName = isCustomMode 
        ? 'Custom Itinerary' 
        : TOUR_PACKAGES.find(p => p.id === formData.packageId)?.title;

      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          packageName,
          paymentStatus: 'paid'
        }),
      });

      if (response.ok) {
        // Persist to Firestore if user is logged in
        if (user) {
          try {
            await addDoc(collection(db, 'bookings'), {
              userId: user.uid,
              ...formData,
              packageName,
              status: 'confirmed',
              paymentStatus: 'paid',
              createdAt: serverTimestamp()
            });
          } catch (fsError) {
            console.error('Failed to save to Firestore:', fsError);
          }
        }
        setIsSubmitted(true);
      } else {
        const error = await response.json();
        alert(error.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Booking submission failed:', error);
      alert('Failed to send booking request. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-32 text-center max-w-2xl mx-auto px-4">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
           <CheckCircle2 className="h-10 w-10" />
        </div>
        <h2 className="text-4xl font-bold mb-4">Booking Confirmed!</h2>
        <p className="text-lg text-gray-600 mb-10">
          Namaste, {formData.name}! Your payment was successful and your {isCustomMode ? 'custom itinerary request' : `trip to ${TOUR_PACKAGES.find(p => p.id === formData.packageId)?.title || 'your trip'}`} is confirmed. Check your email for details.
        </p>
        <button onClick={() => { setIsSubmitted(false); setCurrentStep('form'); }} className="bg-emerald-600 text-white px-8 py-3 rounded-full font-bold">
          Book Another Trip
        </button>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-16">
           <div className="flex items-center gap-4">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all",
                currentStep === 'form' ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : "bg-emerald-100 text-emerald-600"
              )}>1</div>
              <div className="w-20 h-[2px] bg-emerald-100"></div>
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all",
                currentStep === 'payment' ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : "bg-gray-200 text-gray-400"
              )}>2</div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader
              title={currentStep === 'form' ? (isCustomMode ? "Design Your Custom Itinerary" : "Book Your Dream Trip") : "Secure Payment"}
              subtitle={currentStep === 'form' 
                ? (isCustomMode ? "Tell us your preferences and we'll create a unique journey specifically for you." : "Fill out the form below and let us handle all the logistics while you prepare for adventure.")
                : "Complete your booking securely with our encrypted payment gateway."
              }
            />
            {currentStep === 'form' && (
              <div className="space-y-8 mt-12">
                 {!isCustomMode && (
                   <button 
                     onClick={() => {
                       setIsCustomMode(true);
                       setFormData(prev => ({ ...prev, packageId: 'custom' }));
                     }}
                     className="w-full flex items-center justify-center gap-3 p-6 bg-emerald-600 text-white rounded-2xl font-bold shadow-lg shadow-emerald-900/20 hover:bg-emerald-700 transition-all mb-8"
                   >
                     <MapPin className="h-6 w-6" />
                     Book a Custom Tour
                   </button>
                 )}
                 {isCustomMode && (
                   <button 
                     onClick={() => {
                       setIsCustomMode(false);
                       setFormData(prev => ({ ...prev, packageId: selectedPkg || '' }));
                     }}
                     className="w-full flex items-center justify-center gap-3 p-6 bg-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-200 transition-all mb-8"
                   >
                     ← Back to Standard Booking
                   </button>
                 )}
                 <div className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600"><Calendar className="h-6 w-6" /></div>
                    <div>
                      <h4 className="font-bold">Flexible Dates</h4>
                      <p className="text-sm text-gray-500">Pick any date and we'll check availability for you.</p>
                    </div>
                 </div>
              </div>
            )}

            {currentStep === 'payment' && (
              <div className="space-y-8 mt-12">
                 <div className="p-8 bg-emerald-900 text-white rounded-3xl space-y-6">
                    <div className="flex justify-between items-center">
                       <p className="text-emerald-300 uppercase tracking-widest text-xs font-bold">Booking Total</p>
                       <p className="text-3xl font-bold">${parseInt(formData.travelers) * 850}</p>
                    </div>
                    <div className="h-[1px] bg-emerald-800"></div>
                    <div className="space-y-2">
                       <p className="text-sm font-medium">{isCustomMode ? 'Custom Package' : TOUR_PACKAGES.find(p => p.id === formData.packageId)?.title}</p>
                       <p className="text-xs text-emerald-400">{formData.travelers} Travelers • {formData.date}</p>
                    </div>
                 </div>
                 <div className="flex gap-4 items-start p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600"><ShieldCheck className="h-6 w-6" /></div>
                    <div>
                      <h4 className="font-bold">Encrypted Transaction</h4>
                      <p className="text-sm text-gray-500">Your data is protected by industry-standard 256-bit SSL encryption.</p>
                    </div>
                 </div>
              </div>
            )}
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-50">
            {currentStep === 'form' ? (
              <form onSubmit={handleNextToPayment} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Full Name</label>
                    <input
                      required
                      type="text"
                      className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Phone Number</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="+91 92178 07801"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">
                      {isCustomMode ? "Primary Interest" : "Select Package"}
                    </label>
                    <select
                      required
                      className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      value={formData.packageId}
                      onChange={(e) => {
                        setFormData({...formData, packageId: e.target.value});
                        if (e.target.value === 'custom') setIsCustomMode(true);
                        else setIsCustomMode(false);
                      }}
                    >
                      {!isCustomMode && <option value="">Select a package</option>}
                      {TOUR_PACKAGES.map(p => <option key={p.id} value={p.id}>{p.title}</option>)}
                      <option value="custom">Custom (Tailor-made)</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Travel Date</label>
                    <DatePicker
                      required
                      selected={parse(formData.date, 'yyyy-MM-dd', new Date())}
                      onChange={(date: Date | null) => {
                        if (date) {
                          setFormData({...formData, date: format(date, 'yyyy-MM-dd')});
                        }
                      }}
                      minDate={new Date()}
                      className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all cursor-pointer"
                      placeholderText="Select travel date"
                      dateFormat="MMMM d, yyyy"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">No. of Travelers</label>
                    <input
                      required
                      type="number"
                      min="1"
                      className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      value={formData.travelers}
                      onChange={(e) => setFormData({...formData, travelers: e.target.value})}
                    />
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-emerald-600 text-white py-5 rounded-2xl text-lg font-bold hover:bg-emerald-700 shadow-xl shadow-emerald-900/10 transition-all flex items-center justify-center gap-3"
                >
                  Continue to Payment
                </button>
              </form>
            ) : (
              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                 <div className="space-y-4">
                    <div className="flex gap-4 p-4 border-2 border-emerald-500 bg-emerald-50 rounded-2xl">
                       <CreditCard className="h-6 w-6 text-emerald-600" />
                       <div className="flex-grow">
                          <p className="font-bold text-sm">Credit or Debit Card</p>
                          <p className="text-xs text-emerald-600">Secure payment via Stripe</p>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Card Number</label>
                      <div className="relative">
                        <input
                          required
                          type="text"
                          className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all pl-14"
                          placeholder="0000 0000 0000 0000"
                        />
                        <Lock className="h-5 w-5 text-gray-300 absolute left-5 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">Expiry Date</label>
                          <input
                            required
                            type="text"
                            placeholder="MM/YY"
                            className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest px-1">CVV</label>
                          <input
                            required
                            type="text"
                            placeholder="123"
                            className="w-full px-5 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                          />
                       </div>
                    </div>
                 </div>

                 <button 
                  type="submit" 
                  disabled={isLoading}
                  className={cn(
                    "w-full bg-emerald-600 text-white py-5 rounded-2xl text-lg font-bold hover:bg-emerald-700 shadow-xl shadow-emerald-900/10 transition-all flex items-center justify-center gap-3",
                    isLoading && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Lock className="h-5 w-5 text-emerald-400" />}
                  Pay ${parseInt(formData.travelers) * 850} Now
                </button>
                
                <button 
                  type="button" 
                  onClick={() => setCurrentStep('form')}
                  className="w-full text-center text-sm font-bold text-gray-400 hover:text-gray-900 transition-all"
                >
                  ← Change Trip Details
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
