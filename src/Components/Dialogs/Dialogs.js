import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


const Dialogs = (props) => {
    return (
        <div className={style.dialog}>
            <div className={style.users}>
                <Dialog name="Yuri" id="1"/>
                <Dialog name="Elena" id="2"/>
                <Dialog name="Oleg" id="3"/>
                <Dialog name="Alex" id="4"/>
            </div>
            <div className={style.messages}>
                <Message message="Hi"/>
                <Message message="How you doing?"/>
                <Message message="Yo"/>
                <Message message="Bye"/>
            </div>
        </div>
    )
}

export default Dialogs;