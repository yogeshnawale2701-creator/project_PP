"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import FloatingShape from "./FloatingShape";

/**
 * 3D Scene wrapper component
 * Renders a Three.js canvas with environment lighting and floating shapes
 *
 * @param {Object} props
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.enableOrbit - Enable orbit controls (default false)
 * @param {number} props.cameraPosition - Camera Z position (default 6)
 */
export default function Scene3D({
    className = "",
    enableOrbit = false,
    cameraPosition = 6,
}) {
    return (
        <div className={`w-full h-full ${className}`}>
            <Canvas
                camera={{ position: [0, 0, cameraPosition], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: "transparent" }}
            >
                <Suspense fallback={null}>
                    {/* Ambient and directional lighting */}
                    <ambientLight intensity={0.4} />
                    <directionalLight position={[5, 5, 5]} intensity={0.8} color="#e0e7ff" />
                    <pointLight position={[-5, -5, 5]} intensity={0.5} color="#06b6d4" />
                    <pointLight position={[5, -5, -5]} intensity={0.3} color="#8b5cf6" />

                    {/* Floating 3D shapes */}
                    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
                        <FloatingShape
                            position={[-2, 0.5, 0]}
                            geometry="icosahedron"
                            color="#06b6d4"
                            scale={0.8}
                        />
                    </Float>

                    <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
                        <FloatingShape
                            position={[2, -0.5, -1]}
                            geometry="octahedron"
                            color="#8b5cf6"
                            scale={0.7}
                        />
                    </Float>

                    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
                        <FloatingShape
                            position={[0, 1.5, -2]}
                            geometry="torus"
                            color="#f472b6"
                            scale={0.5}
                        />
                    </Float>

                    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.9}>
                        <FloatingShape
                            position={[-1, -1.5, 1]}
                            geometry="dodecahedron"
                            color="#34d399"
                            scale={0.4}
                        />
                    </Float>

                    {/* Environment for reflections */}
                    <Environment preset="night" />

                    {/* Optional orbit controls */}
                    {enableOrbit && (
                        <OrbitControls
                            enableZoom={false}
                            enablePan={false}
                            autoRotate
                            autoRotateSpeed={0.5}
                        />
                    )}
                </Suspense>
            </Canvas>
        </div>
    );
}
