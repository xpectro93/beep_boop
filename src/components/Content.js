import {useState, useEffect } from "react";
import "../CSS/Content.css"
import { motion } from 'framer-motion';

//images
import wave from "../assets/wave.gif";
import pixel_me from "../assets/pixel_me.gif";
import email from "../assets/email.gif";

import AboutMe from './AbouMe.js'

const imgObj ={
"About me": wave,
"":pixel_me,
"Contact me":email
}
const menuItems = ["About me","Contact me", "Technologies","Projects"];
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

export default function Content () {
    const [ hasStarted, setHasStarted ] = useState(false);
    const [selected, setSelected ] = useState("");

    const handleStart = () => {
        localStorage.setItem("started","Ithas");
        setHasStarted(true);
    }

    useEffect(() => {

        if(localStorage.getItem('started')) {
            setHasStarted(true);
        }
    }, [])
   
    return (
         <div id="content">
        { hasStarted ? 
        <>
        <motion.div className="left"
            initial={{x:-300, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{ x: 300, opacity: 0 }}
            variants={variants}
         >
             
            <img id="pixel-gif" src={imgObj[selected]} alt="gif of me"/>
        </motion.div>

        <motion.div className="right"


            initial={{x:300, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{ x: -300, opacity: 0 }}
            variants={variants}>
        <h2> { selected }</h2>
        <ul>
            {menuItems.map(item => <li 
            onClick={()=>setSelected(`${item}`)} key={`${item}`}>{item}</li>)}
        </ul>
        {selected === "About me" ? 
         <>
            <AboutMe/>
         </>:null}
        


        </motion.div>
        </>
        : <motion.h1 
            initial={{scale:0.1, opacity:0}}
            animate={{scale:1, opacity:1}}
            exit={{scale:0.1, opacity:0}}
            variants={variants}
            className={"btn retro"}
             onClick={handleStart}> Press Start </motion.h1> }
        </div> 
        
        
    )
}
/*
    Change left side gif for each tab selected from menu
*/