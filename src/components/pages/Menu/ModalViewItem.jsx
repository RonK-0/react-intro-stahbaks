import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { LiaTimesSolid } from "react-icons/lia"
import { PiCoffeeFill } from "react-icons/pi"

const ModalViewItem = ({setModalShow, Item, setCartItem, cartItem, setSuccess}) => {
  const handleClose = () => setModalShow(false);
  const handleAddToCart = (item) => {
    setCartItem([...cartItem, item])
    setSuccess(true)
  };
  return (
    <div className='modal fixed inset-0 flex justify-center items-center isolate'>
        <div className="backdrop h-screen w-full bg-black/40 absolute top-0 left-0 z-[-1]"></div>
        <div className="modal__main max-w-[900px] w-full bg-white rounded-md">
            <div className="p-4 flex justify-between items-center border-b border-gray-200">
                <h4 className='mb-0 flex gap-2 items-center font-bold'><PiCoffeeFill className='text-xl'/>{Item.title}</h4>
                <button className='text-2xl' onClick={handleClose}><LiaTimesSolid /></button>
            </div>
            <div className="grid grid-cols-4 gap-x-6 gap-y-14 px-4 py-10 overflow-y-auto max-h-[80vh] items-start">
                {Item.subItem.map((item, key) => (
                    <button onClick={() => handleAddToCart(item)} key={key}>
                        <div className='item__card f-col-center text-center'>
                            <img src={`${baseImgUrl}/${item.img}`} alt="" className='rounded-full size-[112px]'/>
                            <h4 className='font-bold'>{item.title}</h4>
                            <small>{item.category}</small>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ModalViewItem