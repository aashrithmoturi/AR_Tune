import React, { useEffect, useState } from "react";
import "../Login/login.css"
import exports from "../../Database/db"
import logo from "../Login/loginavatar.png"
function Login({setLogged}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(()=>{
    },[]);

    function verifyLogin(){
        const isValidUser = exports.verify({
            username: username,
            password: password
        });
        console.log(isValidUser);
        if(isValidUser){
            setLogged(2);
        } else {
            alert("Username or passwords do not match")
        }
    }

    return <div className="LoginS">
        <div  class="loginbox">
            <img src={logo} class="avatar"/>
            <h1>Login Here</h1>
            <div>
                <p>Username</p>
                <input type="text" onChange={(e)=>{setUsername(e.target.value)}} name= "" placeholder="Enter Username" required/>
                <p>Password</p>
                <input type="Password" onChange={(e)=>{setPassword(e.target.value)}}  name="" placeholder="Enter Password" require/>
                <input onClick={verifyLogin} type="submit" name="login" value="Login"/><br/>
                <a onClick={()=>{
                    setLogged(1)
                }}>Don't have account?</a>

            </div>
        </div>
    </div>
}

export default Login;