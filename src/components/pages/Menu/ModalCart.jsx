import React from 'react'
import { baseImgUrl } from '../../helpers/functions-general'
import { LiaTimesSolid, LiaTrashAlt } from "react-icons/lia"
import { PiCoffeeFill } from "react-icons/pi"
import { FaTrashAlt } from 'react-icons/fa'
import { BsCartX } from 'react-icons/bs'

const ModalCart = ({setCartShow, setCartItem, cartItem}) => {
    const handleCartClose = () => setCartShow(false);
    const handleEmptyCart = () => setCartItem([]);
    const totalItemsPrice = (cartItem) => {
        let total = 0;
        cartItem.forEach((item) => {
            total += item.price;
        });
        return total.toFixed(2);
    }
    const getSubTotal = cartItem.reduce(
        (a, c) => a + Number(c.price),
        0,
    )

    const handleRemoveItem = (itemToRemove) => {
        const updatedCartItems = cartItem.filter(
            (item) => item.title !== itemToRemove.title
        )
        setCartItem(updatedCartItems)
    }
    
    return (
        <div className='modal fixed inset-0 flex justify-end items-center isolate'>
            <div className="backdrop h-screen w-full bg-black/40 absolute top-0 left-0 z-[-1]"></div>
            <div className="modal__main max-w-[400px] w-full h-screen bg-white">
                <div className="p-4 flex justify-between items-center border-b border-gray-200">
                    <h4 className='mb-0 flex gap-2 items-center font-bold'><PiCoffeeFill className='text-xl'/>Cart</h4>
                    <div className='flex gap-2'>
                        {cartItem.length !== 0 && (
                            <button className='text-lg' onClick={handleEmptyCart}><FaTrashAlt /></button>
                        )}
                        <button className='text-2xl' onClick={handleCartClose}><LiaTimesSolid /></button>
                    </div>
                </div>
                <div className="cartItems f-col px-4 py-5 overflow-y-auto max-h-[780px] h-full w-full">
                    {cartItem.map((item,key) => (
                        <div className="cartItem flex items-center gap-5 mb-5" key={key}>
                            <div className='flex items-center gap-5 w-full'>
                                <img src={`${baseImgUrl}/${item.img}`} alt="" className='rounded-full size-[80px]'/>
                                <div className='f-col'>
                                    <h4 className='font-medium'>{item.title}</h4>
                                    {/* <small className='text-xs'>{item.category}</small> */}
                                    <p>Php {item.price}</p>
                                </div>
                            </div>
                            <button onClick={() => (handleRemoveItem(item))}><LiaTrashAlt/></button>
                        </div>
                    ))}
                    {cartItem.length === 0 && (
                        <div className="empty__cart f-col-center h-full max-h-[780px] text-center select-none">
                            <BsCartX className='text-8xl opacity-30'/>
                            <h3 className='font-bold opacity-25'>Cart Empty</h3>
                        </div>
                    )}
                </div>
                <ul className='p-4 bg-accent text-white rounded-md flex justify-between text-xl mx-2'>
                    <li className='font-bold '>Total</li>
                    <li>Php {getSubTotal.toFixed(2)}</li>
                </ul>
              {/* <div className="totalPrice f-col p-2">
                <h3 className='flex between-center bg-primary rounded-xl text-white p-2'>Total <span>Php {totalItemsPrice(cartItem)}</span></h3>
                <button className='font-medium bg-transparent rounded-xl px-3 py-1 text-primary border border-primary hover:bg-primary hover:text-white transition-all'>Check Out</button>
              </div> */}
          </div>
      </div>
    )
}

export default ModalCart