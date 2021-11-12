import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import Navigation from './components/Navbar/Navbar';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [data, setData] = useState();
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
    
  );
}

export default App;
