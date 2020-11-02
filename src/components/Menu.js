import React from "react";
import me_gif from "../assets/pixel_me.gif";
import "../CSS/Menu.css"

const menuItems = ["About me","Contact me", "Projects"];

export default function Menu () {
    return (
        <div id="menu">
            <img id="pixel-gif" src={me_gif} alt="gif of me"/>
            <ul>
                {menuItems.map(item => <li key={`${item}`}>{item}</li>)}
            </ul>
        </div>
    )
}