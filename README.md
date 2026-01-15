# The Classic Cut - Barbershop Website

A sophisticated and visually stunning website for a professional barbershop with modern design and responsive layout.

## Features

✨ **Hero Section** - Full-page banner with call-to-action button
📖 **About Section** - Business history, values, and high-quality imagery
💇 **Services Section** - Complete service list with pricing and icons
🖼️ **Gallery Section** - Rotating carousel showcasing work and atmosphere
⭐ **Testimonials** - Customer reviews with ratings
📅 **Booking Section** - Appointment booking form with detailed information
📍 **Contact Section** - Map integration and contact form
🔗 **Footer** - Social media links and opening hours

## Design Highlights

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Modern CSS animations and transitions
- ✅ Accessible with semantic HTML
- ✅ Cross-browser compatible
- ✅ Optimized performance with lazy loading
- ✅ Professional color scheme (Gold #d4af37 & Dark #1a1a1a)

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Preet0702/barbershop-website.git
   cd barbershop-website
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - No build process or dependencies required!

3. **Customize content**
   - Edit `index.html` to update text, prices, and contact information
   - Replace placeholder images in the `images/` folder
   - Modify colors in `css/styles.css` (see CSS Variables section)

## File Structure

```
barbershop-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and responsive design
├── js/
│   └── script.js       # Interactive features and animations
└── images/             # Image assets (replace with your own)
    ├── barbershop-interior.jpg
    ├── barber-working.jpg
    ├── gallery-1.jpg through gallery-6.jpg
    └── client-1.jpg through client-3.jpg
```

## Customization Guide

### 1. Update Business Information

**In `index.html`, search and replace:**
- `The Classic Cut` → Your barbershop name
- `(555) 123-4567` → Your phone number
- `info@theclassiccut.com` → Your email
- `123 Main Street...` → Your address
- Opening hours in the booking and footer sections

### 2. Modify Services & Pricing

Find the Services Section in `index.html` and update:
```html
<h3>Classic Haircut</h3>
<p>Your service description</p>
<p class="price">$35</p>
```

### 3. Replace Images

Replace the placeholder SVG images in the `images/` folder with actual photos:
- **barbershop-interior.jpg** - Interior photo (800x600px recommended)
- **barber-working.jpg** - Action shot of barber (800x600px)
- **gallery-1.jpg to gallery-6.jpg** - Gallery photos (900x500px)
- **client-1.jpg to client-3.jpg** - Client photos (60x60px, circular)

### 4. Change Colors

Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #d4af37;    /* Gold accent color */
    --secondary-color: #1a1a1a;  /* Dark background */
    --text-color: #333;          /* Main text */
    /* ... more variables ... */
}
```

### 5. Update Social Media Links

In `index.html`, find the footer section and update:
```html
<a href="https://facebook.com/yourpage">
<a href="https://instagram.com/yourpage">
<a href="https://twitter.com/yourpage">
```

## Booking System Integration

The booking form currently displays a success message. To integrate with a booking system:

### Option 1: Calendly Integration
Replace the booking form section with Calendly embed:
```html
<div class="calendly-inline-widget" data-url="https://calendly.com/your-link"></div>
<script src="https://assets.calendly.com/assets/external/widget.js"></script>
```

### Option 2: Custom Backend API
Modify `js/script.js` to send form data to your API:
```javascript
bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData.entries());
    
    const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    
    // Handle response...
});
```

## Map Integration

Update the Google Maps embed in the Contact Section:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your address
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the iframe in `index.html` Contact Section

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Optimize images before uploading (use tools like TinyPNG)
- Recommended image formats: WebP for modern browsers, JPEG fallback
- Keep individual images under 200KB for fast loading

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast mode support
- Screen reader friendly
- Focus indicators for all interactive elements

## Deployment

### GitHub Pages
1. Go to repository Settings → Pages
2. Select branch: `main`
3. Save and wait for deployment
4. Access at: `https://yourusername.github.io/barbershop-website`

### Other Hosting Options
- **Netlify**: Drag and drop the folder to Netlify
- **Vercel**: Connect GitHub repository
- **Traditional Hosting**: Upload files via FTP to your web host

## Support & Customization

For extensive customization needs:
- Hire a web developer
- Use browser DevTools to inspect and modify elements
- Refer to [MDN Web Docs](https://developer.mozilla.org/) for HTML/CSS/JS reference

## License

This project is open source and available for commercial use.

## Credits

- Font: Playfair Display & Roboto from Google Fonts
- Icons: Custom SVG icons
- Design: Modern barbershop aesthetic with gold and dark theme

---

**Need Help?** Open an issue in the GitHub repository or consult the code comments for guidance.