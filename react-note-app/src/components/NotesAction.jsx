import React from 'react'
import './NotesAction.css'

function NotesAction({id, title, date, content, onDelete, onArchive}){
        return(
            <div className='notes-item_action'>
                <button className='notes-item_archive-btn' onClick={()=>onArchive(id , title,date,content)} >Archive</button>
                <button className='notes-item_delete-btn' onClick={()=>onDelete(id)}>Delete</button>
            </div>
        );
    
}

export default NotesAction;                                                                                                                                 