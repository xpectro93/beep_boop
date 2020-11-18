import "../CSS/Technologies.css"

// import all images from the technologies subdirectory in assets
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('../assets/technologies', false, /\.(png|jpe?g|svg)$/));
  
export default function Technologies() {
    console.log(images)
    return <div className="technologies"><img src={images["html.png"].default} /></div>;
}