import React, { useState } from "react";
import Postlist from "./components/Postlist";
import Mybutton from "./components/ui/button/Mybutton";
import Myinput from "./components/ui/button/Myinput";



const App = () =>{
        const[posts, setposts]=useState([
                {id:1, title:'React', body:'React program language'},
                {id:2, title:'React', body:'React program language'},
                {id:3, title:'React', body:'React program language'}
        ])
  

    return(
        <div>
                <Myinput type='text' placeholder='girish...'/>
                <Myinput type='text' placeholder='chykysh...'/>
                <Mybutton>ADD</Mybutton>
             <Postlist listpost={posts} title='React'/>
             
     
     </div>
        )
}
export default App