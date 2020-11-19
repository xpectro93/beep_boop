import bb from '../assets/projects/Bluebadger/BB_1.PNG'
import evz from '../assets/projects/Envizo/Envizo_1.PNG'
import stnk from '../assets/projects/Stonks/Stonks_2.PNG';
import path from '../assets/projects/Pathfinder/Pathfinder_1.PNG';
import "../CSS/Projects.css"

const projects = [
     {
      title:"Envizo",
      text:"An application that increases the visibility of environmental issues and encourages communities to set goals together",
      tech: "D3, React, Redux, Node.js,MaterializeCSS, AWS,PostgreSQL",
      image:evz,
      github:"https://github.com/xpectro93/myEnvizo",
      live:"https://myenvizo.herokuapp.com/"
    },
  {
      title:"Bluebadger",
      text:"Application focused on entertaining the user with posts and videos fetched from the Reddit API",
      tech: "React, AJAX, Express, Node.js, PostgreSQL, Passport, Bcrypt, MaterializeCSS",
      image:bb,
      github:"https://github.com/xpectro93/BB-Den",
      live:"http://bluebadger.army/"
    },
{
      title:"Stonks",
      text:"App that allows you to track your virtual portfolio using virtual currency to view your the current state of stocks",
      tech:" React, AJAX, Firebase Authentication",
      image:stnk,
      github:"https://github.com/xpectro93/TTP_Fullstack",
      live:"http://ttp-fs-jonathanandrade.herokuapp.com/"
    },
   {
      title:"Pathfinder",
      text:"A pathfinding visualizer, this project uses vanilla JavaScript and Canvas to show the user how A* and Dijkstra’s algorithm acquire the shortest path between two points from randomly generated mazes",
      tech:"Canvas",
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
                    <p>Built with {" " + project.tech}</p>
                            <a href={project.github} className="retro"  rel="noreferrer" target="_blank">Github</a>
                            <a href={project.live} className="retro"  rel="noreferrer" target="_blank">Live</a>
                           
                        </div>
                    )
                })
            }
        </div>
    )
}

 