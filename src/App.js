import { useEffect, useState } from 'react';
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
  //   const key=Math.random()
  //  const tmp= <ListItem title={title} key={key} id={key} deleteItem={deleteItem}  completeItem={completeItem}/>
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
    // let x=listItemArray.map((item) => {
    //   return item.id=== id
    // })
    //  setListItemArrayCompleted([...listItemArrayCompleted,x])
    // let y = listItemArray.filter((item) => {
    //   return item.id !== id
    // })
    // setListItemArrayNotCompleted([...listItemArrayNotCompleted,y])
    for(let i=0;i<listItemArray.length;i++){
      if(listItemArray[i].id===id){
        listItemArray[i].completed=true;
        break;
      }
    }
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
                      <li onClick={(e)=>setFilter(1)}>All</li>
                      <li onClick={(e)=>setFilter(2)}>Completed</li>
                      <li onClick={(e)=>setFilter(3)}> Uncompleted</li>
                    </ul>                    
                  </div>
                </div>
                </button>
                        
               
             
           
           
                
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


