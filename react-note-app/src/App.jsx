
import './App.css'
import NoteList from './components/NotesList'
import NotesArchive from './components/NotesArchive'
import Header from './components/Header'
import NotesCreate from './components/NotesCreate'

function App() {

  return (
    <>
    <Header/>
    <NotesCreate/>
    <NoteList/>
    <NotesArchive/>
    </>
  )
}

export default App
