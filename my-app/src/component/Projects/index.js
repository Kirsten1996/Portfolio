import React, {Component} from 'react';
import './index.css';
import flower from './media/flowers.jpg'

class Projects extends Component {
  render() {
    return   <div className="projects">
      <h2>Portfolio</h2>
      <div className="box">
        <div className="project">
          <img src={flower} alt={flower}/>
            <div className="overlay">
              <div className="text">Hello bummies</div>
              <button className="follow">Follow</button>
            </div>
        </div>
        <div className="project">
          <img src={flower} alt={flower}/>
            <div className="overlay">
              <div className="text">Hello bummies</div>
              <button className="follow">Follow</button>
            </div>
        </div>
        <div className="project">
          <img src={flower} alt={flower}/>
            <div className="overlay">
              <div className="text">Hello bummies</div>
              <button className="follow">Follow</button>
            </div>
        </div>
        <div className="project">
          <img src={flower} alt={flower}/>
            <div className="overlay">
              <div className="text">Hello bummies</div>
              <button className="follow">Follow</button>
            </div>
        </div>
        <div className="project">
          <img src={flower} alt={flower}/>
            <div className="overlay">
              <div className="text">Hello bummies</div>
              <button className="follow">Follow</button>
            </div>
        </div>
        <div className="project">
          <img src={flower} alt={flower}/>
            <div className="overlay">
              <div className="text">Hello bummies</div>
              <button className="follow">Follow</button>
            </div>
        </div>
      </div>
    </div>
  }
}

export default Projects;