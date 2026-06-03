const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '../dist');
if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });

// Copy public assets
const publicDir = path.resolve(__dirname, '../public');
if (fs.existsSync(publicDir)) {
  const copyDir = (src, dest) => {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
      const s = path.join(src, entry.name);
      const d = path.join(dest, entry.name);
      entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
    }
  };
  copyDir(publicDir, distDir);
}

const head = (title) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="MC Auto Solutions - Quality auto parts for every vehicle. Trusted by 50,000+ UK garages.">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:Arial,Helvetica,sans-serif;color:#1A1A1A;background:#FFFFFF;-webkit-font-smoothing:antialiased}
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
.card{transition:box-shadow .3s;cursor:pointer}
.card:hover{box-shadow:0 8px 24px rgba(0,0,0,.12)!important}
@media(max-width:768px){.grid-mob{grid-template-columns:1fr!important}}
</style>
</head>
<body>`;

const nav = (active) => {
  const links = [
    {h:'general.html',l:'General'},{h:'auto-parts.html',l:'Auto Parts'},{h:'tyre.html',l:'Tyre'},
    {h:'interior.html',l:'Interior'},{h:'accessories.html',l:'Accessories'},{h:'brands.html',l:'Brands'},
    {h:'blog.html',l:'Blog'},{h:'about.html',l:'About'},
  ];
  return `<nav style="position:fixed;top:0;left:0;right:0;height:72px;background:rgba(255,255,255,.98);backdrop-filter:blur(8px);z-index:50;border-bottom:1px solid #eee;display:flex;align-items:center;justify-content:space-between;padding:0 24px;">
<div style="display:flex;align-items:center;gap:16px;"><a href="index.html" style="font-weight:700;font-size:18px;color:#1A1A1A;">MC Auto Solutions</a></div>
<div style="display:flex;align-items:center;gap:24px;" class="desk-nav">${links.map(l=>`<a href="${l.h}" style="font-weight:${active===l.h?'700':'500'};font-size:13px;color:${active===l.h?'#FF6B2B':'#1A1A1A'};transition:color .2s;">${l.l}</a>`).join('')}</div>
<div style="display:flex;align-items:center;gap:12px;">
  <a href="wishlist.html" style="font-size:20px;color:#1A1A1A;padding:8px;">&#9825;</a>
  <a href="cart.html" style="font-size:20px;color:#1A1A1A;padding:8px;position:relative;">&#128722;<span style="position:absolute;top:2px;right:2px;width:16px;height:16px;background:#FF6B2B;color:#fff;font-size:10px;font-weight:700;border-radius:50%;display:flex;align-items:center;justify-content:center;">3</span></a>
  <a href="contact.html" class="desk-nav" style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#FFF;background:#FF6B2B;border-radius:9999px;padding:10px 22px;transition:background .3s;">Contact</a>
