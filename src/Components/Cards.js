import React from 'react'
import Image from './pexels-vlada-karpovich-4050325.jpg'
import myImage from './myprofile.png'
const Card = ({userName}) => {
  return (
   <>
   <div className=''>
   <div className=' bg-black grid place-content-center h-screen'>
   <div className=' bg-white max-w-sm mx-auto rounded-xl'>
       <div className=''>
        <img className=' h-52 w-46 m-5 rounded-3xl cursor-pointer hover:h-56' src={Image} alt="" />
      </div>
       <div className=' text-center text-xl pb-4 font-serif'>
        Real is Rare <br /> 
        Fake is everywhere 
       </div>
    </div>
   </div>

   <div className=' border bg-black grid place-content-center h-screen'>
   <div className=' bg-white  max-w-sm mx-auto rounded-xl'>
       <div className=''>
        <img className=' h-52 w-46 m-5 rounded-3xl cursor-pointer hover:h-56' src={myImage} alt="" />
      </div>
       <div className=' text-center text-xl pb-4 font-serif'>
        Thank you so much <br /> 
        all for your wishes <br />
        {userName}
       </div>
    </div>
   </div>
   </div>
   </>
  )
}

export default Card
