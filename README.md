# Tyrese George - Personal Portfolio Website

A fully responsive, premium portfolio website showcasing the skills, projects, and achievements of Tyrese George, a Mechatronics Engineer. Built with React, TailwindCSS, and Framer Motion for smooth, professional animations.

## 🌟 Features

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Animations**: Smooth transitions and animations using Framer Motion
- **Premium Aesthetic**: Clean, minimalist design with professional color palette
- **Optimized Performance**: Fast load times and excellent SEO structure
- **Easy Content Management**: Well-structured data files for simple updates
- **Deployment Ready**: Configured for Netlify with built-in form handling

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Styling**: TailwindCSS + Custom CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Create React App
- **Deployment**: Netlify

## 📁 Project Structure

```
tyrese-portfolio/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── images/           # Project images
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js        # Navigation
│   │   │   └── Footer.js        # Footer
│   │   ├── sections/
│   │   │   ├── Hero.js          # Landing
│   │   │   ├── About.js         # About
│   │   │   ├── Skills.js        # Skills
│   │   │   ├── Projects.js      # Portfolio
│   │   │   ├── Experience.js    # Timeline
│   │   │   └── Contact.js       # Contact
│   │   └── common/
│   │       ├── ProjectCard.js
│   │       ├── SkillCategory.js
│   │       ├── TimelineItem.js
│   │       └── ContactForm.js
│   ├── data/
│   │   ├── content.js           # Main content
│   │   ├── projects.js          # Projects
│   │   ├── skills.js            # Skills
│   │   └── experience.js        # Experience
│   ├── styles/
│   │   ├── globals.css
│   │   └── components.css
│   └── App.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 📝 Content Updates

### Updating Personal Information

Edit `src/data/content.js`:
- Hero headline and tagline
- About section biography
- Contact information
- Social links

### Adding New Projects

Add to `src/data/projects.js`:
```javascript
{
  id: 8,
  title: "Project Name",
  description: "Description",
  technologies: ["Tech1", "Tech2"],
  image: "/images/project.jpg",
  github: "https://github.com/...",
  demo: "https://demo.com",
  featured: true
}
```

Add image to `public/images/`

### Updating Skills

Edit `src/data/skills.js` to modify:
- Skill categories
- Proficiency levels (0-100)
- Descriptions
- Category icons

### Adding Experience

Edit `src/data/experience.js` to add:
- Jobs and internships
- Achievements
- Timeline information
- Technologies used

## 🎨 Customization

### Colors

Update in CSS files:
- Primary Blue: `#1e40af`
- Dark Gray: `#1f2937`
- Light Gray: `#f3f4f6`
- Medium Gray: `#6b7280`

### Fonts

Imported from Google Fonts in `src/index.css`:
- **Headings**: Inter (bold, 600-700)
- **Body**: Inter (regular, 400-500)
- **Monospace**: JetBrains Mono

### Animations

Configure in component files:
- Hero: Floating circles, typewriter effect
- Sections: Fade-in on scroll
- Cards: Scale and shadow effects

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

Creates optimized build in `build/` directory.

### Deploy to Netlify

#### Option 1: Git Integration (Recommended)

1. Push to GitHub
2. Connect GitHub to Netlify
3. Build command: `npm run build`
4. Publish directory: `build`
5. Deploy!

#### Option 2: Direct Upload

```bash
npm run build
# Upload build/ folder to Netlify
```

### Custom Domain

In Netlify dashboard:
1. Site settings → Domain management
2. Add custom domain
3. Update DNS settings

### Contact Form

Enable in Netlify:
1. Site settings → Forms
2. Add email for notifications
3. Test form on live site

## 🔒 Security

- No backend required
- Secure Netlify Forms
- Default security headers included
- No external analytics (optional)

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

## ♿ Accessibility

WCAG 2.1 AA compliant:
- Semantic HTML
- Proper headings hierarchy
- Alt text for images
- Keyboard navigation
- Color contrast
- ARIA labels

## 🧪 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔍 SEO

- Semantic HTML structure
- Meta tags
- Open Graph support
- Schema structured data
- Mobile-friendly
- Fast performance

## 🐛 Troubleshooting

### Style Issues
```bash
# Clear cache
npm install
npm start
```

### Build Errors
```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Form Not Working
- Ensure deployed on Netlify
- Check Netlify Forms settings
- Verify form attributes

## 📧 Contact

- Email: tyrese.george@example.com
- GitHub: tyresegeorge
- LinkedIn: tyresegeorge

## 📄 License

MIT License - Feel free to use this template!

## 🙏 Built With

- [React](https://react.dev)
- [Framer Motion](https://www.framer.com/motion)
- [Tailwind CSS](https://tailwindcss.com)
- [React Icons](https://react-icons.github.io/react-icons)
- [Netlify](https://netlify.com)

---

**Built with ❤️ for Tyrese George - Mechatronics Engineer**

Last updated: November 2024
