import {React,useEffect,useState} from 'react'
import { useNavigate,useLocation } from "react-router-dom";


const List = ({list}) => {

    const [maillist,setMaillist] = useState(list);
    const [search,setSearch]=useState('')
    useEffect(() => {
      setMaillist([...list])
    }, [])
    
    const handleSearch = (val)=>{
        setSearch(val);
        if(search==='')
        setMaillist(list)
        else setMaillist(list.filter(mail=>mail.content.toLowerCase()
        .includes(search.toLowerCase())|| mail.subject.toLowerCase()
        .includes(search.toLowerCase())))
    } 
    const navigate=useNavigate();
    const location = useLocation();
    const handleClick =( id)=>{
        console.log("http"+ id)
        navigate(`/view${location.pathname}/${id}`);


    }
  return (
    <div>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" value = {search} onChange={({target})=>handleSearch(target.value)}/>
      </form>
        {console.log(list.length)}
        {maillist.map((mail)=>{

           return  <div className="card" key={mail.mId}>
           <div className="card-body" onClick={()=>handleClick(mail.mId)}>
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