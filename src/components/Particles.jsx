"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Floating particle field that drifts slowly with subtle sparkle
 * Creates a starfield / cyberpunk dust atmosphere
 *
 * @param {Object} props
 * @param {number} props.count - Number of particles
 * @param {string} props.color - Particle color
 * @param {number} props.size - Particle size
 * @param {number} props.radius - Spread radius
 */
export default function Particles({
    count = 300,
    color = "#06b6d4",
    size = 0.015,
    radius = 8,
}) {
    const pointsRef = useRef();

    const { positions, sizes } = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        for (let i = 0; i < count; i++) {
            // Distribute in a sphere
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = radius * Math.cbrt(Math.random());

            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);

            sizes[i] = size * (0.5 + Math.random());
        }

        return { positions, sizes };
    }, [count, radius, size]);

    useFrame((state) => {
        if (!pointsRef.current) return;

        // Gentle overall rotation
        pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
        pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;

        // Twinkle effect via opacity
        const material = pointsRef.current.material;
        material.opacity = 0.6 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    array={positions}
                    count={count}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                color={color}
                size={size}
                sizeAttenuation
                transparent
                opacity={0.7}
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}
