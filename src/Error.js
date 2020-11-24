import React from "react";

const contentCSS = {
    margin:" 2vh auto",
    padding:"0px",
    height:"70vh",
    backgroundColor:"transparent"
}

export default function Error () {
    return(
        <div className={"nes-container is-dark content"} style={contentCSS}>
            <h1 className="retro" style={{margin:"auto"}}>
            ERROR ERROR BOOP BOOP <br/>404 <br/> page not found
            </h1>
        </div>
    )
};