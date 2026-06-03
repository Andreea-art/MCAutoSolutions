const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '../github-pages');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Copy images
const imgSrc = path.resolve(__dirname, '../public/images');
const imgDest = path.join(outDir, 'images');
if (!fs.existsSync(imgDest)) fs.mkdirSync(imgDest, { recursive: true });
for (const f of fs.readdirSync(imgSrc)) {
  fs.copyFileSync(path.join(imgSrc, f), path.join(imgDest, f));
}

const pages = {
  'index.html': { title: 'MC Auto Solutions - Quality Auto Parts', nav: 'index', isHome: true },
  'general.html': { title: 'General - MC Auto Solutions', nav: 'general', isHome: false },
  'auto-parts.html': { title: 'Auto Parts - MC Auto Solutions', nav: 'auto-parts', isHome: false },
  'tyre.html': { title: 'Tyre - MC Auto Solutions', nav: 'tyre', isHome: false },
  'interior.html': { title: 'Interior - MC Auto Solutions', nav: 'interior', isHome: false },
  'accessories.html': { title: 'Accessories - MC Auto Solutions', nav: 'accessories', isHome: false },
  'brands.html': { title: 'Brands - MC Auto Solutions', nav: 'brands', isHome: false },
  'about.html': { title: 'About - MC Auto Solutions', nav: 'about', isHome: false },
  'services.html': { title: 'Services - MC Auto Solutions', nav: 'services', isHome: false },
  'testimonials.html': { title: 'Testimonials - MC Auto Solutions', nav: 'testimonials', isHome: false },
  'contact.html': { title: 'Contact - MC Auto Solutions', nav: 'contact', isHome: false },
  'blog.html': { title: 'Blog - MC Auto Solutions', nav: 'blog', isHome: false },
  'cart.html': { title: 'Cart - MC Auto Solutions', nav: 'cart', isHome: false },
  'wishlist.html': { title: 'Wishlist - MC Auto Solutions', nav: 'wishlist', isHome: false },
  'terms.html': { title: 'Terms - MC Auto Solutions', nav: 'terms', isHome: false },
  'privacy.html': { title: 'Privacy - MC Auto Solutions', nav: 'privacy', isHome: false },
  'returns.html': { title: 'Returns - MC Auto Solutions', nav: 'returns', isHome: false },
};

const css = `<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Arial,Helvetica,sans-serif;color:#1A1A1A;background:#FFFFFF;line-height:1.6}
a{text-decoration:none;color:inherit}
img{max-width:100%;display:block}
.container{max-width:1280px;margin:0 auto;padding:0 24px}
.btn-primary{display:inline-block;background:#FF6B2B;color:#fff;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.06em;padding:12px 28px;border-radius:4px;border:none;cursor:pointer;transition:background .3s}
.btn-primary:hover{background:#E55A1F}
.btn-dark{display:inline-block;background:#1A1A1A;color:#fff;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.1em;padding:14px 36px;border:none;cursor:pointer;transition:background .3s}
.btn-dark:hover{background:#FF6B2B}
.section-title{font-weight:600;font-size:18px;text-align:center;margin-bottom:32px;letter-spacing:.08em;text-transform:uppercase}
.price{font-weight:700;font-size:16px;color:#FF6B2B}
.old-price{font-size:14px;color:#aaa;text-decoration:line-through}
.tag{display:inline-block;background:#1A1A1A;color:#fff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:2px}
.tag-red{background:#FF6B2B}
.nav-link{transition:color .2s}
.nav-link:hover{color:#FF6B2B}
.card{transition:box-shadow .3s}
.card:hover{box-shadow:0 8px 24px rgba(0,0,0,.12)!important}
input,select,textarea{font-family:Arial,Helvetica,sans-serif}
@media(max-width:768px){.grid-2{grid-template-columns:1fr!important}.grid-4{grid-template-columns:repeat(2,1fr)!important}.hide-mob{display:none!important}}
</style>`;

function nav(active) {
  const links = [
    {h:'general.html',l:'General'},{h:'auto-parts.html',l:'Auto Parts'},{h:'tyre.html',l:'Tyre'},
    {h:'interior.html',l:'Interior'},{h:'accessories.html',l:'Accessories'},{h:'brands.html',l:'Brands'},
    {h:'blog.html',l:'Blog'},{h:'about.html',l:'About'},
  ];
  return `<nav style="position:fixed;top:0;left:0;right:0;height:72px;background:rgba(255,255,255,.98);backdrop-filter:blur(8px);z-index:50;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between;padding:0 24px;">
  <a href="index.html" style="font-weight:700;font-size:18px;color:#1A1A1A;">MC Auto Solutions</a>
  <div class="hide-mob" style="display:flex;align-items:center;gap:24px;">
    ${links.map(l=>`<a href="${l.h}" class="nav-link" style="font-weight:${active===l.h?'700':'500'};font-size:13px;color:${active===l.h?'#FF6B2B':'#1A1A1A'}">${l.l}</a>`).join('')}
  </div>
  <div style="display:flex;align-items:center;gap:12px;">
    <a href="wishlist.html" style="font-size:20px;padding:8px;">&#9825;</a>
    <a href="cart.html" style="font-size:20px;padding:8px;position:relative;">&#128722;<span style="position:absolute;top:2px;right:2px;width:16px;height:16px;background:#FF6B2B;color:#fff;font-size:10px;font-weight:700;border-radius:50%;display:flex;align-items:center;justify-content:center;">3</span></a>
    <a href="contact.html" class="hide-mob btn-primary" style="padding:10px 22px;font-size:12px;border-radius:9999px;letter-spacing:.08em;">Contact</a>
  </div>
</nav>`;
}

const footer = `<footer style="background:#1A1A1A;padding:60px 0 20px;margin-top:auto;">
<div class="container" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:32px;">
<div><div style="font-weight:700;font-size:16px;color:#fff;margin-bottom:10px;">MC Auto Solutions</div><p style="font-size:13px;color:rgba(255,255,255,.4);line-height:1.6;">Quality auto parts for every vehicle. Trusted by 50,000+ UK garages.</p></div>
<div><div style="font-weight:700;font-size:13px;color:rgba(255,255,255,.6);margin-bottom:14px;text-transform:uppercase;letter-spacing:.05em;">Shop</div><div style="display:flex;flex-direction:column;gap:8px;"><a href="general.html" style="font-size:13px;color:rgba(255,255,255,.4);">General</a><a href="auto-parts.html" style="font-size:13px;color:rgba(255,255,255,.4);">Auto Parts</a><a href="tyre.html" style="font-size:13px;color:rgba(255,255,255,.4);">Tyre</a><a href="interior.html" style="font-size:13px;color:rgba(255,255,255,.4);">Interior</a><a href="accessories.html" style="font-size:13px;color:rgba(255,255,255,.4);">Accessories</a><a href="brands.html" style="font-size:13px;color:rgba(255,255,255,.4);">Brands</a></div></div>
<div><div style="font-weight:700;font-size:13px;color:rgba(255,255,255,.6);margin-bottom:14px;text-transform:uppercase;letter-spacing:.05em;">Company</div><div style="display:flex;flex-direction:column;gap:8px;"><a href="about.html" style="font-size:13px;color:rgba(255,255,255,.4);">About</a><a href="services.html" style="font-size:13px;color:rgba(255,255,255,.4);">Services</a><a href="testimonials.html" style="font-size:13px;color:rgba(255,255,255,.4);">Testimonials</a><a href="blog.html" style="font-size:13px;color:rgba(255,255,255,.4);">Blog</a><a href="contact.html" style="font-size:13px;color:rgba(255,255,255,.4);">Contact</a></div></div>
<div><div style="font-weight:700;font-size:13px;color:rgba(255,255,255,.6);margin-bottom:14px;text-transform:uppercase;letter-spacing:.05em;">Support</div><div style="display:flex;flex-direction:column;gap:8px;"><a href="cart.html" style="font-size:13px;color:rgba(255,255,255,.4);">Cart</a><a href="wishlist.html" style="font-size:13px;color:rgba(255,255,255,.4);">Wishlist</a><a href="terms.html" style="font-size:13px;color:rgba(255,255,255,.4);">Terms</a><a href="privacy.html" style="font-size:13px;color:rgba(255,255,255,.4);">Privacy</a><a href="returns.html" style="font-size:13px;color:rgba(255,255,255,.4);">Returns</a></div></div>
</div>
<div class="container" style="margin-top:40px;padding-top:20px;border-top:1px solid rgba(255,255,255,.08);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;"><span style="font-size:12px;color:rgba(255,255,255,.3);">2025 MC Auto Solutions. All rights reserved.</span></div>
</footer>`;

