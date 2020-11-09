import "../CSS/AboutMe.css"
import "nes.css/css/nes.min.css";
import { motion }  from 'framer-motion'; 

export default function AboutMe (something) {
    
    return(
        <motion.div className ="about-me">
           <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
           <button style={{background:"white"}} onClick={()=>something('')}>Close</button>
        </motion.div>
    )
};