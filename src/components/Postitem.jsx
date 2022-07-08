import React from 'react'

export const Postitem = (props) => {
  return (
    <div className=' border-8 border-orange-500 text-2xl rounded-xl m-2 p-3'>
        <div className=' '>
            <div className='post content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            <div className='flex justify-end'>
                <button className='bg-gray-600 m-1 p-1 hover:bg-slate-400 duration-500 rounded-xl'>
                    pozmak
                    </button>
            </div>
            </div>

        </div>
    </div>
  )
}
export default Postitem