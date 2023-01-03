import React from 'react'
import { useNavigate,useLocation } from "react-router-dom";


const List = ({list}) => {

    
    const navigate=useNavigate();
    const location = useLocation();
    const handleClick =( id)=>{
        console.log("http"+ id)
        navigate(`/view${location.pathname}/${id}`);


    }
  return (
    <div>
        {console.log(list.length)}
        {list.map((mail)=>{

           return  <div class="card" key={mail.mId}>
           <div class="card-body" onClick={()=>handleClick(mail.mId)}>
             <h4>{mail.subject}</h4> 
             {mail.content.substring(0,mail.length<150?mail.length:150)}
           </div>
         </div>
}) 
    }
    </div>
  )
}

export default List