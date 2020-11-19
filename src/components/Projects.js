import bb from '../assets/projects/Bluebadger/BB_1.PNG'
import evz from '../assets/projects/Envizo/Envizo_1.PNG'
import stnk from '../assets/projects/Stonks/Stonks_2.PNG';
import path from '../assets/projects/Pathfinder/Pathfinder_1.PNG';
import "../CSS/Projects.css"

const projects = [
     {
      title:"Envizo",
      text:"Blah environment blah lorem ipsom dorolis omg im in such much emotion paina mauahahahahhahah",
      image:evz,
      github:"https://github.com/xpectro93/myEnvizo",
      live:"https://myenvizo.herokuapp.com/"
    },
  {
      title:"Bluebadger",
      text:"I hate my life",
      image:bb,
      github:"https://github.com/xpectro93/BB-Den",
      live:"http://bluebadger.army/"
    },
{
      title:"Stonks",
      text:"Meme profits are going up",
      image:stnk,
      github:"https://github.com/xpectro93/TTP_Fullstack",
      live:"http://ttp-fs-jonathanandrade.herokuapp.com/"
    },
   {
      title:"Pathfinder",
      text:"Finds the path",
      image:path,
      github:"https://github.com/xpectro93/Pathfinder",
      live:"https://xpectro93.github.io/Pathfinder"
    }
]


export default function Projects () {

    return (
        <div className="projects overflow">
            {
                projects.map((project,i) => {
         
                    return(
                        <div className="project" key={i}>
                            <h3 className="retro">{project.title}</h3>
                            <img src={project.image} alt={"my project"} />
                            <p>{project.text}</p>
                            <a href={project.github} className="retro"  rel="noreferrer" target="_blank">Github</a>
                            <a href={project.live} className="retro"  rel="noreferrer" target="_blank">Live</a>
                           
                        </div>
                    )
                })
            }
        </div>
    )
}

 