import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import HeroPage from './Components/HeroPage/HeroPage';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      <HeroPage/>
      </Router>
    </div>
  );
}

export default App;
