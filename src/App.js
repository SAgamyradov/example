import React, { useState } from "react";
import PostForm from "./components/PostForm";
import Postlist from "./components/Postlist";



const App = () =>{
    const [state, setState] = useState([
        {id:1, title:'React', body:'react programming'},
        {id:2, title:'React', body:'react programming'},
      
    ])
    const createpost = (newPost) =>{
        setState([...state, newPost])
    }
    //posty docerny komponentdan alyas

    const removePost = (post) =>{
        setState(state.filter(p => p.id !==post.id))
    }
  

    return(
        <div className="bg-slate-400 font-montserratAlternates-medium">
            <PostForm create={createpost}/>
            <Postlist remove={removePost} post={state} title="To react"/>
           
        </div>
        )
}
export default App