"use client";
import { motion, useAnimate, AnimationPlaybackControls } from "framer-motion";
import { useEffect, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState(false);
  const [scope, animate] = useAnimate();

  // Explicitly typing the animation state
  const [animation, setAnimation] = useState<AnimationPlaybackControls | null>(null);

  useEffect(() => {
    const startAnimation = async () => {
      const controls = await animate(
        scope.current,
        { x: "-50%" },
        { duration: 30, ease: "linear", repeat: Infinity }
      );
      setAnimation(controls);
    };
    startAnimation();
  }, [animate, scope]);

  useEffect(() => {
    if (animation) {
      animation.speed = isHovered ? 0.3 : 1;
    }
  }, [isHovered, animation]);

  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex">
        <motion.div
          ref={scope}
          className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400 text-7xl">&#10038;</span>
              <span className="group-hover:text-lime-400">Try it for Free</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
