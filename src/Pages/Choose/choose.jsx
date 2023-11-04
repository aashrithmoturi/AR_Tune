import React, { useState } from "react";
import "../Choose/choose.css"
import MainCode from "../MainCode/Maincode"
import img from "../serve/bck.jpeg"

function Choose({logout}){
    const [option, setOption] = useState(0);
    
    return <div className="choose">
        {option == 1 && <MainCode/>}
        {option == 0 && 
            <div>
            <div class="cards">
                <div  style={{ backgroundImage:`url(${img})`}} onClick={()=>{
                    window.location.replace("http://127.0.0.1:5501/tracktune-master/index.html");
                    setOption(1)}} class="card"> 
                    <h2>Track Tune</h2>
                </div>
                <div style={{ backgroundImage:`url(${img})`}} onClick={()=>{
                    window.location.replace("http://127.0.0.1:5500/Music-Player-CN/index.html")
                    setOption(2)}} class="card">
                    <h2>Music-Player</h2>
                </div>
            </div>
            </div>
        }
    </div>
}

export default Choose