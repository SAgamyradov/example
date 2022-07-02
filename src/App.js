import React, { useState } from "react";
import Formpost from "./components/Formpost";
import Postlist from "./components/Postlist";


const App = () =>{
    const [state, setstate] = useState([
        {id:1, title:'React', body:'react programming'},
        {id:2, title:'React', body:'react programming'},
        {id:3, title:'React', body:'react programming'},
        {id:4, title:'React', body:'react programming'},
        {id:5, title:'React', body:'react programming'},
    ])
    const createpost = (newpost) =>{
        setstate[state, newpost]
    }

  

    return(
     
        <div className="bg-slate-400 font-serif">
            <Formpost create={createpost}/>
            <Postlist post={state} title="To react"/>
        
           </div>
           )
}
export default App