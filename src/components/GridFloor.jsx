"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Grid floor with glowing lines in cyberpunk style
 * Fades out toward edges using distance-based opacity
 */
export default function GridFloor({
    size = 30,
    divisions = 30,
    color = "#06b6d4",
    fadeDistance = 12,
    position = [0, -3, 0],
}) {
    const groupRef = useRef();

    // Create grid lines manually for better control
    const gridLines = useMemo(() => {
        const lines = [];
        const half = size / 2;
        const step = size / divisions;

        for (let i = 0; i <= divisions; i++) {
            const pos = -half + i * step;
            const distFromCenter = Math.abs(pos);
            const opacity = Math.max(0, 1 - distFromCenter / fadeDistance) * 0.4;

            // Horizontal line
            lines.push({ start: [-half, 0, pos], end: [half, 0, pos], opacity });
            // Vertical line
            lines.push({ start: [pos, 0, -half], end: [pos, 0, half], opacity });
        }

        return lines;
    }, [size, divisions, fadeDistance]);

    useFrame((state) => {
        if (groupRef.current) {
            // Subtle scroll on grid
            groupRef.current.position.z =
                (state.clock.elapsedTime * 0.3) % (size / divisions);
        }
    });

    return (
        <group ref={groupRef} position={position} rotation={[0, 0, 0]}>
            {gridLines.map((line, i) => {
                const points = [
                    new THREE.Vector3(...line.start),
                    new THREE.Vector3(...line.end),
                ];
                const lineGeom = new THREE.BufferGeometry().setFromPoints(points);
                return (
                    <line key={i} geometry={lineGeom}>
                        <lineBasicMaterial
                            color={color}
                            transparent
                            opacity={line.opacity}
                            blending={THREE.AdditiveBlending}
                        />
                    </line>
                );
            })}
        </group>
    );
}