</div>
<style>@media(max-width:768px){.desk-nav{display:none!important}}</style>
</nav>`;
};

const footer = `<!-- FOOTER -->
<footer style="background:#1A1A1A;padding:60px 0 20px;">
<div class="container" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:32px;">
<div><div style="font-weight:700;font-size:16px;color:#fff;margin-bottom:10px;">MC Auto Solutions</div><p style="font-size:13px;color:rgba(255,255,255,.4);line-height:1.6;">Quality auto parts for every vehicle. Trusted by 50,000+ UK garages.</p></div>
<div><div style="font-weight:700;font-size:13px;color:rgba(255,255,255,.6);margin-bottom:14px;text-transform:uppercase;letter-spacing:.05em;">Shop</div><div style="display:flex;flex-direction:column;gap:8px;"><a href="general.html" style="font-size:13px;color:rgba(255,255,255,.4);">General</a><a href="auto-parts.html" style="font-size:13px;color:rgba(255,255,255,.4);">Auto Parts</a><a href="tyre.html" style="font-size:13px;color:rgba(255,255,255,.4);">Tyre</a><a href="interior.html" style="font-size:13px;color:rgba(255,255,255,.4);">Interior</a><a href="accessories.html" style="font-size:13px;color:rgba(255,255,255,.4);">Accessories</a><a href="brands.html" style="font-size:13px;color:rgba(255,255,255,.4);">Brands</a></div></div>
<div><div style="font-weight:700;font-size:13px;color:rgba(255,255,255,.6);margin-bottom:14px;text-transform:uppercase;letter-spacing:.05em;">Company</div><div style="display:flex;flex-direction:column;gap:8px;"><a href="about.html" style="font-size:13px;color:rgba(255,255,255,.4);">About</a><a href="services.html" style="font-size:13px;color:rgba(255,255,255,.4);">Services</a><a href="testimonials.html" style="font-size:13px;color:rgba(255,255,255,.4);">Testimonials</a><a href="blog.html" style="font-size:13px;color:rgba(255,255,255,.4);">Blog</a><a href="contact.html" style="font-size:13px;color:rgba(255,255,255,.4);">Contact</a></div></div>
<div><div style="font-weight:700;font-size:13px;color:rgba(255,255,255,.6);margin-bottom:14px;text-transform:uppercase;letter-spacing:.05em;">Support</div><div style="display:flex;flex-direction:column;gap:8px;"><a href="cart.html" style="font-size:13px;color:rgba(255,255,255,.4);">Cart</a><a href="wishlist.html" style="font-size:13px;color:rgba(255,255,255,.4);">Wishlist</a><a href="terms.html" style="font-size:13px;color:rgba(255,255,255,.4);">Terms</a><a href="privacy.html" style="font-size:13px;color:rgba(255,255,255,.4);">Privacy</a><a href="returns.html" style="font-size:13px;color:rgba(255,255,255,.4);">Returns</a></div></div>
<div><div style="font-weight:700;font-size:13px;color:rgba(255,255,255,.6);margin-bottom:14px;text-transform:uppercase;letter-spacing:.05em;">We Accept</div><div style="display:flex;gap:8px;flex-wrap:wrap;"><span style="font-size:11px;color:rgba(255,255,255,.5);padding:4px 10px;border:1px solid rgba(255,255,255,.15);border-radius:4px;">Visa</span><span style="font-size:11px;color:rgba(255,255,255,.5);padding:4px 10px;border:1px solid rgba(255,255,255,.15);border-radius:4px;">Mastercard</span><span style="font-size:11px;color:rgba(255,255,255,.5);padding:4px 10px;border:1px solid rgba(255,255,255,.15);border-radius:4px;">PayPal</span><span style="font-size:11px;color:rgba(255,255,255,.5);padding:4px 10px;border:1px solid rgba(255,255,255,.15);border-radius:4px;">Apple Pay</span></div></div>
</div>
<div class="container" style="margin-top:40px;padding-top:20px;border-top:1px solid rgba(255,255,255,.08);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;"><span style="font-size:12px;color:rgba(255,255,255,.3);">2025 MC Auto Solutions. All rights reserved.</span><span style="font-size:12px;color:rgba(255,255,255,.3);">Registered in England &amp; Wales | VAT GB123456789</span></div>
</footer>
</body></html>`;

const catHero = (title, subtitle, image) => `
<div style="height:45vh;min-height:350px;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;margin-top:72px;">
<img src="${image}" alt="${title}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
<div style="position:absolute;inset:0;background:rgba(0,0,0,.5);"></div>
<div style="position:relative;z-index:2;text-align:center;padding:0 24px;">
<h1 style="font-weight:700;font-size:clamp(32px,5vw,56px);color:#FFF;line-height:1.1;letter-spacing:-.02em;">${title}</h1>
<p style="font-size:16px;color:rgba(255,255,255,.8);margin-top:12px;max-width:500px;margin:12px auto 0;">${subtitle}</p>
</div></div>`;

const prodCard = (name, price, oldPrice, image, tag) => `
<div style="background:#FFF;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);" class="card">
<div style="position:relative;aspect-ratio:1;background:#FAFAFA;padding:16px;">
<img src="${image}" alt="${name}" style="width:100%;height:100%;object-fit:contain;">
${tag ? `<span class="tag ${tag.startsWith('-') ? 'tag-red' : ''}" style="position:absolute;top:12px;left:12px;">${tag}</span>` : ''}
</div>
<div style="padding:14px;">
<div style="font-weight:600;font-size:15px;color:#1A1A1A;">${name}</div>
<div style="margin-top:8px;display:flex;align-items:center;gap:10px;"><span class="price">${price}</span>${oldPrice ? `<span class="old-price">${oldPrice}</span>` : ''}</div>
</div></div>`;

// ===== HOME =====
const cats = [
  {n:'GENERAL',i:'./images/cat-general.jpg',h:'general.html'},{n:'AUTO PARTS',i:'./images/cat-autoparts.jpg',h:'auto-parts.html'},{n:'TYRE',i:'./images/cat-tyre.jpg',h:'tyre.html'},{n:'INTERIOR',i:'./images/cat-interior.jpg',h:'interior.html'},{n:'ACCESSORIES',i:'./images/cat-accessories.jpg',h:'accessories.html'},
];

const home = head('MC Auto Solutions - Quality Auto Parts') + nav('index.html') + `
<!-- HERO -->
<section style="position:relative;min-height:calc(100vh - 72px);display:flex;align-items:center;overflow:hidden;margin-top:72px;">
<div style="position:absolute;inset:0;z-index:0;"><img src="./images/hero-car.png" alt="Transparent car" style="width:100%;height:100%;object-fit:cover;object-position:center right;"><div style="position:absolute;inset:0;background:linear-gradient(to right,rgba(255,255,255,.95) 0%,rgba(255,255,255,.75) 40%,rgba(255,255,255,.3) 65%,transparent 100%);"></div></div>
<div style="position:relative;z-index:2;max-width:1280px;margin:0 auto;padding:80px 24px;width:100%;">
<h1 style="font-weight:700;font-size:clamp(30px,4.5vw,52px);color:#1A1A1A;line-height:1.15;max-width:520px;">MC Auto Parts Solutions</h1>
<div style="width:60px;height:3px;background:#FF6B2B;margin:18px 0;"></div>
<p style="font-size:16px;color:#555;line-height:1.6;max-width:420px;">Quality Parts, Every Time. Trusted by 50,000+ UK garages and mechanics.</p>
<div style="margin-top:32px;max-width:480px;display:flex;"><input type="text" placeholder="Enter Reg Number" style="flex:1;height:48px;padding:0 16px;border:1px solid #ddd;border-right:none;border-radius:4px 0 0 4px;font-size:14px;outline:none;"><a href="auto-parts.html" class="btn-primary" style="border-radius:0 4px 4px 0;display:flex;align-items:center;">Find Parts</a></div>
<a href="auto-parts.html" class="btn-dark" style="margin-top:20px;">READ MORE</a>
</div></section>
<!-- CATEGORIES -->
<section style="padding:60px 0;"><div class="container"><div class="section-title">HOT CATEGORIES</div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;">${cats.map(c=>`<a href="${c.h}" style="display:block;text-decoration:none;overflow:hidden;border-radius:8px;position:relative;aspect-ratio:1;"><img src="${c.i}" alt="${c.n}" style="width:100%;height:100%;object-fit:cover;transition:transform .5s;" onmouseenter="this.style.transform='scale(1.05)'" onmouseleave="this.style.transform='scale(1)'"><div style="position:absolute;bottom:0;left:0;right:0;padding:14px;background:linear-gradient(transparent,rgba(0,0,0,.65));"><span style="font-weight:700;font-size:15px;color:#FFF;letter-spacing:.04em;">${c.n}</span></div></a>`).join('')}</div></div></section>
<!-- FEATURED -->
<section style="background:#F7F7F7;padding:60px 0;"><div class="container"><div class="section-title">FEATURED PRODUCTS</div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;">${prodCard('Brake Pad Set','£34.99','£44.99','./images/prod-brake.jpg','-22%')}${prodCard('Spark Plug Platinum','£12.49',null,'./images/prod-spark.jpg','New')}${prodCard('Air Filter Premium','£18.99','£24.99','./images/prod-air.jpg','-24%')}${prodCard('Oil Filter Pro','£9.99',null,'./images/prod-oil.jpg','Sale')}</div></div></section>
<!-- BEST SELLERS -->
<section style="padding:60px 0;"><div class="container"><div class="section-title">BEST SELLERS</div><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;">${prodCard('Timing Belt Kit','£79.99',null,'./images/prod-timing.jpg','Best Seller')}${prodCard('Clutch Kit','£129.99',null,'./images/prod-clutch.jpg',null)}${prodCard('Water Pump','£54.99',null,'./images/prod-waterpump.jpg','Popular')}${prodCard('Alternator','£149.99','£189.99','./images/prod-alternator.jpg','-21%')}</div></div></section>
<!-- BRANDS -->
<section style="background:#F7F7F7;padding:60px 0;"><div class="container"><div class="section-title">SHOP BY BRAND</div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:16px;">${[{n:'BMW',i:'./images/brand-bmw.jpg'},{n:'Audi',i:'./images/brand-audi.jpg'},{n:'Mercedes',i:'./images/brand-mercedes.jpg'},{n:'Volkswagen',i:'./images/brand-vw.jpg'},{n:'Ford',i:'./images/brand-ford.jpg'}].map(b=>`<a href="brands.html" style="display:block;background:#FFF;border-radius:8px;overflow:hidden;transition:box-shadow .3s,transform .3s;" onmouseenter="this.style.boxShadow='0 6px 20px rgba(0,0,0,.1)';this.style.transform='translateY(-4px)'" onmouseleave="this.style.boxShadow='none';this.style.transform='translateY(0)'"><div style="aspect-ratio:1;overflow:hidden;"><img src="${b.i}" alt="${b.n}" style="width:100%;height:100%;object-fit:cover;"></div><div style="padding:12px;text-align:center;font-weight:600;font-size:14px;color:#1A1A1A;">${b.n}</div></a>`).join('')}</div></div></section>
<!-- WHY -->
<section style="background:#F7F7F7;padding:60px 0;"><div class="container"><div class="section-title">WHY CHOOSE US</div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">${[{ic:'&#128666;',t:'Free Next-Day Delivery',d:'On orders over £50'},{ic:'&#128295;',t:'Expert Technical Support',d:'Certified mechanics'},{ic:'&#128260;',t:'30-Day Easy Returns',d:'No hassle returns'},{ic:'&#128274;',t:'Secure Payment',d:'256-bit SSL'},{ic:'&#128176;',t:'Price Match Guarantee',d:'Match any UK price'},{ic:'&#11088;',t:'Genuine & OEM Parts',d:'Quality-tested'}].map(r=>`<div style="display:flex;align-items:flex-start;gap:16px;padding:24px;background:#FFF;border-radius:8px;"><div style="font-size:32px;flex-shrink:0;">${r.ic}</div><div><div style="font-weight:700;font-size:15px;">${r.t}</div><div style="font-size:14px;color:#888;margin-top:4px;">${r.d}</div></div></div>`).join('')}</div></div></section>
<!-- NEWSLETTER -->
<section style="background:#FF6B2B;padding:60px 0;text-align:center;"><div style="max-width:600px;margin:0 auto;padding:0 24px;"><h2 style="font-weight:700;font-size:26px;color:#FFF;">STAY IN THE LOOP</h2><p style="font-size:15px;color:rgba(255,255,255,.85);margin-top:10px;">Get exclusive deals and maintenance tips.</p><form onsubmit="event.preventDefault();alert('Subscribed!');" style="margin-top:24px;display:flex;justify-content:center;flex-wrap:wrap;"><input type="email" placeholder="Enter your email" required style="width:300px;max-width:100%;height:48px;padding:0 16px;border:none;border-radius:4px 0 0 4px;font-size:14px;outline:none;"><button type="submit" style="height:48px;padding:0 24px;background:#1A1A1A;color:#FFF;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.08em;border:none;border-radius:0 4px 4px 0;cursor:pointer;">SUBSCRIBE</button></form></div></section>` + footer;

fs.writeFileSync(path.join(distDir, 'index.html'), home);
console.log('Generated: index.html');

// ===== CATEGORY PAGES =====
[
  {f:'general.html',t:'GENERAL',s:'Essential maintenance supplies for every vehicle.',h:'./images/prod-battery.jpg',p:[{n:'Engine Oil 5W-30',p:'£24.99',op:null,i:'./images/prod-oil.jpg',t:null},{n:'Car Battery 12V',p:'£89.99',op:'£109.99',i:'./images/prod-battery.jpg',t:'-18%'},{n:'Brake Disc & Caliper',p:'£64.99',op:null,i:'./images/prod-disc.jpg',t:'New'},{n:'Coolant 5L',p:'£14.99',op:null,i:'./images/prod-waterpump.jpg',t:null},{n:'Brake Fluid DOT4',p:'£9.99',op:null,i:'./images/prod-brake.jpg',t:null},{n:'Transmission Fluid',p:'£29.99',op:null,i:'./images/prod-oil.jpg',t:null},{n:'Power Steering Fluid',p:'£11.99',op:null,i:'./images/prod-oil.jpg',t:null},{n:'Oil Filter Standard',p:'£7.99',op:null,i:'./images/prod-oil.jpg',t:null}]},
  {f:'auto-parts.html',t:'AUTO PARTS',s:'High-quality engine components, braking systems, and drivetrain parts.',h:'./images/prod-brake.jpg',p:[{n:'Brake Pad Set',p:'£34.99',op:'£44.99',i:'./images/prod-brake.jpg',t:'-22%'},{n:'Spark Plug Platinum',p:'£12.49',op:null,i:'./images/prod-spark.jpg',t:'New'},{n:'Air Filter Premium',p:'£18.99',op:'£24.99',i:'./images/prod-air.jpg',t:'-24%'},{n:'Oil Filter Pro',p:'£9.99',op:null,i:'./images/prod-oil.jpg',t:'Sale'},{n:'Timing Belt Kit',p:'£79.99',op:null,i:'./images/prod-timing.jpg',t:'Best Seller'},{n:'Clutch Kit',p:'£129.99',op:null,i:'./images/prod-clutch.jpg',t:null},{n:'Water Pump',p:'£54.99',op:null,i:'./images/prod-waterpump.jpg',t:'Popular'},{n:'Alternator',p:'£149.99',op:'£189.99',i:'./images/prod-alternator.jpg',t:'-21%'},{n:'Brake Disc Upgrade',p:'£64.99',op:null,i:'./images/prod-disc.jpg',t:'New'},{n:'Suspension Kit',p:'£199.99',op:null,i:'./images/prod-suspension.jpg',t:'New'}]},
  {f:'tyre.html',t:'TYRE',s:'Premium tyres for all seasons and vehicle types.',h:'./images/prod-tyre1.jpg',p:[{n:'All-Season Tyre 205/55R16',p:'£59.99',op:'£74.99',i:'./images/prod-tyre1.jpg',t:'-20%'},{n:'Performance Tyre 225/45R17',p:'£89.99',op:null,i:'./images/prod-tyre1.jpg',t:'New'},{n:'Winter Tyre 195/65R15',p:'£54.99',op:null,i:'./images/prod-tyre1.jpg',t:null},{n:'SUV Tyre 255/55R18',p:'£109.99',op:'£129.99',i:'./images/prod-tyre1.jpg',t:'-15%'},{n:'Run Flat Tyre 225/50R17',p:'£124.99',op:null,i:'./images/prod-tyre1.jpg',t:null},{n:'Eco Tyre 185/65R15',p:'£44.99',op:null,i:'./images/prod-tyre1.jpg',t:'Eco'},{n:'Tyre Pressure Sensor',p:'£24.99',op:null,i:'./images/prod-tyre1.jpg',t:null},{n:'Tyre Repair Kit',p:'£14.99',op:null,i:'./images/prod-tyre1.jpg',t:null}]},
  {f:'interior.html',t:'INTERIOR',s:'Comfort, protection, and tech accessories for your vehicle interior.',h:'./images/cat-interior.jpg',p:[{n:'Leather Seat Covers',p:'£129.99',op:null,i:'./images/cat-interior.jpg',t:null},{n:'Dashboard Camera',p:'£79.99',op:null,i:'./images/cat-interior.jpg',t:'New'},{n:'Floor Mats Premium',p:'£39.99',op:null,i:'./images/cat-interior.jpg',t:null},{n:'Steering Wheel Cover',p:'£19.99',op:null,i:'./images/cat-interior.jpg',t:null},{n:'Car Air Freshener Set',p:'£9.99',op:null,i:'./images/cat-interior.jpg',t:null},{n:'Boot Liner',p:'£34.99',op:null,i:'./images/cat-interior.jpg',t:null},{n:'Window Sunshades',p:'£14.99',op:null,i:'./images/cat-interior.jpg',t:null},{n:'Phone Mount',p:'£12.99',op:null,i:'./images/cat-interior.jpg',t:null}]},
  {f:'accessories.html',t:'ACCESSORIES',s:'Everything else you need for your vehicle.',h:'./images/prod-suspension.jpg',p:[{n:'Suspension Kit',p:'£199.99',op:null,i:'./images/prod-suspension.jpg',t:'New'},{n:'Brake Disc Upgrade',p:'£89.99',op:null,i:'./images/prod-disc.jpg',t:null},{n:'Towing Hook',p:'£49.99',op:null,i:'./images/cat-general.jpg',t:null},{n:'Car Cover',p:'£34.99',op:null,i:'./images/cat-general.jpg',t:null},{n:'Jump Starter',p:'£59.99',op:null,i:'./images/prod-battery.jpg',t:null},{n:'Pressure Washer',p:'£79.99',op:null,i:'./images/cat-general.jpg',t:null},{n:'Vacuum Cleaner 12V',p:'£24.99',op:null,i:'./images/cat-general.jpg',t:null},{n:'LED Light Bar',p:'£44.99',op:null,i:'./images/cat-general.jpg',t:null}]},
].forEach(cat => {
  const html = head(`${cat.t} - MC Auto Solutions`) + nav(cat.f) + catHero(cat.t, cat.s, cat.h) + `
