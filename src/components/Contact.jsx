import React from 'react';
import Redes from './Redes';
import Footer from './Footer';
import { MdEmail } from "react-icons/md";
import '../css2/About.css';

class Contact extends React.Component {
  render() {
    return (
        <div className="backgroundContact">
          <main id="contact">
          <Redes />
          <div className="email">
            <div className="iconm"><MdEmail /></div>brendapgusmao@gmail.com
          </div>
          </main>
          <Footer />
        </div>
    );
  }
}

export default Contact;