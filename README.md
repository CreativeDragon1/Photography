# Aditya Koushik – Photography Portfolio

A cinematic, minimal photography portfolio website built with pure **HTML · CSS · JavaScript**.

🌐 **Live at:** `https://<your-username>.github.io/<repo-name>/`

---

## Features

- Fullscreen hero with parallax + slow zoom effect  
- Alternating featured photo layout with scroll-reveal animations  
- Masonry gallery (Pinterest-style) with category filters  
- Fullscreen lightbox viewer with keyboard & swipe navigation  
- Cinematic parallax quote sections  
- About section with animated stat counters  
- Contact form (saves to localStorage)  
- Responsive down to mobile  
- Admin panel (`/admin.html`) — add/remove photos without touching code  

## File Structure

```
Photography/
├── index.html       ← Main portfolio
├── admin.html       ← Admin panel (add/manage photos)
├── css/
│   ├── style.css
│   └── lightbox.css
└── js/
    └── app.js
```

## Admin Panel

Visit `/admin.html` to:
- Add new photos (drag & drop or paste URL)
- Manage / delete gallery photos
- View contact form messages

All data persists in the browser's **localStorage** — no backend or database required.

## Deploy to GitHub Pages

1. Push this repo to GitHub  
2. Go to **Settings → Pages**  
3. Source: `Deploy from a branch` → `main` → `/ (root)`  
4. Your site will be live at `https://<username>.github.io/<repo>/`

## Local Preview

```bash
python3 -m http.server 8765
# then open http://localhost:8765
```
