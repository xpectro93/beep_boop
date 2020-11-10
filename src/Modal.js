import "./CSS/Modal.css"
import "nes.css/css/nes.min.css";
import { motion }  from 'framer-motion'; 

const buttonCss ={background:"white", position:"absolute", left:"50%", top:"85%",transform: "translate(-50%,100%)"}

export default function Modal (props) {
    return(
        <motion.div
            initial={{scale:0}}
            animate={{ scale:1}}
            transition={{ type: "spring", duration: 0.6 }}
            
            className ="le-modal">
           {props.children}
           <button style={buttonCss} onClick={()=>props.select('')}>Close</button>
        </motion.div>
    )
};