import {useState, useEffect } from "react";
import wave from "../assets/wave.gif";
import "../CSS/Menu.css"
import { motion, useTransform, useMotionValue } from 'framer-motion';

const menuItems = ["About me","Contact me", "Projects"];
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }
export default function Menu () {
    const [ hasStarted, setHasStarted ] = useState(false);

    const handleStart = () => {
        localStorage.setItem("started","Ithas");
        setHasStarted(true);
    }

    useEffect(() => {
        console.log(localStorage.getItem('started'))
        if(localStorage.getItem('started')) {
            setHasStarted(true);
        }
    }, [])
    const x =  useMotionValue(0);
    const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
    return (
         <div id="menu">
        { hasStarted ? 
        <>
        <motion.div
            initial={{x:-300, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{ x: 300, opacity: 0 }}
            variants={variants}
         >
            <img id="pixel-gif" src={wave} alt="gif of me"/>
        </motion.div>
        <motion.ul
            initial={{x:300, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{ x: -300, opacity: 0 }}
            variants={variants}>
        <li>{hasStarted.toString()}</li>
            {menuItems.map(item => <li onClick={()=>console.log('clickedd')} key={`${item}`}>{item}</li>)}
        </motion.ul>
        </>
        : <motion.h1 
            initial={{scale:0.1, opacity:0}}
            animate={{scale:1, opacity:1}}
            exit={{scale:0.1, opacity:0}}
            variants={variants}
            className={"btn retro"}
             onClick={handleStart}> Start </motion.h1> }
        </div> 
        
        
    )
}
/*
    Change left side gif for each tab selected from menu
*/