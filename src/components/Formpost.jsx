import React, { useState } from "react";
import Mybutton from "./ui/Mybutton";
import Myinput from "./ui/Myinput";

const Formpost = ({create}) =>{
    const [post, setpost] = useState({title:'', body:''});
    
    const addNewPost = (e) =>{
        e.preventDefault()
         
        const newpost ={
             ...post, id: Date.now()
         }
         create(newpost)
        setpost({title:'', body:''})
    }
    
    return(
        <div>
               <form>
            <Myinput 
            type='text' 
            placeholder='  girish...' 
            value={post.title} 
            onChange={e => setpost({...post, title: e.target.value})} 
            className='m-3 rounded-full w-96 h-8' 
            />

            <Myinput 
            type='text' 
            placeholder='  chykysh...' 
            value={post.body}
            onChange={e => setpost({...post, body: e.target.value})}
            className='m-3 rounded-full w-96 h-8'/>

            <Mybutton onClick={addNewPost}> POST</Mybutton>
            </form>
        </div>
    )
}
export default Formpost