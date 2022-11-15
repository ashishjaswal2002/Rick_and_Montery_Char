import classes from './Button.module.css';

const Button = (props)=>{
    return(
        <button onClick={props.onClick} className={classes.btn}>Get Info</button>
    )
}
export default Button;