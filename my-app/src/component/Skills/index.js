import React, {Component} from 'react';
import './index.css';
import html from './media/html.png';
import css from './media/css.png';
import jquery from './media/jquery.png';
import javascript from './media/javascript.png';

class Skills extends Component {
  render() {
    return <div className="skill">
      <div className="container">
        <h2>What I know</h2>
        <div className="wrap">
          <div className="service-box">
            <img src={html} alt={html}/>
          </div>
          <div className="service-box">
            <img src={css} alt={css}/>
          </div>
          <div className="service-box">
            <img src={jquery} alt={jquery}/>
          </div>
          <div className="service-box">
            <img src={javascript} alt={javascript}/>
          </div>
        </div>
      </div>
    </div>
  }
  }

  export default Skills;