<section style="padding:80px 0;"><div class="container"><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:20px;">${cat.p.map(pr=>prodCard(pr.n,pr.p,pr.op,pr.i,pr.t)).join('')}</div></div></section>` + footer;
  fs.writeFileSync(path.join(distDir, cat.f), html);
  console.log(`Generated: ${cat.f}`);
});

// ===== BRANDS =====
const brandsHTML = head('Shop by Brand - MC Auto Solutions') + nav('brands.html') + catHero('SHOP BY BRAND', 'Find parts for your specific make and model.', './images/brand-bmw.jpg') + `
<section style="padding:60px 0;"><div class="container"><div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:20px;">
${[{n:'BMW',m:['3 Series','5 Series','X3','X5','1 Series'],i:'./images/brand-bmw.jpg'},{n:'Audi',m:['A3','A4','A6','Q5','Q7'],i:'./images/brand-audi.jpg'},{n:'Mercedes',m:['C-Class','E-Class','A-Class','GLC','GLE'],i:'./images/brand-mercedes.jpg'},{n:'Volkswagen',m:['Golf','Polo','Passat','Tiguan','T-Roc'],i:'./images/brand-vw.jpg'},{n:'Ford',m:['Focus','Fiesta','Kuga','Puma','Mondeo'],i:'./images/brand-ford.jpg'},{n:'Toyota',m:['Corolla','Yaris','RAV4','C-HR','Camry'],i:'./images/cat-general.jpg'},{n:'Vauxhall',m:['Corsa','Astra','Mokka','Crossland','Grandland'],i:'./images/cat-general.jpg'},{n:'Renault',m:['Clio','Megane','Captur','Arkana','Austral'],i:'./images/cat-general.jpg'},{n:'Peugeot',m:['208','308','3008','2008','508'],i:'./images/cat-general.jpg'},{n:'Nissan',m:['Qashqai','Juke','Micra','X-Trail','Leaf'],i:'./images/cat-general.jpg'},{n:'Hyundai',m:['i30','i20','Tucson','Kona','Bayon'],i:'./images/cat-general.jpg'},{n:'Kia',m:['Sportage','Ceed','Picanto','Niro','Sorento'],i:'./images/cat-general.jpg'}].map(b=>`<div style="background:#FFF;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);" class="card"><div style="display:flex;align-items:center;gap:16px;padding:20px;border-bottom:1px solid #eee;"><img src="${b.i}" alt="${b.n}" style="width:56px;height:56px;object-fit:cover;border-radius:8px;"><span style="font-weight:700;font-size:18px;">${b.n}</span></div><div style="padding:16px 20px;display:flex;flex-wrap:wrap;gap:8px;">${b.m.map(m=>`<span style="font-size:13px;color:#555;padding:6px 12px;background:#F7F7F7;border-radius:4px;">${m}</span>`).join('')}</div></div>`).join('')}
</div></div></section>` + footer;
fs.writeFileSync(path.join(distDir, 'brands.html'), brandsHTML);
console.log('Generated: brands.html');

