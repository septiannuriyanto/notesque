
import './App.css'
import React from 'react'
import NoteList from './components/NotesList'
import NotesArchive from './components/NotesArchive'
import Header from './components/Header'
import NotesCreate from './components/NotesCreate'
import {getArchives, getNotes} from './components/data.js'
import { getDate } from './components/datehandler'

class NotesApp extends React.Component {

  

  constructor(props){
    
    super(props);
    this.state={
        notes : getNotes(),
        archives : getArchives(),
        keyword : ''
    }

    this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);

    this.onRestoreArchiveHandler = this.onRestoreArchiveHandler.bind(this);
    this.onDeleteArchiveHandler = this.onDeleteArchiveHandler.bind(this);

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onKeywordSearch = this.onKeywordSearch.bind(this);
}



onDeleteNotesHandler(id){
  const notes = this.state.notes.filter(note => note.id !==id);
  this.setState({notes});
}

onKeywordSearch(search){
  this.setState({
    keyword:search
  })

}




onDeleteArchiveHandler(id){
  const archives = this.state.archives.filter(archives => archives.id !==id);
  this.setState({archives});
}

onAddNotesHandler({title, content}){
  const newId = new Date();
  this.setState((prevState)=>{
    
      return{
          notes: [
              ...prevState.notes,
              {
                  id : +newId,
                  title,
                  date : getDate(newId),
                  content,
              }
          ],

      }
  });
}


onArchiveNotesHandler(id, title, date, content){
  this.onDeleteNotesHandler(id);
  this.setState((prevState)=>{
    return{
      archives: [
          ...prevState.archives,
          {
              id : +new Date() + id,
              title : title,
              date : date,
              content : content,
          }
      ],
    }
  });

  
  // alert('Archived')
}

onRestoreArchiveHandler(id, title, date, content){
  this.onDeleteArchiveHandler(id)
  this.setState((prevState)=>{
    return{
      notes: [
        ...prevState.notes,
        {
            id : +new Date() + id,
            title : title,
            date : date,
            content : content,
        }
    ],
    }
  });

  
  // alert('Restored')
}

render(){
  return (
    <div className='notes-app'>
    <Header onSearch={this.onKeywordSearch}/>
    <NotesCreate addNotes={this.onAddNotesHandler}/>
    <NoteList keyword={this.state.keyword} notes = {this.state.notes} onDeleteNotes={this.onDeleteNotesHandler} onArchiveNotes={this.onArchiveNotesHandler}/>
    <NotesArchive keyword={this.state.keyword} archives = {this.state.archives} onDeleteArchive={this.onDeleteArchiveHandler} onRestoreArchive={this.onRestoreArchiveHandler} />
    </div>
  );
}
}

export default NotesApp;
