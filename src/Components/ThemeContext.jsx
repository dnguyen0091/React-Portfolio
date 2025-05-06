// ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
    const [colors, setColors] = useState({
        primary: '',
        accent: '',
        accentHover: ''
    });
    
    useEffect(() => {
        const updateColors = () => {
            const style = getComputedStyle(document.documentElement);
            setColors({
                primary: style.getPropertyValue('--primary').trim(),
                accent: style.getPropertyValue('--accent').trim(),
                accentHover: style.getPropertyValue('--accent-hover').trim()
            });
        };
        
        // Get initial colors
        updateColors();
        
        // Set up observer for changes
        const observer = new MutationObserver(updateColors);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["style"]
        });
        
        return () => observer.disconnect();
    }, []);
    
    return (
        <ThemeContext.Provider value={colors}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);