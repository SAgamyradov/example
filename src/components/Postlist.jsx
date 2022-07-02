import React from "react";
import Counter from "./Counter";

const Postlist = ({post, title}) =>{
    return(
        <div>
             <h1 className="text-center text-4xl">{title}</h1>
            {post.map((post, index )=>    
                <Counter number={index +1} post={post} key={post.id}/>
            )}
        </div>
    )
}
export default Postlist