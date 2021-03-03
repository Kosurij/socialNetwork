import './Profile.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile__block profile__block--small'>
                <div className='profile__photo'>
                    <img src="https://placehold.it/200/333" alt=""/>
                </div>
            </div>
            <div className='profile__block profile__block--medium'>
                <div className='profile__about'>
                    <div className="about__data">
                        <div className='data_name'> Yuri Kosenko</div>
                        <div className='data_status'> изменить статус</div>
                    </div>
                    <div className="about__data">
                        <div className='data__item'>
                            <div className='data__item_label'> Дата рождения:</div>
                            <div className='data__item_labeled'> 02.05.1996</div>
                        </div>
                        <div className='data__item'>
                            <div className='data__item_label'> Город:</div>
                            <div className='data__item_labeled'> Москва</div>
                        </div>
                        <div className='data__item'>
                            <div className='data__item_label'> Образование:</div>
                            <div className='data__item_labeled'> МГУ</div>
                        </div>
                    </div>
                    <div className="about__data">
                        <div className='about__data_info'>
                            <div className='info__item'>
                                <div> Друзья</div>
                                <div> 300</div>
                            </div>
                            <div className='info__item'>
                                <div> Подписчики</div>
                                <div> 127</div>
                            </div>
                            <div>
                                <div className='info__item'>
                                    <div> Фотографии</div>
                                    <div> 54</div>
                                </div>
                            </div>
                            <div>
                                <div className='info__item'>
                                    <div> Отметки</div>
                                    <div> 12</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='profile__block profile__block--small profile__block--height-sm'>
                <div className='profile__memories'>
                    <div className='profile__memories_item'> Воспоминания</div>
                    <div className='profile__memories_item'> Воспоминания</div>
                    <div className='profile__memories_item'> Воспоминания</div>
                    <div className='profile__memories_item'> Воспоминания</div>
                </div>
            </div>
            <div className='profile__block profile__block--medium'>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;