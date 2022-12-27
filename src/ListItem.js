import { useState } from 'react'
import './css/list_item.css'
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";
import {IoCheckmarkSharp} from 'react-icons/io5'
import {IoCloseCircleSharp} from 'react-icons/io5'
const ListItem = (props) => {
    const [showMore, setShowMore] = useState(false); // To display more text 
    const [edit, setEdit] = useState(false); // To edit the text
    const [text, setText] = useState(''); // To store the text
    const [textEdit, setTextEdit] = useState(props.title); // To store the final text
    const [moreText, setMoreText] = useState(''); // To store the more text
    const [moreTextEdit, setMoreTextEdit] = useState('No text to show'); // To store the final more text
    const handleEdit = (e) => {  
        //console.log('edit')     
        setEdit(!edit);
        setShowMore(true);
    }
    const handleTextEdit = (e) => {      
       
        setText(e.target.value);       
    }
    const saveTextEdit = (e) => {
        setTextEdit(text);// To store the final text
        setEdit(!edit);// Indicate Edit is off
        setShowMore(false); // Hide more text
        setMoreTextEdit(moreText);// To store the final more text
    }
    const cancelTextEdit = (e) => {
        setEdit(!edit);
        setShowMore(false);
    }
    const handleDelete = (e) => {
        // To delete the item on click of delete button       
         props.deleteItem(props.id);
        //console.log("id",props.id)
    }
  return (
    <div class = 'todo_list_item'>
        
        <div class='normal_text'>            
            {edit ? 
            <div class= 'editOn'>
                <input  class = 'item_edit_title' type="text" value={text} onChange={handleTextEdit} />
                <button class = 'item_button' onClick={saveTextEdit} ><IoCheckmarkSharp size='40px' class='item_button_edit' /></button>
                <button class = 'item_button' onClick={cancelTextEdit} ><IoCloseCircleSharp size='40px' class='item_button_edit' /></button>
            </div> 
            :
            <div class='editOff'>
                <div class = 'item_title'>{textEdit}</div>
                <div class='edit_delete'>            
                    <button class = 'item_button' onClick={handleEdit} ><FaEdit size='40px' class='item_button_edit' /></button>
                    <button class = 'item_button' onClick={(e)=>{handleDelete()}}><FaTrashAlt size='35px' class='item_button_edit'/></button>
                    <button class = 'item_button' onClick={(e)=>setShowMore(!showMore)} ><CiCircleMore size='40px' class='item_button_edit' /></button>
                </div>
            </div>
            }        
            
        </div>
    
          {edit?
            <textarea class = 'item_edit_more' value={moreText} onChange={(e)=>setMoreText(e.target.value)} />
            :
            showMore &&
            <div class = 'more_text' >
            {moreTextEdit}
          </div>
          }

    </div>
  )
}

export default ListItem