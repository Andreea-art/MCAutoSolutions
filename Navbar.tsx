import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'General', path: '/general' },
  { label: 'Auto Parts', path: '/auto-parts' },
  { label: 'Tyre', path: '/tyre' },
  { label: 'Interior', path: '/interior' },
  { label: 'Accessories', path: '/accessories' },
  { label: 'Brands', path: '/brands' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '72px', background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(8px)', zIndex: 50, borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px' }}>
      {/* Left */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button onClick={() => setMobileOpen(!mobileOpen)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px', padding: '4px' }} aria-label="Menu">
          <span style={{ width: '20px', height: '2px', background: '#1A1A1A', display: 'block' }} />
          <span style={{ width: '20px', height: '2px', background: '#1A1A1A', display: 'block' }} />
          <span style={{ width: '20px', height: '2px', background: '#1A1A1A', display: 'block' }} />
        </button>
        <Link to="/" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '18px', color: '#1A1A1A', textDecoration: 'none' }}>MC Auto Solutions</Link>
      </div>

      {/* Center links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }} className="hidden md:flex">
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path} style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: isActive(link.path) ? 700 : 500, fontSize: '13px', color: isActive(link.path) ? '#FF6B2B' : '#1A1A1A', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#FF6B2B'; }} onMouseLeave={(e) => { if (!isActive(link.path)) (e.target as HTMLElement).style.color = '#1A1A1A'; }}>{link.label}</Link>
        ))}
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Link to="/wishlist" style={{ fontSize: '20px', textDecoration: 'none', color: '#1A1A1A', padding: '8px' }} title="Wishlist">&#9825;</Link>
        <Link to="/cart" style={{ fontSize: '20px', textDecoration: 'none', color: '#1A1A1A', padding: '8px', position: 'relative' }} title="Cart">
          &#128722;
          <span style={{ position: 'absolute', top: '2px', right: '2px', width: '16px', height: '16px', background: '#FF6B2B', color: '#fff', fontSize: '10px', fontWeight: 700, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, Helvetica, sans-serif' }}>3</span>
        </Link>
        <Link to="/contact" className="hidden md:block" style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FFFFFF', background: '#FF6B2B', borderRadius: '9999px', padding: '10px 22px', textDecoration: 'none', transition: 'background 0.3s' }} onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#E55A1F'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.background = '#FF6B2B'; }}>Contact</Link>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ position: 'absolute', top: '72px', left: 0, right: 0, background: 'rgba(255, 255, 255, 0.98)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', borderBottom: '1px solid #eee' }} className="md:hidden">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} onClick={() => setMobileOpen(false)} style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 600, fontSize: '14px', color: '#1A1A1A', textDecoration: 'none' }}>{link.label}</Link>
          ))}
          <div style={{ display: 'flex', gap: '12px', marginTop: '8px', paddingTop: '12px', borderTop: '1px solid #eee' }}>
            <Link to="/wishlist" onClick={() => setMobileOpen(false)} style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px', color: '#1A1A1A', textDecoration: 'none' }}>&#9825; Wishlist</Link>
            <Link to="/cart" onClick={() => setMobileOpen(false)} style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '14px', color: '#1A1A1A', textDecoration: 'none' }}>&#128722; Cart (3)</Link>
          </div>
          <Link to="/contact" onClick={() => setMobileOpen(false)} style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 600, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#FFFFFF', background: '#FF6B2B', borderRadius: '9999px', padding: '10px 24px', textDecoration: 'none', textAlign: 'center', marginTop: '8px' }}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
