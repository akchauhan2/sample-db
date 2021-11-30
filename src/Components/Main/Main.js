import React from 'react'
import './Main.css'
import MainBody from './MainBody'
import MainNav from './MainNav'
function Main({name}) {
    return (
      <div className="main">
        <MainNav name={name} />
        <MainBody name={name} />
      </div>
    );
}

export default Main
