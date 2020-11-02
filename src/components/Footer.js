import React, { useState, useEffect } from "react";
import "../App.css";
export default function Footer () {
    const [ msg , setMsg ] = useState("Insert Coin");

    useEffect(()=> {
        let timeId = setInterval(() => {
            setMsg( msg === "Insert Coin" ? "Game Over" : "Insert Coin");
        }, 1000);
        return () => clearInterval(timeId);
    },[ msg ])

    return (
        <div id="footer">
            <p>© Jonathan Andrade </p>
            <p>{msg}</p>
        </div>
    )
}