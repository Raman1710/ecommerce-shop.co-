import React from 'react'

function PrimaryButton({children, className, onClick,}) {

  return (
    <div>
    <button className={`mt-[37px] bg-black text-white px-[67.5px] py-[15px] rounded-[62px] ${className}`} onClick={onClick}>{children}</button>
    </div>
  )
}

export default PrimaryButton