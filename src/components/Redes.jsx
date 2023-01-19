import React from 'react';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import '../css2/redes.css';

class Redes extends React.Component {
  render() {
    return (
        <>
          <div className="menurede">
          <a href="https://github.com/brendagusmao/" target="_blank" rel="noopener noreferrer" title="github">
            <BsGithub />
          </a>
          <a href="https://github.com/brendagusmao/" target="_blank" rel="noopener noreferrer" title="instagram">
            <RiInstagramFill />
          </a>
          <a href="https://github.com/brendagusmao/" target="_blank" rel="noopener noreferrer" title="linkedin">
            <BsLinkedin />
          </a>
          </div>
        </>
    );
  }
}

export default Redes;