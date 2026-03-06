/* ============================================
   ADITYA KOUSHIK PHOTOGRAPHY - MAIN JS
   ============================================ */

// =============================================
// Gallery Data (local, no database needed)
// =============================================
const galleryData = [
    { id: 1, src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80', title: 'Misty Valleys', category: 'nature', caption: 'Western Ghats, India' },
    { id: 2, src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', title: 'Alpine Peaks', category: 'landscape', caption: 'Himalayas' },
    { id: 3, src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80', title: 'Urban Geometry', category: 'architecture', caption: 'Mumbai, India' },
    { id: 4, src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=80', title: 'Golden Reflections', category: 'landscape', caption: 'Kashmir, India' },
    { id: 5, src: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80', title: 'Coastal Serenity', category: 'travel', caption: 'Goa, India' },
    { id: 6, src: 'https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?w=800&q=80', title: 'Street Tales', category: 'street', caption: 'Varanasi, India' },
    { id: 7, src: 'https://images.unsplash.com/photo-1518173946687-a1e0e2a9e57c?w=800&q=80', title: 'Monsoon Fields', category: 'nature', caption: 'Meghalaya, India' },
    { id: 8, src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80', title: 'Fog & Light', category: 'landscape', caption: 'Darjeeling, India' },
    { id: 9, src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80', title: 'Waterfall Symphony', category: 'nature', caption: 'Coorg, India' },
    { id: 10, src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', title: 'Sun Rays', category: 'landscape', caption: 'Munnar, India' },
    { id: 11, src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80', title: 'City Nights', category: 'street', caption: 'Delhi, India' },
    { id: 12, src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', title: 'Modern Lines', category: 'architecture', caption: 'Bangalore, India' },
    { id: 13, src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80', title: 'Lake Serenity', category: 'travel', caption: 'Udaipur, India' },
    { id: 14, src: 'https://images.unsplash.com/photo-1465056836900-8f1e940b3583?w=800&q=80', title: 'Desert Dunes', category: 'travel', caption: 'Rajasthan, India' },
    { id: 15, src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80', title: 'Ancient Canopy', category: 'nature', caption: 'Sundarbans, India' },
    { id: 16, src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80', title: 'Skyline Glow', category: 'architecture', caption: 'Hyderabad, India' },
    { id: 17, src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80', title: 'Starlit Peaks', category: 'landscape', caption: 'Ladakh, India' },
    { id: 18, src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80', title: 'Emerald Waters', category: 'travel', caption: 'Andaman Islands' },
    { id: 19, src: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800&q=80', title: 'Wings in Flight', category: 'nature', caption: 'Bharatpur, India' },
    { id: 20, src: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=800&q=80', title: 'Narrow Lanes', category: 'street', caption: 'Jaipur, India' },
];

// Instagram placeholder data
const instagramData = [
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&q=80',
    'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&q=80',
    'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&q=80',
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&q=80',
    'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&q=80',
];

// =============================================
// Load gallery from localStorage (admin added)
// =============================================
function getGalleryItems() {
    const stored = localStorage.getItem('ak_gallery');
    if (stored) {
        try {
            const parsed = JSON.parse(stored);
            return [...galleryData, ...parsed];
        } catch (e) {
            return galleryData;
        }
    }
    return galleryData;
}

// =============================================
// Loader
// =============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1500);
});

// =============================================
// Navigation
// =============================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = navLinks.querySelector(`a[href="#${id}"]`);
        if (link) {
            if (scrollPos >= top && scrollPos < top + height) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
});

// =============================================
// Parallax Effects
// =============================================
function initParallax() {
    const heroParallax = document.querySelector('.hero-parallax-bg');
    const parallaxBgs = document.querySelectorAll('.parallax-bg');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Hero parallax
        if (heroParallax) {
            heroParallax.style.transform = `translateY(${scrollY * 0.4}px)`;
        }

        // Section parallax
        parallaxBgs.forEach(bg => {
            const section = bg.parentElement;
            const rect = section.getBoundingClientRect();
            const speed = 0.3;
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const offset = (rect.top) * speed;
                bg.style.transform = `translateY(${offset}px)`;
            }
        });
    }, { passive: true });
}

// =============================================
// Scroll Reveal
// =============================================
function initReveal() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// =============================================
// Masonry Gallery
// =============================================
function initGallery() {
    const grid = document.getElementById('masonryGrid');
    if (!grid) return;

    const items = getGalleryItems();

    grid.innerHTML = items.map((item, i) => `
        <div class="masonry-item" data-category="${item.category}" data-index="${i}" style="animation-delay: ${i * 0.05}s">
            <img src="${item.src}" alt="${item.title}" loading="lazy">
            <div class="masonry-overlay">
                <div class="masonry-overlay-text">
                    <h4>${item.title}</h4>
                    <span>${item.caption}</span>
                </div>
            </div>
        </div>
    `).join('');

    // Click to lightbox
    grid.querySelectorAll('.masonry-item').forEach(item => {
        item.addEventListener('click', () => {
            const index = parseInt(item.dataset.index);
            openLightbox(index);
        });
    });

    // Filters
    initFilters(items);
}

function initFilters(items) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const masonryItems = document.querySelectorAll('.masonry-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            masonryItems.forEach((item, i) => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.classList.remove('hidden');
                    item.style.animationDelay = `${i * 0.03}s`;
                    item.style.animation = 'none';
                    void item.offsetHeight;
                    item.style.animation = '';
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });
}

// =============================================
// Lightbox
// =============================================
let currentLightboxIndex = 0;
let lightboxItems = [];

function openLightbox(index) {
    const allItems = getGalleryItems();
    const visibleItems = document.querySelectorAll('.masonry-item:not(.hidden)');
    lightboxItems = [];

    visibleItems.forEach(item => {
        const idx = parseInt(item.dataset.index);
        lightboxItems.push(allItems[idx]);
    });

    // Find the position of the clicked item within visible items
    const clickedItem = allItems[index];
    currentLightboxIndex = lightboxItems.findIndex(item => item.id === clickedItem.id);
    if (currentLightboxIndex === -1) currentLightboxIndex = 0;

    updateLightbox();
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightbox() {
    const item = lightboxItems[currentLightboxIndex];
    if (!item) return;

    const img = document.getElementById('lightboxImg');
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = item.src.replace('w=800', 'w=1400');
        img.onload = () => { img.style.opacity = '1'; };
    }, 150);

    document.getElementById('lightboxTitle').textContent = item.title;
    document.getElementById('lightboxCaption').textContent = item.caption;
    document.getElementById('lightboxCounter').textContent = `${currentLightboxIndex + 1} / ${lightboxItems.length}`;
}

function lightboxPrev() {
    currentLightboxIndex = (currentLightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
    updateLightbox();
}

function lightboxNext() {
    currentLightboxIndex = (currentLightboxIndex + 1) % lightboxItems.length;
    updateLightbox();
}

// Lightbox events
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', lightboxPrev);
document.getElementById('lightboxNext').addEventListener('click', lightboxNext);

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') lightboxPrev();
    if (e.key === 'ArrowRight') lightboxNext();
});

// Touch swipe for lightbox
let touchStartX = 0;
document.getElementById('lightbox').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

document.getElementById('lightbox').addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) lightboxPrev();
        else lightboxNext();
    }
}, { passive: true });

// =============================================
// Instagram Grid
// =============================================
function initInstagram() {
    const grid = document.getElementById('instaGrid');
    if (!grid) return;

    grid.innerHTML = instagramData.map(src => `
        <div class="instagram-item">
            <img src="${src}" alt="Instagram" loading="lazy">
        </div>
    `).join('');
}

// =============================================
// About Counter Animation
// =============================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
    let current = 0;
    const step = target / 60;
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        el.textContent = Math.floor(current);
    }, 25);
}

// =============================================
// Contact Form
// =============================================
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Store in localStorage as a simple queue
    const messages = JSON.parse(localStorage.getItem('ak_messages') || '[]');
    messages.push({ ...data, date: new Date().toISOString() });
    localStorage.setItem('ak_messages', JSON.stringify(messages));

    alert('Thank you for your message! I\'ll get back to you soon.');
    e.target.reset();
});

// =============================================
// Smooth scroll for anchor links
// =============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// =============================================
// Lazy Loading with Intersection Observer
// =============================================
function initLazyLoad() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imgObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imgObserver.unobserve(img);
                }
            });
        }, { rootMargin: '200px' });

        images.forEach(img => imgObserver.observe(img));
    }
}

// =============================================
// Initialize
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    initParallax();
    initReveal();
    initGallery();
    initInstagram();
    initCounters();
    initLazyLoad();
});
