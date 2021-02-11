import './Nav.css'
import Profile from '../Profile/Profile'
import nav_user from './nav_images/user.svg'
import nav_message from './nav_images/message.svg'
import nav_news from './nav_images/news.svg'

const Nav = () => {
    return (
        <div className="container">
            <div className="nav__wrapper">
                <nav className='nav'>
                    <div>
                        <a href="#" className='nav__item'>
                            <div className="item__img">
                                <img src={nav_user} alt="" />
                            </div>
                            <div className="item__text">Моя страница</div>
                        </a>
                    </div>
                    <div>
                        <a href="#" className='nav__item'>
                            <div className="item__img">
                                <img src={nav_message} alt="" />
                            </div>
                            <div className="item__text">Мои сообщения</div>
                        </a>
                    </div>
                    <div>
                        <a href="#" className='nav__item'>
                            <div className="item__img">
                                <img src={nav_news} alt="" />
                            </div>
                            <div className="item__text"> Новости </div>
                        </a>
                    </div>
                </nav>
                <Profile />
            </div>
        </div>
    )
}

export default Nav;