import React, { useState, useEffect } from "react";
import "../App.css";
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
export default function Footer () {
    const [ msg , setMsg ] = useState("Insert Coin");

    useEffect(()=> {
        let timeId = setInterval(() => {
            setMsg( msg === "Insert Coin" ? "Game Over" : "Insert Coin");
        }, 1000);
        return () => clearInterval(timeId);
    },[ msg ])

    return (
        <motion.div 
        initial={{y:300, opacity:0}}
        animate={{y:0, opacity:0.6}}
        exit={{ y: -300, opacity: 0 }}
        variants={variants}
        id="footer">
            <p>© Jonathan Andrade </p>
            <p>{msg}</p>
        </motion.div>
    )
}