import React from 'react'

function PrimaryButton({children, className, onClick,}) {

  return (
    
    <button className={`mt-[37px] bg-black px-[67.5px] py-[15px] rounded-[62px] hover:underline ${className}`} onClick={onClick}>{children}</button>
    
  )
}

export default PrimaryButton