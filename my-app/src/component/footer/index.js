import React, {Component} from 'react';
import './index.css';
import phone from './media/phone.png'
import mail from './media/mail.png'

class Footer extends Component {
  render() {
    return  <div className="footer">
      <div className="top">
        <div className="container">
          <h3>Check out my github</h3>
          <button id="checkout">GitHub</button>
        </div>
        <div className="bottom">
          <h3>Get in contact with me</h3>
          <p id="slogan">I am excited to learn and build innovative products. If this sounds like a junior dev you'd like to
            have, get in touch!</p>
          <div className="contact">
            <div className="phone">
              <img src={phone} alt={phone}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, vel.</p>
            </div>
            <div className="mail">
              <img src={mail} alt={mail}/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, vel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default Footer;