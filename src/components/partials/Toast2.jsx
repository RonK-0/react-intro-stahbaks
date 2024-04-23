import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const Toast = ({setSuccess}) => {
  React.useEffect(()=>{
    setTimeout(()=>{ setSuccess(false) }, 1100)
  },[]);
  return (
    <div className="toast fixed top-2 tx-a w-[300px] p-2 rounded-md bg-green-100 border-l-2 border-l-green-800 flex between-center shadow-md">
    <div className='flex gap-4'>
        <FaCheckCircle className='text-accent text-xl mt-2'/>
        <ul>
            <li><h5 className='font-bold'>Success</h5></li>
            <li className='text-sm'>Successfully added to Cart!</li>
        </ul>
        </div>
    </div>
  )
}

export default Toast