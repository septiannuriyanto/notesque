import React from 'react'
import './NotesCreate.css'

class NotesCreate extends React.Component{
    render(){
        return(
            <div className='note-create'>
                <h3>Quick Create Note</h3>
                <div className='note-create_title'>
                    <input type='text' className='note-create_title' placeholder='Input Title'></input>
                    <b>Sisa Karakter : 50</b>
                </div>   
                <textarea type='text' className='note-create_content' placeholder='Input Note Content' rows='10'></textarea>
                <button type='submit' className='note-create_submit'>Create</button>
                
            </div>
        )
    }
}

export default NotesCreate 