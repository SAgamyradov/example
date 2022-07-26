import React, { useState } from "react";
import PostForm from "./components/PostForm";
import Postlist from "./components/Postlist";



const App = () =>{
    const [state, setState] = useState([
        {id:1, title:'React', body:'react programming'},
        {id:2, title:'React', body:'react programming'},
        {id:3, title:'React', body:'react programming'},
        {id:4, title:'React', body:'react programming'},
        {id:5, title:'React', body:'react programming'},
    ])
    const createpost = (newPost) =>{
        setState([...state, newPost])
    }

  

    return(
        <div className="bg-slate-400 font-montserratAlternates-medium">
            <PostForm create={createpost}/>
            <Postlist post={state} title="To react"/>
           
        </div>
        )
}
export default App