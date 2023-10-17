import React from 'react'
import './NotesAction.css'

class NotesAction extends React.Component{
    render(){
        return(
            <div className='notes-item_action'>
                <button className='notes-item_archive-btn'>Archive</button>
                <button className='notes-item_delete-btn'>Delete</button>
            </div>
        );
    }
}

export default NotesAction;                                                                                                                                 