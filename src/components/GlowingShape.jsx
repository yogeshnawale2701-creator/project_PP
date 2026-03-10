"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Animated glowing 3D shape with emissive cyberpunk materials
 * Features pulsing glow, wireframe overlay, and smooth rotation
 */
export default function GlowingShape({
    geometry = "icosahedron",
    color = "#06b6d4",
    emissiveIntensity = 1.5,
    scale = 1,
    position = [0, 0, 0],
    rotationSpeed = { x: 0.1, y: 0.15, z: 0.05 },
    wireframe = false,
    floatAmplitude = 0.3,
    floatSpeed = 1,
}) {
    const meshRef = useRef();
    const wireRef = useRef();
    const baseY = position[1];

    const geometryNode = useMemo(() => {
        switch (geometry) {
            case "octahedron":
                return new THREE.OctahedronGeometry(1, 0);
            case "torus":
                return new THREE.TorusGeometry(1, 0.35, 32, 64);
            case "torusKnot":
                return new THREE.TorusKnotGeometry(0.8, 0.25, 128, 32);
            case "dodecahedron":
                return new THREE.DodecahedronGeometry(1, 0);
            case "tetrahedron":
                return new THREE.TetrahedronGeometry(1, 0);
            case "ring":
                return new THREE.TorusGeometry(1.2, 0.05, 16, 64);
            case "icosahedron":
            default:
                return new THREE.IcosahedronGeometry(1, 1);
        }
    }, [geometry]);

    useFrame((state) => {
        const t = state.clock.elapsedTime;

        if (meshRef.current) {
            meshRef.current.rotation.x = t * rotationSpeed.x;
            meshRef.current.rotation.y = t * rotationSpeed.y;
            meshRef.current.rotation.z = t * rotationSpeed.z;
            meshRef.current.position.y =
                baseY + Math.sin(t * floatSpeed) * floatAmplitude;

            // Pulse emissive intensity
            const pulse = 1 + Math.sin(t * 2) * 0.3;
            if (meshRef.current.material) {
                meshRef.current.material.emissiveIntensity = emissiveIntensity * pulse;
            }
        }

        if (wireRef.current) {
            wireRef.current.rotation.x = t * rotationSpeed.x;
            wireRef.current.rotation.y = t * rotationSpeed.y;
            wireRef.current.rotation.z = t * rotationSpeed.z;
            wireRef.current.position.y =
                baseY + Math.sin(t * floatSpeed) * floatAmplitude;
        }
    });

    return (
        <group>
            {/* Solid glowing shape */}
            <mesh ref={meshRef} position={position} scale={scale} geometry={geometryNode}>
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={emissiveIntensity}
                    metalness={0.9}
                    roughness={0.1}
                    transparent
                    opacity={0.7}
                    envMapIntensity={2}
                />
            </mesh>

            {/* Wireframe overlay for cyberpunk feel */}
            {wireframe && (
                <mesh
                    ref={wireRef}
                    position={position}
                    scale={scale * 1.01}
                    geometry={geometryNode}
                >
                    <meshBasicMaterial
                        color={color}
                        wireframe
                        transparent
                        opacity={0.25}
                    />
                </mesh>
            )}
        </group>
    );
}
