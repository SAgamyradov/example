import React from "react";

const Counter = (props) =>{
    return(
        <div className="flex justify-between items-center m-2 border-4 border-emerald-900 rounded w-screen ">
            <div className="">
                <strong className="text-4xl">{props.number}.{props.post.title}</strong>
                <h1 className="text-2xl">{props.post.body}</h1>
                <div className=" justify-end  bg-orange-400 hover:bg-orange-300 py-2 px-4 text-2xl">
            <button >pozmak</button>
        </div>
            </div>
           
        </div>
    )
}
export default Counter