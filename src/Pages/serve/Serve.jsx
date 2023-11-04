import React, { useEffect } from "react";
import { useState } from "react";

import Login from "../Login/Login"
import Choose from "../Choose/choose"
import Register from "../Register/Register"
import img from "../serve/bck.jpeg"
import "../serve/serve.css"
function Serve() {
    const [isLoggedin, setLogged] = useState(0);
    useEffect(()=>{

    },[])
    function logout(){
        setLogged(0);
    }
    return (<>
        <div className="bgimg" style={{ backgroundImage:`url(${img})`}}>
    
        {isLoggedin == 0 && <Login setLogged={setLogged}/>}
        {isLoggedin == 1 && <Register setLogged={setLogged}/>}
        {isLoggedin == 2 && <Choose logout={logout}/>}
        </div>
    </>)
}

export default Serve; 