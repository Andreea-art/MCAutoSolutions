import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={{ background: '#1A1A1A', padding: '60px 0 20px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '16px', color: '#FFFFFF', marginBottom: '10px' }}>MC Auto Solutions</div>
          <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>Quality auto parts for every vehicle. Trusted by 50,000+ UK garages.</p>
          <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>0800 123 4567</span>
            <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>info@mcautosolutions.co.uk</span>
          </div>
        </div>

        {/* Shop */}
        <div>
          <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Shop</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[{ l: 'General', p: '/general' }, { l: 'Auto Parts', p: '/auto-parts' }, { l: 'Tyre', p: '/tyre' }, { l: 'Interior', p: '/interior' }, { l: 'Accessories', p: '/accessories' }, { l: 'Brands', p: '/brands' }].map((i) => (
              <Link key={i.p} to={i.p} style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; }}>{i.l}</Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[{ l: 'About', p: '/about' }, { l: 'Services', p: '/services' }, { l: 'Testimonials', p: '/testimonials' }, { l: 'Blog', p: '/blog' }, { l: 'Contact', p: '/contact' }].map((i) => (
              <Link key={i.p} to={i.p} style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; }}>{i.l}</Link>
            ))}
          </div>
        </div>

        {/* Support */}
        <div>
          <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Support</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[{ l: 'Cart', p: '/cart' }, { l: 'Wishlist', p: '/wishlist' }, { l: 'Terms & Conditions', p: '/terms' }, { l: 'Privacy Policy', p: '/privacy' }, { l: 'Returns', p: '/returns' }].map((i) => (
              <Link key={i.p} to={i.p} style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.8)'; }} onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.4)'; }}>{i.l}</Link>
            ))}
          </div>
        </div>

        {/* Payment */}
        <div>
          <div style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 700, fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>We Accept</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['Visa', 'Mastercard', 'PayPal', 'Apple Pay'].map((p) => (
              <span key={p} style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.5)', padding: '4px 10px', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '4px' }}>{p}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ maxWidth: '1280px', margin: '40px auto 0', padding: '20px 24px 0', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>2025 MC Auto Solutions. All rights reserved.</span>
        <span style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>Registered in England &amp; Wales No. 12345678 | VAT GB123456789</span>
      </div>
    </footer>
  );
}
