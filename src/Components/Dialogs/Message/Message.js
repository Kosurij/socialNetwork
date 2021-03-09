import style from './Message.module.css';
import React from "react";


const Message = (props) => {

    return(
        <div className={style.item}>{props.message}</div>
    )
}

export default Message;