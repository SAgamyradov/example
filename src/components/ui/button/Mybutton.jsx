import React from 'react'

const Mybutton = ({children, ...props}) => {
  return (
    <button {...props} className='bg-orange-500 text-2xl m-3 px-5 rounded hover:bg-slate-500 duration-300'>
        {children}
    </button>
  )
}

export default Mybutton