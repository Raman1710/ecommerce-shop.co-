import React from 'react'

function SecondaryButton({children, className, onClick}) {
  return (
   
    <button onClick={onClick} className=' rounded-[62px] py-3 px-6 bg-[#f0f0f0] text-black/60 ${className}'>{children}</button>

  )
}

export default SecondaryButton