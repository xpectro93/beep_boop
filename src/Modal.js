import "./CSS/Modal.css"
// import "nes.css/css/nes.min.css";
import { motion }  from 'framer-motion'; 

const buttonCss ={background:"white",width:"50%",margin:"1vh auto", height:"min-content", fontSize:"15px"}

export default function Modal (props) {
    return(
        <motion.div
            initial={{scale:0}}
            animate={{ scale:1}}
            transition={{ type: "spring", duration: 0.6 }}
            
            className ="le-modal">
           {props.children}
           <button className="modal-button" onClick={()=>props.select('')}>Close</button>
        </motion.div>
    )
};
// style={buttonCss} 