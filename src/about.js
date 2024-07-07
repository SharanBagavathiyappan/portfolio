import React from "react";
import "./about.css";
import resumee from "../src/assets/CV.pdf";
function About() {
  return (
    <>
      <div className="flex flex-col w-[100%] bg-gradient-to-r from-violet-900 to-fuchsia-900 about ">
        <div className="w-[100%] h-[20vh] flex flex-col items-center justify-center">
          <div className="inline-block text-white text-[40px] font-[800]">
            <span>About</span>
          </div>
          <div className="inline-block text-[25px] font-[600] text-violet-500">
            <span>--Who I Am--</span>
          </div>
        </div>
        <div
          className="w-[100%] flex flex-wrap items-center justify-center  p-[40px] max-lg:p-[10px]
       max-md:flex max-md:flex-col 
        "
        >
          <div
            className="flex items-center justify-center w-[40%]
          max-md:w-full"
          >
            <div
              className="w-[450px] h-[400px] overflow-hidden flex  bg-gradient-to-r from-violet-500
             to-fuchsia-500  max-lg:w-[400px] max-lg:h-[350px] imgbg max-md:h-[350px]  "
            >
              <div className="w-[450px]   bg-[url('./sharan.png')] bg-cover  flex  bg-no-repeat ">
              </div>
            </div>
          </div>

          <div className="w-[60%] rounded-[25px] bg-[#6d1c95] p-[20px]  flex flex-col justify-evenly max-md:w-full max-md:p-[20px]">
            <div
              className="  text-[22px] font-sans font-semibold 
            max-md:text-[22px] "
            >
              <span className="text-white">
                I'm Sharan B and I'm a{" "}
                <span className="text-violet-400">FrontEnd Developer</span>
              </span>
            </div>
            <div className="flex w-[100%] pt-[40px] text-justify text-[16px] max-md:text-[18px] font-light ">
              <p className="text-white">
                I'm Sharan B, a computer science engineer from Kanyakumari,
                India,I did My Bachelor's degree in Computer Science and
                Engineering at Amrita College of Engineering and Technology. My
                areas of expertise include HTML,CSS and programming language
                JavaScript, and I have also developed skills in React JS , Git
                and Bootstrap. Additionally. I am passionate about technology
                and constantly strive to learn new programming skills. Outside
                of coding, I enjoy watching cricket and listening Musics. I
                strongly believe in the power of collaboration and I am excited
                to contribute my skills to collaborative projects. Thank you.
              </p>
            </div>
            <div className="button">
              {/* <div className="btn1">
                    <p>Download Cv</p>
                  </div> */}

              <button
                class="transition ease-in-out delay-150 w-[150px] h-[50px] text-[15px] 
              font-semibold text-white rounded-[15px] mt-[30px] bg-fuchsia-500  hover:-translate-y-1 hover:scale-110
               hover:bg-green-500 duration-300 ... max-md:w-[150px] max-md:h-[50px]"
              >
                <a href={resumee} download={"resumee.pdf"}>
                  Download CV
                </a>
              </button>
              <button
                class="transition ease-in-out delay-150 w-[150px] h-[50px] text-[15px] font-semibold text-white 
              rounded-[15px] mt-[30px] ml-[30px] bg-violet-500 hover:-translate-y-1 hover:scale-110
               hover:bg-indigo-500 duration-300 ... max-md:w-[150px] max-md:h-[50px]"
              >
                <a href={resumee} target="_blank">
                  View CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
