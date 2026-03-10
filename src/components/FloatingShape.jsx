"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";

/**
 * Animated 3D geometry component for use inside a R3F Canvas
 *
 * @param {Object} props
 * @param {string} props.geometry - Shape type: icosahedron, octahedron, torus, dodecahedron
 * @param {string} props.color - Mesh color
 * @param {number} props.scale - Mesh scale
 * @param {Array} props.position - [x, y, z] position
 */
export default function FloatingShape({
    geometry = "icosahedron",
    color = "#06b6d4",
    scale = 1,
    position = [0, 0, 0],
}) {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
        }
    });

    const geometryNode = (() => {
        switch (geometry) {
            case "octahedron":
                return <octahedronGeometry args={[1, 0]} />;
            case "torus":
                return <torusGeometry args={[1, 0.4, 16, 32]} />;
            case "dodecahedron":
                return <dodecahedronGeometry args={[1, 0]} />;
            case "icosahedron":
            default:
                return <icosahedronGeometry args={[1, 1]} />;
        }
    })();

    return (
        <mesh ref={meshRef} position={position} scale={scale}>
            {geometryNode}
            <MeshDistortMaterial
                color={color}
                roughness={0.2}
                metalness={0.8}
                distort={0.25}
                speed={2}
                transparent
                opacity={0.85}
            />
        </mesh>
    );
}
