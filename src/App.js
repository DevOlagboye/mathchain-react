import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import HeroPage from './Components/HeroPage/HeroPage';
import CallToAction from './Components/CallToAction/CallToAction';
import Layer from './Components/Layer/Layer';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <HeroPage/>
      <CallToAction/>
      <Layer/>
      </Router>
    </div>
  );
}

export default App;
