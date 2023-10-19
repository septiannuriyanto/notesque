import React from 'react'
import './NotesCreate.css'

class NotesCreate extends React.Component{

    constructor(props){
        super(props);
        const MAX_LENGTH = 50;

        this.state = {
            max_char : MAX_LENGTH,
            title : '',
            content : '',
        };

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
        this.onContentChangeHandler = this.onContentChangeHandler.bind(this);

        this.onSubmitEventhandler = this.onSubmitEventhandler.bind(this);
    }

    onTitleChangeHandler(event){
        let charlen = event.target.value.length;
        let charRemains = 50- charlen;
        if(charRemains==0){
            alert("Max Character Reached");
        }
        
        this.setState(()=>{
            return{
                max_char: charRemains,
                title: event.target.value,
            }
        });
    }

    onContentChangeHandler(event){
        this.setState(()=>{
            return{
                content: event.target.value,
            }
        });
    }
    onSubmitEventhandler(event){
        event.preventDefault();
        this.props.addNotes(this.state);
    }


    render(){
        return(
            <form className='note-create' onSubmit={this.onSubmitEventhandler}>
                <h3>Quick Create Note</h3>
                <div className='note-create_title'>
                    <input type='text' className='note-create_title' placeholder='Input Title' value={this.state.title} onChange={this.onTitleChangeHandler} maxLength='50'></input>
                    <b>Sisa Karakter : {this.state.max_char}</b>
                </div>   
                <textarea type='text' className='note-create_content' placeholder='Input Note Content' rows='10' value={this.state.content} onChange={this.onContentChangeHandler}></textarea>
                <button type='submit' className='note-create_submit'>Create</button>         
            </form>
        )
    }
}

export default NotesCreate 