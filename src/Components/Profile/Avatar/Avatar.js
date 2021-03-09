import React from 'react';
import style from './Avatar.module.css';

const Avatar = (props) => {

    return(
        <div className={style.avatar}>
            <img src={props.user.src} alt=""/>
        </div>
    )
}

export default Avatar;