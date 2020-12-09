import "../CSS/AboutMe.css"
import "nes.css/css/nes.min.css";

const buttonCss = {
    color:"var(--text-color)",
    margin:"1rem",
    border:"2px solid var(--off-color)",
    padding:"0.5rem"
}
export default function AboutMe ({select}) {
    return(
        <div className ="about-me overflow">
          <h1 className="retro">Let me introduce myself</h1>
          <p>Jonathan Andrade is the name. Coding is my game</p>
          <p>
            I'm a software developer based in NYC, specializing in building Full Stack Web Applications. 
            I really enjoy learning new technologies, but I also enjoy teaching others.   
    
         </p>
         <button className="retro" style={buttonCss}onClick={()=>select("Contact me")}>Get in touch</button>
        </div>
    )
};