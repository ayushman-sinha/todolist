import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/body.css';

import { BsFillPlusCircleFill} from "react-icons/bs";

import ListItem from './ListItem';
function App() {
  let [listItemArray, setListItemArray] = useState([])
  const [title, setTitle] = useState('')

  const deleteItem = (id) => {   
    listItemArray.splice(id,1)
    setListItemArray([...listItemArray])
    console.log(listItemArray)

  }
  const handleAdd = (e) => {
    if(title==='')
      return;
    const key=Math.random()
   const tmp= <ListItem title={title} key={key} id={key} deleteItem={deleteItem}/>
   //console.log(listItemArray.length)
    listItemArray.push(tmp)
    setListItemArray(listItemArray)
    //setListItemArray([...listItemArray, tmp])
    setTitle('')
  }
  

  return (    
      <div class='main_container'>
        <div class='header'>
          <div class='main_title'>Todo List</div>
          <div class = 'add_button' >
            <input type="text"  class='input_task' placeholder="Add an item.." value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={handleAdd} class='button_edit'><BsFillPlusCircleFill size='30px' class='add_button_edit' /></button>        
          </div>
        </div>
       
          {listItemArray.map((item,key) => {
            return item
          })
       }
      </div>
    
  );
}

export default App;


