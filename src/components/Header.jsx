import { useContext, useEffect, useState } from 'react';
import { HiSun } from "react-icons/hi";
import { BsFillMoonStarsFill, BsFillGridFill, BsChevronContract } from "react-icons/bs";
import { SiAboutdotme } from "react-icons/si";
import { RiPagesFill } from "react-icons/ri";
import { MdPermContactCalendar, MdOutlineAutoGraph } from "react-icons/md";
import MyContext from '../context/MyContext';
import '../css2/Header.css';

function Header() {
  const { lightMode, setLightMode } = useContext(MyContext);
  const [menuState, setMenuState] = useState('closed');
 

  function toggleMenu() {
    setMenuState(menuState === 'closed' ? 'open' : 'closed');
  }

  useEffect(() => {
    const nav = document.querySelector('.toggle');

    if (menuState === 'open') {
      nav.style.display = 'flex';
    } else {
      nav.style.display = 'none';
    }
  }, [menuState]);

  return  ( 
      <header className="backgroundHeader">
        <div style={{display: "flex"}}>
        <div onClick={toggleMenu} className="buttontoggle">
            {menuState === 'closed' ? <BsFillGridFill className='hamburger' /> : <BsChevronContract className='hamburger' />}
          </div>
          <div className="toggle">
          <ul>
            <li><SiAboutdotme className="icontoggle" /><a onClick={toggleMenu} href="#about">sobre</a></li>
            <li><RiPagesFill className="icontoggle" /><a onClick={toggleMenu} href="#projects">projetos</a></li>
            <li><MdPermContactCalendar className="icontoggle" /><a onClick={toggleMenu} href="#contact">contato</a></li>
            <li><MdOutlineAutoGraph className="icontoggle" /><a onClick={toggleMenu} href="#skills">Skills</a></li>
            </ul>
            </div>
        </div>
      <nav>
        <h1 id="title"> oi</h1>
        <div className="navegation">
          <li><a href="#about"><span>About</span></a></li>
          <li><a href="#skills" data-slidey="2"><span>Skills</span></a></li>
          <li><a href="#projects"><span>Projects</span></a></li>
          <li><a href="#contact"><span>Contact</span></a></li>
        </div>
          <div
                className="tgb"
                onClick={() => {setLightMode(!lightMode)}}>
                  {lightMode
                    ? <div className="tgg"><HiSun /></div>: <div className="tgs"><BsFillMoonStarsFill /></div>
                  }
              </div>
              </nav>   
        <div className="sidebar">
          <h2>Hey, there! i'am</h2>
          <h1>Brenda.dev</h1>
        </div>
        <div className="circle" />
        <div className="circle2" />
        <div className="hi">
          <img src="https://spreadthename.com/wp-content/uploads/2021/04/professional-web-design-social-ink-professional-web-design-png-1000_813.png" alt="" />
        </div>
        <div className="dev">
          <span class="line-divider" />
          <h2> developer full stack</h2>
          <span class="line-divider" />
          </div>
          <div>
    </div>
      </header>
  );
}
 
export default Header;
