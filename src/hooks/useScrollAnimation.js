"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook to detect when an element enters the viewport
 * Returns a ref to attach to the element and an inView boolean
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility ratio to trigger (0-1)
 * @param {string} options.rootMargin - Margin around root (CSS format)
 * @param {boolean} options.triggerOnce - Only trigger once
 * @returns {{ ref: React.RefObject, inView: boolean }}
 */
export function useScrollAnimation({
    threshold = 0.15,
    rootMargin = "0px 0px -50px 0px",
    triggerOnce = true,
} = {}) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setInView(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, inView };
}
