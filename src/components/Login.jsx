import React, { useState } from "react";
import '../styles/login.css';
import Axios from 'axios';

const Login = () => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [userNameError, setUserNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  async function loginUser(payload) {
    const url = 'https://reqres.in/api/login';
    try {
      const { data } = await Axios.post(url, payload);
      console.log(data, "data");
      return data;

    } catch (e) {
      console.error('getProductsInfo error\n', e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      setUserNameError("Enter UserName");
      setPasswordError("Enter Password");
    } else {
      setUserNameError("");
      setPasswordError("");
    }
    const response = await loginUser({
      username,
      password
    });
    const { token } = response;
    setToken(token);
  };

  const handleUserName = (e) => {
    if (e.target.value === "") {
      setUserNameError("Enter UserName")
    } else {
      setUserNameError("");
    }
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    if (e.target.value === "") {
      setPasswordError("Enter Password")
    } else {
      setPasswordError("");
    }
    setUserName(e.target.value);
  };

  const handleSignOut = () => {
    setToken('');
  };


  return (<div>

    {token ?
      <div className="login">
        <h1>Token : {token}</h1>
        <button onClick={handleSignOut}>Logout</button>
      </div> :
      <form className="login" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input placeholder="email" name="username" id="username" value={username} onChange={handleUserName} />
        <input placeholder="password" name="password" value={password} onChange={handlePassword} />
        <div style={{color:"red"}}>{userNameError}</div>
        <div style={{color:"red"}}>{passwordError}</div>
        <button type="submit">Login</button>
      </form>
    }
  </div>
  )
};

export default Login;
