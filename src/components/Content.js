import {useState, useEffect } from "react";
import "../CSS/Content.css"
import { motion } from 'framer-motion';
import "nes.css/css/nes.min.css";

//images
import wave from "../assets/wave.gif";
import pixel_me from "../assets/pixel_me.gif";
import email from "../assets/email.gif";

//component Import
import AboutMe from './AbouMe.js'
import ContactMe from "./ContactMe.js"


const imgObj ={
"About me": {
    content: AboutMe,
    images:wave
},
"":{
    content: function lol(){return 'lol'},
    images:pixel_me
}
// ,
// "Contact me":email
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
         <div className="nes-container is-rounded is-dark content" style={{margin:"5vh auto"}}>
        { hasStarted ? 
        <>
        <motion.div className="left"
            initial={{x:-300, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{ x: 300, opacity: 0 }}
            variants={variants}
         >
             
            <img id="pixel-gif" src={imgObj[selected]["images"]} alt="gif of me"/>
        </motion.div>

        <motion.div className="right"


            initial={{x:300, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{ x: -300, opacity: 0 }}
            variants={variants}>
        <h2> { selected }</h2>

        <ul style={{listStyle: "none",margin:"auto"}}>
            {menuItems.map(item =>  {
                return (
                    <>
                    <li onClick={()=>setSelected(`${item}`)} key={`${item}`}>{item}</li>
                    {selected === item ? imgObj[selected]["content"]():null}
                    </>
                )
        
            
            }
            
            
            )}
                
            
        </ul>
        


        </motion.div>
        </>
        : <button className={"retro btn nes-btn is-round is-dark"}
            style ={{alignSelf: "center",
                margin:"auto",color: "rgb(49,54,63)"}}
             onClick={handleStart}> Press Start </button> }
        </div> 
        
        
    )
}
/*
    Change left side gif for each tab selected from menu
*/
