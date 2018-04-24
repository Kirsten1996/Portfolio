import React, {Component} from 'react';
import './index.css';
import menu from './media/menu.png';


class Navbar extends Component {
  render() {
    return <div className='header'>
      <div className='nav'>
        <div id='icon'>
          <a className="icon">
            <img src={menu} alt={menu}/>
          </a>
        </div>
        <div className="myNav">
          <a href="">HOME</a>
          <a href="">ABOUT</a>
          <a href="">CONTACT</a>
        </div>
      </div>
    </div>
  }
}

export default Navbar;