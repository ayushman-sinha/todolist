import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './css/body.css';

import { BsFillPlusCircleFill} from "react-icons/bs";
import { FaFilter } from "react-icons/fa";

import ListItem from './ListItem';
function App() {
  let [listItemArray, setListItemArray] = useState([])
  let [listItemArrayCompleted, setListItemArrayCompleted] = useState([])
  let [listItemArrayNotCompleted, setListItemArrayNotCompleted] = useState([])
  const [title, setTitle] = useState('')
  const [dropDown, setDropDown] = useState(false)
  const [filter, setFilter] = useState(1);

  const deleteItem = (id) => {   
    let x = listItemArray.filter((item) => {
      return item.id !== id
    })
    setListItemArray([...x])

  }
  const handleAdd = (e) => {
    if(title==='')
      return;
    const key=Math.random()
   const tmp= <ListItem title={title} key={key} id={key} deleteItem={deleteItem}  completeItem={completeItem}/>
   //console.log(listItemArray.length)
    listItemArray.push(tmp)
    setListItemArray(listItemArray)
    //setListItemArray([...listItemArray, tmp])
    setTitle('')
  }
  const completeItem = (id) => {
     for(let i=0;i<listItemArray.length;i++){

     }
  }
  
  const handleFilter = () => {
    
  }

  return (    
      <div class='main_container'>
        <div class='header'>
          <div class='main_title'>Todo List</div>
          <div class = 'add_button' >
            <input type="text"  class='input_task' placeholder="Add an item.." value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={handleAdd} class='button_edit'><BsFillPlusCircleFill size='30px' class='add_button_edit' /></button>  
            <button class='button_edit'><FaFilter size='30px' class='add_button_edit'  onClick={(e)=>setDropDown(!dropDown)}/>
            
                <div className='filter_dropdown'  style={{display:dropDown?'flex':'none'}}>
                  <div className='filter_dropdown_content'>
                    <ul>
                      <li onClick={(e)=>{setFilter(1);handleFilter()}}>All</li>
                      <li onClick={(e)=>{setFilter(2);handleFilter()}}>Completed</li>
                      <li onClick={(e)=>{setFilter(3);handleFilter()}}> Uncompleted</li>
                    </ul>                    
                  </div>
                </div>
                </button>
                        
               
             
           
           
                
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


