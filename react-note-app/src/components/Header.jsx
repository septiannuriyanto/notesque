import React from 'react'
import Logo from '../assets/notesque.svg'
import './Header.css'

class Header extends React.Component{
    render(){
        return(

                <nav className='header'>
                    <div className='header-branding'>
                        <img src={Logo} width='30' height='30'></img>
                        <h1>Notesque App</h1>
                    </div>
                    <div className='search-bar'>
                        <input type='text' placeholder='Keyword' ></input>
                        <button type='submit'>Search</button>
                    </div>
                </nav>
                

        );
    }
} 

export default Header
