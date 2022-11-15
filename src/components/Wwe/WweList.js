import React from "react";
import classes from './WweList.module.css';
const WweList = (props)=>{
  return (
    <li className={classes.parent}>
        <h1>{props.name}</h1>
        <p>{props.gender}</p>
        <img src={props.image} className={classes.img}/>
    </li>
  )
}
export default WweList;