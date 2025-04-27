import '../index.css';

export function toggleThemes(type)
{
    if (type === "dark")
    {
        document.documentElement.style.setProperty('--primary','#111827');
        document.documentElement.style.setProperty('--secondary','#1f2937');
        document.documentElement.style.setProperty('--tertiary','#374151');
        document.documentElement.style.setProperty('--text-primary','#f9fafb');
        document.documentElement.style.setProperty('--text-secondary','#e5e7eb');
        document.documentElement.style.setProperty('--text-tertiary','#d1d5db');
        document.documentElement.style.setProperty('--accent','#60a5fa');
        document.documentElement.style.setProperty('--accent-hover','#93c5fd');
        document.documentElement.style.setProperty('--input-bg','#1f2937');
        document.documentElement.style.setProperty('--input-border','#4b5563');
        document.documentElement.style.setProperty('input-text','#f9fafb');
        document.documentElement.style.setProperty('--button-primary','#3b82f6');
        document.documentElement.style.setProperty('--button-primary-hover','#60a5fa');
        document.documentElement.style.setProperty('--button-text','#ffffff');
        document.documentElement.style.setProperty('--button-secondary','#374151');
        document.documentElement.style.setProperty('--button-secondary-hover','#4b5563');
        document.documentElement.style.setProperty('--button-secondary-text','#f9fafb');
    }
    else if(type === "light")
    {
        document.documentElement.style.setProperty('--primary','#ffffff');
        document.documentElement.style.setProperty('--secondary','#f3f4f6');
        document.documentElement.style.setProperty('--tertiary','#e5e7eb');
        document.documentElement.style.setProperty('--text-primary','#111827');
        document.documentElement.style.setProperty('--text-secondary','#4b5563');
        document.documentElement.style.setProperty('--text-tertiary','#6b7280');
        document.documentElement.style.setProperty('--accent','#3b82f6');
        document.documentElement.style.setProperty('--accent-hover','#2563eb');
        document.documentElement.style.setProperty('--input-bg','#f9fafb');
        document.documentElement.style.setProperty('--input-border','#d1d5db');
        document.documentElement.style.setProperty('input-text','#111827');
        document.documentElement.style.setProperty('--button-primary','#3b82f6');
        document.documentElement.style.setProperty('--button-primary-hover','#2563eb');
        document.documentElement.style.setProperty('--button-text','#ffffff');
        document.documentElement.style.setProperty('--button-secondary','#e5e7eb');
        document.documentElement.style.setProperty('--button-secondary-hover','#d1d5db');
        document.documentElement.style.setProperty('--button-secondary-text','#111827');
    }
}