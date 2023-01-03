import Navbar from "./Components/Navbar";
import View from "./Components/View";
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import Inbox from "./Components/Inbox";
import Spam from "./Components/Spam";
import Deleted from "./Components/Deleted";
import { useEffect, useState } from "react";
import inb from "./1_inbox .json";
import spa from "./1_spam.json"
import del from "./delete.json"


function App() {
  const [inbox,setInbox] = useState([]);
const [spam,setSpam] = useState([]);
const [deleted,setDeleted] = useState([]);
const [inc,setIncount]=useState(0);
const [spc,setSpcount]=useState(0);
const [dc,setDcount]=useState(0)
  useEffect(() => {
    setInbox(inb);
  setSpam(spa);
  setDeleted(del);
  setIncount(inb.filter((mail)=> mail.unread).length)
  setSpcount(spa.filter((mail)=> mail.unread).length)
  setDcount(del.filter((mail)=> mail.unread).length)
  }, [])
  
  
  return (
    <div>
      <Router>
       <Navbar inc ={inc} spc={spc} dc ={dc}/> 
      <Routes>   
      <Route  path="/"
          element = {<Inbox inbox={inbox} />}
          />     
          <Route  path="/inbox"
          element = {<Inbox inbox={inbox} />}
          />
          <Route exact path="/spam"
            element = { <Spam spam={spam}/>}/> 
      
      <Route exact path="/deleted"
            element = { <Deleted deleted={deleted}/>}/> 
      
      <Route exact path="/view/:type/:id"
            element = { <View inbox={inbox} spam={spam} deleted={deleted} setInbox={setInbox} setSpam={setSpam} setDeleted={setDeleted}
            inc ={inc} spc={spc} dc ={dc}setIncount={setIncount} setSpcount={setSpcount} setDcount={setDcount} />}/> 

      </Routes>
          </Router>
    </div>
  );
}

export default App;
