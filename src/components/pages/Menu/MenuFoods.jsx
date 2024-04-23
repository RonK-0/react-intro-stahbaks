import React from 'react'
import { foods } from './data'
import { baseImgUrl } from '../../helpers/functions-general'

const MenuFoods = ({setModalShow, setSubItem}) => {
  const handleShowModal = (item) => {
    setSubItem(item)
    setModalShow(true)
  };
  return (
    <div className='mb-10'>
        <h4 className='border-b border-b-gray-200 pb-4 text-xl font-bold mb-6'>Foods</h4>
        <div className="grid md:grid-cols-2 gap-5">
            {foods.map((item, key) => 
                <div className='flex gap-6 items-center pointer' key={key} onClick={()=>handleShowModal(item)}>
                    <img src={`${baseImgUrl}/${item.img}`} alt="" className='rounded-full w-[112px] h-[112px]'/>
                    <h5 className='text-lg font-bold'>{item.title}</h5>
                </div>
            )}
        </div>
    </div>
  )
}

export default MenuFoods