# Ambe Cabs — Premium Cab Service Website

**Udaipur, Rajasthan** | Built with React + Vite + Tailwind CSS + Framer Motion

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Navigate to the project folder
cd ambe-cabs

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

---

## 📦 Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder — ready to deploy.

---

## ☁️ Deploy to Vercel (Recommended)

### Option 1: Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project root
vercel

# Follow prompts:
# - Framework: Vite
# - Build command: npm run build
# - Output directory: dist
```

### Option 2: Vercel Dashboard (GitHub)
1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repository
4. Vercel auto-detects Vite — click **Deploy**
5. Done! Live in ~60 seconds.

---

## ☁️ Deploy to Netlify

### Option 1: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Option 2: Netlify Dashboard (Drag & Drop)
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com) → Sites
3. Drag the `dist/` folder into the browser
4. Live instantly!

### Option 3: Netlify from GitHub
1. Push to GitHub
2. Netlify → New site from Git
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy!

---

## 📁 Project Structure

```
ambe-cabs/
├── public/
│   └── favicon.png          ← Add your favicon here
├── src/
│   ├── data/
│   │   └── siteContent.js   ← ALL content: brand, services, faqs, etc.
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── CTA.jsx
│   │   ├── FAQAccordion.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   ├── Toast.jsx
│   │   └── ScrollReveal.js
│   ├── sections/
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   ├── FAQ.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🎨 Customization

### Update business content:
Edit `src/data/siteContent.js` — all text, phone numbers, services, FAQs are here.

### Update logo:
Replace the AC monogram in `Navbar.jsx` and `Footer.jsx` with your actual logo:
```jsx
<img src="/logo.png" alt="Ambe Cabs" className="h-12" />
```

### Change colors:
Edit `tailwind.config.js` — the `colors` section has all brand colors.

---

## 📞 Contact Form Behavior

When the form is submitted:
1. Validates required fields (name, phone, service)
2. Opens WhatsApp with pre-filled booking details
3. Shows success toast notification
4. Email is shown for reference — add EmailJS/Formspree for actual email sending

### To add real email functionality, integrate EmailJS:
```bash
npm install @emailjs/browser
```

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18.3 | UI library |
| Vite | 5.3 | Build tool |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Animations |
| Lucide React | 0.400 | Icons |

---

## 📄 License
Built for Ambe Cabs, Udaipur, Rajasthan.
