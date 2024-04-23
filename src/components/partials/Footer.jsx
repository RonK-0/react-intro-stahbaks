import React from 'react'
import { Link } from 'react-router-dom'
import { footLinks, footerLinks, footSocials } from './links'

const Footer = () => {
  return (
    <footer className='container flex flex-col gap-6 pt-8 border-t-2 border-5-gray-400/30'>
        <div className="grid grid-cols-5 w-[80%] gap-5 pb-2">
            {footerLinks.map((item, key)=>{
                return(
                    <div className="footer-link" key={key}>
                        <h3 className='mb-12 text-lg'>{item.title}</h3>
                        <ul className='opacity-70 space-y-6'>
                            {item.links.map((link, key)=><li key={key}><Link to={`${link.link}`}>{link.label}</Link></li>)}
                        </ul>
                    </div>
                )
            })}
        </div>
        
        <ul className="footerSocials flex gap-4 flex-wrap pt-6 pb-3 border-t-2 border-t-gray-400/30 ">
            {footSocials.map((item, key)=>{
                return(
                    <li key={key}><a href={`${item.socialLink}`}><i className={`${item.socialIcon}`}></i></a></li>
                )
            })}
        </ul>

        <ul className="flex flex-col gap-4">
            {footLinks.map((item, key)=>{
                return(
                    <li className='hover:underline font-semibold' key={key}><Link to={`${item.foot_Link}`}>{item.foot_Label}</Link></li>
                )
            })}            
        </ul>
        <p className="opacity-70 mb-8">&copy; 2024 Starbucks Coffee Comapny. All rights reserved.</p>
    </footer>
  )
}

export default Footer