function prodCard(name, price, oldPrice, image, tag) {
  return `<div style="background:#FFF;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);" class="card">
  <div style="position:relative;aspect-ratio:1;background:#FAFAFA;padding:16px;">
    <img src="${image}" alt="${name}" style="width:100%;height:100%;object-fit:contain;">
    ${tag ? `<span class="tag ${tag.startsWith('-')?'tag-red':''}" style="position:absolute;top:12px;left:12px;">${tag}</span>` : ''}
  </div>
  <div style="padding:14px;">
    <div style="font-weight:600;font-size:15px;color:#1A1A1A;">${name}</div>
    <div style="margin-top:8px;display:flex;align-items:center;gap:10px;">
      <span class="price">${price}</span>${oldPrice?`<span class="old-price">${oldPrice}</span>`:''}
    </div>
  </div>
</div>`;
}

function catHero(title, subtitle, image) {
  return `<div style="height:45vh;min-height:350px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;margin-top:72px;">
  <img src="${image}" alt="${title}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
  <div style="position:absolute;inset:0;background:rgba(0,0,0,.5);"></div>
  <div style="position:relative;z-index:2;text-align:center;padding:0 24px;">
    <h1 style="font-weight:700;font-size:clamp(32px,5vw,56px);color:#FFF;line-height:1.1;letter-spacing:-.02em;">${title}</h1>
    <p style="font-size:16px;color:rgba(255,255,255,.8);margin-top:12px;max-width:500px;margin:12px auto 0;">${subtitle}</p>
  </div>
</div>`;
}

