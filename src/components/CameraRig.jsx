"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Camera rig that reacts to mouse movement and scroll position
 * Creates a subtle parallax by lerping the camera group toward the mouse
 *
 * @param {Object} props
 * @param {number} props.mouseSensitivity - How much camera reacts to mouse (default 0.5)
 * @param {number} props.scrollSensitivity - How much camera reacts to scroll (default 2)
 * @param {number} props.lerpSpeed - Interpolation smoothness (default 0.05)
 * @param {React.ReactNode} props.children - Scene contents
 */
export default function CameraRig({
    mouseSensitivity = 0.5,
    scrollSensitivity = 2,
    lerpSpeed = 0.05,
    children,
}) {
    const groupRef = useRef();
    const { camera } = useThree();
    const targetRotation = useRef(new THREE.Euler());
    const targetPosition = useRef(new THREE.Vector3());

    useFrame((state) => {
        if (!groupRef.current) return;

        const { pointer } = state;

        // Mouse-driven camera rotation (subtle)
        targetRotation.current.x = -pointer.y * mouseSensitivity * 0.15;
        targetRotation.current.y = pointer.x * mouseSensitivity * 0.15;

        // Mouse-driven camera position offset
        targetPosition.current.x = pointer.x * mouseSensitivity * 0.5;
        targetPosition.current.y = pointer.y * mouseSensitivity * 0.3;

        // Scroll-driven parallax (reads scroll from main thread via CSS variable or fallback)
        const scrollY =
            typeof window !== "undefined" ? window.scrollY / window.innerHeight : 0;
        targetPosition.current.z = -scrollY * scrollSensitivity;

        // Smooth lerp toward target
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
            groupRef.current.rotation.x,
            targetRotation.current.x,
            lerpSpeed
        );
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
            groupRef.current.rotation.y,
            targetRotation.current.y,
            lerpSpeed
        );
        groupRef.current.position.x = THREE.MathUtils.lerp(
            groupRef.current.position.x,
            targetPosition.current.x,
            lerpSpeed
        );
        groupRef.current.position.y = THREE.MathUtils.lerp(
            groupRef.current.position.y,
            targetPosition.current.y,
            lerpSpeed
        );
        groupRef.current.position.z = THREE.MathUtils.lerp(
            groupRef.current.position.z,
            targetPosition.current.z,
            lerpSpeed
        );
    });

    return <group ref={groupRef}>{children}</group>;
}
