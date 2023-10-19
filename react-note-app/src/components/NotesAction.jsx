import React from 'react'
import './NotesAction.css'

function NotesAction({id, onDelete, onArchive}){
        return(
            <div className='notes-item_action'>
                <button className='notes-item_archive-btn' onClick={()=>onArchive(id)} >Archive</button>
                <button className='notes-item_delete-btn' onClick={()=>onDelete(id)}>Delete</button>
            </div>
        );
    
}

export default NotesAction;                                                                                                                                 