// ===== HOME =====
const homeContent = `<!-- HERO -->
<section style="position:relative;min-height:calc(100vh - 72px);display:flex;align-items:center;overflow:hidden;margin-top:72px;">
  <div style="position:absolute;inset:0;z-index:0;">
    <img src="images/hero-car.png" alt="Transparent car showing internal auto parts" style="width:100%;height:100%;object-fit:cover;object-position:center right;">
    <div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(255,255,255,.95) 0%,rgba(255,255,255,.75) 40%,rgba(255,255,255,.3) 65%,transparent 100%);"></div>
  </div>
  <div style="position:relative;z-index:2;max-width:1280px;margin:0 auto;padding:80px 24px;width:100%;">
    <h1 style="font-weight:700;font-size:clamp(30px,4.5vw,52px);color:#1A1A1A;line-height:1.15;max-width:520px;">MC Auto Parts Solutions</h1>
    <div style="width:60px;height:3px;background:#FF6B2B;margin:18px 0;"></div>
    <p style="font-size:16px;color:#555;line-height:1.6;max-width:420px;">Quality Parts, Every Time. Trusted by 50,000+ UK garages and mechanics.</p>
    <div style="margin-top:32px;max-width:480px;display:flex;">
      <input type="text" placeholder="Enter Reg Number (e.g. AB12 CDE)" style="flex:1;height:48px;padding:0 16px;border:1px solid #ddd;border-right:none;border-radius:4px 0 0 4px;font-size:14px;outline:none;">
      <a href="auto-parts.html" class="btn-primary" style="border-radius:0 4px 4px 0;display:flex;align-items:center;">Find Parts</a>
    </div>
    <a href="auto-parts.html" class="btn-dark" style="margin-top:20px;">READ MORE</a>
  </div>
</section>
<!-- CATEGORIES -->
<section style="padding:60px 0;"><div class="container"><div class="section-title">HOT CATEGORIES</div>
  <div class="grid-4" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;">
    <a href="general.html" style="display:block;overflow:hidden;border-radius:8px;position:relative;aspect-ratio:1;"><img src="images/cat-general.jpg" alt="General" style="width:100%;height:100%;object-fit:cover;transition:transform .5s" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'"><div style="position:absolute;bottom:0;left:0;right:0;padding:14px;background:linear-gradient(transparent,rgba(0,0,0,.65));"><span style="font-weight:700;font-size:15px;color:#FFF;letter-spacing:.04em;">GENERAL</span></div></a>
    <a href="auto-parts.html" style="display:block;overflow:hidden;border-radius:8px;position:relative;aspect-ratio:1;"><img src="images/cat-autoparts.jpg" alt="Auto Parts" style="width:100%;height:100%;object-fit:cover;transition:transform .5s" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'"><div style="position:absolute;bottom:0;left:0;right:0;padding:14px;background:linear-gradient(transparent,rgba(0,0,0,.65));"><span style="font-weight:700;font-size:15px;color:#FFF;letter-spacing:.04em;">AUTO PARTS</span></div></a>
    <a href="tyre.html" style="display:block;overflow:hidden;border-radius:8px;position:relative;aspect-ratio:1;"><img src="images/cat-tyre.jpg" alt="Tyre" style="width:100%;height:100%;object-fit:cover;transition:transform .5s" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'"><div style="position:absolute;bottom:0;left:0;right:0;padding:14px;background:linear-gradient(transparent,rgba(0,0,0,.65));"><span style="font-weight:700;font-size:15px;color:#FFF;letter-spacing:.04em;">TYRE</span></div></a>
    <a href="interior.html" style="display:block;overflow:hidden;border-radius:8px;position:relative;aspect-ratio:1;"><img src="images/cat-interior.jpg" alt="Interior" style="width:100%;height:100%;object-fit:cover;transition:transform .5s" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'"><div style="position:absolute;bottom:0;left:0;right:0;padding:14px;background:linear-gradient(transparent,rgba(0,0,0,.65));"><span style="font-weight:700;font-size:15px;color:#FFF;letter-spacing:.04em;">INTERIOR</span></div></a>
    <a href="accessories.html" style="display:block;overflow:hidden;border-radius:8px;position:relative;aspect-ratio:1;"><img src="images/cat-accessories.jpg" alt="Accessories" style="width:100%;height:100%;object-fit:cover;transition:transform .5s" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'"><div style="position:absolute;bottom:0;left:0;right:0;padding:14px;background:linear-gradient(transparent,rgba(0,0,0,.65));"><span style="font-weight:700;font-size:15px;color:#FFF;letter-spacing:.04em;">ACCESSORIES</span></div></a>
  </div>
</div></section>
<!-- FEATURED -->
<section style="background:#F7F7F7;padding:60px 0;"><div class="container"><div class="section-title">FEATURED PRODUCTS</div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;">
    ${prodCard('Brake Pad Set','£34.99','£44.99','images/prod-brake.jpg','-22%')}
    ${prodCard('Spark Plug Platinum','£12.49',null,'images/prod-spark.jpg','New')}
    ${prodCard('Air Filter Premium','£18.99','£24.99','images/prod-air.jpg','-24%')}
    ${prodCard('Oil Filter Pro','£9.99',null,'images/prod-oil.jpg','Sale')}
  </div>
</div></section>
<!-- BEST SELLERS -->
<section style="padding:60px 0;"><div class="container"><div class="section-title">BEST SELLERS</div>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;">
    ${prodCard('Timing Belt Kit','£79.99',null,'images/prod-timing.jpg','Best Seller')}
    ${prodCard('Clutch Kit','£129.99',null,'images/prod-clutch.jpg',null)}
    ${prodCard('Water Pump','£54.99',null,'images/prod-waterpump.jpg','Popular')}
    ${prodCard('Alternator','£149.99','£189.99','images/prod-alternator.jpg','-21%')}
  </div>
</div></section>
<!-- BRANDS -->
<section style="background:#F7F7F7;padding:60px 0;"><div class="container"><div class="section-title">SHOP BY BRAND</div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:16px;">
    <a href="brands.html" style="display:block;background:#FFF;border-radius:8px;overflow:hidden;transition:box-shadow .3s,transform .3s;text-align:center;" onmouseenter="this.style.boxShadow='0 6px 20px rgba(0,0,0,.1)';this.style.transform='translateY(-4px)'" onmouseleave="this.style.boxShadow='none';this.style.transform='translateY(0)'"><div style="aspect-ratio:1;overflow:hidden;"><img src="images/brand-bmw.jpg" alt="BMW" style="width:100%;height:100%;object-fit:cover;"></div><div style="padding:12px;font-weight:600;font-size:14px;">BMW</div></a>
    <a href="brands.html" style="display:block;background:#FFF;border-radius:8px;overflow:hidden;transition:box-shadow .3s,transform .3s;text-align:center;" onmouseenter="this.style.boxShadow='0 6px 20px rgba(0,0,0,.1)';this.style.transform='translateY(-4px)'" onmouseleave="this.style.boxShadow='none';this.style.transform='translateY(0)'"><div style="aspect-ratio:1;overflow:hidden;"><img src="images/brand-audi.jpg" alt="Audi" style="width:100%;height:100%;object-fit:cover;"></div><div style="padding:12px;font-weight:600;font-size:14px;">Audi</div></a>
    <a href="brands.html" style="display:block;background:#FFF;border-radius:8px;overflow:hidden;transition:box-shadow .3s,transform .3s;text-align:center;" onmouseenter="this.style.boxShadow='0 6px 20px rgba(0,0,0,.1)';this.style.transform='translateY(-4px)'" onmouseleave="this.style.boxShadow='none';this.style.transform='translateY(0)'"><div style="aspect-ratio:1;overflow:hidden;"><img src="images/brand-mercedes.jpg" alt="Mercedes" style="width:100%;height:100%;object-fit:cover;"></div><div style="padding:12px;font-weight:600;font-size:14px;">Mercedes</div></a>
    <a href="brands.html" style="display:block;background:#FFF;border-radius:8px;overflow:hidden;transition:box-shadow .3s,transform .3s;text-align:center;" onmouseenter="this.style.boxShadow='0 6px 20px rgba(0,0,0,.1)';this.style.transform='translateY(-4px)'" onmouseleave="this.style.boxShadow='none';this.style.transform='translateY(0)'"><div style="aspect-ratio:1;overflow:hidden;"><img src="images/brand-vw.jpg" alt="VW" style="width:100%;height:100%;object-fit:cover;"></div><div style="padding:12px;font-weight:600;font-size:14px;">Volkswagen</div></a>
    <a href="brands.html" style="display:block;background:#FFF;border-radius:8px;overflow:hidden;transition:box-shadow .3s,transform .3s;text-align:center;" onmouseenter="this.style.boxShadow='0 6px 20px rgba(0,0,0,.1)';this.style.transform='translateY(-4px)'" onmouseleave="this.style.boxShadow='none';this.style.transform='translateY(0)'"><div style="aspect-ratio:1;overflow:hidden;"><img src="images/brand-ford.jpg" alt="Ford" style="width:100%;height:100%;object-fit:cover;"></div><div style="padding:12px;font-weight:600;font-size:14px;">Ford</div></a>
  </div>
</div></section>
<!-- WHY CHOOSE US -->
<section style="background:#F7F7F7;padding:60px 0;"><div class="container"><div class="section-title">WHY CHOOSE US</div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">
    <div style="display:flex;align-items:flex-start;gap:16px;padding:24px;background:#FFF;border-radius:8px;"><div style="font-size:32px;">&#128666;</div><div><div style="font-weight:700;font-size:15px;">Free Next-Day Delivery</div><div style="font-size:14px;color:#888;margin-top:4px;">On orders over &pound;50 across the UK</div></div></div>
    <div style="display:flex;align-items:flex-start;gap:16px;padding:24px;background:#FFF;border-radius:8px;"><div style="font-size:32px;">&#128295;</div><div><div style="font-weight:700;font-size:15px;">Expert Technical Support</div><div style="font-size:14px;color:#888;margin-top:4px;">Certified mechanics to help you</div></div></div>
    <div style="display:flex;align-items:flex-start;gap:16px;padding:24px;background:#FFF;border-radius:8px;"><div style="font-size:32px;">&#128260;</div><div><div style="font-weight:700;font-size:15px;">30-Day Easy Returns</div><div style="font-size:14px;color:#888;margin-top:4px;">No hassle returns on all parts</div></div></div>
    <div style="display:flex;align-items:flex-start;gap:16px;padding:24px;background:#FFF;border-radius:8px;"><div style="font-size:32px;">&#128274;</div><div><div style="font-weight:700;font-size:15px;">Secure Payment</div><div style="font-size:14px;color:#888;margin-top:4px;">256-bit SSL encryption</div></div></div>
    <div style="display:flex;align-items:flex-start;gap:16px;padding:24px;background:#FFF;border-radius:8px;"><div style="font-size:32px;">&#128176;</div><div><div style="font-weight:700;font-size:15px;">Price Match Guarantee</div><div style="font-size:14px;color:#888;margin-top:4px;">We match any UK competitor price</div></div></div>
    <div style="display:flex;align-items:flex-start;gap:16px;padding:24px;background:#FFF;border-radius:8px;"><div style="font-size:32px;">&#11088;</div><div><div style="font-weight:700;font-size:15px;">Genuine &amp; OEM Parts</div><div style="font-size:14px;color:#888;margin-top:4px;">Only quality-tested components</div></div></div>
  </div>
</div></section>
<!-- NEWSLETTER -->
<section style="background:#FF6B2B;padding:60px 0;text-align:center;"><div style="max-width:600px;margin:0 auto;padding:0 24px;">
  <h2 style="font-weight:700;font-size:26px;color:#FFF;">STAY IN THE LOOP</h2>
  <p style="font-size:15px;color:rgba(255,255,255,.85);margin-top:10px;">Get exclusive deals and maintenance tips.</p>
  <form onsubmit="event.preventDefault();alert('Subscribed!');" style="margin-top:24px;display:flex;justify-content:center;flex-wrap:wrap;">
    <input type="email" placeholder="Enter your email" required style="width:300px;max-width:100%;height:48px;padding:0 16px;border:none;border-radius:4px 0 0 4px;font-size:14px;outline:none;">
    <button type="submit" style="height:48px;padding:0 24px;background:#1A1A1A;color:#FFF;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.08em;border:none;border-radius:0 4px 4px 0;cursor:pointer;">SUBSCRIBE</button>
  </form>
</div></section>`;