// ===== ABOUT =====
const aboutHTML = head('About Us - MC Auto Solutions') + nav('about.html') + `
<div style="background:#1A1A1A;padding:140px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(32px,5vw,52px);color:#FFF;line-height:1.1;">ABOUT US</h1><p style="font-size:16px;color:rgba(255,255,255,.7);margin-top:12px;max-width:500px;margin:12px auto 0;">Trusted by mechanics and garages across the UK since 2013.</p></div>
<section style="padding:80px 0;"><div class="container">
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px;margin-bottom:60px;">
${[{n:'50,000+',l:'UK Garages Served'},{n:'12',l:'Years in Business'},{n:'98%',l:'Customer Satisfaction'},{n:'24h',l:'Delivery Time'}].map(s=>`<div style="text-align:center;padding:28px;background:#F7F7F7;border-radius:12px;"><div style="font-weight:700;font-size:32px;color:#FF6B2B;">${s.n}</div><div style="font-size:13px;color:#6B6B6B;margin-top:6px;text-transform:uppercase;letter-spacing:.06em;">${s.l}</div></div>`).join('')}
</div>
<div style="max-width:700px;margin:0 auto;text-align:center;">
<h2 style="font-weight:700;font-size:28px;color:#1A1A1A;margin-bottom:20px;">Our Story</h2>
<p style="font-size:16px;color:#6B6B6B;line-height:1.7;margin-bottom:20px;">MC Auto Solutions started in a small garage in Birmingham with a simple mission: provide mechanics with quality parts at fair prices. What began as a local supplier has grown into one of the UK's most trusted auto parts distributors, serving over 50,000 garages nationwide.</p>
<p style="font-size:16px;color:#6B6B6B;line-height:1.7;margin-bottom:20px;">Every part in our catalogue is rigorously tested and backed by our quality guarantee. We work directly with leading manufacturers to cut out the middleman, passing those savings on to you.</p>
<p style="font-size:16px;color:#6B6B6B;line-height:1.7;">Our team includes certified mechanics who understand the challenges you face. When you call us, you speak to someone who knows the difference between a control arm and a wishbone.</p>
</div>
</div></section>` + footer;
fs.writeFileSync(path.join(distDir, 'about.html'), aboutHTML);
console.log('Generated: about.html');

