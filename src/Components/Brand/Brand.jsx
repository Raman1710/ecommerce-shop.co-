import React from 'react'

import Calvin from '../Assets/calvin-logo.svg'
import Gucci from '../Assets/gucci-logo.svg'
import Prada from '../Assets/prada-logo.svg'
import Versace from '../Assets/versacelogo.svg'
import Zara from '../Assets/zara-logo.svg'



function Brand() {
  return (
    <div className='bg-black flex justify-around py-[44px] '>
         <img src= {Versace}/>
         <img src= {Zara}/>
         <img src= {Gucci}/>
         <img src= {Prada}/>
         <img src= {Calvin}/>
  </div>
  )
}

export default Brand