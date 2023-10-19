import React from 'react'
import { createRoot } from 'react-dom/client'
import NotesApp from './NotesApp.jsx'
import './styles/index.css'

const root = createRoot(document.getElementById("root"));
root.render(<NotesApp/>)