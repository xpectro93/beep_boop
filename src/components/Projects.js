import "../CSS/Projects.css"
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


const projects = [
    {
      title:"Envizo",
      text:"Blah environment blah",
      images:[evz1, evz2, evz3, evz4],
      github:"https://github.com/xpectro93/myEnvizo",
      live:"https://myenvizo.herokuapp.com/"
    },
    {
      title:"Bluebadger",
      text:"I hate my life",
      images:[bb1,bb2,bb3,bb4],
      github:"https://github.com/xpectro93/BB-Den",
      live:"http://bluebadger.army/"
    },
    {
      title:"Stonks",
      text:"Meme profits are going up",
      images:[stnk1,stnk2,stnk3,stnk4],
      github:"https://github.com/xpectro93/TTP_Fullstack",
      live:"http://ttp-fs-jonathanandrade.herokuapp.com/"
    },
    {
      title:"Pathfinder",
      text:"Finds the path",
      images:[path1,path2,path3,path4],
      github:"https://github.com/xpectro93/Pathfinder",
      live:"https://xpectro93.github.io/Pathfinder"
    },
]


export default function Projects () {
    return (
        <div className="projects overflow">
            {
                projects.map((project,i) => {
                    return(
                        <div className="project" key={i}>
                            <h3 className="retro">{project.title}</h3>
                            {project.images.map(img => <img style={{width:"100px"}}src={img} alt="something cool" />)}
                            <p>{project.text}</p>
                            <a href={project.github}  rel="noreferrer" target="_blank">Github</a>
                            <a href={project.link}  rel="noreferrer" target="_blank">Live Link</a>

                        </div>
                    )
                })
            }
        </div>
    )
}