// ===== SERVICES =====
const servicesHTML = head('Our Services - MC Auto Solutions') + nav('services.html') + `
<div style="background:#1A1A1A;padding:140px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(32px,5vw,52px);color:#FFF;line-height:1.1;">OUR SERVICES</h1><p style="font-size:16px;color:rgba(255,255,255,.7);margin-top:12px;max-width:500px;margin:12px auto 0;">Everything you need to keep your garage running smoothly.</p></div>
<section style="padding:80px 0;"><div class="container">
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;margin-bottom:60px;">
${[{t:'Next-Day Delivery',d:'Order before 3pm and receive your parts the next working day anywhere in the UK. Free delivery on orders over £50.'},{t:'Expert Support',d:'Our technical team includes certified mechanics who can help you find the right part for any make or model.'},{t:'Bulk Ordering',d:'Garage owners and fleet managers get exclusive pricing on volume orders. Dedicated account manager included.'}].map(s=>`<div style="padding:36px;background:#F7F7F7;border-radius:12px;text-align:center;"><h3 style="font-weight:700;font-size:20px;color:#1A1A1A;margin-bottom:10px;">${s.t}</h3><p style="font-size:15px;color:#6B6B6B;line-height:1.6;">${s.d}</p></div>`).join('')}
</div>
<div><h2 style="font-weight:700;font-size:28px;text-align:center;margin-bottom:36px;">ADDITIONAL SERVICES</h2>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;">
${[{t:'Part Matching',d:'Send us your VIN or registration and we will identify the exact part you need.'},{t:'Warranty Claims',d:'All parts come with a minimum 12-month warranty. Claims processed within 48 hours.'},{t:'Returns & Exchanges',d:'30-day no-hassle returns on unused parts in original packaging.'},{t:'Fitment Guarantee',d:'If a part does not fit due to our recommendation, we replace it free of charge.'}].map(s=>`<div style="padding:28px;border:1px solid #eee;border-radius:10px;"><h4 style="font-weight:700;font-size:18px;margin-bottom:8px;">${s.t}</h4><p style="font-size:14px;color:#6B6B6B;line-height:1.6;">${s.d}</p></div>`).join('')}
</div></div>
</div></section>` + footer;
fs.writeFileSync(path.join(distDir, 'services.html'), servicesHTML);
console.log('Generated: services.html');

