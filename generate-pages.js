const fs = require('fs');
const path = require('path');

const pages = [
  { file: 'index.html', route: '/', title: 'MC Auto Solutions - Quality Auto Parts' },
  { file: 'general.html', route: '#/general', title: 'General - MC Auto Solutions' },
  { file: 'auto-parts.html', route: '#/auto-parts', title: 'Auto Parts - MC Auto Solutions' },
  { file: 'tyre.html', route: '#/tyre', title: 'Tyre - MC Auto Solutions' },
  { file: 'interior.html', route: '#/interior', title: 'Interior - MC Auto Solutions' },
  { file: 'accessories.html', route: '#/accessories', title: 'Accessories - MC Auto Solutions' },
  { file: 'brands.html', route: '#/brands', title: 'Shop by Brand - MC Auto Solutions' },
  { file: 'about.html', route: '#/about', title: 'About Us - MC Auto Solutions' },
  { file: 'services.html', route: '#/services', title: 'Our Services - MC Auto Solutions' },
  { file: 'testimonials.html', route: '#/testimonials', title: 'Testimonials - MC Auto Solutions' },
  { file: 'contact.html', route: '#/contact', title: 'Contact Us - MC Auto Solutions' },
  { file: 'blog.html', route: '#/blog', title: 'Blog & Guides - MC Auto Solutions' },
  { file: 'cart.html', route: '#/cart', title: 'Shopping Cart - MC Auto Solutions' },
  { file: 'wishlist.html', route: '#/wishlist', title: 'My Wishlist - MC Auto Solutions' },
  { file: 'terms.html', route: '#/terms', title: 'Terms & Conditions - MC Auto Solutions' },
  { file: 'privacy.html', route: '#/privacy', title: 'Privacy Policy - MC Auto Solutions' },
  { file: 'returns.html', route: '#/returns', title: 'Returns & Refunds - MC Auto Solutions' },
];

const distDir = path.resolve(__dirname, '../dist');

pages.forEach(({ file, route, title }) => {
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="MC Auto Solutions - Quality auto parts for every vehicle. Trusted by 50,000+ UK garages." />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet" />
    <script>
      // Redirect to hash route for SPA routing
      if (!window.location.hash && '${route}' !== '/') {
        window.location.replace('${route}');
      }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/index.js"></script>
    <link rel="stylesheet" href="./assets/index.css" />
  </body>
</html>`;

  fs.writeFileSync(path.join(distDir, file), html);
  console.log(`Generated: ${file}`);
});

console.log('\nAll HTML pages generated successfully!');
