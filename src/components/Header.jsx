import '../styles/Header.css'
import { useEffect, useState } from 'react'
function Header(){

    return(
        <>
            <div className="header">
                
                <span className="title">StarWars</span>
                <span className="about">The Star Wars API</span>
            </div>
        </>
    )
}
export default Header