// Category pages data
const categoryData = {
  'general.html': {t:'GENERAL',s:'Essential maintenance supplies for every vehicle.',h:'images/prod-battery.jpg',p:[
    {n:'Engine Oil 5W-30',p:'£24.99',op:null,i:'images/prod-oil.jpg',t:null},{n:'Car Battery 12V',p:'£89.99',op:'£109.99',i:'images/prod-battery.jpg',t:'-18%'},{n:'Brake Disc & Caliper',p:'£64.99',op:null,i:'images/prod-disc.jpg',t:'New'},{n:'Coolant 5L',p:'£14.99',op:null,i:'images/prod-waterpump.jpg',t:null},{n:'Brake Fluid DOT4',p:'£9.99',op:null,i:'images/prod-brake.jpg',t:null},{n:'Transmission Fluid',p:'£29.99',op:null,i:'images/prod-oil.jpg',t:null},{n:'Power Steering Fluid',p:'£11.99',op:null,i:'images/prod-oil.jpg',t:null},{n:'Oil Filter Standard',p:'£7.99',op:null,i:'images/prod-oil.jpg',t:null}
  ]},
  'auto-parts.html': {t:'AUTO PARTS',s:'High-quality engine components, braking systems, and drivetrain parts.',h:'images/prod-brake.jpg',p:[
    {n:'Brake Pad Set',p:'£34.99',op:'£44.99',i:'images/prod-brake.jpg',t:'-22%'},{n:'Spark Plug Platinum',p:'£12.49',op:null,i:'images/prod-spark.jpg',t:'New'},{n:'Air Filter Premium',p:'£18.99',op:'£24.99',i:'images/prod-air.jpg',t:'-24%'},{n:'Oil Filter Pro',p:'£9.99',op:null,i:'images/prod-oil.jpg',t:'Sale'},{n:'Timing Belt Kit',p:'£79.99',op:null,i:'images/prod-timing.jpg',t:'Best Seller'},{n:'Clutch Kit',p:'£129.99',op:null,i:'images/prod-clutch.jpg',t:null},{n:'Water Pump',p:'£54.99',op:null,i:'images/prod-waterpump.jpg',t:'Popular'},{n:'Alternator',p:'£149.99',op:'£189.99',i:'images/prod-alternator.jpg',t:'-21%'}
  ]},
  'tyre.html': {t:'TYRE',s:'Premium tyres for all seasons and vehicle types.',h:'images/prod-tyre1.jpg',p:[
    {n:'All-Season Tyre 205/55R16',p:'£59.99',op:'£74.99',i:'images/prod-tyre1.jpg',t:'-20%'},{n:'Performance Tyre 225/45R17',p:'£89.99',op:null,i:'images/prod-tyre1.jpg',t:'New'},{n:'Winter Tyre 195/65R15',p:'£54.99',op:null,i:'images/prod-tyre1.jpg',t:null},{n:'SUV Tyre 255/55R18',p:'£109.99',op:'£129.99',i:'images/prod-tyre1.jpg',t:'-15%'},{n:'Run Flat Tyre 225/50R17',p:'£124.99',op:null,i:'images/prod-tyre1.jpg',t:null},{n:'Eco Tyre 185/65R15',p:'£44.99',op:null,i:'images/prod-tyre1.jpg',t:'Eco'},{n:'Tyre Pressure Sensor',p:'£24.99',op:null,i:'images/prod-tyre1.jpg',t:null},{n:'Tyre Repair Kit',p:'£14.99',op:null,i:'images/prod-tyre1.jpg',t:null}
  ]},
  'interior.html': {t:'INTERIOR',s:'Comfort, protection, and tech accessories for your vehicle interior.',h:'images/cat-interior.jpg',p:[
    {n:'Leather Seat Covers',p:'£129.99',op:null,i:'images/cat-interior.jpg',t:null},{n:'Dashboard Camera',p:'£79.99',op:null,i:'images/cat-interior.jpg',t:'New'},{n:'Floor Mats Premium',p:'£39.99',op:null,i:'images/cat-interior.jpg',t:null},{n:'Steering Wheel Cover',p:'£19.99',op:null,i:'images/cat-interior.jpg',t:null},{n:'Car Air Freshener Set',p:'£9.99',op:null,i:'images/cat-interior.jpg',t:null},{n:'Boot Liner',p:'£34.99',op:null,i:'images/cat-interior.jpg',t:null},{n:'Window Sunshades',p:'£14.99',op:null,i:'images/cat-interior.jpg',t:null},{n:'Phone Mount',p:'£12.99',op:null,i:'images/cat-interior.jpg',t:null}
  ]},
  'accessories.html': {t:'ACCESSORIES',s:'Everything else you need for your vehicle.',h:'images/prod-suspension.jpg',p:[
    {n:'Suspension Kit',p:'£199.99',op:null,i:'images/prod-suspension.jpg',t:'New'},{n:'Brake Disc Upgrade',p:'£89.99',op:null,i:'images/prod-disc.jpg',t:null},{n:'Towing Hook',p:'£49.99',op:null,i:'images/cat-general.jpg',t:null},{n:'Car Cover',p:'£34.99',op:null,i:'images/cat-general.jpg',t:null},{n:'Jump Starter',p:'£59.99',op:null,i:'images/prod-battery.jpg',t:null},{n:'Pressure Washer',p:'£79.99',op:null,i:'images/cat-general.jpg',t:null},{n:'Vacuum Cleaner 12V',p:'£24.99',op:null,i:'images/cat-general.jpg',t:null},{n:'LED Light Bar',p:'£44.99',op:null,i:'images/cat-general.jpg',t:null}
  ]},
};

