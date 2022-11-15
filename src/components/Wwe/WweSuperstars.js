import React from "react";
import WweList from '../Wwe/WweList'
import classes from './WweSuperstars.module.css';
const WweSuperstar = (props)=>{
    return(
        <div>
        <ul className={classes.container}>
            {props.datawwe.map((data)=>(<WweList
            key={data.id}
             name={data.name}
             image={data.image}
             gender={data.gender}       
            />))}

        </ul>
        </div>
    )
}
export default WweSuperstar;