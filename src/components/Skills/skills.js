import React from "react";
import "./skills.css";

function Skills() {
  return (
    <>
      <div className="w-[100%]  p-[20px] 
  bg-black Skills">
        <div className="w-[100%] h-[15vh] flex flex-col items-center justify-center">
          <div className="inline-block text-black text-[50px] font-[800]">
            <span className="text-white ">Skills</span>
          </div>
        </div>
        <div className="w-[100%]   flex-wrap rounded-[25px]  flex items-center justify-evenly  ">

          <div className="w-[400px] h-[600px] bg-slate-300 flex flex-col items-center justify-evenly 
          hover:scale-110 hover:transition-all hover:ease-out rounded-[25px] 
          max-[420px]:h-[520px] max-[420px]:mt-[30px] max-sm:mt-[30px] ">
            <div className="w-[150px] h-[150px] rounded-[50%] bg-white flex items-center justify-evenly max-[420px]:h-[120px] max-[420px]:w-[120px] max-[420px]:mt-[15px]">
              <i className="fa-brands fa-html5 text-[120px] text-[#ff5722] max-[420px]:text-[90px]"></i>
            </div>
            <span className="text-[25px] font-bold font-sans ]">HTML</span>
            <div className="w-[90%] h-[350px]">
              <span className=" flex items-center justify-center text-[20px] text-justify p-[10px] max-[420px]:text-[18px] ">
                HTML, or HyperText Markup Language, is the standard markup
                language for creating and designing web pages. It is the basic
                building block of web development and is used to structure
                content on the internet. HTML uses a system of tags and
                attributes to define the structure and presentation of content
                on a web page.
              </span>
            </div>
          </div>

          <div className="w-[400px] h-[600px] bg-slate-300 flex flex-col items-center justify-evenly hover:scale-110 hover:transition-all
           hover:ease-out rounded-[25px] max-[420px]:h-[520px] max-[420px]:mt-[30px] max-[862px]:mt-[30px] max-sm:mt-[30px]">
            <div className="w-[150px] h-[150px] rounded-[50%] bg-white flex items-center justify-evenly  max-[420px]:h-[120px] max-[420px]:w-[120px] max-[420px]:mt-[15px]">
              <i class="fa-brands fa-css3-alt text-[120px] text-[#214ce5] max-[420px]:text-[90px] "></i>
            </div>
            <span className="text-[25px] font-bold font-sans"> CSS</span>

            <div className="w-[90%] h-[350px]">
              <span className=" flex items-center justify-center text-[20px] text-justify p-[10px] max-[420px]:text-[18px] ">
                CSS, or Cascading Style Sheets, is a style sheet language used
                to describe the presentation and layout of HTML (HyperText
                Markup Language) documents on the web. It provides a way to
                separate the structure (HTML) and presentation (CSS) of a
                webpage, allowing developers to define how the content should be
                displayed.
              </span>
            </div>
          </div>

          <div className="w-[400px] h-[600px] bg-slate-300 flex flex-col items-center 
          justify-evenly hover:scale-110 hover:transition-all hover:ease-out rounded-[25px]  
          max-[420px]:h-[520px] max-[420px]:mt-[30px] max-sm:mt-[30px] max-[1257px]:mt-[30px]">
            <div className="w-[150px] h-[150px] rounded-[50%]  bg-white flex items-center justify-evenly max-[420px]:h-[120px] max-[420px]:w-[120px] max-[420px]:mt-[15px]">
              <i class="fa-brands fa-js text-[110px]  text-yellow-400  max-[420px]:text-[90px]"></i>
            </div>
            <span className="text-[25px] font-bold font-sans">JAVASCRIPT</span>
            <div className="w-[90%] h-[350px] ">
              <span className=" flex items-center justify-center text-[20px] text-justify p-[10px] max-[420px]:text-[18px] ">
                JavaScript is a high-level, versatile programming language
                primarily known for its role in web development. It allows
                developers to add dynamic and interactive elements to websites,
                making them more engaging and user-friendly.
              </span>
            </div>
          </div>

          <div className="w-[400px] h-[600px] bg-slate-300 flex flex-col items-center 
          justify-evenly hover:scale-110 hover:transition-all hover:ease-out rounded-[25px]
            max-[420px]:h-[520px]  max-[420px]:mt-[30px] max-sm:mt-[30px] max-2xl:mt-[30px]">
            <div className="w-[150px] h-[150px] rounded-[50%] bg-white flex items-center justify-evenly  max-[420px]:h-[120px] max-[420px]:w-[120px] max-[420px]:mt-[15px]">
              <i class="fa-brands fa-react text-[120px] text-[#006aff] max-[420px]:text-[90px]"></i>
            </div>
            <span className="text-[25px] font-bold font-sans">REACT JS</span>
            <div className="w-[90%] h-[350px] ">
              <span className=" flex items-center justify-center text-[20px] text-justify p-[10px] max-[420px]:text-[18px] ">
                ReactJS, or simply React, is an open-source JavaScript library
                developed by Facebook for building user interfaces, especially
                for single-page applications where UI updates are frequent.
                React allows developers to create reusable UI components and
                
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
