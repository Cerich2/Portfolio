import React from "react";
import { useSpring, a } from "@react-spring/web";
import styles from "./.module.css";
import { useState, useEffect } from "react";

const FlipImage = () => {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const flippedListener = () => {
    const interval = setInterval(() => {
      set(!flipped);
    }, 4000);
    return () => clearInterval(interval);
  };

  useEffect(flippedListener, [flipped]);
  return (
    <div className={styles.container} onClick={() => set((state) => !state)}>
      <a.div
        className={`${styles.c} ${styles.back}`}
        style={{ opacity: opacity.to((o) => 1 - o), transform }}
      />
      <a.div
        className={`${styles.c} ${styles.front}`}
        style={{
          opacity,
          transform,
          rotateX: "180deg",
        }}
      />
    </div>
  );
};

export default FlipImage;
