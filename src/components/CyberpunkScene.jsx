"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Suspense } from "react";
import CameraRig from "./CameraRig";
import GlowingShape from "./GlowingShape";
import Particles from "./Particles";
import GridFloor from "./GridFloor";

/**
 * Immersive cyberpunk 3D scene for the hero section
 * Features: neon lighting, glowing shapes, particle field, grid floor,
 * mouse-reactive camera, and scroll parallax
 */
export default function CyberpunkScene({ className = "" }) {
    return (
        <div className={`w-full h-full ${className}`}>
            <Canvas
                camera={{ position: [0, 1, 8], fov: 50 }}
                shadows
                gl={{
                    antialias: true,
                    alpha: true,
                    toneMapping: 3, // ACESFilmic
                    toneMappingExposure: 1.2,
                }}
                style={{ background: "transparent" }}
            >
                <Suspense fallback={null}>
                    <CameraRig mouseSensitivity={0.6} scrollSensitivity={1.5} lerpSpeed={0.04}>
                        {/* ============ CYBERPUNK LIGHTING ============ */}

                        {/* Dim ambient for dark mood */}
                        <ambientLight intensity={0.15} color="#1a1a2e" />

                        {/* Key light — cool blue from above-right */}
                        <directionalLight
                            position={[5, 8, 5]}
                            intensity={0.6}
                            color="#4fc3f7"
                            castShadow
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                            shadow-camera-near={0.5}
                            shadow-camera-far={50}
                        />

                        {/* Neon cyan point light — left */}
                        <pointLight
                            position={[-4, 2, 3]}
                            intensity={8}
                            color="#00e5ff"
                            distance={15}
                            decay={2}
                        />

                        {/* Neon purple point light — right */}
                        <pointLight
                            position={[4, -1, 2]}
                            intensity={6}
                            color="#b388ff"
                            distance={12}
                            decay={2}
                        />

                        {/* Hot pink accent — back */}
                        <pointLight
                            position={[0, 3, -5]}
                            intensity={5}
                            color="#ff4081"
                            distance={15}
                            decay={2}
                        />

                        {/* Deep blue fill from below */}
                        <pointLight
                            position={[0, -4, 0]}
                            intensity={3}
                            color="#304ffe"
                            distance={10}
                            decay={2}
                        />

                        {/* ============ FLOATING SHAPES ============ */}

                        {/* Hero center — large torus knot */}
                        <Float speed={0.8} rotationIntensity={0.3} floatIntensity={0.5}>
                            <GlowingShape
                                geometry="torusKnot"
                                position={[0, 0.5, -1]}
                                color="#00e5ff"
                                emissiveIntensity={2}
                                scale={0.65}
                                rotationSpeed={{ x: 0.08, y: 0.12, z: 0.03 }}
                                wireframe
                                floatAmplitude={0.2}
                                floatSpeed={0.8}
                            />
                        </Float>

                        {/* Left — icosahedron */}
                        <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.7}>
                            <GlowingShape
                                geometry="icosahedron"
                                position={[-3.5, 1, -2]}
                                color="#b388ff"
                                emissiveIntensity={1.8}
                                scale={0.55}
                                rotationSpeed={{ x: 0.12, y: 0.1, z: 0.06 }}
                                wireframe
                                floatAmplitude={0.35}
                                floatSpeed={1.2}
                            />
                        </Float>

                        {/* Right — octahedron */}
                        <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
                            <GlowingShape
                                geometry="octahedron"
                                position={[3, -0.5, -1.5]}
                                color="#ff4081"
                                emissiveIntensity={1.5}
                                scale={0.5}
                                rotationSpeed={{ x: 0.15, y: 0.08, z: 0.1 }}
                                wireframe
                                floatAmplitude={0.25}
                                floatSpeed={1}
                            />
                        </Float>

                        {/* Far back — dodecahedron */}
                        <Float speed={0.6} rotationIntensity={0.2} floatIntensity={0.4}>
                            <GlowingShape
                                geometry="dodecahedron"
                                position={[1.5, 2, -4]}
                                color="#69f0ae"
                                emissiveIntensity={1.2}
                                scale={0.4}
                                rotationSpeed={{ x: 0.06, y: 0.1, z: 0.08 }}
                                floatAmplitude={0.4}
                                floatSpeed={0.6}
                            />
                        </Float>

                        {/* Bottom left — torus */}
                        <Float speed={1} rotationIntensity={0.4} floatIntensity={0.6}>
                            <GlowingShape
                                geometry="torus"
                                position={[-2, -1.5, 0]}
                                color="#ffd740"
                                emissiveIntensity={1}
                                scale={0.35}
                                rotationSpeed={{ x: 0.1, y: 0.2, z: 0.05 }}
                                floatAmplitude={0.3}
                                floatSpeed={1.1}
                            />
                        </Float>

                        {/* Far right ring */}
                        <Float speed={0.5} rotationIntensity={0.2} floatIntensity={0.3}>
                            <GlowingShape
                                geometry="ring"
                                position={[4.5, 1.5, -3]}
                                color="#00e5ff"
                                emissiveIntensity={0.8}
                                scale={0.5}
                                rotationSpeed={{ x: 0.2, y: 0.05, z: 0.15 }}
                                floatAmplitude={0.2}
                                floatSpeed={0.7}
                            />
                        </Float>

                        {/* ============ PARTICLES ============ */}
                        <Particles count={400} color="#00e5ff" size={0.02} radius={10} />
                        <Particles count={200} color="#b388ff" size={0.015} radius={12} />

                        {/* ============ GRID FLOOR ============ */}
                        <GridFloor
                            size={40}
                            divisions={40}
                            color="#00e5ff"
                            fadeDistance={15}
                            position={[0, -3.5, 0]}
                        />

                        {/* ============ ENVIRONMENT ============ */}
                        <Environment preset="night" environmentIntensity={0.3} />

                        {/* Fog for depth */}
                        <fog attach="fog" args={["#0a0f1c", 6, 25]} />
                    </CameraRig>
                </Suspense>
            </Canvas>
        </div>
    );
}
