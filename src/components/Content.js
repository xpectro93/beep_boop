import {useState, useEffect } from "react";
import "../CSS/Content.css"
import { motion } from 'framer-motion';

//images
import wave from "../assets/wave.gif";
import pixel_me from "../assets/pixel_me.gif";
import email from "../assets/email.gif";
import tech from "../assets/floating_tech.gif"
import myThings from '../assets/projects.gif'

//social
import resume from "../assets/resume.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/technologies/8_Github.png";
import resumepdf from "../assets/Nov2020.pdf";
//component Import
import Modal from '../Modal.js';

import AboutMe from './AbouMe.js'
import ContactMe from "./ContactMe.js"
import Technologies from "./Technologies.js"
import Projects from "./Projects.js"
import Start from "./Start.js"

import Footer from "./Footer.js";

const contentObject ={
"":{
    content: function lol(){return ''},
    images:pixel_me
},
"About me": {
    content: (x) =><AboutMe selected={x}/>,
    images:wave
},
"Contact me":{
    content: <ContactMe />,
    images:email
},
"Technologies": {
    content:<Technologies/>,
    images: tech
},
"Projects": {
    content:<Projects/>,
    images:myThings
}
}
const menuItems = ["About me", "Technologies","Projects", "Contact me"];
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

export default function Content () {
    const [ hasStarted, setHasStarted ] = useState(false);
    const [selected, setSelected ] = useState("");
    const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 600px)").matches);

    const handleStart = () => {
        localStorage.setItem("started","Ithas");
        setHasStarted(true);
    }
    useEffect(() => {

        if(localStorage.getItem('started')) {
            setHasStarted(true);
        }
        const handler = e => setIsMobile(e.matches)
        window.matchMedia("(max-width: 600px)").addListener(handler);

    }, [])
    const sml_ul_css  = isMobile ? "1vh auto" : "auto" 
    const renderino = selected === "About me" ? <AboutMe select={setSelected}/> : contentObject[selected]["content"]
    return (
         <div className="content" 
            style={{
                margin:" 2vh auto",
                padding:"0px",
                height:"70vh",
                backgroundColor:"transparent",
                alignItems:"center"
            }}>
        { hasStarted ? 
        <>
        <motion.div className="left"
            initial={{x:-300, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{ x: 300, opacity: 0 }}
            variants={variants}
         >
             
            <img id="pixel-gif" src={contentObject[selected]["images"]} alt="gif of me"/>
        </motion.div>

        <motion.div className="right"


            initial={{x:300, opacity:0}}
            animate={{x:0, opacity:1}}
            exit={{ x: -300, opacity: 0 }}
            variants={variants}>

        {selected === "" ? null :<Modal select={setSelected}>{renderino}</Modal> }
        <ul  className="nes-container is-dark is-centered with-title list-menu" style={{listStyle: "none",margin:sml_ul_css}}>
        <p className="title retro">{selected?selected:"MENU"}</p>
            {menuItems.map(item =>  {
                return (
                    <div className="item" key={`${item}-i`}>
                    <li onClick={()=>setSelected(`${item}`)} key={`${item}`}>{item}</li>
                    
                    </div>
                )
        
            
            }
            
            
            )}
                
        <div className="social" style={{display:"flex", justifyContent:"space-around"}}>
            <a href="https://www.linkedin.com/in/xpectro93/" rel="noreferrer" target="_blank">
                <img src={linkedin} alt={"linkedin"}/>
                <span>LinkedIn</span>
            </a>
            <a href="https://github.com/xpectro93" rel="noreferrer" target="_blank" >
                <img src={github} alt={"github"}/>
                <span>Github</span>
            </a>
            <a href={resumepdf} rel="noreferrer" target="_blank" >
                <img src={resume} alt={"resume"}/>
                <span>Resume</span>
                </a>
        </div>   
        </ul>
        
        
        </motion.div>
        </>
        :
        <Start handleStart={handleStart} isMobile={isMobile}/>
              }
             <Footer />
        </div> 
        
        
    )
}


