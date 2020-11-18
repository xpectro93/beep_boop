import "../CSS/Technologies.css"

// import all images from the technologies subdirectory in assets
function importAll(r) {
    let images = {};
    r.keys().map((item) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('../assets/technologies', false, /\.(png|jpe?g|svg)$/));
  
export default function Technologies() {
    let keys = Object.keys(images);
    return <div className={"technologies"}>
        {
            keys.map(picture => {
                let [name] = picture.split(".")
                return (
                <div className={"tech"} key={`${picture}`}>
                    <h3>{name}</h3>
                    <img src={images[picture].default} alt={`${picture}`} />
                </div>
                )
            })
        }
        
        
        
        }
            
        </div>;
}