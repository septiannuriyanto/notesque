import React from 'react'
import NotesItem from './NotesItem';
import './NotesList.css'

function NotesList({keyword, notes, onDeleteNotes, onArchiveNotes}){

    let itemPopulation = notes.filter((item)=>{
        return keyword===''? item : item.title.toLowerCase().includes(keyword.toLowerCase())
    })
    .filter((item)=>item.archived===false)
    .length;
    

        return(
            <div className='notes-list'>
                <h3>Catatan Aktif</h3>
                <div className='notes-list_items'>
                    {

itemPopulation==0? <h2>Tidak ada notes</h2> :  
                        notes.filter((item)=>{
                            return keyword===''? item : item.title.toLowerCase().includes(keyword.toLowerCase())
                        })
                        .filter((item)=>item.archived===false)
                        .map((note)=>
                            (
                                <NotesItem key={note.id} id={note.id} onDelete={onDeleteNotes}{...note} onArchive={onArchiveNotes}{...notes}/>
                            )
                        )
                    }
                </div> 
            </div>
        );
    
}


export default NotesList;