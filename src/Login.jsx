import React from "react";
import UserBoxData from "./component/UserBoxData";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {

const [usernameReg, setUserNameReg] = useState("");
const [passwordReg, setPasswordReg] = useState("");

const [username, setUsername] = useState("")
const [password, setPassword] = useState('')

const [LoginStatus, setLoginStatus] = useState("")


const register = async () => {
  await axios
    .post("/register", {
      username: usernameReg,
      password: passwordReg,
    })
    .then((response) => {
      console.log(response.data);
    });
};

const Login = async () => {
  await axios
    .post("/login", {
      username: username,
      password: password,
    })
    .then((response) => {
      if(response.data.message) {
        setLoginStatus(response.data.message)
      } else {
        setLoginStatus(response.data[0].username)
      }
    });
};


  return (
    <div className="login">
      <h1>Login</h1>
      <input type="text" placeholder="username" 
      onChange={(e) => {
        setUsername(e.target.value)
      }}/>

      <input type="text" placeholder="password"
      onChange={(e)=> {
        setPassword(e.target.value)
      }} />

      <button onClick={Login}>submit </button>

      <div className="register">
        <h1>Create An Account</h1>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setUserNameReg(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />

        <button onClick={register}>Register</button>
      </div>

      <h1>{LoginStatus}</h1>
    </div>
  );
};

export default LoginPage;
