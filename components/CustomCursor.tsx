"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 24, stiffness: 520 });
  const cursorYSpring = useSpring(cursorY, { damping: 24, stiffness: 520 });

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      cursorX.set(event.clientX - 18);
      cursorY.set(event.clientY - 18);
    };

    const updateHoverState = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setIsHovering(Boolean(target?.closest("a, button, [role='button']")));
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });
    window.addEventListener("mouseover", updateHoverState, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", updateHoverState);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] hidden h-9 w-9 items-center justify-center rounded-full border border-[#ff8000] pointer-events-none mix-blend-screen md:flex"
      animate={{ scale: isHovering ? 1.55 : 1, opacity: isHovering ? 0.65 : 1 }}
      style={{ x: cursorXSpring, y: cursorYSpring }}
    >
      <div className="h-1.5 w-1.5 rounded-full bg-[#ff8000] shadow-[0_0_18px_#ff8000]" />
    </motion.div>
  );
}
