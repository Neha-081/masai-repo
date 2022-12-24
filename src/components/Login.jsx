import React, { useEffect, useState } from "react";
import '../styles/login.css';
import Axios from 'axios';
import { useSelector } from "react-redux";

const Login = () => {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const { data } = useSelector((store) => store.login);

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
    const response = await loginUser({
      username,
      password
    });
    const { token } = response;
    setToken(token);
  }

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
        <input placeholder="email" name="username" id="username" value={username} onChange={e => setUserName(e.target.value)} />
        <input placeholder="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    }
  </div>
  )
};

export default Login;


// eve.holt@reqres.in
// cityslicka
