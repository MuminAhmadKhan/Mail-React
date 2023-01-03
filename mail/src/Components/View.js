import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const View = ({inbox,spam,deleted,setInbox,setSpam,setDeleted,inc,spc,dc,setIncount,setSpcount,setDcount}) => {
    let {type,id}=useParams();
    let mail;
    if (type ==='inbox')
    { mail = inbox.find(ma=>ma.mId===id)
        if(mail.unread)
        {
            mail.unread=false;
            setIncount(inc-1);
            setInbox([...inbox.filter(mail => mail.mId !== id),mail])
        }
    }
    else if (type==='spam')
    { mail = spam.find(ma=>ma.mId===id) 
        if(mail.unread)
        {
            mail.unread=false;
            setSpcount(spc-1);
            setInbox([...spam.filter(mail => mail.mId !== id),mail])
        }
    }
    else if (type ==='deleted')
    { mail = deleted.find(ma=>ma.mId===id) 
        if(mail.unread)
        {
            mail.unread=false;
            setDcount(dc-1);
            setInbox([...deleted.filter(mail => mail.mId !== id),mail])
        }
    }
        const naviagte = useNavigate();
    const handleDelete = ()=> {
        if ( type ==='deleted')
        {
            setDeleted(deleted.filter(mail => mail.mId !== id))
            setInbox([...inbox,mail])
        }
        else if (type ==='spam')
        {
            setDeleted([...deleted,mail]);
            setSpam(spam.filter(mail => mail.mId !== id)) 
        }
        else if (type==='inbox')
        {
            setDeleted([...deleted,mail]);
            setInbox(inbox.filter(mail => mail.mId !== id)) 
        }
        naviagte('/inbox')
    }

    const handleSpam = ()=> {
        
       if (type ==='spam')
        {
            setInbox([...inbox,mail]);
            setSpam(spam.filter(mail => mail.mId !== id)) 
        }
        else if (type==='inbox')
        {
            setSpam([...spam,mail]);
            setInbox(inbox.filter(mail => mail.mId !== id)) 
        }
        naviagte('/inbox')
    }
  return (
    <div>
    <ul class="nav justify-content-center">

  <li class="nav-item" onClick={handleDelete}>
    <a class="nav-link">{type!=='deleted'?'Delete':'Restore'}</a>
  </li>
  <li className="nav-item" >
    <a class={`nav-link ${type==='deleted'?'disabled':''}`}onClick={handleSpam} >{type!=='spam'?'Move To Spam':'Remove From Spam'}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ">Disabled</a>
  </li>
</ul>
        <div class="card">
  <div class="card-body">
  <h3>Subject <span>{mail.subject}</span></h3>
  </div>
</div>

<div className='container'>
    {mail.content}
</div>
    
    </div>
  )
}

export default View