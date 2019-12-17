import { useRef, useEffect } from "react";

export default function useRaf(handler) {
    const requestRef = useRef();

    useEffect(() => {
        const animate = time => {
            handler(time);
            requestRef.current = requestAnimationFrame(animate);
        };
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            cancelAnimationFrame(requestRef.current);
        };
    }, [handler]);
}
