import React from 'react';
import "../CSS/Banner.css"
import { motion } from "framer-motion";


const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export default function Banner () {
    return (
        <motion.div 
            initial={{y:-300, opacity:0}}
            animate={{y:0, opacity:1}}
            exit={{ y: 300, opacity: 0 }}
            variants={variants}
            id="main-banner">
            <div id="me"></div>
            <div id="title-container">

                <h1 className="retro">Jonathan</h1>


                <h1 className="retro">Andrade</h1>
                <h2>FullStack Web Developer</h2>
            </div>
        </motion.div>
    )
}