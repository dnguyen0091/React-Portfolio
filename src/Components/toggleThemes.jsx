import '../index.css';

export default function toggleThemes(type) {
    if (type === "dark") {
        document.documentElement.style.setProperty('--primary', '#000000');
        document.documentElement.style.setProperty('--secondary', '#0a0a0a');
        document.documentElement.style.setProperty('--tertiary', '#151515');
        document.documentElement.style.setProperty('--text-primary', '#ffffff');
        document.documentElement.style.setProperty('--text-secondary', '#e6edf3');
        document.documentElement.style.setProperty('--text-tertiary', '#8b949e');
        document.documentElement.style.setProperty('--accent', '#7c3aed');
        document.documentElement.style.setProperty('--accent-hover', '#8b5cf6');
        document.documentElement.style.setProperty('--accent-secondary', '#2563eb');
        document.documentElement.style.setProperty('--input-bg', '#000000');
        document.documentElement.style.setProperty('--input-border', '#21262d');
        document.documentElement.style.setProperty('--input-text', '#ffffff');
        document.documentElement.style.setProperty('--button-primary', '#7c3aed');
        document.documentElement.style.setProperty('--button-primary-hover', '#8b5cf6');
        document.documentElement.style.setProperty('--button-text', '#ffffff');
        document.documentElement.style.setProperty('--button-secondary', '#151515');
        document.documentElement.style.setProperty('--button-secondary-hover', '#21262d');
        document.documentElement.style.setProperty('--button-secondary-text', '#ffffff');
        document.documentElement.style.setProperty('--border', '#21262d');
        document.documentElement.style.setProperty('--border-hover', '#30363d');
        document.documentElement.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.8)');
    }
    else if (type === "light") {
        document.documentElement.style.setProperty('--primary', '#ffffff');
        document.documentElement.style.setProperty('--secondary', '#f3f4f6');
        document.documentElement.style.setProperty('--tertiary', '#e5e7eb');
        document.documentElement.style.setProperty('--text-primary', '#111827');
        document.documentElement.style.setProperty('--text-secondary', '#4b5563');
        document.documentElement.style.setProperty('--text-tertiary', '#6b7280');
        document.documentElement.style.setProperty('--accent', '#3b82f6');
        document.documentElement.style.setProperty('--accent-hover', '#2563eb');
        document.documentElement.style.setProperty('--accent-secondary', '#7c3aed');
        document.documentElement.style.setProperty('--input-bg', '#f9fafb');
        document.documentElement.style.setProperty('--input-border', '#d1d5db');
        document.documentElement.style.setProperty('--input-text', '#111827');
        document.documentElement.style.setProperty('--button-primary', '#3b82f6');
        document.documentElement.style.setProperty('--button-primary-hover', '#2563eb');
        document.documentElement.style.setProperty('--button-text', '#ffffff');
        document.documentElement.style.setProperty('--button-secondary', '#e5e7eb');
        document.documentElement.style.setProperty('--button-secondary-hover', '#d1d5db');
        document.documentElement.style.setProperty('--button-secondary-text', '#111827');
        document.documentElement.style.setProperty('--border', '#d1d5db');
        document.documentElement.style.setProperty('--border-hover', '#9ca3af');
        document.documentElement.style.setProperty('--shadow', 'rgba(0, 0, 0, 0.1)');
    }
    
    localStorage.setItem('theme', type);
    window.dispatchEvent(new Event('themeChange'));
}