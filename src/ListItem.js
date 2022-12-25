import { useState } from 'react'
import './css/list_item.css'
const ListItem = (props) => {
    const [showMore, setShowMore] = useState(false); // To display more text 
    const [edit, setEdit] = useState(false); // To edit the text
    const [text, setText] = useState(''); // To store the text
    const [textEdit, setTextEdit] = useState(props.title); // To store the final text
    const [moreText, setMoreText] = useState(''); // To store the more text
    const [moreTextEdit, setMoreTextEdit] = useState(''); // To store the final more text
    const handleEdit = (e) => {  
        console.log('edit')     
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
    }
  return (
    <div class = 'todo_list_item'>
        
        <div class='normal_text'>            
            {edit ? 
            <div class= 'editOn'>
                <input  class = 'item_edit_title' type="text" value={text} onChange={handleTextEdit} />
                <button class = 'item_button' onClick={saveTextEdit} >Save</button>
                <button class = 'item_button' onClick={cancelTextEdit} >Cancel</button>
            </div> 
            :
            <div class='editOff'>
                <div class = 'item_title'>{textEdit}</div>
                <div class='edit_delete'>            
                    <button class = 'item_button' onClick={handleEdit} >Edit</button>
                    <button class = 'item_button' onClick={(e)=>{handleDelete()}}>Delete</button>
                    <button class = 'item_button' onClick={(e)=>setShowMore(!showMore)} >More</button>
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