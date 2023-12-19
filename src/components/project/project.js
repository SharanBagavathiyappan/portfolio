import React, { useState } from "react";
import { Button, Modal, Space } from "antd";
// import './index.css';
import "./project.css";
import { FundViewOutlined ,GithubOutlined} from "@ant-design/icons";
import { Carousel } from "antd";
import projectImage1 from "../../assets/images/proimages/pro11.jpg";
import projectImage2 from "../../assets/images/proimages/pro12.jpg";
import projectImage3 from "../../assets/images/proimages/pro13.jpg";
import projectImage4 from "../../assets/images/proimages/pro14.jpg";
import projectImage5 from "../../assets/images/proimages/pro15.jpg";
import projectImage6 from "../../assets/images/proimages/pro16.jpg";
import projectImage7 from "../../assets/images/proimages/pro17.jpg";

import project2Image1 from "../../assets/images/proimages/pro21.png";
import project2Image2 from "../../assets/images/proimages/pro23.png";
import project2Image3 from "../../assets/images/proimages/pro24.png";
import project2Image4 from "../../assets/images/proimages/pro22.png";
const Project = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const showModal2 = () => {
    setOpen2(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleOk2 = () => {
    setOpen2(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleCancel2 = () => {
    setOpen2(false);
  };
  return (
    <>
      <div className="w-[100%] h-[100vh]  p-[20px] bg-gradient-to-r  from-violet-900 to-fuchsia-900 project
       flex flex-col items-center justify-center max-xl:h-auto ">
        
        <span className="text-white inline-block text-[50px] font-[800] text-center">
          Projects
        </span>
        <div
          className="w-[100%] h-[80vh] max-lg:h-auto flex flex-col  items-center justify-around
"
        >
          <div className="w-[70%] child h-auto p-6 flex flex-col items-center pt-[40px] bg-[#6d1c95]
           shadow-2xl rounded-[25px] relative max-[600px]:p-2 max-[600px]:w-[400px]  projectdiv1 ">
            <div >
              <span className="font-bold text-[25px] text-white"> E-Bike RideRevolution</span>
            </div>
            <div className=" w-[80%] p-[20px] max-[600px]:w-[100%]">
              <span className="text-[18px] text-justify text-white"> Developed a static and responsive e-bike website with user-friendly navigation, product listings, and newsletter signup
for information on e-bikes and cycling accessories.
Created a visually appealing and responsive design for the website, ensuring a seamless user experience on various
devices and screen sizes</span>
            </div>
            
            
            <div className="w-[20%] flex items-center justify-around max-[1250px]:w-[50%] max-[550px]:w-[100%]">
               <div  className="w-[60px] h-[60px]  rounded-[50%]
                   bg-white flex items-center justify-center hover:bg-green-600" >
                 <a href="https://sharansharu00.github.io/CycleProject/"><span className="text-[53px] text-green-600 hover:text-black"><GithubOutlined /></span></a>
              </div>
              <div
                 className="w-[60px] h-[60px]  rounded-[50%]
                   bg-white text-fuchsia-600  flex justify-center items-center font-bold text-[40px] cursor-pointer"
                onClick={() => showModal()}
              >
                <FundViewOutlined />
             </div>  

            </div>
           
          </div>

          <Modal
            open={open}
            centered
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[]}
            width={1000}
          
          >
            <div className=" ">
              <Carousel autoplay className="flex flex-col">
                <div>
                  <div className="h-[500px]">
                    <img src={projectImage1} className="object-cover" />
                  </div>
                </div>
                <div>
                <div className="h-[500px]">
                    <img src={projectImage2} className="object-cover" />
                  </div>
                </div>
                <div>
                <div className="h-[500px]">
                    <img src={projectImage3} className="object-cover" />
                  </div>
                </div>
                <div>
                <div className="h-[500px]">
                    <img src={projectImage5} className="object-cover" />
                  </div>
                </div>
                <div>
                <div className="h-[500px]">
                    <img src={projectImage4} className="object-cover" />
                  </div>
                </div>
                <div>
                <div className="h-[500px]">
                    <img src={projectImage6} className="object-cover" />
                  </div>
                </div>
                <div>
                <div className="h-[500px]">
                    <img src={projectImage7} className="object-cover" />
                  </div>
                </div>
              </Carousel>
            </div>
          </Modal>

          <div className="w-[70%] child h-auto p-6  flex flex-col items-center pt-[40px]  bg-[#6d1c95]
           shadow-2xl rounded-[25px]  max-[1269px]:mt-[50px] projectdiv2 max-[600px]:p-2 max-[600px]:w-[400px]">

          <div >
              <span className="font-bold text-[25px] text-white">Simple Shopping Cart</span>
            </div>
          <div className="w-[80%] p-[20px] max-[600px]:w-[100%]">
              <span className="text-[18px] text-white"> Developed a sample e-commerce website using React.js, demonstrating skills in component-based architecture and
routing.Implemented shopping cart functionality, product listing, and product details pages.Utilized React Router for handling
page navigation</span>
            </div>
            <div className="w-[20%] max-[1250px]:w-[50%] flex items-center justify-around">
            <div className="w-[60px] h-[60px] hover:bg-green-600  rounded-[50%]
                   bg-white flex items-center justify-center">
              <a href=" https://github.com/Sharansharu00/SimpleEcommerceWebsite"><span className="text-[52px] text-green-600 hover:text-black"><GithubOutlined /></span></a>
            </div>
            <div
              className="w-[60px] h-[60px]  rounded-[50%]
               bg-white text-fuchsia-600  flex justify-center items-center font-bold text-[40px] cursor-pointer"
               onClick={() => showModal2()}
            >
              <FundViewOutlined />
           
            </div>
              </div>
            <Modal
            open={open2}
            centered
            onOk={handleOk2}
            onCancel={handleCancel2}
            footer={[]}
            width={1000}
          
          >
            <div className=" ">
              <Carousel autoplay className="flex flex-col">
                <div>
                  <div className="h-[500px]">
                    <img src={project2Image1} className="object-cover" />
                  </div>
                </div>
                <div>
                <div className="h-[500px]">
                    <img src={project2Image2} className="object-cover" />
                  </div>
                </div>
                <div>
                <div className="h-[500px]">
                    <img src={project2Image3} className="object-cover" />
                  </div>
                </div>
                <div>
                <div className="h-[500px]">
                    <img src={project2Image4} className="object-cover" />
                  </div>
                </div>
             
                
               
                
              </Carousel>
            </div>
          </Modal>

          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Project;
