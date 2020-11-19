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






// let keys = Object.keys();
const projects = [
    {
      title:"Envizo",
      text:"Blah environment blah",
      image:"www.image.com",
      github:"https://github.com/xpectro93/myEnvizo",
      live:"https://myenvizo.herokuapp.com/"
    },
    {
      title:"Bluebadger",
      text:"I hate my life",
      image:"sad image",
      github:"https://github.com/xpectro93/BB-Den",
      live:"http://bluebadger.army/"
    },
    {
      title:"Stonks",
      text:"Meme profits are going up",
      image:"www.sadmage.com",
      github:"https://github.com/xpectro93/TTP_Fullstack",
      live:"http://ttp-fs-jonathanandrade.herokuapp.com/"
    },
    {
      title:"Pathfinder",
      text:"Finds the path",
      image:"www.path.com",
      github:"https://github.com/xpectro93/Pathfinder",
      live:"https://xpectro93.github.io/Pathfinder"
    },
]


export default function Projects () {
    return (
        <div className="projects overflow">

        </div>
    )
}