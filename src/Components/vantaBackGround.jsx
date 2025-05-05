import { useEffect, useRef } from 'react';
import "../index.css";

export default function VantaBackground() {
    const vantaRef = useRef(null);

    useEffect(() => {
        // Make sure VANTA is available
        if (!window.VANTA) {
            console.error("VANTA not loaded");
            return;
        }
        
        // Initialize VANTA effect
        const effect = window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x111111,
            color1: 0x3e64ff,
            color2: 0x86a8e7
        });
        
        // Clean up
        return () => {
            if (effect) effect.destroy();
        };
    }, []);

    return (
        <div 
            ref={vantaRef} 
            className="fixed inset-0 w-full h-full z-[-1]" 
        />
    );
}