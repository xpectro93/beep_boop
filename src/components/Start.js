import React from 'react';

const compCss = {
    display:"flex",
    width:"100%",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
}
let btnCss = {
    height:"100px",
    alignSelf: "center",
    margin:"10vh auto 10vh",
    color: "rgb(49,54,63)"
    
}


export default function Start ({handleStart, isMobile}) {
    let mobile ={ fontSize:isMobile? "20px":"35px"}
    btnCss = {...btnCss,...mobile}
    return (
        <div className="press-start" style={compCss}>
        <button className={"retro btn nes-btn is-round is-dark"}
            style ={btnCss}
             onClick={handleStart}> START
        </button>
        <h3>Press Start</h3>
        </div>
    )
}