import React from "react";
import "./education.css";


const Education = () => {
  return (
    <>
      <div className="w-[100%] p-[20px]  bg-black education">
        
        <span className=" w-[100%]  flex items-center justify-center text-center  text-white text-[45px] font-[800]">
          Education
        </span>

        <div className="w-[100%] h-[80vh] flex flex-wrap items-center justify-evenly max-xl:h-[170vh] max-lg:h-[170vh] max-[922px]:h-auto ">

          <div className="w-[25%] h-[60vh] bg-slate-200 flex  flex-col items-center justify-evenly hover:scale-110 hover:transition-all hover:ease-out rounded-[25px]
          max-xl:w-[350px] max-xl:h-[350px] max-xl:mt-[50px] max-sm:w-[350px] max-sm:h-[350px]">

            <div className="w-[95%] h-[55%] rounded-[25px] clgImg"></div>

            <div className="w-[95%] h-[40%] ">
              <div className="text-[16px] p-3 font-bold text-center font-mono max-xl:text-[15px] max-xl:font-mono max-xl:font-semibold">
                Amrita College of Engineering & Technology,is an engineering college located in Nagercoil
                in Kanyakumari district, Tamil Nadu, India. 
                <div className="mt-2">
                  CGPA:<span>82%</span>
                </div>
              </div>
              
            </div>

          </div>

          <div className="w-[25%] h-[60vh] bg-slate-200 flex flex-col items-center justify-evenly hover:scale-110 hover:transition-all hover:ease-out rounded-[25px]
          max-xl:w-[350px] max-xl:h-[350px] max-xl:mt-[50px] max-sm:w-[350px] max-sm:h-[350px]">

            <div className="w-[95%] h-[55%] rounded-[25px] schImg"></div>


            <div className="w-[95%] h-[40%] ">
              <div className="text-[16px] p-2 font-bold text-center font-mono max-xl:text-[15px] max-xl:font-mono max-xl:font-semibold">
                Sir.C.P.Memorial Govt.Hr.Sec.School,is a Government School located in Boothapandy
                in Kanyakumari district, Tamil Nadu, India.  
                <div className="mt-2">
                  Hsc:<span>58%</span>
                </div>
              </div>
            </div>

          </div>

          <div className="w-[25%] h-[60vh] bg-slate-200 flex flex-col items-center justify-evenly hover:scale-110  rounded-[25px]
          max-xl:w-[350px] max-xl:h-[350px] max-xl:mt-[50px] max-sm:w-[350px] max-sm:h-[350px]">

            <div className="w-[95%] h-[55%] rounded-[25px] sch2Img"></div>

            <div className="w-[95%] h-[40%]">
              <div className="text-[16px] p-2 font-bold text-center font-mono max-xl:text-[15px] max-xl:font-mono max-xl:font-semibold">
                Carol Matriculation School,is a private school located in Thuvarancadu
                in Kanyakumari district, Tamil Nadu, India.  
                <div className="mt-2">
                  SSLC:<span>91%</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  );
};

export default Education;