// ===== TESTIMONIALS =====
const testHTML = head('Testimonials - MC Auto Solutions') + nav('testimonials.html') + `
<div style="background:#1A1A1A;padding:140px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(32px,5vw,52px);color:#FFF;line-height:1.1;">TESTIMONIALS</h1><p style="font-size:16px;color:rgba(255,255,255,.7);margin-top:12px;max-width:500px;margin:12px auto 0;">Hear from the mechanics and garage owners who trust us every day.</p></div>
<section style="background:#F7F7F7;padding:80px 0;"><div class="container"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:20px;">
${[{q:"MC Auto Solutions has been our go-to supplier for 3 years. The quality is consistently excellent and delivery is always on time.",n:"James Wilson",r:"Garage Owner"},{q:"Best prices on brake pads and filters. Their customer service team knows their stuff.",n:"Sarah Chen",r:"Independent Mechanic"},{q:"I switched from my previous supplier and haven't looked back. Parts arrive next day.",n:"David O'Brien",r:"Fleet Manager"},{q:"The bulk ordering discounts have saved our garage thousands.",n:"Amira Patel",r:"Workshop Director"},{q:"Being able to get parts next day means I never have to turn down a job.",n:"Tom Henderson",r:"Mobile Mechanic"},{q:"Their part matching service is incredible. Sent them a VIN, got the exact brake discs.",n:"Lisa O'Connor",r:"Service Manager"}].map(t=>`<div style="background:#FFF;border-radius:12px;padding:32px;box-shadow:0 2px 12px rgba(0,0,0,.04);"><div style="font-size:36px;color:#FF6B2B;line-height:1;margin-bottom:12px;">&ldquo;</div><p style="font-size:15px;color:#6B6B6B;line-height:1.7;">${t.q}</p><div style="margin-top:20px;font-weight:600;font-size:15px;color:#1A1A1A;">${t.n}</div><div style="font-size:13px;color:#aaa;">${t.r}</div></div>`).join('')}
</div></div></section>` + footer;
fs.writeFileSync(path.join(distDir, 'testimonials.html'), testHTML);
console.log('Generated: testimonials.html');

// ===== CONTACT =====
const contactHTML = head('Contact Us - MC Auto Solutions') + nav('contact.html') + `
<div style="background:#1A1A1A;padding:140px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(32px,5vw,52px);color:#FFF;line-height:1.1;">CONTACT US</h1><p style="font-size:16px;color:rgba(255,255,255,.7);margin-top:12px;max-width:500px;margin:12px auto 0;">Get in touch — we are here to help with any questions.</p></div>
<section style="padding:80px 0;"><div class="container" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:60px;">
<div>
<h2 style="font-weight:700;font-size:24px;margin-bottom:28px;">Get in Touch</h2>
<div style="display:flex;flex-direction:column;gap:20px;">
<div><div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#FF6B2B;margin-bottom:6px;">Phone</div><div style="font-size:15px;">0800 123 4567</div><div style="font-size:13px;color:#aaa;">Mon-Fri 8am-6pm, Sat 9am-1pm</div></div>
<div><div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#FF6B2B;margin-bottom:6px;">Email</div><div style="font-size:15px;">info@mcautosolutions.co.uk</div></div>
<div><div style="font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.08em;color:#FF6B2B;margin-bottom:6px;">Address</div><div style="font-size:15px;line-height:1.6;">42 Industrial Way<br>Birmingham B12 8XY<br>United Kingdom</div></div>
</div>
</div>
<div>
<h2 style="font-weight:700;font-size:24px;margin-bottom:28px;">Send a Message</h2>
<form onsubmit="event.preventDefault();alert('Thank you! We will reply within 24 hours.');this.reset();" style="display:flex;flex-direction:column;gap:14px;">
<input type="text" placeholder="Your Name" required style="height:46px;padding:0 14px;border:1px solid #e0e0e0;border-radius:6px;font-size:14px;outline:none;" onfocus="this.style.borderColor='#FF6B2B'" onblur="this.style.borderColor='#e0e0e0'">
<input type="email" placeholder="Email Address" required style="height:46px;padding:0 14px;border:1px solid #e0e0e0;border-radius:6px;font-size:14px;outline:none;" onfocus="this.style.borderColor='#FF6B2B'" onblur="this.style.borderColor='#e0e0e0'">
<input type="tel" placeholder="Phone Number (optional)" style="height:46px;padding:0 14px;border:1px solid #e0e0e0;border-radius:6px;font-size:14px;outline:none;" onfocus="this.style.borderColor='#FF6B2B'" onblur="this.style.borderColor='#e0e0e0'">
<select required style="height:46px;padding:0 14px;border:1px solid #e0e0e0;border-radius:6px;font-size:14px;outline:none;background:#FFF;" onfocus="this.style.borderColor='#FF6B2B'" onblur="this.style.borderColor='#e0e0e0'"><option value="">Select Subject</option><option>Parts Inquiry</option><option>Order Question</option><option>Delivery Issue</option><option>Returns</option><option>Bulk Order</option><option>Other</option></select>
<textarea placeholder="Your Message" required rows="5" style="padding:12px 14px;border:1px solid #e0e0e0;border-radius:6px;font-size:14px;outline:none;resize:vertical;" onfocus="this.style.borderColor='#FF6B2B'" onblur="this.style.borderColor='#e0e0e0'"></textarea>
<button type="submit" class="btn-primary" style="border-radius:9999px;">SEND MESSAGE</button>
</form>
</div>
</div></section>` + footer;
fs.writeFileSync(path.join(distDir, 'contact.html'), contactHTML);
console.log('Generated: contact.html');

