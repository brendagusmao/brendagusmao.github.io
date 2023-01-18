import React from 'react';
import { useEffect, useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import { RiCloseCircleFill } from "react-icons/ri";
import '../css2/Skills.css';

function Skills()  {

  const [menuState, setMenuState] = useState('closed');
  const [menu2State, setMenuState2] = useState('open');

    function toggleMenu() {
      setMenuState(menuState === 'closed' ? 'open' : 'closed');
    }

    useEffect(() => {
      const nav = document.querySelector('.buttomsoft');
  
      if (menuState === 'open') {
        nav.style.height = '300px';
        nav.style.color = 'white';
        nav.style.opacity = '0';
      } else {
        nav.style.height = '300px';
        nav.style.color = 'white';
        nav.style.opacity = '1';
      }
    }, [menuState]);

    function toggleMenu2() {
      setMenuState2(menu2State === 'closed' ? 'open' : 'closed');
    }

    useEffect(() => {
      const nav2 = document.querySelector('.buttomhard');
  
      if (menu2State === 'open') {
        nav2.style.height = '300px';
        nav2.style.color = 'red';
        nav2.style.opacity = '0';
      } else {
        nav2.style.height = '300px';
        nav2.style.opacity = '1';
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
            <span>testando</span>
            <span>testando</span>
            <span>testando</span>
            <span>testando</span>
            <span>testando</span>
            <span>testando</span>
            <span>testando</span>
            </ul>
            </div>
            <div onClick={toggleMenu2} id="left">
            {menu2State === 'closed' ? <div className="buttomclose">close <RiCloseCircleFill className="pa" /></div>: <div className="buttom">Back-end</div>}
         </div>
         <div className="buttomhard">
         <div className="seta2"><IoMdArrowDropdown /></div>
         <ul>
            <span>hard testando</span>
            <span>hard testando</span>
            <span>hard testando</span>
            <span>hard testando</span>
            </ul>
            </div>
            </section>
         </div>
         <div id="boxright">
         <h1 className="ti top"> Soft Skills</h1>
         <section className="softSkills">
         <ul>
            <span>hard testando</span>
            <span>hard testando</span>
            <span>hard testando</span>
            <span>hard testando</span>
            </ul>
          </section>
         </div>
          </div>
    );
  }

export default Skills;