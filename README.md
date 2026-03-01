# Shyamprasath P - Portfolio Website

A modern, production-ready personal portfolio website built with React, featuring complete light/dark theme support, smooth animations, and seamless GitHub Pages deployment.

![Portfolio Preview](https://via.placeholder.com/800x400/0f172a/4f46e5?text=Portfolio+Preview)

## 🚀 Live Demo

Visit the live portfolio: [https://shyamprasath-arc.github.io/portfolio](https://shyamprasath-arc.github.io/portfolio)

## ✨ Features

- **🌓 Light/Dark Theme**: Complete theme support with system preference detection and localStorage persistence
- **Modern Design**: Clean aesthetics with gradient accents and smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Lazy loading, optimized assets, and Core Web Vitals ready
- **SEO Ready**: Proper meta tags, semantic HTML, and structured content
- **Analytics Integration**: Google Analytics 4 ready for tracking
- **Contact Form**: Formspree integration for secure message handling
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## 🎨 Theme Support

The portfolio features a complete light and dark theme system:

- **Theme Toggle**: Sun/moon icon in the navigation bar
- **System Preference**: Automatically detects user's system preference on first visit
- **Persistence**: Remembers user's choice in localStorage
- **Smooth Transitions**: All theme changes animate smoothly with 0.3s ease
- **High Contrast**: Ensures excellent readability in both themes

### Light Theme Colors
- Background: `#f8fafc`
- Surface: `#ffffff`
- Primary Text: `#0f172a` (high contrast)
- Secondary Text: `#334155`
- Accent: `#4f46e5`

### Dark Theme Colors
- Background: `#0f172a`
- Surface: `#1e293b`
- Primary Text: `#f1f5f9` (high contrast)
- Secondary Text: `#cbd5e1`
- Accent: `#818cf8`

## 🛠️ Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: CSS Modules with CSS Variables
- **Icons**: React Icons (Feather Icons + Simple Icons)
- **Fonts**: Google Fonts (Poppins + Inter)
- **Animations**: Intersection Observer API + CSS Animations
- **Deployment**: GitHub Pages
- **Analytics**: Google Analytics 4

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html          # HTML template with GA4
│   └── favicon.svg         # Favicon
├── src/
│   ├── components/         # React components
│   │   ├── Hero.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── HobbyProjects.jsx
│   │   ├── CTA.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Navigation.jsx
│   ├── context/
│   │   └── ThemeContext.jsx # Theme state management
│   ├── styles/
│   │   └── global.css      # Global styles & CSS variables
│   ├── utils/
│   │   └── analytics.js    # GA4 tracking utilities
│   ├── App.jsx
│   └── main.jsx            # Entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shyamprasath-arc/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## ⚙️ Configuration

### 1. Google Analytics Setup

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new property or use existing one
3. Go to **Admin > Data Streams > Web**
4. Copy your Measurement ID (starts with `G-`)
5. Open `index.html` and replace:
   ```html
   gtag('config', 'G-XXXXXXXXXX');
   ```
   with your actual Measurement ID

### 2. Formspree Contact Form Setup

1. Go to [Formspree](https://formspree.io/)
2. Sign up and create a new form
3. Copy your form endpoint (looks like `https://formspree.io/f/YOUR_FORM_ID`)
4. Open `src/components/Contact.jsx`
5. Update the `FORMSPREE_ENDPOINT` constant:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```

### 3. Update Personal Information

Edit the following files to customize content:

- **Hero Section**: `src/components/Hero.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Experience**: `src/components/Experience.jsx`
- **Projects**: `src/components/HobbyProjects.jsx`
- **Contact Info**: `src/components/Contact.jsx`
- **Footer**: `src/components/Footer.jsx`

### 4. Add Resume PDF

1. Add your resume as `resume.pdf` to the `public/` folder
2. The download button in the CTA section will link to this file

### 5. Update Homepage URL

Open `package.json` and update the homepage:
```json
{
  "homepage": "https://yourusername.github.io/portfolio"
}
```

## 📦 Building & Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy to GitHub Pages

1. **Install gh-pages (already included)**
   ```bash
   npm install gh-pages --save-dev
   ```

2. **Configure package.json** (already configured)
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

This will create a `gh-pages` branch and push the build files.

### Custom Domain (Optional)

1. Add a `CNAME` file to the `public/` folder with your custom domain
2. Configure DNS settings with your domain provider
3. Update `vite.config.js` base URL if needed

## 📊 Analytics Tracking

The portfolio includes utility functions for tracking user interactions. Import from `src/utils/analytics.js`:

```javascript
import { trackEvent, trackResumeDownload } from './utils/analytics';

// Track custom events
trackEvent('click', { category: 'button', label: 'download' });

// Track resume download
trackResumeDownload();
```

### Predefined Events

- `trackResumeDownload()` - When resume is downloaded
- `trackProjectClick(project, type)` - When project links are clicked
- `trackSocialClick(platform)` - When social links are clicked
- `trackContactSubmit(status)` - When contact form is submitted
- `trackNavigation(section)` - When navigation links are clicked
- `trackThemeChange(theme)` - When theme is toggled

## 🎨 Customization

### Color Scheme

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  /* Dark theme (default) */
  --bg-primary: #0f172a;
  --bg-secondary: #0f172a;
  --bg-surface: #1e293b;
  --accent-primary: #6366f1;
  --accent-secondary: #10b981;
  /* ... more variables */
}

[data-theme="light"] {
  /* Light theme */
  --bg-primary: #f8fafc;
  --bg-secondary: #f1f5f9;
  --bg-surface: #ffffff;
  --accent-primary: #4f46e5;
  --accent-secondary: #059669;
  /* ... more variables */
}
```

### Fonts

The portfolio uses:
- **Poppins** for headings
- **Inter** for body text

Both are loaded via Google Fonts in `index.html`.

## 🔍 SEO

The portfolio includes:
- Proper meta tags for description and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- ARIA labels for accessibility
- Dynamic theme-color for mobile browsers

Update meta tags in `index.html`:

```html
<meta name="description" content="Your description here">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
```

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible indicators
- Screen reader friendly
- `prefers-reduced-motion` support
- High contrast text in both themes

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Deploy to GitHub Pages |

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Contact form by [Formspree](https://formspree.io/)

---

**Built with ❤️ by Shyamprasath P**

*Vibe-coded with AI assistance*
