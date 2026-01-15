// ==================== 
// Navigation functionality
// ==================== 
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-menu a');

// Scroll effect for navbar
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = mobileMenuToggle.querySelectorAll('span');
    spans[0].style.transform = navMenu.classList.contains('active') ? 'rotate(45deg) translate(6px, 6px)' : 'none';
    spans[1].style.opacity = navMenu.classList.contains('active') ? '0' : '1';
    spans[2].style.transform = navMenu.classList.contains('active') ? 'rotate(-45deg) translate(6px, -6px)' : 'none';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        
        // Reset hamburger icon
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== 
// Gallery Carousel
// ==================== 
const galleryContainer = document.getElementById('galleryContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const galleryDots = document.getElementById('galleryDots');
const galleryItems = document.querySelectorAll('.gallery-item');

let currentSlide = 0;
const totalSlides = galleryItems.length;

// Create dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToSlide(i));
    galleryDots.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateGallery() {
    // Update active states
    galleryItems.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentSlide) {
            item.classList.add('active');
        }
    });

    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });

    // Transform the gallery container
    galleryContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateGallery();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateGallery();
}

function goToSlide(index) {
    currentSlide = index;
    updateGallery();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-play carousel
let autoplayInterval = setInterval(nextSlide, 5000);

// Pause autoplay on hover
galleryContainer.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

galleryContainer.addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 5000);
});

// Keyboard navigation for gallery
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// ==================== 
// Form Handling
// ==================== 
const bookingForm = document.getElementById('bookingForm');
const contactForm = document.getElementById('contactForm');

// Set minimum date to today for booking form
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// Booking form submission
bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(bookingForm);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to a backend API or booking service
    // For now, we'll show a success message
    console.log('Booking data:', data);
    
    showNotification('Thank you for your booking! We will contact you shortly to confirm your appointment.', 'success');
    bookingForm.reset();
});

// Contact form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to a backend API
    console.log('Contact data:', data);
    
    showNotification('Thank you for your message! We will get back to you soon.', 'success');
    contactForm.reset();
});

// Show notification function
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#d4af37' : '#e74c3c'};
        color: #1a1a1a;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        font-weight: 500;
        animation: slideInRight 0.5s ease, fadeOut 0.5s ease 4.5s;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== 
// Scroll Animations
// ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .testimonial-card, .about-text, .about-images');
animateElements.forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==================== 
// Parallax Effect for Hero
// ==================== 
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero && scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ==================== 
// Form Validation Enhancement
// ==================== 
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

// Real-time validation
const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value && !validateEmail(input.value)) {
            input.style.borderColor = '#e74c3c';
            showValidationError(input, 'Please enter a valid email address');
        } else {
            input.style.borderColor = '#ddd';
            removeValidationError(input);
        }
    });
});

const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value && !validatePhone(input.value)) {
            input.style.borderColor = '#e74c3c';
            showValidationError(input, 'Please enter a valid phone number');
        } else {
            input.style.borderColor = '#ddd';
            removeValidationError(input);
        }
    });
});

function showValidationError(input, message) {
    removeValidationError(input);
    const error = document.createElement('span');
    error.className = 'validation-error';
    error.style.cssText = 'color: #e74c3c; font-size: 0.875rem; display: block; margin-top: 0.25rem;';
    error.textContent = message;
    input.parentElement.appendChild(error);
}

function removeValidationError(input) {
    const error = input.parentElement.querySelector('.validation-error');
    if (error) {
        error.remove();
    }
}

// ==================== 
// Performance: Lazy Loading Images
// ==================== 
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img');
    images.forEach(img => imageObserver.observe(img));
}

// ==================== 
// Accessibility: Skip to Content
// ==================== 
const skipLink = document.createElement('a');
skipLink.href = '#about';
skipLink.textContent = 'Skip to content';
skipLink.className = 'sr-only';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: #d4af37;
    color: #1a1a1a;
    padding: 8px;
    text-decoration: none;
    z-index: 10000;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// ==================== 
// Console Welcome Message
// ==================== 
console.log('%c🎯 The Classic Cut - Barbershop Website', 'font-size: 20px; font-weight: bold; color: #d4af37;');
console.log('%cWelcome to our website! For booking inquiries, please use the form on the page.', 'font-size: 14px; color: #666;');
