import React from 'react'
import './ArchiveAction.css'

function ArchiveAction({id, title, date, content, onDelete, onRestore}){
        return(
            <div className='archives-item_action'>
                <button className='archives-item_archive-btn' onClick={()=>onRestore(id , title,date,content)}>Restore</button>
                <button className='archives-item_delete-btn' onClick={()=>onDelete(id)}>Delete</button>
            </div>
        );
    
}

export default ArchiveAction;                                                                                                                                 