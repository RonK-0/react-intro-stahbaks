import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './svg/Logo'
import { TiShoppingCart } from "react-icons/ti";

const Header = ({setCartShow, cartItem}) => {
  const handleShowCart = () => setCartShow(true);
  return (
    <div>
        <header className='border-b border-b-gray-200 shadow-sm'>
            <div className="container py-5 px-10 flex between-center">
                <ul className='flex gap-10 items-center'>
                    <li>
                        <Link to="/Home">
                            <Logo size="50px"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Menu" className='font-bold uppercase hover:text-accent'>Menu</Link>
                    </li>
                    <li>
                        <Link to="/Menu" className='font-bold uppercase hover:text-accent'>Rewards</Link>
                    </li>
                    <li>
                        <Link to="/Menu" className='font-bold uppercase hover:text-accent'>Gift Cards</Link>
                    </li>
                </ul>
                {cartItem !== undefined && (<button className='text-2xl relative' onClick={handleShowCart} >
                    {cartItem.length !== 0 && (
                        <span className="size-4 rounded-full bg-red-600 text-white absolute -top-1 -left-1 text-[10px] f-col-center font-medium overflow-hidden">
                            {cartItem.length > 99 && ("99+") || (cartItem.length)}
                        </span>
                    )}
                    <TiShoppingCart />
                </button>)}            
            </div>
        </header>
    </div>
  )
}

export default Header