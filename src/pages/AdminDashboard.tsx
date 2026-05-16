import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { db, collection, getDocs, updateDoc, doc, query, orderBy, limit } from '../lib/firebase';
import { 
  Users, 
  Package, 
  Calendar, 
  BarChart3, 
  ChevronRight, 
  CheckCircle2, 
  XCircle, 
  Clock,
  TrendingUp,
  Search,
  LayoutDashboard,
  Settings
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { cn } from '../lib/utils';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const ADMIN_EMAIL = 'luckybadgujar2006@gmail.com';

export default function AdminDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [bookings, setBookings] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user && user.email !== ADMIN_EMAIL) {
      navigate('/profile');
    }
    fetchBookings();
  }, [user]);

  const fetchBookings = async () => {
    try {
      const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(data);
    } catch (err) {
      console.error('Error fetching bookings:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (bookingId: string, status: string) => {
    try {
      await updateDoc(doc(db, 'bookings', bookingId), { status });
      setBookings(bookings.map(b => b.id === bookingId ? { ...b, status } : b));
    } catch (err) {
      console.error('Error updating status:', err);
    }
  };

  // Stats
  const stats = [
    { label: 'Total Bookings', value: bookings.length, icon: Calendar, color: 'emerald' },
    { label: 'Active Customers', value: [...new Set(bookings.map(b => b.userId))].length, icon: Users, color: 'blue' },
    { label: 'Trip Requests', value: bookings.length, icon: Package, color: 'purple' },
    { label: 'Pending Requests', value: bookings.filter(b => b.status === 'pending').length, icon: Clock, color: 'orange' },
  ];

  // Chart Data
  const chartData = [
    { name: 'Jan', bookings: 12 },
    { name: 'Feb', bookings: 19 },
    { name: 'Mar', bookings: 25 },
    { name: 'Apr', bookings: 32 },
    { name: 'May', bookings: bookings.length + 5 },
  ];

  if (!user || user.email !== ADMIN_EMAIL) {
      return (
          <div className="pt-32 pb-24 text-center">
              <h1 className="text-2xl font-bold">Access Denied</h1>
              <p className="text-gray-500">Only administrators can access this page.</p>
          </div>
      );
  }

  return (
    <div className="pt-24 min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 hidden lg:flex flex-col p-8 fixed h-[calc(100vh-6rem)] top-24 left-0">
        <div className="space-y-2 flex-grow">
          {[
            { id: 'overview', label: 'Overview', icon: LayoutDashboard },
            { id: 'bookings', label: 'Bookings', icon: Calendar },
            { id: 'customers', label: 'Customers', icon: Users },
            { id: 'packages', label: 'Tour Packages', icon: Package },
            { id: 'analytics', label: 'Analytics', icon: BarChart3 },
            { id: 'settings', label: 'Settings', icon: Settings },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm",
                activeTab === item.id 
                  ? "bg-emerald-50 text-emerald-700 shadow-sm" 
                  : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="mt-auto p-4 bg-gray-50 rounded-2xl">
           <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Logged in as</p>
           <p className="text-sm font-bold truncate">{user.email}</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow lg:ml-72 p-8 lg:p-12">
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">
              {activeTab} <span className="text-emerald-600">Dashboard</span>
            </h1>
            <p className="text-gray-500 mt-1">Welcome back, Admin. Here's what's happening today.</p>
          </div>
          <button className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-900/10">
             <TrendingUp className="h-5 w-5" />
             Export Reports
          </button>
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-12">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-500">
                   <div className={cn(
                     "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                     stat.color === 'emerald' ? "bg-emerald-50 text-emerald-600" :
                     stat.color === 'blue' ? "bg-blue-50 text-blue-600" :
                     stat.color === 'purple' ? "bg-purple-50 text-purple-600" :
                     "bg-orange-50 text-orange-600"
                   )}>
                      <stat.icon className="h-7 w-7" />
                   </div>
                   <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
                   <h3 className="text-3xl font-bold mt-2">{stat.value}</h3>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-sm border border-gray-100">
                 <h4 className="text-xl font-bold mb-8">Booking Trends</h4>
                 <div className="h-[300px]">
                   <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={chartData}>
                       <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                       <XAxis dataKey="name" axisLine={false} tickLine={false} />
                       <YAxis axisLine={false} tickLine={false} />
                       <Tooltip cursor={{fill: '#f9fafb'}} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                       <Bar dataKey="bookings" fill="#10b981" radius={[8, 8, 0, 0]} />
                     </BarChart>
                   </ResponsiveContainer>
                 </div>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-sm border border-gray-100">
                 <div className="flex justify-between items-center mb-8">
                    <h4 className="text-xl font-bold">Recent Bookings</h4>
                    <button onClick={() => setActiveTab('bookings')} className="text-emerald-600 font-bold text-sm hover:underline flex items-center gap-1">
                      View All <ChevronRight className="h-4 w-4" />
                    </button>
                 </div>
                 <div className="space-y-6">
                    {bookings.slice(0, 4).map((booking) => (
                      <div key={booking.id} className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors border border-transparent hover:border-gray-100">
                         <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center font-bold">
                            {booking.name.charAt(0)}
                         </div>
                         <div className="flex-grow">
                            <p className="font-bold text-sm">{booking.name}</p>
                            <p className="text-xs text-gray-500">{booking.packageName}</p>
                         </div>
                         <span className={cn(
                           "text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full",
                           booking.status === 'confirmed' ? "bg-emerald-100 text-emerald-700" :
                           booking.status === 'cancelled' ? "bg-red-100 text-red-700" :
                           "bg-orange-100 text-orange-700"
                         )}>
                            {booking.status || 'pending'}
                         </span>
                      </div>
                    ))}
                    {bookings.length === 0 && <p className="text-center text-gray-400 py-10">No recent bookings found.</p>}
                 </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'bookings' && (
          <div className="bg-white rounded-[3rem] shadow-sm border border-gray-100 overflow-hidden">
             <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <h4 className="text-xl font-bold">Manage All Bookings</h4>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search bookings..." 
                    className="pl-12 pr-6 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-full md:w-80"
                  />
                  <Search className="h-5 w-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                </div>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    <tr>
                      <th className="px-8 py-4">Customer</th>
                      <th className="px-8 py-4">Package</th>
                      <th className="px-8 py-4">Date</th>
                      <th className="px-8 py-4">Travelers</th>
                      <th className="px-8 py-4">Status</th>
                      <th className="px-8 py-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {bookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-8 py-6">
                          <p className="font-bold text-gray-900">{booking.name}</p>
                          <p className="text-xs text-gray-500">{booking.email}</p>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-sm font-medium">{booking.packageName}</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-sm text-gray-600">{booking.date}</span>
                        </td>
                        <td className="px-8 py-6 text-center">
                          <span className="text-sm font-bold">{booking.travelers}</span>
                        </td>
                        <td className="px-8 py-6">
                          <span className={cn(
                            "text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block",
                            booking.status === 'confirmed' ? "bg-emerald-100 text-emerald-700" :
                            booking.status === 'cancelled' ? "bg-red-100 text-red-700" :
                            "bg-orange-100 text-orange-700"
                          )}>
                            {booking.status || 'pending'}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex gap-2">
                             <button 
                               onClick={() => updateStatus(booking.id, 'confirmed')}
                               className="p-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors"
                             >
                                <CheckCircle2 className="h-5 w-5" />
                             </button>
                             <button 
                               onClick={() => updateStatus(booking.id, 'cancelled')}
                               className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                             >
                                <XCircle className="h-5 w-5" />
                             </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
          </div>
        )}

        {['customers', 'packages', 'analytics', 'settings'].includes(activeTab) && (
            <div className="py-20 text-center bg-white rounded-[3rem] border border-dashed border-gray-200">
                <div className="w-20 h-20 bg-gray-50 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Clock className="h-10 w-10 text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-500">Coming Soon</h3>
                <p className="text-gray-400 mt-2">We are hard at work building the {activeTab} section.</p>
            </div>
        )}
      </main>
    </div>
  );
}
