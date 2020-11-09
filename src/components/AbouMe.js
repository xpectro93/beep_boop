import "../CSS/AboutMe.css"
import "nes.css/css/nes.min.css";
import { motion }  from 'framer-motion'; 

export default function AboutMe (something) {
    
    return(
        <motion.div
            initial={{scale:0}}
            animate={{ scale:1}}
            transition={{ type: "spring", duration: 0.7 }}
            
            className ="about-me">
           <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
           <button style={{background:"white"}} onClick={()=>something('')}>Close</button>
        </motion.div>
    )
};

// transition={{ duration: 2 }}