'use client'
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, delay, from }: { children: React.ReactNode, delay?: boolean, from: 'top' | 'bottom' }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once:false})
    const controls = useAnimation()

    useEffect(() => {
     if(isInView){
        controls.start('visible')
     }
     else {
        controls.set('hidden'); 
    }
    }, [isInView])
    

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        variants={{
          hidden: from == 'bottom' ? { opacity: 0, y: 150 } : { opacity: 0, y: -150 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={'hidden'}
        animate={controls}
        transition={delay ? {duration: 0.5, delay: .5} : {duration: 0.8}}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
