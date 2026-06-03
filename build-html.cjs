const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');

// Ensure dist exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy assets from public
const publicDir = path.resolve(__dirname, '../public');
if (fs.existsSync(publicDir)) {
  const copyRecursive = (src, dest) => {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        copyRecursive(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    }
  };
  copyRecursive(publicDir, distDir);
}

// Common header/footer
const head = (title) => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="MC Auto Solutions - Quality auto parts for every vehicle. Trusted by 50,000+ UK garages.">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, Helvetica, sans-serif; color: #1A1A1A; background: #FFFFFF; -webkit-font-smoothing: antialiased; }
    a { text-decoration: none; color: inherit; }
    img { max-width: 100%; display: block; }
    .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
    .btn-primary { display: inline-block; background: #FF6B2B; color: #fff; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.06em; padding: 12px 28px; border-radius: 4px; border: none; cursor: pointer; transition: background 0.3s; }
    .btn-primary:hover { background: #E55A1F; }
    .btn-dark { display: inline-block; background: #1A1A1A; color: #fff; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; padding: 14px 36px; border: none; cursor: pointer; transition: background 0.3s; }
    .btn-dark:hover { background: #FF6B2B; }
    .section-title { font-family: Arial, Helvetica, sans-serif; font-weight: 600; font-size: 18px; text-align: center; margin-bottom: 32px; letter-spacing: 0.08em; text-transform: uppercase; }
    .price { font-weight: 700; font-size: 16px; color: #FF6B2B; }
    .old-price { font-size: 14px; color: #aaa; text-decoration: line-through; }
    .tag { display: inline-block; background: #1A1A1A; color: #fff; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 2px; }
    .tag-red { background: #FF6B2B; }
    @media (max-width: 768px) { .grid-2 { grid-template-columns: 1fr !important; } .grid-4 { grid-template-columns: repeat(2, 1fr) !important; } }
  </style>
</head>
<body>`;

const nav = (activePage) => {
  const links = [
    { href: 'general.html', label: 'General' },
    { href: 'auto-parts.html', label: 'Auto Parts' },
    { href: 'tyre.html', label: 'Tyre' },
    { href: 'interior.html', label: 'Interior' },
    { href: 'accessories.html', label: 'Accessories' },
    { href: 'brands.html', label: 'Brands' },
    { href: 'blog.html', label: 'Blog' },
    { href: 'about.html', label: 'About' },
  ];
  return `<nav style="position: fixed; top: 0; left: 0; right: 0; height: 72px; background: rgba(255,255,255,0.98); backdrop-filter: blur(8px); z-index: 50; border-bottom: 1px solid #eee; display: flex; align-items: center; justify-content: space-between; padding: 0 24px;">
  <div style="display: flex; align-items: center; gap: 16px;">
    <a href="index.html" style="font-weight: 700; font-size: 18px; color: #1A1A1A;">MC Auto Solutions</a>
  </div>
  <div style="display: flex; align-items: center; gap: 24px;" class="desktop-nav">
    ${links.map(l => `<a href="${l.href}" style="font-weight: ${activePage === l.href ? '700' : '500'}; font-size: 13px; color: ${activePage === l.href ? '#FF6B2B' : '#1A1A1A'}; transition: color 0.2s;" onmouseenter="this.style.color='#FF6B2B'" onmouseleave="this.style.color='${activePage === l.href ? '#FF6B2B' : '#1A1A1A'}'">${l.label}</a>`).join('')}
  </div>
  <div style="display: flex; align-items: center; gap: 12px;">
    <a href="wishlist.html" style="font-size: 20px; color: #1A1A1A; padding: 8px;" title="Wishlist">&#9825;</a>
    <a href="cart.html" style="font-size: 20px; color: #1A1A1A; padding: 8px; position: relative;" title="Cart">&#128722;<span style="position:absolute;top:2px;right:2px;width:16px;height:16px;background:#FF6B2B;color:#fff;font-size:10px;font-weight:700;border-radius:50%;display:flex;align-items:center;justify-content:center;">3</span></a>
    <a href="contact.html" class="desktop-nav" style="font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #FFFFFF; background: #FF6B2B; border-radius: 9999px; padding: 10px 22px; transition: background 0.3s;" onmouseenter="this.style.background='#E55A1F'" onmouseleave="this.style.background='#FF6B2B'">Contact</a>
  </div>
  <style>@media (max-width: 768px) { .desktop-nav { display: none !important; } }</style>
</nav>`;
};

const footer = `<!-- FOOTER -->
<footer style="background: #1A1A1A; padding: 60px 0 20px;">
  <div class="container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 32px;">
    <div>
      <div style="font-weight: 700; font-size: 16px; color: #fff; margin-bottom: 10px;">MC Auto Solutions</div>
      <p style="font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.6;">Quality auto parts for every vehicle. Trusted by 50,000+ UK garages.</p>
    </div>
    <div>
      <div style="font-weight: 700; font-size: 13px; color: rgba(255,255,255,0.6); margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Shop</div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <a href="general.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">General</a>
        <a href="auto-parts.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Auto Parts</a>
        <a href="tyre.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Tyre</a>
        <a href="interior.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Interior</a>
        <a href="accessories.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Accessories</a>
        <a href="brands.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Brands</a>
      </div>
    </div>
    <div>
      <div style="font-weight: 700; font-size: 13px; color: rgba(255,255,255,0.6); margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Company</div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <a href="about.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">About</a>
        <a href="services.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Services</a>
        <a href="testimonials.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Testimonials</a>
        <a href="blog.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Blog</a>
        <a href="contact.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Contact</a>
      </div>
    </div>
    <div>
      <div style="font-weight: 700; font-size: 13px; color: rgba(255,255,255,0.6); margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Support</div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <a href="cart.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Cart</a>
        <a href="wishlist.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Wishlist</a>
        <a href="terms.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Terms</a>
        <a href="privacy.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Privacy</a>
        <a href="returns.html" style="font-size: 13px; color: rgba(255,255,255,0.4); transition: color 0.2s;" onmouseenter="this.style.color='rgba(255,255,255,0.8)'" onmouseleave="this.style.color='rgba(255,255,255,0.4)'">Returns</a>
      </div>
    </div>
    <div>
      <div style="font-weight: 700; font-size: 13px; color: rgba(255,255,255,0.6); margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.05em;">We Accept</div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <span style="font-size: 11px; color: rgba(255,255,255,0.5); padding: 4px 10px; border: 1px solid rgba(255,255,255,0.15); border-radius: 4px;">Visa</span>
        <span style="font-size: 11px; color: rgba(255,255,255,0.5); padding: 4px 10px; border: 1px solid rgba(255,255,255,0.15); border-radius: 4px;">Mastercard</span>
        <span style="font-size: 11px; color: rgba(255,255,255,0.5); padding: 4px 10px; border: 1px solid rgba(255,255,255,0.15); border-radius: 4px;">PayPal</span>
        <span style="font-size: 11px; color: rgba(255,255,255,0.5); padding: 4px 10px; border: 1px solid rgba(255,255,255,0.15); border-radius: 4px;">Apple Pay</span>
      </div>
    </div>
  </div>
  <div class="container" style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
    <span style="font-size: 12px; color: rgba(255,255,255,0.3);">2025 MC Auto Solutions. All rights reserved.</span>
    <span style="font-size: 12px; color: rgba(255,255,255,0.3);">Registered in England &amp; Wales | VAT GB123456789</span>
  </div>
</footer>
</body>
</html>`;

// Product card component
const productCard = (name, price, oldPrice, image, tag) => `
<div style="background: #FFFFFF; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06); transition: box-shadow 0.3s; cursor: pointer;" onmouseenter="this.style.boxShadow='0 8px 24px rgba(0,0,0,0.12)'" onmouseleave="this.style.boxShadow='0 2px 8px rgba(0,0,0,0.06)'">
  <div style="position: relative; aspect-ratio: 1; background: #FAFAFA; padding: 16px;">
    <img src="${image}" alt="${name}" style="width: 100%; height: 100%; object-fit: contain;">
    ${tag ? `<span class="tag ${tag.startsWith('-') ? 'tag-red' : ''}" style="position: absolute; top: 12px; left: 12px;">${tag}</span>` : ''}
  </div>
  <div style="padding: 14px;">
    <div style="font-weight: 600; font-size: 15px; color: #1A1A1A;">${name}</div>
    <div style="margin-top: 8px; display: flex; align-items: center; gap: 10px;">
      <span class="price">${price}</span>
      ${oldPrice ? `<span class="old-price">${oldPrice}</span>` : ''}
    </div>
  </div>
</div>`;

// Category hero
const categoryHero = (title, subtitle, image) => `
<div style="height: 45vh; min-height: 350px; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; margin-top: 72px;">
  <img src="${image}" alt="${title}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;">
  <div style="position: absolute; inset: 0; background: rgba(0,0,0,0.5);"></div>
  <div style="position: relative; z-index: 2; text-align: center; padding: 0 24px;">
    <h1 style="font-weight: 700; font-size: clamp(32px, 5vw, 56px); color: #FFFFFF; line-height: 1.1; letter-spacing: -0.02em;">${title}</h1>
    <p style="font-size: 16px; color: rgba(255,255,255,0.8); margin-top: 12px; max-width: 500px; margin: 12px auto 0;">${subtitle}</p>
  </div>
</div>`;

// Generate HOME page
const homeHTML = head('MC Auto Solutions - Quality Auto Parts') + nav('index.html') + `
<!-- HERO -->
<section style="position: relative; min-height: calc(100vh - 72px); display: flex; align-items: center; overflow: hidden; margin-top: 72px;">
  <div style="position: absolute; inset: 0; z-index: 0;">
    <img src="./images/hero-car.png" alt="Transparent car showing internal auto parts" style="width: 100%; height: 100%; object-fit: cover; object-position: center right;">
    <div style="position: absolute; inset: 0; background: linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.3) 65%, transparent 100%);"></div>
  </div>
  <div style="position: relative; z-index: 2; max-width: 1280px; margin: 0 auto; padding: 80px 24px; width: 100%;">
    <h1 style="font-weight: 700; font-size: clamp(30px, 4.5vw, 52px); color: #1A1A1A; line-height: 1.15; max-width: 520px;">MC Auto Parts Solutions</h1>
    <div style="width: 60px; height: 3px; background: #FF6B2B; margin: 18px 0;"></div>
    <p style="font-size: 16px; color: #555; line-height: 1.6; max-width: 420px;">Quality Parts, Every Time. Trusted by 50,000+ UK garages and mechanics.</p>
    <div style="margin-top: 32px; max-width: 480px; display: flex;">
      <input type="text" placeholder="Enter Reg Number (e.g. AB12 CDE)" style="flex: 1; height: 48px; padding: 0 16px; border: 1px solid #ddd; border-right: none; border-radius: 4px 0 0 4px; font-family: Arial, sans-serif; font-size: 14px; outline: none;">
      <a href="auto-parts.html" class="btn-primary" style="border-radius: 0 4px 4px 0; display: flex; align-items: center;">Find Parts</a>
    </div>
    <a href="auto-parts.html" class="btn-dark" style="margin-top: 20px;">READ MORE</a>
  </div>
</section>

<!-- HOT CATEGORIES -->
<section style="background: #FFFFFF; padding: 60px 0;">
  <div class="container">
    <div class="section-title">HOT CATEGORIES</div>
    <div class="grid-4" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px;">
      ${[
        {name:'GENERAL',img:'./images/cat-general.jpg',href:'general.html'},
        {name:'AUTO PARTS',img:'./images/cat-autoparts.jpg',href:'auto-parts.html'},
        {name:'TYRE',img:'./images/cat-tyre.jpg',href:'tyre.html'},
        {name:'INTERIOR',img:'./images/cat-interior.jpg',href:'interior.html'},
        {name:'ACCESSORIES',img:'./images/cat-accessories.jpg',href:'accessories.html'},
      ].map(c => `<a href="${c.href}" style="display: block; text-decoration: none; overflow: hidden; border-radius: 8px; position: relative; aspect-ratio: 1;">
        <img src="${c.img}" alt="${c.name}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s;" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'">
        <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 14px; background: linear-gradient(transparent, rgba(0,0,0,0.65));">
          <span style="font-weight: 700; font-size: 15px; color: #FFFFFF; letter-spacing: 0.04em;">${c.name}</span>
        </div>
      </a>`).join('')}
    </div>
  </div>
</section>

<!-- FEATURED PRODUCTS -->
<section style="background: #F7F7F7; padding: 60px 0;">
  <div class="container">
    <div class="section-title">FEATURED PRODUCTS</div>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px;">
      ${productCard('Brake Pad Set', '£34.99', '£44.99', './images/prod-brake.jpg', '-22%')}
      ${productCard('Spark Plug Platinum', '£12.49', null, './images/prod-spark.jpg', 'New')}
      ${productCard('Air Filter Premium', '£18.99', '£24.99', './images/prod-air.jpg', '-24%')}
      ${productCard('Oil Filter Pro', '£9.99', null, './images/prod-oil.jpg', 'Sale')}
    </div>
  </div>
</section>

<!-- BEST SELLERS -->
<section style="background: #FFFFFF; padding: 60px 0;">
  <div class="container">
    <div class="section-title">BEST SELLERS</div>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px;">
      ${productCard('Timing Belt Kit', '£79.99', null, './images/prod-timing.jpg', 'Best Seller')}
      ${productCard('Clutch Kit', '£129.99', null, './images/prod-clutch.jpg', null)}
      ${productCard('Water Pump', '£54.99', null, './images/prod-waterpump.jpg', 'Popular')}
      ${productCard('Alternator', '£149.99', '£189.99', './images/prod-alternator.jpg', '-21%')}
    </div>
  </div>
</section>

<!-- SHOP BY BRAND -->
<section style="background: #F7F7F7; padding: 60px 0;">
  <div class="container">
    <div class="section-title">SHOP BY BRAND</div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 16px;">
      ${[{n:'BMW',i:'./images/brand-bmw.jpg'},{n:'Audi',i:'./images/brand-audi.jpg'},{n:'Mercedes',i:'./images/brand-mercedes.jpg'},{n:'Volkswagen',i:'./images/brand-vw.jpg'},{n:'Ford',i:'./images/brand-ford.jpg'}].map(b => `
      <a href="brands.html" style="display: block; text-decoration: none; background: #FFFFFF; border-radius: 8px; overflow: hidden; transition: box-shadow 0.3s, transform 0.3s;" onmouseenter="this.style.boxShadow='0 6px 20px rgba(0,0,0,0.1)';this.style.transform='translateY(-4px)'" onmouseleave="this.style.boxShadow='none';this.style.transform='translateY(0)'">
        <div style="aspect-ratio: 1; overflow: hidden;"><img src="${b.i}" alt="${b.n}" style="width: 100%; height: 100%; object-fit: cover;"></div>
        <div style="padding: 12px; text-align: center; font-weight: 600; font-size: 14px; color: #1A1A1A;">${b.n}</div>
      </a>`).join('')}
    </div>
  </div>
</section>

<!-- WHY CHOOSE US -->
<section style="background: #F7F7F7; padding: 60px 0;">
  <div class="container">
    <div class="section-title">WHY CHOOSE US</div>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
      ${[{icon:'&#128666;',t:'Free Next-Day Delivery',d:'On orders over £50 across the UK'},{icon:'&#128295;',t:'Expert Technical Support',d:'Certified mechanics to help you'},{icon:'&#128260;',t:'30-Day Easy Returns',d:'No hassle returns on all parts'},{icon:'&#128274;',t:'Secure Payment',d:'256-bit SSL encryption'},{icon:'&#128176;',t:'Price Match Guarantee',d:'We match any UK competitor price'},{icon:'&#11088;',t:'Genuine & OEM Parts',d:'Only quality-tested components'}].map(r => `
      <div style="display: flex; align-items: flex-start; gap: 16px; padding: 24px; background: #FFFFFF; border-radius: 8px;">
        <div style="font-size: 32px; flex-shrink: 0;">${r.icon}</div>
        <div>
          <div style="font-weight: 700; font-size: 15px; color: #1A1A1A;">${r.t}</div>
          <div style="font-size: 14px; color: #888; margin-top: 4px;">${r.d}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- NEWSLETTER -->
<section style="background: #FF6B2B; padding: 60px 0; text-align: center;">
  <div style="max-width: 600px; margin: 0 auto; padding: 0 24px;">
    <h2 style="font-weight: 700; font-size: 26px; color: #FFFFFF;">STAY IN THE LOOP</h2>
    <p style="font-size: 15px; color: rgba(255,255,255,0.85); margin-top: 10px;">Get exclusive deals, new product alerts and maintenance tips.</p>
    <form onsubmit="event.preventDefault(); alert('Subscribed!');" style="margin-top: 24px; display: flex; gap: 0; justify-content: center; flex-wrap: wrap;">
      <input type="email" placeholder="Enter your email" required style="width: 300px; max-width: 100%; height: 48px; padding: 0 16px; border: none; border-radius: 4px 0 0 4px; font-family: Arial, sans-serif; font-size: 14px; outline: none;">
      <button type="submit" style="height: 48px; padding: 0 24px; background: #1A1A1A; color: #FFFFFF; font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; border: none; border-radius: 0 4px 4px 0; cursor: pointer;">SUBSCRIBE</button>
    </form>
  </div>
</section>` + footer;

fs.writeFileSync(path.join(distDir, 'index.html'), homeHTML);
console.log('Generated: index.html');

// Generate category pages
const categories = [
  { file: 'general.html', title: 'GENERAL', subtitle: 'Essential maintenance supplies for every vehicle.', hero: './images/prod-battery.jpg', prods: [
    {n:'Engine Oil 5W-30',p:'£24.99',op:null,i:'./images/prod-oil.jpg',t:null},{n:'Car Battery 12V',p:'£89.99',op:'£109.99',i:'./images/prod-battery.jpg',t:'-18%'},{n:'Brake Disc & Caliper',p:'£64.99',op:null,i:'./images/prod-disc.jpg',t:'New'},{n:'Coolant 5L',p:'£14.99',op:null,i:'./images/prod-waterpump.jpg',t:null},{n:'Brake Fluid DOT4',p:'£9.99',op:null,i:'./images/prod-brake.jpg',t:null},{n:'Transmission Fluid',p:'£29.99',op:null,i:'./images/prod-oil.jpg',t:null},{n:'Power Steering Fluid',p:'£11.99',op:null,i:'./images/prod-oil.jpg',t:null},{n:'Oil Filter Standard',p:'£7.99',op:null,i:'./images/prod-oil.jpg',t:null}
  ]},
  { file: 'auto-parts.html', title: 'AUTO PARTS', subtitle: 'High-quality engine components, braking systems, and drivetrain parts.', hero: './images/prod-brake.jpg', prods: [
    {n:'Brake Pad Set',p:'£34.99',op:'£44.99',i:'./images/prod-brake.jpg',t:'-22%'},{n:'Spark Plug Platinum',p:'£12.49',op:null,i:'./images/prod-spark.jpg',t:'New'},{n:'Air Filter Premium',p:'£18.99',op:'£24.99',i:'./images/prod-air.jpg',t:'-24%'},{n:'Oil Filter Pro',p:'£9.99',op:null,i:'./images/prod-oil.jpg',t:'Sale'},{n:'Timing Belt Kit',p:'£79.99',op:null,i:'./images/prod-timing.jpg',t:'Best Seller'},{n:'Clutch Kit',p:'£129.99',op:null,i:'./images/prod-clutch.jpg',t:null},{n:'Water Pump',p:'£54.99',op:null,i:'./images/prod-waterpump.jpg',t:'Popular'},{n:'Alternator',p:'£149.99',op:'£189.99',i:'./images/prod-alternator.jpg',t:'-21%'}
  ]},
  { file: 'tyre.html', title: 'TYRE', subtitle: 'Premium tyres for all seasons and vehicle types.', hero: './images/prod-tyre1.jpg', prods: [
    {n:'All-Season Tyre 205/55R16',p:'£59.99',op:'£74.99',i:'./images/prod-tyre1.jpg',t:'-20%'},{n:'Performance Tyre 225/45R17',p:'£89.99',op:null,i:'./images/prod-tyre1.jpg',t:'New'},{n:'Winter Tyre 195/65R15',p:'£54.99',op:null,i:'./images/prod-tyre1.jpg',t:null},{n:'SUV Tyre 255/55R18',p:'£109.99',op:'£129.99',i:'./images/prod-tyre1.jpg',t:'-15%'},{n:'Run Flat Tyre 225/50R17',p:'£124.99',op:null,i:'./images/prod-tyre1.jpg',t:null},{n:'Eco Tyre 185/65R15',p:'£44.99',op:null,i:'./images/prod-tyre1.jpg',t:'Eco'},{n:'Tyre Pressure Sensor',p:'£24.99',op:null,i:'./images/prod-tyre1.jpg',t:null},{n:'Tyre Repair Kit',p:'£14.99',op:null,i:'./images/prod-tyre1.jpg',t:null}
  ]},
];

categories.forEach(cat => {
  const html = head(`${cat.title} - MC Auto Solutions`) + nav(cat.file) + categoryHero(cat.title, cat.subtitle, cat.hero) + `
<section style="background: #FFFFFF; padding: 80px 0;">
  <div class="container">
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px;">
      ${cat.prods.map(pr => productCard(pr.n, pr.p, pr.op, pr.i, pr.t)).join('')}
    </div>
  </div>
</section>` + footer;
  fs.writeFileSync(path.join(distDir, cat.file), html);
  console.log(`Generated: ${cat.file}`);
});

console.log('\nAll HTML pages generated!');
