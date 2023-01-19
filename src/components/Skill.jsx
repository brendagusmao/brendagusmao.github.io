import React from 'react';
import { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { RiCloseCircleFill } from "react-icons/ri";
import '../css2/Skills.css';

function Skills()  {
  const Css = "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white";
  const React1 = "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB";
  const Html = "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white";
  const Javacript = "https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E";
  const Router = "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white";
  const Redux = "https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white";
  const Figma = "https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white";
  const Sql ="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white";
  const Node ="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white";

  const [menuState, setMenuState] = useState('closed');
  const [menu2State, setMenuState2] = useState('open');

    function toggleMenu() {
      setMenuState(menuState === 'closed' ? 'open' : 'closed');
    }

    useEffect(() => {
      const nav = document.querySelector('.buttomsoft');
  
      if (menuState === 'open') {
        nav.style.display = 'flex';
        nav.style.zIndex= "10";
      } else {
        nav.style.display= 'flex';
      }
    }, [menuState]);

    function toggleMenu2() {
      setMenuState2(menu2State === 'closed' ? 'open' : 'closed');
    }

    useEffect(() => {
      const nav2 = document.querySelector('.buttomhard');
  
      if (menu2State === 'open') {
        nav2.style.display = 'none';
      } else {
        nav2.style.display = 'flex';
        nav2.style.zIndex= "9";
      }
    }, [menu2State]);

    return (
        <div className="backgroundSkills" id="skills">
         <div id="boxleft">

         <h1 className="ti"> Hard Skills</h1>
            <section className="hardSkills">
            <div onClick={toggleMenu}>
            {menuState === 'closed' ? <div className="buttom" id="cursor">Front-End</div>: <div className="buttom" id="cursor">Front-End</div>}
          </div>
          <div className="buttomsoft">
          <ul>
            <span><img src={ Css } alt="none" /></span>
            <span><img src={ React1 } alt="none" /></span>
            <span><img src={ Html } alt="none" /></span>
            <span><img src={ Javacript } alt="none" /></span>
            <span><img src={ Redux } alt="none" /></span>
            <span><img src={ Router } alt="none" /></span>
            <span><img src={ Figma } alt="none" /></span>
            </ul>
            </div>
            <div onClick={toggleMenu2} id="left">
            {menu2State === 'closed' ? <div className="buttomclose">close <RiCloseCircleFill className="pa" /></div>: <div className="buttom">Back-end</div>}
         </div>
         <div className="buttomhard">
         <div className="seta2"><IoMdArrowDropdown /></div>
         <ul>
            <span><img src={ Sql } alt="none" /></span>
            <span><img src={ Node } alt="none" /></span>
            <span className="color">Coming Soon</span>
            </ul>
            </div>
            </section>
         </div>
         <div id="boxright">
         <h1 className="ti top"> Soft Skills</h1>
         <section className="softSkills left2">
         <ul>
            <span className="color">criatividade</span>
            <span className="color">visão analitica</span>
            <span className="color">trabalho em equipe</span>
            <span className="color">hard testando</span>
            </ul>
          </section>
         </div>
          </div>
    );
  }

export default Skills;