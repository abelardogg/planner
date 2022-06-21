import './App.css';
import {Nav} from './components/nav/nav';
import Home from './components/home/home';
import About from './components/about/about';

import { BrowserRouter as Router, Routes , Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
     
      <Router>
       <Nav/>
        <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
          
        </Routes >
      </Router>
      
    </div>
  );
}

export default App;
