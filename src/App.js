import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './Components/NavBar/NavBar';
import HeroPage from './Components/HeroPage/HeroPage';
import CallToAction from './Components/CallToAction/CallToAction';
import Layer from './Components/Layer/Layer';
import HyperScale from './Components/HyperScale/HyperScale';
import About from './Components/About/About';
import NonZero from './Components/NonZero/NonZero';
import Match from './Components/Match/Match';
import NewWorld from './Components/NewWorld/NewWorld';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={
            <>
            <NavBar/>
      <HeroPage/>
      <CallToAction/>
      <Layer/>
      <HyperScale/>
      <About/>
      <NonZero/>
      <Match/>
      <NewWorld/>
      <Footer/>
            </>
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
