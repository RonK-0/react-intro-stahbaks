import React from 'react'
import Header from '../../partials/Header'
import HomeCards from './HomeCards'
import { data } from './data'
import Footer from '../../partials/Footer'

const Home = () => {
  const [isCartShow, setCartShow] = React.useState(false);
  return (
    <div>
      <Header setCartShow={setCartShow}/>
        <div className='w-full mx-auto container'>
          {/* using json db method via data map */}
          {data.map((item, key)=><HomeCards item={item} key={key} />)}

          
          {/* pre converted to primitive json db
          <HomeCards bg={"bg-[#41b9eb]"} img={"h_img-1.jpg"} isImgContent={true} />
          <HomeCards bg={"bg-[#97d8b1]"} img={"h_img-2.jpg"}/>
          <HomeCards bg={"bg-[#d4e9e2]"} img={"h_img-3.jpg"} isImgContent={true} />
          <HomeCards bg={"bg-[#f5cac4]"} img={"h_img-4.jpg"}/>
          <HomeCards bg={"bg-[#d8da6d]"} img={"h_img-5.jpg"} isImgContent={true} />
          <HomeCards bg={"bg-[#dbe6f2]"} img={"h_img-6.jpg"}/> */}
          
        </div>
      <Footer/>
    </div>
    
  )
}

export default Home