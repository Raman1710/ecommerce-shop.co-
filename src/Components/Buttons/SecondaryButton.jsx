import React from 'react'

function SecondaryButton({children, className, onClick}) {
  return (
    <div>
        <button onClick={onClick} className=' rounded-[62px] py-3 px-6 bg-[#f0f0f0] text-black/60 ${className}'>{children}</button>

    </div>
  )
}

export default SecondaryButton