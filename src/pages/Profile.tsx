import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Camera, Mail, User as UserIcon, Save, ArrowLeft, Loader2, CheckCircle2, Ticket, Calendar as CalendarIcon, MapPin, ChevronRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { db, collection, query, where, getDocs, orderBy } from '../lib/firebase';
import { cn } from '../lib/utils';

export default function Profile() {
  const { user, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [error, setError] = useState('');
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoadingBookings, setIsLoadingBookings] = useState(true);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      fetchBookings();
    }
  }, [user]);

  const fetchBookings = async () => {
    if (!user) return;
    setIsLoadingBookings(true);
    try {
      const q = query(
        collection(db, 'bookings'),
        where('userId', '==', user.uid),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(q);
      const bookingsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBookings(bookingsData);
    } catch (err) {
      console.error('Error fetching bookings:', err);
    } finally {
      setIsLoadingBookings(false);
    }
  };

  if (!user) {
    navigate('/auth');
    return null;
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError('');
    
    try {
      await updateUserProfile({ displayName });
      setIsEditing(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate size (e.g., 2MB)
    if (file.size > 2 * 1024 * 1024) {
      setError('Image must be less than 2MB');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result as string;
      setIsSaving(true);
      try {
        await updateUserProfile({ photoURL: base64String });
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 3000);
      } catch (err: any) {
        setError(err.message || 'Failed to upload photo');
      } finally {
        setIsSaving(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const initials = user.displayName?.split(' ').map(n => n[0]).join('').toUpperCase() || 'U';

  return (
    <div className="min-h-screen bg-gray-50 py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-emerald-600 font-bold mb-8 transition-colors group"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Back to previous
        </button>

        <div className="bg-white rounded-[3rem] p-10 shadow-xl shadow-emerald-900/5 border border-emerald-50">
          <div className="flex flex-col items-center mb-12">
            <div className="relative group">
              <div className="relative w-32 h-32 rounded-full border-4 border-white bg-emerald-100 flex items-center justify-center text-3xl font-black text-emerald-700 shadow-2xl overflow-hidden">
                {user.photoURL ? (
                  <img 
                    src={user.photoURL} 
                    alt={user.displayName || ''} 
                    className={cn(
                      "w-full h-full object-cover transition-opacity duration-300",
                      isSaving && "opacity-30 blur-sm"
                    )} 
                  />
                ) : (
                  initials
                )}
                {isSaving && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm animate-pulse">
                    <Loader2 className="h-6 w-6 text-emerald-600 animate-spin mb-1" />
                    <span className="text-[8px] font-black uppercase tracking-tighter text-emerald-700">Syncing...</span>
                  </div>
                )}
              </div>
              <button 
                onClick={() => fileInputRef.current?.click()}
                disabled={isSaving}
                className="absolute bottom-1 right-1 bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-all hover:scale-110 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed z-20"
                title="Upload Profile Picture"
              >
                {isSaving ? <Loader2 className="h-5 w-5 animate-spin" /> : <Camera className="h-5 w-5" />}
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="image/*" 
                onChange={handleFileChange}
              />
            </div>
            <h1 className="text-3xl font-black text-gray-900 mt-6 tracking-tight">
              {user.displayName || 'Trekker'}
            </h1>
            <p className="text-emerald-600 font-bold text-sm uppercase tracking-widest mt-1">Adventurer Level 1</p>
          </div>

          <div className="space-y-8">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-medium animate-in fade-in zoom-in duration-300">
                {error}
              </div>
            )}
            
            {isSaved && (
              <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-emerald-600 text-sm font-bold flex items-center gap-2 animate-in fade-in zoom-in duration-300">
                <CheckCircle2 className="h-5 w-5" /> Profile successfully updated!
              </div>
            )}

            <div className="grid gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Traveler Name</label>
                <div className="flex gap-4">
                  <div className="relative flex-1">
                    <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
                    <input 
                      disabled={!isEditing}
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="w-full pl-12 pr-5 py-4 bg-gray-50 rounded-2xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50 transition-all font-medium"
                    />
                  </div>
                  {!isEditing ? (
                    <button 
                      onClick={() => setIsEditing(true)}
                      className="px-6 py-4 bg-emerald-50 text-emerald-600 rounded-2xl font-bold hover:bg-emerald-100 transition-colors"
                    >
                      Edit
                    </button>
                  ) : (
                    <button 
                      onClick={handleUpdate}
                      disabled={isSaving}
                      className="px-6 py-4 bg-emerald-600 text-white rounded-2xl font-bold hover:bg-emerald-700 transition-all flex items-center gap-2 shadow-lg shadow-emerald-900/10 disabled:opacity-50"
                    >
                      {isSaving ? <Loader2 className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
                      Save
                    </button>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 opacity-60">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest px-2">Account Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
                  <input 
                    readOnly
                    value={user.email || ''}
                    className="w-full pl-12 pr-5 py-4 bg-gray-100 rounded-2xl border border-gray-100 focus:outline-none cursor-not-allowed font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
               <div className="flex items-center justify-between p-6 bg-emerald-900/5 rounded-[2rem] border border-emerald-100/50">
                  <div>
                    <h4 className="font-bold text-gray-900">Adventure Stats</h4>
                    <p className="text-xs text-gray-500 mt-1">Tracking your journey across the Himalayas</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-xl font-black text-emerald-600">{bookings.length}</div>
                      <div className="text-[10px] uppercase font-black text-gray-400">Bookings</div>
                    </div>
                    <div className="text-center border-l border-emerald-200 pl-4">
                      <div className="text-xl font-black text-emerald-600">0</div>
                      <div className="text-[10px] uppercase font-black text-gray-400">Reviews</div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="pt-12">
              <div className="flex items-center justify-between mb-6 px-2">
                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight flex items-center gap-2">
                  <Ticket className="h-6 w-6 text-emerald-600" />
                  Your Himalayan Journeys
                </h3>
              </div>

              <div className="space-y-4">
                {isLoadingBookings ? (
                  <div className="flex flex-col items-center py-12 text-gray-300">
                    <Loader2 className="h-10 w-10 animate-spin mb-4" />
                    <p className="font-bold uppercase tracking-widest text-xs">Unfolding the map...</p>
                  </div>
                ) : bookings.length > 0 ? (
                  bookings.map((booking) => (
                    <motion.div 
                      key={booking.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="group bg-gray-50 hover:bg-white p-6 rounded-[2rem] border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 relative overflow-hidden"
                    >
                      <div className="relative z-10">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                          <div>
                            <span className={cn(
                              "text-[10px] font-black uppercase tracking-widest block mb-1 px-2 py-0.5 rounded-full inline-block",
                              booking.status === 'confirmed' ? "bg-emerald-100 text-emerald-700" : 
                              booking.status === 'cancelled' ? "bg-red-100 text-red-700" :
                              "bg-amber-100 text-amber-700"
                            )}>
                              {booking.status || 'Pending'}
                            </span>
                            <h4 className="text-lg font-black text-gray-900 leading-tight">
                              {booking.packageName || 'Mountain Exploration'}
                            </h4>
                          </div>
                          <Link 
                            to={`/booking?package=${booking.packageId}`}
                            className="bg-white p-2 rounded-full border border-gray-200 text-gray-400 hover:text-emerald-600 hover:border-emerald-200 transition-all group-hover:scale-110"
                            title="Rebook this adventure"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </Link>
                        </div>
                        
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-gray-500">
                            <CalendarIcon className="h-4 w-4" />
                            <span className="text-xs font-bold">{booking.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500">
                            <UserIcon className="h-4 w-4" />
                            <span className="text-xs font-bold">{booking.travelers} Persons</span>
                          </div>
                          {booking.packageId === 'custom' && (
                            <div className="flex items-center gap-2 text-gray-500">
                               <MapPin className="h-4 w-4" />
                               <span className="text-xs font-bold">Custom Request</span>
                            </div>
                          )}
                        </div>

                        {booking.message && (
                          <div className="mt-4 p-3 bg-gray-100/50 rounded-xl text-[11px] text-gray-500 line-clamp-2 italic">
                            "{booking.message}"
                          </div>
                        )}
                      </div>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700"></div>
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center py-16 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200">
                    <p className="text-gray-400 font-bold mb-4 italic">No journeys recorded yet.</p>
                    <Link 
                      to="/booking" 
                      className="inline-flex items-center gap-2 text-emerald-600 font-black uppercase tracking-widest text-xs hover:gap-3 transition-all"
                    >
                      Start your adventure <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
