// import "../CSS/AboutMe.css"
import { useRef } from 'react'
export default function ContactMe () {
    const form = useRef(null)

    
    const submito = e => {
        e.preventDefault();
        // const form = e.target;
        const data = new FormData(form.current);
        console.log('form',form);
        console.log('data',data);


    }
    return(
        <div className ="about-me">
            <form  onSubmit={submito}>
                <input type="text" name="dance"/>
                <input type="text" name="infox"/>
                <input type="submit" name="submitarino" value="submitotooooo"/>
            </form>
        </div>
    )
};