import { useEffect, useRef } from 'react';
import "../index.css";
import { useTheme } from './ThemeContext';

export default function VantaBackground() {
    const vantaRef = useRef(null);
    const effectRef = useRef(null);
    const theme = useTheme();
    
    useEffect(() => {
        if (!window.VANTA) {
            console.error("VANTA not loaded");
            return;
        }
        
        // Clean up previous effect
        if (effectRef.current) {
            effectRef.current.destroy();
        }
        
        const hexToNumber = (hexColor) => {
            if (!hexColor.startsWith('#')) return hexColor;
            return parseInt(hexColor.replace('#', '0x'), 16);
        };
        
        // Create new effect with current theme colors
        effectRef.current = window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: hexToNumber(theme.primary),
            color1: hexToNumber(theme.accent),
            color2: hexToNumber(theme.accentHover),
            colorMode: "lerp",
        });
        
        return () => {
            if (effectRef.current) effectRef.current.destroy();
        };
    }, [theme]); // Re-initialize when theme changes
    
    return (
        <div 
            ref={vantaRef} 
            className="fixed inset-0 w-full h-full z-[-1]" 
        />
    );
}