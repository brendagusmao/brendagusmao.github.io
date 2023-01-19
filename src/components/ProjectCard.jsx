import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import '../css2/Projects.css';

class ProjectCard extends React.Component {
  render() {
    const { name, image, description, tec, tec2 } = this.props;
    return (
        <div>
          <table>
          <thead>
            <tr>
          <th className="item">
            <img src={ image } alt={ name } />
                <div className="info">
                    <div className="i-title">
                        <a className="name" href="https://github.com/brendagusmao/">{ tec }
                            <div className="sub-name">{ tec2 }
                            </div>
                            <div> { description }</div>
                        </a>
                     </div>
            <div className="features">
            { name }
            </div>
          </div>
          <div className="title-bar">{ name }
          <div className="title-icon">
            <a href="https://github.com/brendagusmao/" target="_blank" rel="noopener noreferrer" title="github2"><FaGithub /> </a>
            <a href="https://github.com/brendagusmao/" target="_blank" rel="noopener noreferrer" title="live preview"> <BsFillArrowUpRightCircleFill /> </a>
            </div>
          </div>
        </th>
        </tr>
        </thead>
        </table>
        </div>
    );
  }
}
ProjectCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tec: PropTypes.string.isRequired,
    tec2: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

export default ProjectCard;