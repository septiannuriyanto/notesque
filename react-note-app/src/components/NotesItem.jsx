import React from 'react'
import './NotesItem.css'
import NotesAction from './NotesAction';

function NotesItem({id, title, date, content, onDelete, onArchive}){
        return(
            <div className="notes-item">
                <h3>{title}</h3>
                <h4>{date}</h4>
                <p>{content}</p>
                <NotesAction id={id} title={title} date={date} content={content} onDelete={onDelete} onArchive={onArchive}/>
                
            </div>
        );
  
}

export default NotesItem;