import React, {Component} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
        <div className='wrapper'>
          <Navbar/>
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Footer/>
        </div>
    );
  }
}

export default App;