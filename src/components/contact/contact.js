// import { Form } from 'antd'
import React from 'react'
// import FormContact from './form'

const Contact = () => {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex flex-col items-center justify-center contact">

      <div className="w-[100%] h-[15vh] flex flex-col items-center justify-center max-md:h-[10vh]">
          <div className="inline-block text-black text-[50px] font-[800]">
            <span> Contact</span>
          </div>
          
        </div>

        <div className='w-[60%] h-[10vh]  flex justify-evenly items-center max-md:w-full max-md:h-[7vh]'>

        <div className='w-[140px] h-[70px] flex items-center justify-between'>

                <div className='w-[50px] h-[50px]  rounded-[50%] flex items-center justify-center'>
                <i class="fa-solid fa-user text-[40px] text-fuchsia-600"></i>
                </div>

                <div>
                    <h1 className='text-[20px] font-bold '>Name</h1>
                    <span className='text-[18px] font-semibold font-mono text-fuchsia-600'>Sharan B</span>
                </div>
            </div>

            <div className='w-[200px] h-[70px]   flex items-center justify-between'>
                 
                 <div>
                    <h1 className='text-[20px] font-bold'>Address</h1>
                    <span className='text-[18px] font-semibold font-mono text-fuchsia-600'>TamilNadu,India</span>
                </div>

                <div className='w-[50px] h-[50px]  rounded-[50%] flex items-center justify-center'>
                <i class="fa-solid fa-location-dot text-fuchsia-600 text-[40px]"></i>
                </div>

            </div>
        </div>

      <div className='w-[80%] h-[70vh]  flex flex-wrap items-center justify-evenly gap-5  max-md:h-[80vh] '>

      <div className='w-[45%] h-[65vh] p-[20px] flex flex-wrap border-4 rounded-xl border-fuchsia-500  items-center max-md:w-[90%]
      max-md:h-[70vh] '>
          
          <div className='w-[100%] h-[60vh] grid  flex-wrap justify-center items-center  max-md:h-[70vh] max-md:p-24'>
       
          <div className='w-full text-[25px] flex items-center justify-center font-bold mb-[10px] max-md:text-center'>Message me</div>
         <form >
          <div className='text-[20px] w-full h-[10%] flex  gap-3 items-center max-md:mt-4 max-md:flex-wrap'>
           <div>
           {/* <label htmlFor='contactname'>Name</label> */}
          <input type='text' name='contactname'placeholder='Name' className='w-[100%] h-[5vh] rounded-[10px]  bg-gray-100 p-[5px]'/>
           </div>
            <div>
            {/* <label htmlFor='contactemail'>Email</label> */}
          <input type='text' name='contactemail' placeholder='Email' className='w-[100%] h-[5vh] rounded-[10px]  bg-gray-100 p-[5px]
          max-md:mt-3'/>
        
            </div>
          
          
          </div  >

          <div className='text-[20px] flex items-center gap-2 mt-[50px] max-md:mt-[20px]  '>
          {/* <label htmlFor='contactsubject'>Subject</label> */}
          <input name='contactsubject'className='w-[65%] h-[5vh] rounded-[10px]  bg-gray-100 p-[5px] max-md:w-[100%] '
          placeholder='Subject'/>
          </div>

          <div className='mt-[50px] text-[20px] flex items-center max-md:mt-4'>
          {/* <label htmlFor='contactmessage'>Message:</label> */}
          <input name='contactmessage ' className='w-[70%] h-[8vh] rounded-[10px] bg-gray-100 p-[5px] max-md:w-[100%]'
          placeholder='Message'/>
         
          </div>
         <div className='w-[200px] h-[60px]  mt-[50px] rounded-[5px] text-[18px] font-semibold flex items-center justify-center bg-fuchsia-600 text-white
         hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 max-md:mt-[20px]' >Send message</div>
         </form>
          </div>
          
        </div>
        <div className='w-[45%] h-[65vh] flex flex-col justify-around p-[15px] contactbg max-md:hidden'>
            
           
        </div>
        
      </div>

      </div>
    </>
  )
}

export default Contact