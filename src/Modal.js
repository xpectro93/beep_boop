import "./CSS/Modal.css"
import "nes.css/css/nes.min.css";
import { motion }  from 'framer-motion'; 

export default function Modal (props) {
    console.log(props)
    return(
        <motion.div
            initial={{scale:0}}
            animate={{ scale:1}}
            transition={{ type: "spring", duration: 0.7 }}
            
            className ="le-modal">
           {props.children}
           <button style={{background:"white"}} onClick={()=>props.select('')}>Close</button>
        </motion.div>
    )
};