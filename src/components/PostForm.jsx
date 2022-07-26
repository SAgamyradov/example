import React, { useState } from "react";
import MyButton from "./ui/button/MyButton";
import MyInput from "./ui/input/MyInput";

const PostForm = ({create}) =>{
    const [post, setPost] = useState({title:'', body:''})
    
    const addNewPost = (e) => {
        e.preventDefault()
          const newPost ={
             ...post, id: Date.now()
         }
         create(newPost)
        setPost({title:'', body:''})
    }
    
    return(
        <form>
            <MyInput 
            type='text' 
            placeholder='  girish...' 
            value={post.title} 
            onChange={e => setPost({...post, title: e.target.value})} 
            className='m-3 rounded-full w-96 h-8' 
            />

            <MyInput 
            type='text' 
            placeholder='  chykysh...' 
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value})}
            className='m-3 rounded-full w-96 h-8'/>

            <MyButton onClick={addNewPost}>POST</MyButton>
        </form>
            );
};
export default PostForm