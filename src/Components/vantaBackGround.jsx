import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import TOPOLOGY from 'vanta/dist/vanta.topology.min';
import "../index.css";

export default function VantaBackground() {
    const vantaRef = useRef(null);
    const [documentHeight, setDocumentHeight] = useState("100vh");
    
    // Update the height when content changes
    useEffect(() => {
        const updateHeight = () => {
            // Get the full height of the document
            const height = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.offsetHeight,
                document.body.clientHeight,
                document.documentElement.clientHeight
            );
            setDocumentHeight(`${height}px`);
        };
        
        // Initial update
        updateHeight();
        
        // Add listeners for window resize and DOM content loaded
        window.addEventListener('resize', updateHeight);
        window.addEventListener('DOMContentLoaded', updateHeight);
        
        // Handle dynamic content changes with a MutationObserver
        const observer = new MutationObserver(updateHeight);
        observer.observe(document.body, { 
            childList: true, 
            subtree: true, 
            attributes: true 
        });
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', updateHeight);
            window.removeEventListener('DOMContentLoaded', updateHeight);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        const effect = TOPOLOGY({
            el: vantaRef.current,
            THREE: THREE,
            scale: 1.00,
            scaleMobile: 1.00,
            color: "#60a5fa",
            backgroundColor: 0x111111
        });
        
        return () => {
            if (effect && effect.destroy) effect.destroy();
        };
    }, []);

    return (
        <div 
            ref={vantaRef} 
            className="fixed inset-0 w-full z-[-1]" 
            style={{ height: documentHeight }}
        />
    );
}