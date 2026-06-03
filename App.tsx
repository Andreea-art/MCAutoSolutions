import { Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import General from '@/pages/General';
import AutoParts from '@/pages/AutoParts';
import Tyre from '@/pages/Tyre';
import Interior from '@/pages/Interior';
import Accessories from '@/pages/Accessories';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Testimonials from '@/pages/Testimonials';
import Contact from '@/pages/Contact';
import Brands from '@/pages/Brands';
import ProductDetail from '@/pages/ProductDetail';
import Cart from '@/pages/Cart';
import Wishlist from '@/pages/Wishlist';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Terms from '@/pages/Terms';
import Privacy from '@/pages/Privacy';
import Returns from '@/pages/Returns';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/general" element={<General />} />
          <Route path="/auto-parts" element={<AutoParts />} />
          <Route path="/tyre" element={<Tyre />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/brand/:name" element={<Brands />} />
          <Route path="/brand/:name/:model" element={<AutoParts />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
