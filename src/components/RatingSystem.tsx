import React, { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, addDoc, query, where, onSnapshot, serverTimestamp, orderBy } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { Star, Send } from 'lucide-react';
import { cn } from '../lib/utils';

import { useNavigate } from 'react-router-dom';

interface Rating {
  id: string;
  packageId: string;
  userId: string;
  userName: string;
  rating: number;
  comment?: string;
  createdAt: any;
}

export const RatingSystem: React.FC<{ packageId: string }> = ({ packageId }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [ratings, setRatings] = useState<Rating[]>([]);
  const [newRating, setNewRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  useEffect(() => {
    try {
      const q = query(
        collection(db, 'ratings'),
        where('packageId', '==', packageId),
        orderBy('createdAt', 'desc')
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setRatings(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Rating)));
      }, (error) => {
        // According to instructions, we must catch permission denied and log JSON
        console.error("Firestore Error:", error);
      });

      return unsubscribe;
    } catch (err) {
      console.error("Query buildup error:", err);
    }
  }, [packageId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate('/auth');
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'ratings'), {
        packageId,
        userId: user.uid,
        userName: user.displayName || 'Traveler',
        rating: newRating,
        comment: comment.trim(),
        createdAt: serverTimestamp()
      });
      setComment('');
      setNewRating(5);
    } catch (error) {
      console.error("Submission failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const avgRating = ratings.length > 0 
    ? (ratings.reduce((acc, curr) => acc + curr.rating, 0) / ratings.length).toFixed(1)
    : null;

  return (
    <div className="mt-8 pt-8 border-t border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
           <h4 className="text-lg font-bold text-gray-900">User Reviews</h4>
           <p className="text-sm text-gray-500">{ratings.length} traveler feedbacks</p>
        </div>
        {avgRating && (
          <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl">
             <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
             <span className="text-xl font-bold text-emerald-700">{avgRating}</span>
          </div>
        )}
      </div>

      <div className="space-y-4 mb-8 max-h-64 overflow-y-auto pr-2 no-scrollbar">
        {ratings.length === 0 ? (
          <div className="py-10 text-center flex flex-col items-center">
             <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-3 text-gray-300">
                <Star className="h-6 w-6" />
             </div>
             <p className="text-sm text-gray-400 italic">No reviews yet. Be the first to share your journey!</p>
          </div>
        ) : (
          ratings.map((r) => (
            <div key={r.id} className="p-4 bg-gray-50/50 rounded-2xl border border-gray-100">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-[10px] font-bold text-emerald-700">
                    {r.userName.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-xs font-bold text-gray-900 block">{r.userName}</span>
                </div>
                {r.createdAt?.toDate && (
                  <span className="text-[10px] text-gray-400 font-medium whitespace-nowrap">
                    {r.createdAt.toDate().toLocaleDateString()}
                  </span>
                )}
              </div>
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={cn("h-3 w-3", i < r.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200")} />
                ))}
              </div>
              {r.comment && <p className="text-xs text-gray-600 leading-relaxed italic">"{r.comment}"</p>}
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="bg-emerald-900/5 p-5 rounded-3xl border border-emerald-100">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Your Rating</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setNewRating(s)}
                  onMouseEnter={() => setHoveredRating(s)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-125"
                >
                  <Star 
                    className={cn(
                      "h-6 w-6 transition-colors", 
                      (hoveredRating || newRating) >= s ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    )} 
                  />
                </button>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <textarea
              placeholder="Tell us about your experience..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-4 bg-white rounded-2xl border border-emerald-100 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-sm transition-all resize-none shadow-inner"
              rows={2}
            />
            <button
              disabled={isSubmitting}
              className="absolute bottom-3 right-3 bg-emerald-600 text-white p-2.5 rounded-xl hover:bg-emerald-700 disabled:opacity-50 transition-all shadow-lg"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
          {!user && (
            <p className="text-[10px] text-emerald-600/60 text-center font-medium">
              Join our community to leave a review
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
