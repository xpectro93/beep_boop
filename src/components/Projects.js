import "../CSS/Projects.css"
function importAll(r) {
    let images = {};
    r.keys().map((item) => images[item.replace('./', '')] = r(item));
    return images;
  }
  
const bbImages = importAll(require.context('../assets/projects/Bluebadger', false, /\.(png|jpe?g|svg)$/));
const pathImages = importAll(require.context('../assets/projects/Pathfinder', false, /\.(png|jpe?g|svg)$/));
const envizoImages = importAll(require.context('../assets/projects/Envizo', false, /\.(png|jpe?g|svg)$/));
const stonksImages = importAll(require.context('../assets/projects/Stonks', false, /\.(png|jpe?g|svg)$/));
console.log(bbImages)
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