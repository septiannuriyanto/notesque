import React from 'react'
import NotesItem from './NotesItem';
import './NotesArchive.css'
import ArchiveItem from './ArchiveItem';

function NoteArchive({keyword,archives, onDeleteArchive, onRestoreArchive}){

    let itemPopulation = archives.filter((item)=>{
        return keyword===''? item : item.title.toLowerCase().includes(keyword.toLowerCase())
    }).length;
    

   

        return(
            <div className='notes-archive'>
                <h3>Catatan Diarsipkan</h3>
                <div className='notes-archive_items'>
                    {        
                    itemPopulation==0? <h2>Tidak ada arsip</h2> :          
                        archives.filter((item)=>{
                            return keyword===''? item : item.title.toLowerCase().includes(keyword.toLowerCase())
                        }).map((archive)=>
                          (
                              <ArchiveItem key={archive.id} id={archive.id} onDelete={onDeleteArchive}{...archives} onRestore={onRestoreArchive}{...archive}/>
                          )
                      )                      

                    }
                </div>
            </div>
           
        );
}


export default NoteArchive;