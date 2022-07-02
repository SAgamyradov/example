import React, { Children } from "react";

const Mybutton = ({children, ...props}) =>{
    return(
        <button {...props} className="bg-blue-600 hover:bg-blue-400 py-2 px-4 rounded">{children}</button>
    )
}
export default Mybutton