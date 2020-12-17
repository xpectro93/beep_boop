import "./CSS/Modal.css"
// import "nes.css/css/nes.min.css";
import { motion }  from 'framer-motion'; 

const buttonCss ={
    background:"white",
    // width:"50%",
    margin:"1vh auto",
    height:"min-content", 
    fontSize:"15px",
    position:'fixed',
    width:"max-content",
    padding:"0px 3px"
}

export default function Modal (props) {
    return(
        <motion.div
            initial={{scale:0}}
            animate={{ scale:1}}
            transition={{ type: "spring", duration: 0.6 }}
            
            className ="le-modal">
           {props.children}
           <button className="modal-button" style={buttonCss} onClick={()=>props.select('')}>X</button>
        </motion.div>
    )
};
// style={buttonCss} 