import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../../helpers/functions-general'

// data map method used if from db
const HomeCards = ({item}) => {
  return (
    <div className={'homeCard ' + `flex h-full mb-10 ${item.isImgContent ? "" : "flex-row-reverse"} ${item.bg}`}>
        <img src={`${baseImgUrl}/${item.img}`} alt="" className='w-1/2 object-cover' />
        <div className="content h-full w-1/2 flex flex-col justify-center items-center text-center p-10 text-accent brightness-50">
            <h2>{item.title}</h2>
            <p className='text-xl max-w-[600px] mx-auto mb-6'>{item.content}</p>
            <Link to={`${item.link}`} className='btn btn-outline'>{item.linkLabel}</Link>
        </div>
    </div>
  )
}

// parameter values method
// const HomeCards = ({isImgContent, bg, img}) => {
//   return (
//     <div className={'homeCard ' + `flex h-full mb-10 ${isImgContent ? "" : "flex-row-reverse"} ${bg}`}>
//         <img src={`${baseImgUrl}/${img}`} alt="" className='w-1/2 object-cover' />
//         <div className="content h-full w-1/2 flex flex-col justify-center items-center text-center p-10 text-accent brightness-50">
//             <h2>Absolutely no chill</h2>
//             <p className='text-xl max-w-[600px] mx-auto mb-6'>New Spicy Lemonade Refreshers® with real fruit and our three-pepper chili blend are coming in hot.</p>
//             <Link to="/Menu" className='btn btn-outline'>Order Now</Link>
//         </div>
//     </div>
//   )
// }

export default HomeCards