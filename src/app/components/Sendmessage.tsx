import Link from 'next/link'
import React, { cloneElement } from 'react'
import { ToastContainer } from 'react-toastify'

const Sendmessage = ({ data }) => {
    



  return (
    <div>
<div className="z-50 flex justify-center items-center h-full w-full" >
                  <div className=" mt-[200px] w-[900px] h-full bg-transparent" >
                    
                  <Link href="/user" className=" flex justify-end mb-[20px]">{cloneElement(button.component, {}, "Show Msg")}</Link>
             
                    
                    <Textarea onChange={(e) => settext(e.target.value)}  className="h-[300px]"></Textarea>
                    <div className=" flex justify-around mt-[30px] " >
                      <div onClick={sendmessagebyidentity}>{cloneElement(shimmer.component, {}, "Send")}</div>
                      <div onClick={sendmessageanonymous}>{cloneElement(shimmer.component, {}, "Send Anonymous")}</div>
                      
          <ToastContainer></ToastContainer> 
                    </div>
                  </div>
                </div>
      
    </div>
  )
}

export default Sendmessage