// ===== BLOG =====
const blogHTML = head('Blog & Guides - MC Auto Solutions') + nav('blog.html') + `
<div style="background:#1A1A1A;padding:140px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(32px,5vw,52px);color:#FFF;line-height:1.1;">BLOG &amp; GUIDES</h1><p style="font-size:16px;color:rgba(255,255,255,.7);margin-top:12px;max-width:500px;margin:12px auto 0;">Expert advice, maintenance tips and buying guides.</p></div>
<section style="padding:60px 0;"><div class="container">
<div style="display:flex;gap:8px;margin-bottom:32px;flex-wrap:wrap;">${['All','Guides','Maintenance','Electric','DIY','Seasonal'].map((c,i)=>`<span style="padding:8px 16px;border:${i===0?'none':'1px solid #ddd'};background:${i===0?'#FF6B2B':'#FFF'};color:${i===0?'#FFF':'#555'};font-size:13px;font-weight:600;border-radius:4px;cursor:pointer;">${c}</span>`).join('')}</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:20px;">
${[{t:'How to Choose the Right Brake Pads',d:'May 15, 2025',c:'Guides',r:'5 min',e:'A complete guide to selecting brake pads for your vehicle...'},{t:'Signs Your Timing Belt Needs Replacement',d:'May 10, 2025',c:'Maintenance',r:'4 min',e:'Learn the warning signs before it is too late...'},{t:'Understanding EV Battery Components',d:'May 5, 2025',c:'Electric',r:'7 min',e:'What you need to know about EV battery systems...'},{t:'How to Replace an Air Filter in 5 Minutes',d:'Apr 28, 2025',c:'DIY',r:'3 min',e:'Replacing your air filter is one of the easiest tasks...'},{t:'The Complete Guide to Oil Filters',d:'Apr 20, 2025',c:'Guides',r:'6 min',e:'Not all oil filters are created equal. Learn about the different types...'},{t:'Winter Car Care: Essential Tips',d:'Apr 10, 2025',c:'Seasonal',r:'5 min',e:'Cold weather can be tough on your vehicle. Here are essential tips...'}].map(p=>`<div style="padding:28px;border:1px solid #eee;border-radius:8px;transition:border-color .3s,box-shadow .3s;cursor:pointer;" onmouseenter="this.style.borderColor='#FF6B2B';this.style.boxShadow='0 4px 16px rgba(0,0,0,.06)'" onmouseleave="this.style.borderColor='#eee';this.style.boxShadow='none'"><div style="display:flex;gap:12px;margin-bottom:12px;"><span style="font-size:11px;font-weight:700;color:#FF6B2B;text-transform:uppercase;letter-spacing:.06em;">${p.c}</span><span style="font-size:11px;color:#aaa;">${p.r} read</span></div><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;line-height:1.4;">${p.t}</h2><p style="font-size:14px;color:#888;margin-top:10px;line-height:1.6;">${p.e}</p><div style="font-size:12px;color:#aaa;margin-top:14px;">${p.d}</div></div>`).join('')}
</div>
</div></section>` + footer;
fs.writeFileSync(path.join(distDir, 'blog.html'), blogHTML);
console.log('Generated: blog.html');

// ===== CART =====
const cartHTML = head('Shopping Cart - MC Auto Solutions') + nav('cart.html') + `
<section style="margin-top:72px;min-height:60vh;"><div class="container" style="padding:40px 24px;">
<h1 style="font-weight:700;font-size:24px;margin-bottom:32px;">Shopping Cart (3 items)</h1>
<div style="display:grid;grid-template-columns:2fr 1fr;gap:40px;" class="grid-2">
<div>
${[{n:'Brake Pad Set',p:34.99,q:2,i:'./images/prod-brake.jpg'},{n:'Oil Filter Pro',p:9.99,q:1,i:'./images/prod-oil.jpg'},{n:'Spark Plug Platinum',p:12.49,q:4,i:'./images/prod-spark.jpg'}].map(item=>`<div style="display:flex;gap:16px;padding:20px 0;border-bottom:1px solid #eee;">
<div style="width:80px;height:80px;background:#FAFAFA;border-radius:6px;padding:8px;flex-shrink:0;"><img src="${item.i}" style="width:100%;height:100%;object-fit:contain;"></div>
<div style="flex:1;"><div style="font-weight:600;font-size:15px;color:#1A1A1A;">${item.n}</div><div style="font-weight:700;font-size:15px;color:#FF6B2B;margin-top:6px;">&pound;${item.p.toFixed(2)}</div><div style="display:flex;align-items:center;gap:12px;margin-top:10px;"><div style="display:flex;align-items:center;border:1px solid #ddd;border-radius:4px;overflow:hidden;"><span style="width:32px;height:32px;background:#F7F7F7;text-align:center;line-height:32px;font-size:13px;">${item.q}</span></div></div></div>
<div style="font-weight:700;font-size:16px;">&pound;${(item.p*item.q).toFixed(2)}</div>
</div>`).join('')}
</div>
<div style="background:#F7F7F7;border-radius:8px;padding:24px;height:fit-content;">
<h2 style="font-weight:700;font-size:18px;margin-bottom:20px;">Order Summary</h2>
<div style="display:flex;justify-content:space-between;margin-bottom:12px;font-size:14px;color:#555;"><span>Subtotal</span><span>&pound;146.93</span></div>
<div style="display:flex;justify-content:space-between;margin-bottom:12px;font-size:14px;color:#555;"><span>Shipping</span><span style="color:#2ecc71;">FREE</span></div>
<div style="border-top:1px solid #ddd;padding-top:12px;display:flex;justify-content:space-between;font-weight:700;font-size:18px;"><span>Total</span><span>&pound;146.93</span></div>
<button onclick="alert('Proceeding to checkout...')" class="btn-primary" style="width:100%;margin-top:20px;border-radius:4px;">PROCEED TO CHECKOUT</button>
<a href="auto-parts.html" style="display:block;text-align:center;margin-top:12px;font-size:13px;color:#555;">&larr; Continue Shopping</a>
</div>
</div>
</div></section>` + footer;
fs.writeFileSync(path.join(distDir, 'cart.html'), cartHTML);
console.log('Generated: cart.html');

// ===== WISHLIST =====
const wishHTML = head('My Wishlist - MC Auto Solutions') + nav('wishlist.html') + `
<section style="margin-top:72px;min-height:60vh;"><div class="container" style="padding:40px 24px;">
<h1 style="font-weight:700;font-size:24px;margin-bottom:32px;">My Wishlist (3)</h1>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:20px;">
${[{n:'Brake Pad Set',p:'£34.99',i:'./images/prod-brake.jpg',s:true},{n:'Air Filter Premium',p:'£18.99',i:'./images/prod-air.jpg',s:true},{n:'Water Pump',p:'£54.99',i:'./images/prod-waterpump.jpg',s:false}].map(item=>`<div style="background:#FFF;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);">
<div style="position:relative;aspect-ratio:1;background:#FAFAFA;padding:16px;"><img src="${item.i}" style="width:100%;height:100%;object-fit:contain;"></div>
<div style="padding:14px;"><div style="font-weight:600;font-size:15px;color:#1A1A1A;">${item.n}</div><div style="font-weight:700;font-size:16px;color:#FF6B2B;margin-top:6px;">${item.p}</div><div style="font-size:12px;color:${item.s?'#2ecc71':'#e74c3c'};margin-top:4px;font-weight:600;">${item.s?'In Stock':'Out of Stock'}</div><a href="cart.html" style="display:block;margin-top:12px;text-align:center;padding:10px;background:${item.s?'#1A1A1A':'#ddd'};color:#fff;font-weight:600;font-size:12px;text-transform:uppercase;letter-spacing:.05em;text-decoration:none;border-radius:4px;">${item.s?'MOVE TO CART':'UNAVAILABLE'}</a></div>
</div>`).join('')}
</div>
</div></section>` + footer;
fs.writeFileSync(path.join(distDir, 'wishlist.html'), wishHTML);
console.log('Generated: wishlist.html');

// ===== LEGAL PAGES =====
[
  {f:'terms.html',t:'TERMS & CONDITIONS',s:[{t:'1. General',x:'These terms govern your use of the MC Auto Solutions website and the purchase of products from our online store.'},{t:'2. Ordering & Payment',x:'All orders are subject to availability and confirmation. Payment by card or PayPal. Prices include VAT.'},{t:'3. Delivery',x:'Next-working-day delivery on orders before 3pm. FREE on orders over £50.'},{t:'4. Returns',x:'30 days to return unused items in original packaging for a full refund.'},{t:'5. Warranty',x:'12-month warranty against manufacturing defects.'},{t:'6. Governing Law',x:'These terms are governed by the laws of England and Wales.'}]},
  {f:'privacy.html',t:'PRIVACY POLICY',s:[{t:'1. Information We Collect',x:'We collect personal information when placing orders, creating accounts, or contacting us.'},{t:'2. How We Use It',x:'We use your information to process orders, deliver products, and provide support.'},{t:'3. Data Security',x:'All payment transactions are encrypted using SSL technology.'},{t:'4. Your Rights',x:'Under GDPR, you have the right to access, correct, delete, or restrict processing of your data.'},{t:'5. Cookies',x:'Our website uses cookies to improve browsing experience.'},{t:'6. Contact',x:'Contact privacy@mcautosolutions.co.uk for any privacy questions.'}]},
  {f:'returns.html',t:'RETURNS & REFUNDS',s:[{t:'Return Eligibility',x:'Return any item within 30 days of delivery for a full refund. Items must be unused in original packaging.'},{t:'How to Return',x:'Contact our team for a prepaid return label. Pack securely and drop at any Post Office.'},{t:'Faulty Items',x:'Faulty items can be returned within 12 months for replacement or refund.'},{t:'Refund Processing',x:'Refunds processed within 5-10 working days to the original payment method.'},{t:'Exchanges',x:'Place a new order and return the original for a refund.'},{t:'Non-Returnable Items',x:'Custom-ordered parts and fitted electrical components cannot be returned unless faulty.'}]},
].forEach(page => {
  const html = head(`${page.t} - MC Auto Solutions`) + nav(page.f) + `
<div style="background:#1A1A1A;padding:120px 0 60px;text-align:center;margin-top:72px;"><h1 style="font-weight:700;font-size:clamp(28px,4vw,44px);color:#FFF;">${page.t}</h1></div>
<section style="padding:60px 0;"><div class="container" style="max-width:800px;">${page.s.map(s=>`<div style="margin-bottom:28px;"><h2 style="font-weight:700;font-size:18px;color:#1A1A1A;margin-bottom:10px;">${s.t}</h2><p style="font-size:15px;color:#555;line-height:1.7;">${s.x}</p></div>`).join('')}</div></section>` + footer;
  fs.writeFileSync(path.join(distDir, page.f), html);
  console.log(`Generated: ${page.f}`);
});

console.log('\n=== ALL 20 HTML PAGES GENERATED ===');
