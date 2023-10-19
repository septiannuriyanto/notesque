import React from 'react'
import './ArchiveItem.css'
import ArchiveAction from './ArchiveAction';

function ArchiveItem({id, title, date, content, onDelete, onRestore}){
        return(
            <div className="archive-item">
                <h3>{title}</h3>
                <h4>{date}</h4>
                <p>{content}</p>
                <ArchiveAction id={id} title={title} date={date} content={content} onDelete={onDelete} onRestore={onRestore}/>
                
            </div>
        );
  
}

export default ArchiveItem;