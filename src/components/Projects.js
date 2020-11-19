import bb1 from '../assets/projects/Bluebadger/BB_1.PNG'
import bb2 from '../assets/projects/Bluebadger/BB_2.PNG'
import bb3 from '../assets/projects/Bluebadger/BB_3.PNG'
import bb4 from '../assets/projects/Bluebadger/BB_4.PNG'

import evz1 from '../assets/projects/Envizo/Envizo_1.PNG'
import evz2 from '../assets/projects/Envizo/Envizo_2.PNG'
import evz3 from '../assets/projects/Envizo/Envizo_3.PNG'
import evz4 from '../assets/projects/Envizo/Envizo_4.PNG';

import stnk1 from '../assets/projects/Stonks/Stonks_1.PNG';
import stnk2 from '../assets/projects/Stonks/Stonks_2.PNG';
import stnk3 from '../assets/projects/Stonks/Stonks_3.PNG';
import stnk4 from '../assets/projects/Stonks/Stonks_4.PNG';

import path1 from '../assets/projects/Pathfinder/Pathfinder_1.PNG';
import path2 from '../assets/projects/Pathfinder/Pathfinder_2.PNG';
import path3 from '../assets/projects/Pathfinder/Pathfinder_3.PNG';
import path4 from '../assets/projects/Pathfinder/Pathfinder_4.PNG';

import { useState } from "react";
import "../CSS/Projects.css"
import Modal from "../Modal.js"
const projects = {
    "Envizo": {
      title:"Envizo",
      text:"Blah environment blah lorem ipsom dorolis omg im in such much emotion paina mauahahahahhahah",
      images:[evz1, evz2, evz3, evz4],
      github:"https://github.com/xpectro93/myEnvizo",
      live:"https://myenvizo.herokuapp.com/"
    },
   "Bluebadger": {
      title:"Bluebadger",
      text:"I hate my life",
      images:[bb1,bb2,bb3,bb4],
      github:"https://github.com/xpectro93/BB-Den",
      live:"http://bluebadger.army/"
    },
    "Stonks": {
      title:"Stonks",
      text:"Meme profits are going up",
      images:[stnk1,stnk2,stnk3,stnk4],
      github:"https://github.com/xpectro93/TTP_Fullstack",
      live:"http://ttp-fs-jonathanandrade.herokuapp.com/"
    },
    "Pathfinder": {
      title:"Pathfinder",
      text:"Finds the path",
      images:[path1,path2,path3,path4],
      github:"https://github.com/xpectro93/Pathfinder",
      live:"https://xpectro93.github.io/Pathfinder"
    }
}


export default function Projects () {

    const [ selectImg, setSelectImg ] = useState("");
    const [pro, setPro ] = useState("")
    let projectsKeys = Object.keys(projects);
    return (
        <div className="projects overflow">
            {
                projectsKeys.map((project,i) => {
         
                    return(
                        <div className="project" key={i}>
                            <h3 className="retro">{projects[project].title}</h3>

                            {projects[project].images.map((img,j) => {
                             return(<img onClick={()=>{
                                setPro(project) 
                                setSelectImg(j)} }style={{width:"100px",height:"100px",objectFit:"cover"}}src={img} key={`${projects[project].title}-${j}`}alt="something cool" />)
                            })}
                            {selectImg === "" || pro ==="" ?  null :
                                <Modal select={setSelectImg}>
                                    {console.log(project, selectImg)}
                                    <img className="overflow"style={{width:"500px"}}src={projects[pro].images[selectImg]} />
                                </Modal> }

                            <p>{projects[project].text}</p>
                            <a href={projects[project].github}  rel="noreferrer" target="_blank">Github</a>
                            <a href={projects[project].live}  rel="noreferrer" target="_blank">Live Link</a>
                           
                        </div>
                    )
                })
            }
        </div>
    )
}

//return(<img style={{width:"100px",objectFit:"cover"}}src={img} key={`${project.title}-${j}`}alt="something cool" />)
 