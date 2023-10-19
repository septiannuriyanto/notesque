import React, { useState } from 'react'
import Logo from '../assets/notesque.svg'
import './Header.css'

function Header({onSearch}){
    

    return(
        <nav className='header'>
            <div className='header-branding'>
                <img src={Logo} width='30' height='30'></img>
                <h1>Notesque App</h1>
            </div>
            <form className='search-bar' onChange={(e)=>onSearch(e.target.value)}>
                <input type='text' placeholder='Keyword'></input>
            </form>
        </nav>   
        );
} 

export default Header;
