import React, { useEffect, useState } from "react";
import "../Login/login.css"
import exports from "../../Database/db"
import logo from "../Login/loginavatar.png"

function Register({setLogged}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(()=>{
    },[]);
    function registerUser(){
        const isUserAdded = exports.addData({
            username: username,
            password: password
        });
        if(isUserAdded){
            alert("User Registered Successfully")
            setLogged(0);
        } else {
            alert("Username already exists, try some other name/ Login with your account")
        }
    }
    return <div className="LoginS">
        <div class="loginbox">
            <img src={logo} class="avatar"/>
            <h1>Register Here</h1>
            <div>
                <p>Username</p>
                <input type="text" onChange={(e)=>{setUsername(e.target.value)}} name= "" placeholder="Enter Username" required/>
                <p>Password</p>
                <input type="Password" onChange={(e)=>{setPassword(e.target.value)}}  name="" placeholder="Enter Password" require/>
                <input onClick={registerUser} type="submit" name="register" value="Register"/><br/>
                <a onClick={()=>{
                    setLogged(0)
                }}>Already Have an account?</a>
            </div>
        </div>
    </div>
}

export default Register;