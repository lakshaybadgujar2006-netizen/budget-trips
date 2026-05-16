/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import Destinations from './pages/Destinations';
import Booking from './pages/Booking';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="packages" element={<Packages />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="booking" element={<Booking />} />
            <Route path="contact" element={<Contact />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="blog" element={<Blog />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="auth" element={<Auth />} />
            <Route path="profile" element={<Profile />} />
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
