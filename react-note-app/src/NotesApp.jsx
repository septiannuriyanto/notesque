
import './App.css'
import React from 'react'
import NoteList from './components/NotesList'
import NotesArchive from './components/NotesArchive'
import Header from './components/Header'
import NotesCreate from './components/NotesCreate'
import { getNotes} from './components/data.js'
import { getDate } from './components/datehandler'

class NotesApp extends React.Component {

  constructor(props){
    super(props);
    this.state={
        notes : getNotes(),
        keyword : ''
    }

    this.onArchiveNotesHandler = this.onArchiveNotesHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);

    this.onRestoreArchiveHandler = this.onRestoreArchiveHandler.bind(this);

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


onAddNotesHandler({title, content}){
  const newId = new Date();
  this.setState((prevState)=>{
    
      return{
          notes: [
              ...prevState.notes,
              {
                  id : +newId,
                  title,
                  createdAt : getDate(newId),
                  archived:false,
                  body: content,
              }
          ],

      }
  });
}


onArchiveNotesHandler(id){
  const changedNotes = [...this.state.notes];
  const singleNote = changedNotes.find(item => item.id === id);
  singleNote.archived = true;
  this.setState({changedNotes});
}

onRestoreArchiveHandler(id){
  const changedNotes = [...this.state.notes];
  const singleNote = changedNotes.find(item => item.id === id);
  singleNote.archived = false;
  this.setState({changedNotes});
}

render(){
  return (
    <div className='notes-app'>
    <Header onSearch={this.onKeywordSearch}/>
    <NotesCreate addNotes={this.onAddNotesHandler}/>
    <NoteList keyword={this.state.keyword} notes = {this.state.notes} onDeleteNotes={this.onDeleteNotesHandler} onArchiveNotes={this.onArchiveNotesHandler}/>
    <NotesArchive keyword={this.state.keyword} archives = {this.state.notes} onDeleteArchive={this.onDeleteNotesHandler} onRestoreArchive={this.onRestoreArchiveHandler} />
    </div>
  );
}
}

export default NotesApp;
