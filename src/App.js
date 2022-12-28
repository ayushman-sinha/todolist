import { useEffect, useState } from 'react';
import './css/body.css';
import { BsFillPlusCircleFill} from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import {MdDelete} from 'react-icons/md'

import ListItem from './ListItem';
function App() {
  let [listItemArray, setListItemArray] = useState([])// To store the list of components
  const [title, setTitle] = useState('')// To store the title
  const [dropDown, setDropDown] = useState(false)// To display the dropdown
  const [filter, setFilter] = useState(1); // To store the filter value


  const deleteItem = (id) => {   
    let x = listItemArray.filter((item) => {
      return item.id !== id
    })
    setListItemArray([...x])
  }

  const handleAdd = (e) => {
    if(title==='')
      return;  
    let key=Math.random()
    const tmp = {
      title: title,
      key :key,
      id: key,
      completed: false      
    }   
    setListItemArray([...listItemArray,tmp])
    setTitle('')
  }
  const completeItem = (id) => {    
    for(let i=0;i<listItemArray.length;i++){
      if(listItemArray[i].id===id){
        listItemArray[i].completed=!listItemArray[i].completed;
        break;
      }
    }
    setListItemArray([...listItemArray])
  }
  
  const handleDeleteAll = (e) => {
    //To delete all the completed items
    for(let i=0;i<listItemArray.length;i++){
      if(listItemArray[i].completed===true){
        listItemArray.splice(i,1)
        i--;
      }
    }
    setListItemArray([...listItemArray])
  }
   
  return (    
      <div class='main_container'>
        <div class='header'>
          <div class='main_title'>Todo List</div>
          <div class = 'add_button' >
            <input type="text"  class='input_task' placeholder="Add an item.." value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <button onClick={handleAdd}  class='button_edit'><BsFillPlusCircleFill size='30px' class='add_button_edit' /></button>  
            <button class='button_edit'><FaFilter size='30px' class='add_button_edit'  onClick={(e)=>setDropDown(!dropDown)}/>                          
                <div className='filter_dropdown'  style={{display:dropDown?'flex':'none'}}>
                  <div className='filter_dropdown_content'>
                    <ul>
                      <li onClick={(e)=>{setFilter(1);setDropDown(!dropDown)}}>All</li>
                      <li onClick={(e)=>{setFilter(2);setDropDown(!dropDown)}}>Completed</li>
                      <li onClick={(e)=>{setFilter(3);setDropDown(!dropDown)}}> Uncompleted</li>
                    </ul>                    
                  </div>
                </div>
            </button>
            <button onClick={handleDeleteAll}  class='button_edit'><MdDelete size='40px' class='add_button_edit' /></button>
          </div>
        </div>
       
        {      
          filter===1?listItemArray.map((item) => {
            return <ListItem title={item.title} key={item.id} id={item.id} deleteItem={deleteItem}  completeItem={completeItem} completed={item.completed}/>
          }): filter===2?listItemArray.map((item) => {
            return  item.completed===true?<ListItem title={item.title} key={item.id} id={item.id} deleteItem={deleteItem}  completeItem={completeItem} completed={item.completed}/>:null})
          :listItemArray.map((item) => {
            return  item.completed===false?<ListItem title={item.title} key={item.id} id={item.id} deleteItem={deleteItem}  completeItem={completeItem} completed={item.completed}/>:null})
        }
      </div>
    
  );
}

export default App;


