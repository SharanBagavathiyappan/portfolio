// import { Form } from 'antd'
import React from 'react'
// import FormContact from './form'

const Contact = () => {
  return (
    <>
      <div className="w-[100%] h-auto flex flex-col items-center justify-evenly  contact">

      <div className="w-[100%] h-auto flex flex-col items-center justify-center max-md:h-[10vh]">
          <div className="inline-block text-black text-[45px] font-[800]">
            <span> Contact</span>
          </div>
          
        </div>

        <div className='w-[60%] h-[10vh]  flex justify-evenly items-center max-md:w-full max-md:h-[7vh]'>

        <div className='w-[130px] h-[60px] flex items-center justify-between'>

                <div className='w-[45px] h-[45px]  rounded-[50%] flex items-center justify-center'>
                <i class="fa-solid fa-user text-[30px] text-fuchsia-600"></i>
                </div>

                <div>
                    <h1 className='text-[18px] font-bold '>Name</h1>
                    <span className='text-[15px] font-semibold font-mono text-fuchsia-600'>Sharan B</span>
                </div>
            </div>

            <div className='w-[150px] h-[60px]   flex items-center justify-between'>
                 
                 <div>
                    <h1 className='text-[18px] font-bold'>Address</h1>
                    <span className='text-[15px] font-semibold font-mono text-fuchsia-600'>TamilNadu,India</span>
                </div>

                <div className='w-[45px] h-[45px]  rounded-[50%] flex items-center justify-center'>
                <i class="fa-solid fa-location-dot text-fuchsia-600 text-[30px]"></i>
                </div>

            </div>
        </div>

      <div className='w-[75%] h-auto  flex flex-wrap items-center justify-evenly   max-md:h-[60vh] max-lg:w-full max-md:w-[75%] '>

      <div className='w-[35%] h-[55vh] p-[20px] flex flex-wrap border-4 rounded-xl border-fuchsia-500  items-center max-md:w-[90%]
      max-md:h-[60vh] '>
          
          <div className='w-[100%] h-auto grid  flex-wrap justify-evenly items-center  max-md:h-[40vh] max-md:p-0'>
       
          <div className='w-full  text-[20px] flex items-center justify-evenly font-bold mb-[10px] max-md:text-center'>Message me</div>
         <form >
          {/* <div className='text-[20px] w-full h-[10%] flex  gap-3 items-center max-md:mt-4 max-md:flex-wrap'> */}
           <div>
           {/* <label htmlFor='contactname'>Name</label> */}
          <input type='text' name='contactname'placeholder='Name' className='w-[100%] h-[5vh] rounded-[10px]  bg-gray-100 p-[5px]'/>
           </div>
           
          
          
          {/* </div  > */}
          <div className='mt-4'>
            {/* <label htmlFor='contactemail'>Email</label> */}
          <input type='text' name='contactemail' placeholder='Email' className='w-[100%] h-[5vh] rounded-[10px]  bg-gray-100 p-[5px]
          max-md:mt-3'/>
        
            </div>

          {/* <div className='text-[20px] flex items-center gap-2 mt-[50px] max-md:mt-[20px]  '>
          
          <input name='contactsubject'className='w-[65%] h-[5vh] rounded-[10px]  bg-gray-100 p-[5px] max-md:w-[100%] '
          placeholder='Subject'/>
          </div> */}

          <div className='mt-[30px] text-[20px] flex items-center max-md:mt-4'>
          {/* <label htmlFor='contactmessage'>Message:</label> */}
          <input name='contactmessage ' className='w-full h-[8vh] rounded-[10px] bg-gray-100 p-[5px] max-md:w-[100%]'
          placeholder='Message'/>
         
          </div>
         <div className='w-[170px] h-[50px]  mt-[35px] rounded-[5px] text-[17px] font-semibold flex items-center justify-center bg-fuchsia-600 text-white
         hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 max-md:mt-[20px]' >Send message</div>
         </form>
          </div>
          
        </div>
        <div className='w-[40%] h-[55vh] flex flex-col justify-around p-[15px] contactbg max-md:hidden'>
            
           
        </div>
        
      </div>
      <div className='w-full h-[100px] flex flex-col items-center justify-evenly mt-3'>
          <span className='font-serif italic'>Follow us on</span>

          <div className='w-[20%] h-[60px]  flex items-center justify-evenly max-md:w-[40%] max-sm:w-[60%]'>
          <div className='w-[45px] h-[45px] bg-slate-300 rounded-[50%] flex items-center justify-center'>
                <a href='https://www.linkedin.com/in/sharan-b-929951257/'> <i class="fa-brands fa-linkedin text-[30px]"></i></a>
               
                </div>

                <div className='w-[45px] h-[45px] bg-slate-300 rounded-[50%] flex items-center justify-center'>
                <a href='https://github.com/Sharansharu00'><i class="fa-brands fa-github text-[30px]"></i></a>
                </div>
                <div className='w-[45px] h-[45px] bg-slate-300 rounded-[50%] flex items-center justify-center'>
                <a href='https://www.instagram.com/i_am___sharan?igsh=cjdvNjAxc3NuYTB1'> <i class="fa-brands fa-instagram text-[30px]"></i></a>
                 </div>
          </div>
          <span>Copyright&#169; | <span>Created by <span className='text-fuchsia-600 font-bold italic'>Sharan B</span></span></span>
      </div>

      </div>
    </>
  )
}

export default Contact