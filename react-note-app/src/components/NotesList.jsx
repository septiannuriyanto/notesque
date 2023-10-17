import React from 'react'
import NotesItem from './NotesItem';
import './NotesList.css'

class NotesList extends React.Component{
    render(){
        return(
            <div className='notes-list'>
                <h3>Catatan Aktif</h3>
                <div className='notes-list_items'>
                    <NotesItem/>
                    <NotesItem/>
                    <NotesItem/>
                    <NotesItem/>
                    <NotesItem/>
                    <NotesItem/>
                    <NotesItem/>
                    <NotesItem/>
                </div> 
            </div>
        );
    }
}


export default NotesList;