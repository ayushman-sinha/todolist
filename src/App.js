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
    const tmp = {
      title: title,
      id: Math.random(),
      completed: false      
    }   
    setListItemArray([...listItemArray,tmp])
    setTitle('')
  }
  const completeItem = (id) => {
    let x=listItemArray.map((item) => {
      return item.id=== id
    })
     setListItemArrayCompleted([...listItemArrayCompleted,x])
    let y = listItemArray.filter((item) => {
      return item.id !== id
    })
    setListItemArrayNotCompleted([...listItemArrayNotCompleted,y])
  }
  
  const handleFilter = () => {
    // if(filter===2)
    // {
    //   let x = listItemArray.filter((item) => {
    //     return item.completed === true
    //   })
    //   setListItemArray([...x])
    // }
    // else if(filter===3)
    // {
    //   let x = listItemArray.filter((item) => {
    //     return item.completed === false
    //   })
    //   setListItemArray([...x])
    // }
    
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
       
        {      
          filter===1?listItemArray.map((item) => {
            return <ListItem title={item.title} key={item.id} id={item.id} deleteItem={deleteItem}  completeItem={completeItem}/>
          }): filter===2?listItemArrayCompleted.map((item) => {
            return <ListItem title={item.title} key={item.id} id={item.id} deleteItem={deleteItem}  completeItem={completeItem}/>})
          :listItemArrayNotCompleted.map((item) => {
            return <ListItem title={item.title} key={item.id} id={item.id} deleteItem={deleteItem}  completeItem={completeItem}/>})
        }
      </div>
    
  );
}

export default App;


