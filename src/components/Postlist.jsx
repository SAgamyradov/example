import React from 'react'
import Postitem from './Postitem'

const Postlist = ({post, title}) => {
  return (
    <div>
        <h1 className='text-center text-5xl'>
            {title}
        </h1>
        {post.map((post, number) =>
                <Postitem number={number + 1} post={post} key={post.id}/>
                )}
    </div>
  )
}

export default Postlist