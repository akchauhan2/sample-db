import React from 'react'
import './Main.css'
import MainBody from './MainBody'
import MainNav from './MainNav'
function Main({number}) {
    return (
        <div className='main'>
            <MainNav />
            <MainBody number={number}/>
        </div>
    )
}

export default Main
