import React from "react";
import "./education.css";


const Education = () => {
  return (
    <>
      <div className="w-[100%] p-[20px]  bg-black education">
        
        <span className=" w-[100%]  flex items-center justify-center text-center  text-white text-[50px] font-[800]">
          Education
        </span>

        <div className="w-[100%] h-[80vh] flex flex-wrap items-center justify-evenly max-xl:h-[170vh] max-lg:h-[170vh] max-[922px]:h-[300vh] ">

          <div className="w-[25%] h-[60vh] bg-slate-200 flex  flex-col items-center justify-evenly hover:scale-110 hover:transition-all hover:ease-out rounded-[25px]
          max-xl:w-[450px] max-xl:h-[700px] max-xl:mt-[50px] max-sm:w-[400px] max-sm:h-[725px]">

            <div className="w-[95%] h-[55%] rounded-[25px] clgImg"></div>

            <div className="w-[95%] h-[40%] ">
              <p className="text-[20px] text-center font-mono max-xl:text-[18px] max-xl:font-mono max-xl:font-semibold">
                Amrita College of Engineering & Technology, formerly Sun College
                of Engineering, is an engineering college located in Nagercoil
                in Kanyakumari district, Tamil Nadu, India. 
                <div className="mt-2">
                  CGPA:<span>82%</span>
                </div>
              </p>
            </div>

          </div>

          <div className="w-[25%] h-[60vh] bg-slate-200 flex flex-col items-center justify-evenly hover:scale-110 hover:transition-all hover:ease-out rounded-[25px]
          max-xl:w-[450px] max-xl:h-[700px] max-xl:mt-[50px] max-sm:w-[400px] max-sm:h-[725px]">

            <div className="w-[95%] h-[55%] rounded-[25px] schImg"></div>


            <div className="w-[95%] h-[40%]">
              <p className="text-[20px] text-center font-mono max-xl:text-[18px] max-xl:font-mono max-xl:font-semibold">
                Amrita College of Engineering & Technology, formerly Sun College
                of Engineering, is an engineering college located in Nagercoil
                in Kanyakumari district, Tamil Nadu, India.  
                <div className="mt-2">
                  CGPA:<span>82%</span>
                </div>
              </p>
            </div>

          </div>

          <div className="w-[25%] h-[60vh] bg-slate-200 flex flex-col items-center justify-evenly hover:scale-110  rounded-[25px]
          max-xl:w-[450px] max-xl:h-[700px] max-xl:mt-[50px] max-sm:w-[400px] max-sm:h-[725px]">

            <div className="w-[95%] h-[55%] rounded-[25px] sch2Img"></div>

            <div className="w-[95%] h-[40%] ">
              <p className="text-[20px] text-center font-mono max-xl:text-[18px] max-xl:font-mono max-xl:font-semibold">
                Amrita College of Engineering & Technology, formerly Sun College
                of Engineering, is an engineering college located in Nagercoil
                in Kanyakumari district, Tamil Nadu, India.  
                <div className="mt-2">
                  CGPA:<span>82%</span>
                </div>
              </p>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Education;
