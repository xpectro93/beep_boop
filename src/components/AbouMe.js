import "../CSS/AboutMe.css"
import "nes.css/css/nes.min.css";

const buttonCss = {
    color:"var(--text-color)",
    margin:"1rem",
    border:"2px solid var(--off-color)",
    padding:"0.5rem"
}
export default function AboutMe (select) {
    console.log(select)
    return(
        <div className ="about-me overflow">
          <h1 className="retro">Let me introduce myself</h1>
          <p>Jonathan Andrade is the name. Coding is my game</p>
          <p>
            Ever since I got my first computer I've had a passion for computers and 
            anything tech related. While studying computer engineering, I found my passion
            for programming. Now after joining Pursuit, I am excited to expand my skills as
            a Full Stack Web Developer.
         </p>
         <button className="retro" style={buttonCss}onClick={()=>select("Contact me")}>Get in touch</button>
        </div>
    )
};