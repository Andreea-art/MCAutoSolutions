import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProductItem {
  name: string;
  price: string;
  image: string;
  tag?: string | null;
}

interface CategoryLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  products: ProductItem[];
}

export default function CategoryLayout({ title, subtitle, heroImage, products }: CategoryLayoutProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.product-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          },
        }
      );
    }
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} style={{ position: 'relative', zIndex: 1, background: '#FFFFFF' }}>
      {/* Category Hero */}
      <div
        style={{
          height: '45vh',
          minHeight: '350px',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '72px',
        }}
      >
        <img
          src={heroImage}
          alt={title}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px' }}>
          <h1
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(32px, 5vw, 56px)',
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
              fontSize: '16px',
              color: 'rgba(255,255,255,0.8)',
              marginTop: '12px',
              maxWidth: '500px',
              margin: '12px auto 0',
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div
        style={{
          background: '#FFFFFF',
          padding: '80px 0',
        }}
      >
        <div
          ref={cardsRef}
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '20px',
          }}
        >
          {products.map((prod) => (
            <div
              key={prod.name}
              className="product-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                transition: 'box-shadow 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '1', background: '#FAFAFA', padding: '20px' }}>
                <img
                  src={prod.image}
                  alt={prod.name}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
                {prod.tag && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      background: '#1A1A1A',
                      color: '#FFFFFF',
                      fontFamily: "Arial, sans-serif",
                      fontSize: '11px',
                      fontWeight: 500,
                      padding: '4px 12px',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {prod.tag}
                  </span>
                )}
              </div>
              <div style={{ padding: '16px' }}>
                <div
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    color: '#1A1A1A',
                  }}
                >
                  {prod.name}
                </div>
                <div
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 600,
                    fontSize: '16px',
                    color: '#FF6B2B',
                    marginTop: '8px',
                  }}
                >
                  {prod.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
