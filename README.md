# React Portfolio

A modern, responsive portfolio website built with React, Vite, and Framer Motion, featuring dynamic animations, theme switching, and an interactive navigation system.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Dark/Light Theme**: Toggle between dark and light modes with seamless transitions
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Navigation**: Animated dropdown menus with pill-shaped highlights
- **Smooth Animations**: Powered by Framer Motion for engaging user experiences
- **Scroll-triggered Animations**: Content animates as you scroll through sections
- **3D Effects**: Hover and entrance animations with depth and perspective
- **Contact Integration**: Direct email copying and social media links

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Custom SVG icons
- **Build Tool**: Vite
- **Deployment**: [Add your deployment platform]

## 📁 Project Structure

```
src/
├── Components/
│   ├── navigationBar.jsx      # Navigation with dropdowns and theme toggle
│   ├── ThemeContext.jsx       # Theme context provider
│   ├── toggleThemes.jsx       # Theme switching logic
│   └── vantaBackGround.jsx    # Animated background effects
├── Pages/
│   ├── HomePage.jsx           # Landing page with hero section
│   ├── AboutPage.jsx          # About section with FAQ cards
│   ├── TechStack.jsx          # Technology showcase with categorized cards
│   ├── Projects.jsx           # Project portfolio with previews
│   ├── WorkExp.jsx            # Work experience timeline
│   └── Contact.jsx            # Contact information and links
├── assets/
│   ├── Icons/                 # SVG icons for UI elements
│   ├── Projects/              # Project screenshots and images
│   ├── Tech Stack/            # Technology logos and icons
│   └── Companies/             # Company logos for work experience
└── styles/
    └── index.css              # Global styles and CSS variables
```

## 🎨 Design Features

### Interactive Navigation
- **Pill-shaped Highlights**: Buttons highlight with accent color when clicked
- **Dropdown Menus**: Smooth animated dropdowns for navigation and social links
- **Theme-aware Colors**: Text adapts to current theme for optimal readability

### Animation System
- **Entrance Animations**: 3D transforms and scaling effects
- **Hover Effects**: Interactive feedback on all clickable elements
- **Scroll Triggers**: Animations replay when scrolling back into view
- **Staggered Animations**: Sequential reveal of content for visual flow

### Responsive Design
- **Mobile-first Approach**: Optimized for mobile devices
- **Flexible Grid Layouts**: Adapts to different screen sizes
- **Touch-friendly**: Large touch targets and smooth interactions

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/react-portfolio.git
cd react-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🎯 Customization

### Theme Colors
Update CSS variables in `src/index.css`:
```css
:root {
  --accent: #your-accent-color;
  --secondary: #your-secondary-color;
  --text-primary: #your-text-color;
}
```

### Content Updates
- **Personal Info**: Update contact details in `Contact.jsx`
- **Projects**: Add your projects in `Projects.jsx`
- **Experience**: Update work history in `WorkExp.jsx`
- **Skills**: Modify tech stack in `TechStack.jsx`

### Assets
- Replace images in `src/assets/` with your own
- Update social media links in `navigationBar.jsx`
- Customize icons for your preferred style

## 📱 Sections

1. **Home**: Hero section with introduction and call-to-action buttons
2. **About**: Personal information with expandable FAQ cards
3. **Tech Stack**: Categorized technology showcase with hover effects
4. **Experience**: Professional work history with company details
5. **Projects**: Portfolio showcase with project previews and links
6. **Contact**: Direct contact methods and social media links

## 🌟 Key Components

### NavigationBar
- Sticky navigation with smooth dropdown animations
- Theme toggle with icon transitions
- Social media integration with copy-to-clipboard functionality

### Animation Variants
- Consistent animation patterns across all components
- Customizable timing and easing functions
- Scroll-triggered reset functionality

### Theme System
- CSS variable-based theming
- Automatic icon switching
- Persistent theme preference

## � Contact

**David Nguyen** - [davidnguyen0091@icloud.com](mailto:davidnguyen0091@icloud.com)

Project Link: [https://github.com/dnguyen0091/react-portfolio](https://github.com/dnguyen0091/react-portfolio)

Live Portfolio: [https://your-portfolio-url.com](https://your-portfolio-url.com)

---

💼 **Professional portfolio showcasing modern web development skills**
