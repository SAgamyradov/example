import React from 'react'
import MyButton from './ui/button/MyButton'

export const Postitem = (props) => {
  return (
    <div className=' border-8 border-orange-500 text-2xl rounded-xl m-2 p-3'>
        <div className=' '>
            <div className='post content'>
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            <div className='flex justify-end'>
               
                <MyButton onClick={() => (props.remove(props.post))} className='bg-gray-600 m-1 p-1
                 hover:bg-slate-400 duration-300 rounded-xl'>
                    pozmak
                    </MyButton>
            </div>
            </div>

        </div>
    </div>
  )
}
export default Postitem