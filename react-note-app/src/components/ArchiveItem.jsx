import React from 'react'
import './ArchiveItem.css'
import ArchiveAction from './ArchiveAction';

function ArchiveItem({id, title, createdAt, body, onDelete, onRestore}){
        return(
            <div className="archive-item">
                <h3>{title}</h3>
                <h4>{createdAt}</h4>
                <p>{body}</p>
                <ArchiveAction id={id} title={title} body={body} onDelete={onDelete} onRestore={onRestore}/>
                
            </div>
        );
  
}

export default ArchiveItem;