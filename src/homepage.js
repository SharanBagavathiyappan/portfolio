import React, { useEffect, useState } from "react";
import "./homepage.css";
import { Link } from "react-scroll";
function HomePage() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="mainContainer1 head">
        <div
          className={`navBar ${
            scrolled ? "bg-white shadow-gray-600 shadow-md" : ""
          } z-10`}
        >
          <div className={`logo`}>
            <div className={`${scrolled ? "text-black" : ""} w-[250px] h-[50px]`}></div>
          </div>
          <div className="navList">
            <div>
              <i
                class="fa-solid fa-bars"
                id="menu"
                onClick={() => setMenu(!menu)}
              ></i>
            </div>

            <ul>
              <li>
                <Link href="#" className={`home ${scrolled ? "!text-black" : ""}`} 
                 to="head" 
                 spy={true} 
                 smooth={true} 
                 offset={-50} 
                 duration={200} >
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className={`home ${scrolled ? "!text-black" : ""}`} 
                 to="about" 
                 spy={true} 
                 smooth={true} 
                 offset={-50} 
                 duration={200}>
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className={`home ${scrolled ? "!text-black" : ""}`} 
                 to="Skills" 
                 spy={true} 
                 smooth={true} 
                 offset={-50} 
                 duration={200}>
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#" className={`home ${scrolled ? "!text-black" : ""}`}
                 to="education" 
                 spy={true} 
                 smooth={true} 
                 offset={-50} 
                 duration={200}>
                  Education
                </Link>
              </li>
              <li>
                <Link href="#" className={`home ${scrolled ? "!text-black" : ""}`}
                 to="project" 
                 spy={true} 
                 smooth={true} 
                 offset={-50} 
                 duration={200}>
                  Project
                </Link>
              </li>
              <li>
                <Link href="#" className={`home ${scrolled ? "!text-black" : ""}`}
                 to="contact" 
                 spy={true} 
                 smooth={true} 
                 offset={-50} 
                 duration={200}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {menu === true ? (
          <>
            <div className="cloneNavLink">
              {/* <span id="close" onClick={() =>setMenu(!menu)}>
                X
              </span> */}

              <ul>
                <li>
                  <Link  to="head" 
                 spy={true} 
                 smooth={true} 
                 offset={-50} 
                 duration={200}>Home</Link>
                </li>
                <li>
                  <Link href="#"
                   to="about" 
                   spy={true} 
                   smooth={true} 
                   offset={-50} 
                   duration={200}>About</Link>
                </li>
                <li>
                  <Link href="#"
                   to="Skills" 
                   spy={true} 
                   smooth={true} 
                   offset={-50} 
                   duration={200}>Skills</Link>
                </li>
                <li>
                  <Link href="#"  to="education" 
                 spy={true} 
                 smooth={true} 
                 offset={-50} 
                 duration={200}>Education</Link>
                </li>
                <li>
                  <Link  to="project" 
                 spy={true} 
                 smooth={true} 
                 offset={-50} 
                 duration={200}>Project</Link>
                </li>
                <li>
                  <Link 
                   to="contact" 
                   spy={true} 
                   smooth={true} 
                   offset={-50} 
                   duration={200} href="#">Contact</Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          ""
        )}

        <div className="subConatiner">
          <div className="leftSide">
            <div className="Hi">
              <span className="Hii">Hello,this is </span>
            </div>
            <div className="name">
              <span>Sharan B</span>
            </div>
            <div>
              <span className="name2">
                And I'm a
                <div class="waviy">
                  <span>FrontEnd</span>
                  <span className="b">DEVELOPER</span>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
