import React from 'react'
import { motion, useAnimation, useInView } from "framer-motion";

const inViewHook = (ref) => {
    const controls = useAnimation();
    const inView = useInView(ref, { once: false });
  
    const handleInView = () => {
      if (inView) {
        controls.start('visible');
      } else {
        controls.start('hidden');
      }
    };
  
    return [controls, handleInView];
}

export default inViewHook