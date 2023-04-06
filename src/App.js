import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
      </Router>
    </div>
  );
}

export default App;