// Generate all pages
for (const [filename, config] of Object.entries(pages)) {
  let content = '';

  if (filename === 'index.html') {
    content = homeContent;
  } else if (categoryData[filename]) {
    const c = categoryData[filename];
    content = catHero(c.t, c.s, c.h) + `<section style="padding:80px 0;"><div class="container"><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;">${c.p.map(pr=>prodCard(pr.n,pr.p,pr.op,pr.i,pr.t)).join('')}</div></div></section>`;
  } else if (filename === 'brands.html') {
    content = catHero('SHOP BY BRAND', 'Find parts for your specific make and model.', 'images/brand-bmw.jpg') + `<section style="padding:60px 0;"><div class="container"><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px;">${[{n:'BMW',m:['3 Series','5 Series','X3','X5','1 Series'],i:'images/brand-bmw.jpg'},{n:'Audi',m:['A3','A4','A6','Q5','Q7'],i:'images/brand-audi.jpg'},{n:'Mercedes',m:['C-Class','E-Class','A-Class','GLC','GLE'],i:'images/brand-mercedes.jpg'},{n:'Volkswagen',m:['Golf','Polo','Passat','Tiguan','T-Roc'],i:'images/brand-vw.jpg'},{n:'Ford',m:['Focus','Fiesta','Kuga','Puma','Mondeo'],i:'images/brand-ford.jpg'},{n:'Toyota',m:['Corolla','Yaris','RAV4','C-HR','Camry'],i:'images/cat-general.jpg'},{n:'Vauxhall',m:['Corsa','Astra','Mokka','Crossland','Grandland'],i:'images/cat-general.jpg'},{n:'Renault',m:['Clio','Megane','Captur','Arkana','Austral'],i:'images/cat-general.jpg'},{n:'Peugeot',m:['208','308','3008','2008','508'],i:'images/cat-general.jpg'},{n:'Nissan',m:['Qashqai','Juke','Micra','X-Trail','Leaf'],i:'images/cat-general.jpg'},{n:'Hyundai',m:['i30','i20','Tucson','Kona','Bayon'],i:'images/cat-general.jpg'},{n:'Kia',m:['Sportage','Ceed','Picanto','Niro','Sorento'],i:'images/cat-general.jpg'}].map(b=>`<div style="background:#FFF;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);" class="card"><div style="display:flex;align-items:center;gap:16px;padding:20px;border-bottom:1px solid #eee;"><img src="${b.i}" alt="${b.n}" style="width:56px;height:56px;object-fit:cover;border-radius:8px;"><span style="font-weight:700;font-size:18px;">${b.n}</span></div><div style="padding:16px 20px;display:flex;flex-wrap:wrap;gap:8px;">${b.m.map(m=>`<span style="font-size:13px;color:#555;padding:6px 12px;background:#F7F7F7;border-radius:4px;">${m}</span>`).join('')}</div></div>`).join('')}</div></div></section>`;
  } else if (filename === 'about.html') {
    content = `<div style="background:#1A1A1A;padding:140px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(32px,5vw,52px);color:#FFF;line-height:1.1;">ABOUT US</h1><p style="font-size:16px;color:rgba(255,255,255,.7);margin-top:12px;max-width:500px;margin:12px auto 0;">Trusted by mechanics and garages across the UK since 2013.</p></div>
    <section style="padding:80px 0;"><div class="container">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px;margin-bottom:60px;">
        <div style="text-align:center;padding:28px;background:#F7F7F7;border-radius:12px;"><div style="font-weight:700;font-size:32px;color:#FF6B2B;">50,000+</div><div style="font-size:13px;color:#6B6B6B;margin-top:6px;text-transform:uppercase;letter-spacing:.06em;">UK Garages Served</div></div>
        <div style="text-align:center;padding:28px;background:#F7F7F7;border-radius:12px;"><div style="font-weight:700;font-size:32px;color:#FF6B2B;">12</div><div style="font-size:13px;color:#6B6B6B;margin-top:6px;text-transform:uppercase;letter-spacing:.06em;">Years in Business</div></div>
        <div style="text-align:center;padding:28px;background:#F7F7F7;border-radius:12px;"><div style="font-weight:700;font-size:32px;color:#FF6B2B;">98%</div><div style="font-size:13px;color:#6B6B6B;margin-top:6px;text-transform:uppercase;letter-spacing:.06em;">Customer Satisfaction</div></div>
        <div style="text-align:center;padding:28px;background:#F7F7F7;border-radius:12px;"><div style="font-weight:700;font-size:32px;color:#FF6B2B;">24h</div><div style="font-size:13px;color:#6B6B6B;margin-top:6px;text-transform:uppercase;letter-spacing:.06em;">Delivery Time</div></div>
      </div>
      <div style="max-width:700px;margin:0 auto;text-align:center;">
        <h2 style="font-weight:700;font-size:28px;color:#1A1A1A;margin-bottom:20px;">Our Story</h2>
        <p style="font-size:16px;color:#6B6B6B;line-height:1.7;margin-bottom:20px;">MC Auto Solutions started in a small garage in Birmingham with a simple mission: provide mechanics with quality parts at fair prices. What began as a local supplier has grown into one of the UK's most trusted auto parts distributors, serving over 50,000 garages nationwide.</p>
        <p style="font-size:16px;color:#6B6B6B;line-height:1.7;margin-bottom:20px;">Every part in our catalogue is rigorously tested and backed by our quality guarantee. We work directly with leading manufacturers to cut out the middleman, passing those savings on to you.</p>
        <p style="font-size:16px;color:#6B6B6B;line-height:1.7;">Our team includes certified mechanics who understand the challenges you face. When you call us, you speak to someone who knows the difference between a control arm and a wishbone.</p>
      </div>
    </div></section>`;
  } else if (filename === 'services.html') {
    content = `<div style="background:#1A1A1A;padding:140px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(32px,5vw,52px);color:#FFF;line-height:1.1;">OUR SERVICES</h1><p style="font-size:16px;color:rgba(255,255,255,.7);margin-top:12px;max-width:500px;margin:12px auto 0;">Everything you need to keep your garage running smoothly.</p></div>
    <section style="padding:80px 0;"><div class="container">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-bottom:60px;">
        <div style="padding:36px;background:#F7F7F7;border-radius:12px;text-align:center;"><h3 style="font-weight:700;font-size:20px;color:#1A1A1A;margin-bottom:10px;">Next-Day Delivery</h3><p style="font-size:15px;color:#6B6B6B;line-height:1.6;">Order before 3pm and receive your parts the next working day anywhere in the UK. Free delivery on orders over &pound;50.</p></div>
        <div style="padding:36px;background:#F7F7F7;border-radius:12px;text-align:center;"><h3 style="font-weight:700;font-size:20px;color:#1A1A1A;margin-bottom:10px;">Expert Support</h3><p style="font-size:15px;color:#6B6B6B;line-height:1.6;">Our technical team includes certified mechanics who can help you find the right part for any make or model.</p></div>
        <div style="padding:36px;background:#F7F7F7;border-radius:12px;text-align:center;"><h3 style="font-weight:700;font-size:20px;color:#1A1A1A;margin-bottom:10px;">Bulk Ordering</h3><p style="font-size:15px;color:#6B6B6B;line-height:1.6;">Garage owners and fleet managers get exclusive pricing on volume orders. Dedicated account manager included.</p></div>
      </div>
      <h2 style="font-weight:700;font-size:28px;color:#1A1A1A;text-align:center;margin-bottom:36px;">ADDITIONAL SERVICES</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;">
        <div style="padding:28px;border:1px solid #eee;border-radius:10px;"><h4 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:8px;">Part Matching</h4><p style="font-size:14px;color:#6B6B6B;line-height:1.6;">Send us your VIN or registration and we will identify the exact part you need.</p></div>
        <div style="padding:28px;border:1px solid #eee;border-radius:10px;"><h4 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:8px;">Warranty Claims</h4><p style="font-size:14px;color:#6B6B6B;line-height:1.6;">All parts come with a minimum 12-month warranty. Claims processed within 48 hours.</p></div>
        <div style="padding:28px;border:1px solid #eee;border-radius:10px;"><h4 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:8px;">Returns &amp; Exchanges</h4><p style="font-size:14px;color:#6B6B6B;line-height:1.6;">30-day no-hassle returns on unused parts in original packaging.</p></div>
        <div style="padding:28px;border:1px solid #eee;border-radius:10px;"><h4 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:8px;">Fitment Guarantee</h4><p style="font-size:14px;color:#6B6B6B;line-height:1.6;">If a part does not fit due to our recommendation, we replace it free of charge.</p></div>
      </div>
    </div></section>`;
  } else if (filename === 'testimonials.html') {
    content = `<div style="background:#1A1A1A;padding:140px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(32px,5vw,52px);color:#FFF;line-height:1.1;">TESTIMONIALS</h1><p style="font-size:16px;color:rgba(255,255,255,.7);margin-top:12px;max-width:500px;margin:12px auto 0;">Hear from the mechanics and garage owners who trust us every day.</p></div>
    <section style="background:#F7F7F7;padding:80px 0;"><div class="container"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:20px;">
      <div style="background:#FFF;border-radius:12px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,.04);"><div style="font-size:36px;color:#FF6B2B;line-height:1;margin-bottom:12px;">&ldquo;</div><p style="font-size:15px;color:#6B6B6B;line-height:1.7;">MC Auto Solutions has been our go-to supplier for 3 years. The quality is consistently excellent and delivery is always on time.</p><div style="margin-top:20px;font-weight:600;font-size:15px;color:#1A1A1A;">James Wilson</div><div style="font-size:13px;color:#aaa;">Garage Owner</div></div>
      <div style="background:#FFF;border-radius:12px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,.04);"><div style="font-size:36px;color:#FF6B2B;line-height:1;margin-bottom:12px;">&ldquo;</div><p style="font-size:15px;color:#6B6B6B;line-height:1.7;">Best prices on brake pads and filters. Their customer service team knows their stuff &mdash; saved me from ordering the wrong parts twice.</p><div style="margin-top:20px;font-weight:600;font-size:15px;color:#1A1A1A;">Sarah Chen</div><div style="font-size:13px;color:#aaa;">Independent Mechanic</div></div>
      <div style="background:#FFF;border-radius:12px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,.04);"><div style="font-size:36px;color:#FF6B2B;line-height:1;margin-bottom:12px;">&ldquo;</div><p style="font-size:15px;color:#6B6B6B;line-height:1.7;">I switched from my previous supplier and haven't looked back. The online ordering system is slick and parts arrive next day.</p><div style="margin-top:20px;font-weight:600;font-size:15px;color:#1A1A1A;">David O'Brien</div><div style="font-size:13px;color:#aaa;">Fleet Manager</div></div>
      <div style="background:#FFF;border-radius:12px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,.04);"><div style="font-size:36px;color:#FF6B2B;line-height:1;margin-bottom:12px;">&ldquo;</div><p style="font-size:15px;color:#6B6B6B;line-height:1.7;">The bulk ordering discounts have saved our garage thousands. Plus the account manager actually answers the phone.</p><div style="margin-top:20px;font-weight:600;font-size:15px;color:#1A1A1A;">Amira Patel</div><div style="font-size:13px;color:#aaa;">Workshop Director</div></div>
      <div style="background:#FFF;border-radius:12px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,.04);"><div style="font-size:36px;color:#FF6B2B;line-height:1;margin-bottom:12px;">&ldquo;</div><p style="font-size:15px;color:#6B6B6B;line-height:1.7;">I run a small mobile mechanic business. Being able to get parts next day means I never have to turn down a job.</p><div style="margin-top:20px;font-weight:600;font-size:15px;color:#1A1A1A;">Tom Henderson</div><div style="font-size:13px;color:#aaa;">Mobile Mechanic</div></div>
      <div style="background:#FFF;border-radius:12px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,.04);"><div style="font-size:36px;color:#FF6B2B;line-height:1;margin-bottom:12px;">&ldquo;</div><p style="font-size:15px;color:#6B6B6B;line-height:1.7;">Their part matching service is incredible. Sent them a VIN, got the exact brake discs I needed. No guesswork.</p><div style="margin-top:20px;font-weight:600;font-size:15px;color:#1A1A1A;">Lisa O'Connor</div><div style="font-size:13px;color:#aaa;">Service Manager</div></div>
    </div></div></section>`;
  } else if (filename === 'contact.html') {
    content = `<div style="background:#1A1A1A;padding:140px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(32px,5vw,52px);color:#FFF;line-height:1.1;">CONTACT US</h1><p style="font-size:16px;color:rgba(255,255,255,.7);margin-top:12px;max-width:500px;margin:12px auto 0;">Get in touch &mdash; we are here to help with any questions.</p></div>
    <section style="padding:80px 0;"><div class="container" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:60px;">
      <div>
        <h2 style="font-weight:700;font-size:24px;color:#1A1A1A;margin-bottom:28px;">Get in Touch</h2>
        <div style="display:flex;flex-direction:column;gap:20px;">
          <div><div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#FF6B2B;margin-bottom:6px;">Phone</div><div style="font-size:15px;color:#1A1A1A;">0800 123 4567</div><div style="font-size:13px;color:#aaa;">Mon-Fri 8am-6pm, Sat 9am-1pm</div></div>
          <div><div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#FF6B2B;margin-bottom:6px;">Email</div><div style="font-size:15px;color:#1A1A1A;">info@mcautosolutions.co.uk</div><div style="font-size:13px;color:#aaa;">We reply within 24 hours</div></div>
          <div><div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#FF6B2B;margin-bottom:6px;">Address</div><div style="font-size:15px;color:#1A1A1A;line-height:1.6;">42 Industrial Way<br>Birmingham B12 8XY<br>United Kingdom</div></div>
        </div>
      </div>
      <div>
        <h2 style="font-weight:700;font-size:24px;color:#1A1A1A;margin-bottom:28px;">Send a Message</h2>
        <form onsubmit="event.preventDefault();alert('Thank you! We will reply within 24 hours.');this.reset();" style="display:flex;flex-direction:column;gap:14px;">
          <input type="text" placeholder="Your Name" required style="height:46px;padding:0 14px;border:1px solid #e0e0e0;border-radius:6px;font-size:14px;outline:none;" onfocus="this.style.borderColor='#FF6B2B'" onblur="this.style.borderColor='#e0e0e0'">
          <input type="email" placeholder="Email Address" required style="height:46px;padding:0 14px;border:1px solid #e0e0e0;border-radius:6px;font-size:14px;outline:none;" onfocus="this.style.borderColor='#FF6B2B'" onblur="this.style.borderColor='#e0e0e0'">
          <input type="tel" placeholder="Phone Number (optional)" style="height:46px;padding:0 14px;border:1px solid #e0e0e0;border-radius:6px;font-size:14px;outline:none;" onfocus="this.style.borderColor='#FF6B2B'" onblur="this.style.borderColor='#e0e0e0'">
          <select required style="height:46px;padding:0 14px;border:1px solid #e0e0e0;border-radius:6px;font-size:14px;outline:none;background:#FFF;" onfocus="this.style.borderColor='#FF6B2B'" onblur="this.style.borderColor='#e0e0e0'"><option value="">Select Subject</option><option>Parts Inquiry</option><option>Order Question</option><option>Delivery Issue</option><option>Returns</option><option>Bulk Order</option><option>Other</option></select>
          <textarea placeholder="Your Message" required rows="5" style="padding:12px 14px;border:1px solid #e0e0e0;border-radius:6px;font-size:14px;outline:none;resize:vertical;" onfocus="this.style.borderColor='#FF6B2B'" onblur="this.style.borderColor='#e0e0e0'"></textarea>
          <button type="submit" class="btn-primary" style="border-radius:9999px;">SEND MESSAGE</button>
        </form>
      </div>
    </div></section>`;
  } else if (filename === 'blog.html') {
    content = `<div style="background:#1A1A1A;padding:140px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(32px,5vw,52px);color:#FFF;line-height:1.1;">BLOG &amp; GUIDES</h1><p style="font-size:16px;color:rgba(255,255,255,.7);margin-top:12px;max-width:500px;margin:12px auto 0;">Expert advice, maintenance tips and buying guides.</p></div>
    <section style="padding:60px 0;"><div class="container">
      <div style="display:flex;gap:8px;margin-bottom:32px;flex-wrap:wrap;">
        <span style="padding:8px 16px;background:#FF6B2B;color:#FFF;font-size:13px;font-weight:600;border-radius:4px;cursor:pointer;">All</span>
        <span style="padding:8px 16px;background:#FFF;color:#555;font-size:13px;font-weight:600;border-radius:4px;border:1px solid #ddd;cursor:pointer;">Guides</span>
        <span style="padding:8px 16px;background:#FFF;color:#555;font-size:13px;font-weight:600;border-radius:4px;border:1px solid #ddd;cursor:pointer;">Maintenance</span>
        <span style="padding:8px 16px;background:#FFF;color:#555;font-size:13px;font-weight:600;border-radius:4px;border:1px solid #ddd;cursor:pointer;">DIY</span>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:20px;">
        <div style="padding:28px;border:1px solid #eee;border-radius:8px;transition:border-color .3s,box-shadow .3s;cursor:pointer;" onmouseenter="this.style.borderColor='#FF6B2B';this.style.boxShadow='0 4px 16px rgba(0,0,0,.06)'" onmouseleave="this.style.borderColor='#eee';this.style.boxShadow='none'"><div style="display:flex;gap:12px;margin-bottom:12px;"><span style="font-size:11px;font-weight:700;color:#FF6B2B;text-transform:uppercase;letter-spacing:.06em;">Guides</span><span style="font-size:11px;color:#aaa;">5 min read</span></div><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;line-height:1.4;">How to Choose the Right Brake Pads</h2><p style="font-size:14px;color:#888;margin-top:10px;line-height:1.6;">A complete guide to selecting brake pads for your vehicle...</p><div style="font-size:12px;color:#aaa;margin-top:14px;">May 15, 2025</div></div>
        <div style="padding:28px;border:1px solid #eee;border-radius:8px;transition:border-color .3s,box-shadow .3s;cursor:pointer;" onmouseenter="this.style.borderColor='#FF6B2B';this.style.boxShadow='0 4px 16px rgba(0,0,0,.06)'" onmouseleave="this.style.borderColor='#eee';this.style.boxShadow='none'"><div style="display:flex;gap:12px;margin-bottom:12px;"><span style="font-size:11px;font-weight:700;color:#FF6B2B;text-transform:uppercase;letter-spacing:.06em;">Maintenance</span><span style="font-size:11px;color:#aaa;">4 min read</span></div><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;line-height:1.4;">Signs Your Timing Belt Needs Replacement</h2><p style="font-size:14px;color:#888;margin-top:10px;line-height:1.6;">Learn the warning signs before it is too late...</p><div style="font-size:12px;color:#aaa;margin-top:14px;">May 10, 2025</div></div>
        <div style="padding:28px;border:1px solid #eee;border-radius:8px;transition:border-color .3s,box-shadow .3s;cursor:pointer;" onmouseenter="this.style.borderColor='#FF6B2B';this.style.boxShadow='0 4px 16px rgba(0,0,0,.06)'" onmouseleave="this.style.borderColor='#eee';this.style.boxShadow='none'"><div style="display:flex;gap:12px;margin-bottom:12px;"><span style="font-size:11px;font-weight:700;color:#FF6B2B;text-transform:uppercase;letter-spacing:.06em;">DIY</span><span style="font-size:11px;color:#aaa;">3 min read</span></div><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;line-height:1.4;">How to Replace an Air Filter in 5 Minutes</h2><p style="font-size:14px;color:#888;margin-top:10px;line-height:1.6;">Replacing your air filter is one of the easiest tasks...</p><div style="font-size:12px;color:#aaa;margin-top:14px;">Apr 28, 2025</div></div>
        <div style="padding:28px;border:1px solid #eee;border-radius:8px;transition:border-color .3s,box-shadow .3s;cursor:pointer;" onmouseenter="this.style.borderColor='#FF6B2B';this.style.boxShadow='0 4px 16px rgba(0,0,0,.06)'" onmouseleave="this.style.borderColor='#eee';this.style.boxShadow='none'"><div style="display:flex;gap:12px;margin-bottom:12px;"><span style="font-size:11px;font-weight:700;color:#FF6B2B;text-transform:uppercase;letter-spacing:.06em;">Guides</span><span style="font-size:11px;color:#aaa;">6 min read</span></div><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;line-height:1.4;">The Complete Guide to Oil Filters</h2><p style="font-size:14px;color:#888;margin-top:10px;line-height:1.6;">Not all oil filters are created equal. Learn the different types...</p><div style="font-size:12px;color:#aaa;margin-top:14px;">Apr 20, 2025</div></div>
        <div style="padding:28px;border:1px solid #eee;border-radius:8px;transition:border-color .3s,box-shadow .3s;cursor:pointer;" onmouseenter="this.style.borderColor='#FF6B2B';this.style.boxShadow='0 4px 16px rgba(0,0,0,.06)'" onmouseleave="this.style.borderColor='#eee';this.style.boxShadow='none'"><div style="display:flex;gap:12px;margin-bottom:12px;"><span style="font-size:11px;font-weight:700;color:#FF6B2B;text-transform:uppercase;letter-spacing:.06em;">Electric</span><span style="font-size:11px;color:#aaa;">7 min read</span></div><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;line-height:1.4;">Understanding EV Battery Components</h2><p style="font-size:14px;color:#888;margin-top:10px;line-height:1.6;">What you need to know about EV battery systems...</p><div style="font-size:12px;color:#aaa;margin-top:14px;">May 5, 2025</div></div>
        <div style="padding:28px;border:1px solid #eee;border-radius:8px;transition:border-color .3s,box-shadow .3s;cursor:pointer;" onmouseenter="this.style.borderColor='#FF6B2B';this.style.boxShadow='0 4px 16px rgba(0,0,0,.06)'" onmouseleave="this.style.borderColor='#eee';this.style.boxShadow='none'"><div style="display:flex;gap:12px;margin-bottom:12px;"><span style="font-size:11px;font-weight:700;color:#FF6B2B;text-transform:uppercase;letter-spacing:.06em;">Seasonal</span><span style="font-size:11px;color:#aaa;">5 min read</span></div><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;line-height:1.4;">Winter Car Care: Essential Tips</h2><p style="font-size:14px;color:#888;margin-top:10px;line-height:1.6;">Cold weather can be tough on your vehicle. Here are essential tips...</p><div style="font-size:12px;color:#aaa;margin-top:14px;">Apr 10, 2025</div></div>
      </div>
    </div></section>`;
  } else if (filename === 'cart.html') {
    content = `<section style="margin-top:72px;min-height:60vh;"><div class="container" style="padding:40px 24px;">
      <h1 style="font-weight:700;font-size:24px;color:#1A1A1A;margin-bottom:32px;">Shopping Cart (3 items)</h1>
      <div class="grid-2" style="display:grid;grid-template-columns:2fr 1fr;gap:40px;">
        <div>
          <div style="display:flex;gap:16px;padding:20px 0;border-bottom:1px solid #eee;">
            <div style="width:80px;height:80px;background:#FAFAFA;border-radius:6px;padding:8px;flex-shrink:0;"><img src="images/prod-brake.jpg" style="width:100%;height:100%;object-fit:contain;"></div>
            <div style="flex:1;"><div style="font-weight:600;font-size:15px;color:#1A1A1A;">Brake Pad Set</div><div style="font-weight:700;font-size:15px;color:#FF6B2B;margin-top:6px;">&pound;34.99</div><div style="display:flex;align-items:center;gap:12px;margin-top:10px;"><div style="display:flex;align-items:center;border:1px solid #ddd;border-radius:4px;overflow:hidden;"><span style="width:32px;height:32px;background:#F7F7F7;text-align:center;line-height:32px;font-size:13px;">2</span></div></div></div>
            <div style="font-weight:700;font-size:16px;">&pound;69.98</div>
          </div>
          <div style="display:flex;gap:16px;padding:20px 0;border-bottom:1px solid #eee;">
            <div style="width:80px;height:80px;background:#FAFAFA;border-radius:6px;padding:8px;flex-shrink:0;"><img src="images/prod-oil.jpg" style="width:100%;height:100%;object-fit:contain;"></div>
            <div style="flex:1;"><div style="font-weight:600;font-size:15px;color:#1A1A1A;">Oil Filter Pro</div><div style="font-weight:700;font-size:15px;color:#FF6B2B;margin-top:6px;">&pound;9.99</div><div style="display:flex;align-items:center;gap:12px;margin-top:10px;"><div style="display:flex;align-items:center;border:1px solid #ddd;border-radius:4px;overflow:hidden;"><span style="width:32px;height:32px;background:#F7F7F7;text-align:center;line-height:32px;font-size:13px;">1</span></div></div></div>
            <div style="font-weight:700;font-size:16px;">&pound;9.99</div>
          </div>
          <div style="display:flex;gap:16px;padding:20px 0;border-bottom:1px solid #eee;">
            <div style="width:80px;height:80px;background:#FAFAFA;border-radius:6px;padding:8px;flex-shrink:0;"><img src="images/prod-spark.jpg" style="width:100%;height:100%;object-fit:contain;"></div>
            <div style="flex:1;"><div style="font-weight:600;font-size:15px;color:#1A1A1A;">Spark Plug Platinum</div><div style="font-weight:700;font-size:15px;color:#FF6B2B;margin-top:6px;">&pound;12.49</div><div style="display:flex;align-items:center;gap:12px;margin-top:10px;"><div style="display:flex;align-items:center;border:1px solid #ddd;border-radius:4px;overflow:hidden;"><span style="width:32px;height:32px;background:#F7F7F7;text-align:center;line-height:32px;font-size:13px;">4</span></div></div></div>
            <div style="font-weight:700;font-size:16px;">&pound;49.96</div>
          </div>
        </div>
        <div style="background:#F7F7F7;border-radius:8px;padding:24px;height:fit-content;">
          <h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:20px;">Order Summary</h2>
          <div style="display:flex;justify-content:space-between;margin-bottom:12px;font-size:14px;color:#555;"><span>Subtotal</span><span>&pound;129.93</span></div>
          <div style="display:flex;justify-content:space-between;margin-bottom:12px;font-size:14px;color:#555;"><span>Shipping</span><span style="color:#2ecc71;">FREE</span></div>
          <div style="border-top:1px solid #ddd;padding-top:12px;display:flex;justify-content:space-between;font-weight:700;font-size:18px;color:#1A1A1A;"><span>Total</span><span>&pound;129.93</span></div>
          <button onclick="alert('Proceeding to checkout...')" class="btn-primary" style="width:100%;margin-top:20px;border-radius:4px;">PROCEED TO CHECKOUT</button>
          <a href="auto-parts.html" style="display:block;text-align:center;margin-top:12px;font-size:13px;color:#555;">&larr; Continue Shopping</a>
        </div>
      </div>
    </div></section>`;
  } else if (filename === 'wishlist.html') {
    content = `<section style="margin-top:72px;min-height:60vh;"><div class="container" style="padding:40px 24px;">
      <h1 style="font-weight:700;font-size:24px;color:#1A1A1A;margin-bottom:32px;">My Wishlist (3)</h1>
      <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;">
        <div style="background:#FFF;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);">
          <div style="position:relative;aspect-ratio:1;background:#FAFAFA;padding:16px;"><img src="images/prod-brake.jpg" style="width:100%;height:100%;object-fit:contain;"></div>
          <div style="padding:14px;"><div style="font-weight:600;font-size:15px;color:#1A1A1A;">Brake Pad Set</div><div style="font-weight:700;font-size:16px;color:#FF6B2B;margin-top:6px;">&pound;34.99</div><div style="font-size:12px;color:#2ecc71;margin-top:4px;font-weight:600;">In Stock</div><a href="cart.html" style="display:block;margin-top:12px;text-align:center;padding:10px;background:#1A1A1A;color:#fff;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.05em;text-decoration:none;border-radius:4px;">MOVE TO CART</a></div>
        </div>
        <div style="background:#FFF;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);">
          <div style="position:relative;aspect-ratio:1;background:#FAFAFA;padding:16px;"><img src="images/prod-air.jpg" style="width:100%;height:100%;object-fit:contain;"></div>
          <div style="padding:14px;"><div style="font-weight:600;font-size:15px;color:#1A1A1A;">Air Filter Premium</div><div style="font-weight:700;font-size:16px;color:#FF6B2B;margin-top:6px;">&pound;18.99</div><div style="font-size:12px;color:#2ecc71;margin-top:4px;font-weight:600;">In Stock</div><a href="cart.html" style="display:block;margin-top:12px;text-align:center;padding:10px;background:#1A1A1A;color:#fff;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.05em;text-decoration:none;border-radius:4px;">MOVE TO CART</a></div>
        </div>
        <div style="background:#FFF;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);">
          <div style="position:relative;aspect-ratio:1;background:#FAFAFA;padding:16px;"><img src="images/prod-waterpump.jpg" style="width:100%;height:100%;object-fit:contain;"></div>
          <div style="padding:14px;"><div style="font-weight:600;font-size:15px;color:#1A1A1A;">Water Pump</div><div style="font-weight:700;font-size:16px;color:#FF6B2B;margin-top:6px;">&pound;54.99</div><div style="font-size:12px;color:#e74c3c;margin-top:4px;font-weight:600;">Out of Stock</div><a style="display:block;margin-top:12px;text-align:center;padding:10px;background:#ddd;color:#fff;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.05em;text-decoration:none;border-radius:4px;pointer-events:none;">UNAVAILABLE</a></div>
        </div>
      </div>
    </div></section>`;
  } else if (filename === 'terms.html') {
    content = `<div style="background:#1A1A1A;padding:120px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(28px,4vw,44px);color:#FFF;">TERMS &amp; CONDITIONS</h1></div>
    <section style="padding:60px 0;"><div class="container" style="max-width:800px;">
      <div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">1. General</h2><p style="font-size:15px;color:#555;line-height:1.7;">These terms govern your use of the MC Auto Solutions website and the purchase of products from our online store.</p></div>
      <div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">2. Ordering &amp; Payment</h2><p style="font-size:15px;color:#555;line-height:1.7;">All orders are subject to availability and confirmation. Payment by card or PayPal. Prices include VAT.</p></div>
      <div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">3. Delivery</h2><p style="font-size:15px;color:#555;line-height:1.7;">Next-working-day delivery on orders before 3pm. FREE on orders over &pound;50.</p></div>
      <div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">4. Returns</h2><p style="font-size:15px;color:#555;line-height:1.7;">30 days to return unused items in original packaging for a full refund.</p></div>
      <div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">5. Warranty</h2><p style="font-size:15px;color:#555;line-height:1.7;">12-month warranty against manufacturing defects.</p></div>
    </div></section>`;
  } else if (filename === 'privacy.html') {
    content = `<div style="background:#1A1A1A;padding:120px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(28px,4vw,44px);color:#FFF;">PRIVACY POLICY</h1></div>
    <section style="padding:60px 0;"><div class="container" style="max-width:800px;">
      <div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">1. Information We Collect</h2><p style="font-size:15px;color:#555;line-height:1.7;">We collect personal information when placing orders, creating accounts, or contacting us.</p></div>
      <div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">2. How We Use It</h2><p style="font-size:15px;color:#555;line-height:1.7;">We use your information to process orders, deliver products, and provide support.</p></div>
      <div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">3. Data Security</h2><p style="font-size:15px;color:#555;line-height:1.7;">All payment transactions are encrypted using SSL technology.</p></div>
      <div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">4. Your Rights</h2><p style="font-size:15px;color:#555;line-height:1.7;">Under GDPR, you have the right to access, correct, delete, or restrict processing of your data.</p></div>
    </div></section>`;
  } else if (filename === 'returns.html') {
    content = `<div style="background:#1A1A1A;padding:120px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(28px,4vw,44px);color:#FFF;">RETURNS &amp; REFUNDS</h1></div>
    <section style="padding:60px 0;"><div class="container" style="max-width:800px;">
      <div style="margin-bottom:32px;padding:20px;background:#F7F7F7;border-radius:8px;border-left:4px solid #FF6B2B;"><p style="font-weight:600;font-size:16px;color:#1A1A1A;margin:0;">30-Day Hassle-Free Returns on All Orders</p></div>
      <div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">Return Eligibility</h2><p style="font-size:15px;color:#555;line-height:1.7;">You can return any item within 30 days of delivery for a full refund, provided the item is unused and in its original packaging.</p></div>
      <div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">How to Return</h2><p style="font-size:15px;color:#555;line-height:1.7;">Contact our customer service team for a prepaid return label. Pack securely and drop at any Post Office.</p></div>
      <div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">Faulty Items</h2><p style="font-size:15px;color:#555;line-height:1.7;">Faulty items can be returned within 12 months for replacement or refund.</p></div>
      <div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">Refund Processing</h2><p style="font-size:15px;color:#555;line-height:1.7;">Refunds are processed within 5-10 working days to the original payment method.</p></div>
    </div></section>`;
  }

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${config.title}</title>
<meta name="description" content="MC Auto Solutions - Quality auto parts for every vehicle. Trusted by 50,000+ UK garages.">
${css}
</head>
<body style="display:flex;flex-direction:column;min-height:100vh;">
${nav(config.nav)}
<main style="flex:1;">
${content}
</main>
${footer}`;

  fs.writeFileSync(path.join(outDir, filename), html);
  console.log(`Generated: ${filename} (${Math.round(html.length / 1024)}KB)`);
}

console.log('\n=== ALL 17 HTML PAGES GENERATED ===');
console.log(`Output folder: ${outDir}`);
console.log('\nTo use in GitHub Pages:');
console.log('1. Copy all files from github-pages/ to your repo');
console.log('2. Each .html file is a complete standalone page');
console.log('3. No build step needed - pure HTML/CSS');
