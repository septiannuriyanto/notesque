import React from 'react'
import NotesItem from './NotesItem';
import './NotesArchive.css'

class NoteArchive extends React.Component{
    render(){
        return(
            <>
            <div className='notes-archive'>
                <h3>Catatan Diarsipkan</h3>
                <div className='notes-archive_items'>
                    <NotesItem/>
                    <NotesItem/>
                </div>
            </div>
           
            </>
        );
    }
}


export default NoteArchive;