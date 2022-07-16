import React from 'react'
import Postitem from './Postitem'

const Postlist = ({listpost, title}) => {
  return (
    <div>
        <h1 className='text-center text-5xl'>
            {title}
        </h1>
        {listpost.map((post) =>
                <Postitem post={post} key={post.id}/>
                )}
    </div>
  )
}

export default Postlist