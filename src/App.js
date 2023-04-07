import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import HeroPage from './Components/HeroPage/HeroPage';
import CallToAction from './Components/CallToAction/CallToAction';
import Layer from './Components/Layer/Layer';
import HyperScale from './Components/HyperScale/HyperScale';
import About from './Components/About/About';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <HeroPage/>
      <CallToAction/>
      <Layer/>
      <HyperScale/>
      <About/>
      </Router>
    </div>
  );
}

export default App;
