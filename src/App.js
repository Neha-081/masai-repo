import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='products-bar'>
      <Products />
      </div>
    </div>
  );
}

export default App;
