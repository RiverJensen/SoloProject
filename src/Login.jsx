import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Form } from "react-bootstrap";


const LoginPage = () => {
  const [usernameReg, setUserNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [LoginStatus, setLoginStatus] = useState("");

  // const [userLogin, setUserLogin] = useState
  // const [userRef, setUserRef] = useState

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

  const redirect = useNavigate();
  const Login = async () => {
    await axios
      .post("/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.status !== 200) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(username);
          redirect("/UserBoxData");
        }
      });
  };

  return (
    <div data-bs-theme="dark" >
      <span className="border border=dark">
        <div
          className="login"
          style={{  display: "flex", justifyContent: "center" }}
        >
          <div >
            <h1 style={{color: 'white'}}>Login</h1>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
              <Form.Control
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup>
              <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
              <Form.Control
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <Button variant="primary" onClick={Login} size="lg">
              {" "}
              Submit{" "}
            </Button>
          </div>
          
          <div 
           style={{ position : "absolute", bottom: 450}}
           
        >
            <h1 style={{color: 'white'}}>Create An Account</h1>

            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
              <Form.Control
                onChange={(e) => {
                  setUserNameReg(e.target.value);
                }}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup>
              <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
              <Form.Control
                onChange={(e) => {
                  setPasswordReg(e.target.value);
                }}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup
              type="text"
              placeholder="username"
              onChange={(e) => {
                setUserNameReg(e.target.value);
              }}
            />
            <InputGroup
              type="text"
              placeholder="password"
              onChange={(e) => {
                setPasswordReg(e.target.value);
              }}
            />

            <Button onClick={register} size="lg" variant="secondary">
              Register
            </Button>
          </div>
<div style={{ position: "absolute", color: "white", bottom: 350}}>
          <h1 >{LoginStatus} </h1>
          </div>
        </div>
      </span>
    </div>
  );
};

export default LoginPage;
