import React from 'react';
import style from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    return (
        <div className={style.about}>
            <div className={style.data}>
                <div className={style.name}> {props.user.name}</div>
                <div className={style.status}> изменить статус</div>
            </div>
            <div className={style.data}>
                <div className={style.item}>
                    <div className={style.itemLabel}> Дата рождения:</div>
                    <div className={style.itemLabeled}> {props.user.date}</div>
                </div>
                <div className={style.item}>
                    <div className={style.itemLabel}> Город:</div>
                    <div className={style.itemLabeled}> {props.user.city}</div>
                </div>
                <div className={style.item}>
                    <div className={style.itemLabel}> Образование:</div>
                    <div className={style.itemLabeled}> {props.user.education}</div>
                </div>
            </div>
            <div className={style.data}>
                <div className={style.info}>
                    <div className={style.infoItem}>
                        <div> Друзья</div>
                        <div> {props.user.friends}</div>
                    </div>
                    <div className={style.infoItem}>
                        <div> Подписчики</div>
                        <div> {props.user.subscribers}</div>
                    </div>
                    <div>
                        <div className={style.infoItem}>
                            <div> Фотографии</div>
                            <div> {props.user.photos}</div>
                        </div>
                    </div>
                    <div>
                        <div className={style.infoItem}>
                            <div> Отметки</div>
                            <div> {props.user.marks}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;