"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to track normalized mouse position
 * Returns { x, y } values from -1 to 1 (center is 0,0)
 * Useful for parallax effects and 3D scene interaction
 *
 * @returns {{ x: number, y: number }}
 */
export function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return mousePosition;
}
