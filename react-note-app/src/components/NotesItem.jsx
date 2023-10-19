import React from 'react'
import './NotesItem.css'
import NotesAction from './NotesAction';

function NotesItem({id, title, createdAt, body, archived, onDelete, onArchive}){
        return(
            <div className="notes-item">
                <h3>{title}</h3>
                <h4>{createdAt}</h4>
                <p>{body}</p>
                <NotesAction id={id} archived={archived} onDelete={onDelete} onArchive={onArchive}/>
                
            </div>
        );
  
}

export default NotesItem;