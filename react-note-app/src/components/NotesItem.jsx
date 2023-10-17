import React from 'react'
import './NotesItem.css'
import NotesAction from './NotesAction';

class NotesItem extends React.Component{
    render(){
        return(
            <div className="notes-item">
                <h3>Title</h3>
                <h4>Kamis, 5 November 2023</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati facere earum esse nostrum expedita molestias, ipsa enim neque? Tempora commodi eum quas deleniti similique ratione quo id quam doloribus qui!</p>
                <NotesAction/>
                
            </div>
        );
    }
}

export default NotesItem;