import React from 'react'
import classes from './Header.module.css'

const Header  = ()=>{
    return(
        <header className={classes.header}>
         <h1>This Page contains all the Information of Ricky and  Montery Characters</h1>
         <p>To get the information about Ricky and Montery Characters Click on Get Info</p>
        </header>
    )
}
export default Header;