import './App.css';
import { Provider as ReduxProvider, useDispatch } from 'react-redux';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { store } from './components/store/store';
import { useEffect } from 'react';
import axios from 'axios';
import { getDataSuccess } from './components/store/actions';

function App() {


  const dispatch = useDispatch()
  useEffect(() => {
    const getLogin = () => {
      axios.get("https://reqres.in/api/login").then(({ data }) => {
        dispatch(getDataSuccess(data))
      })
    }
    getLogin();
  }, [dispatch])

  return (
    <div className="App">

      <Navbar />
      <Login />
      <div className='products-bar'>
        <Products />
      </div>
    </div>
  );
}

export default App;
