import './Nav.css';
import nav_user from './nav_images/user.svg';
import nav_message from './nav_images/message.svg';
import nav_news from './nav_images/news.svg';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';


const Nav = () => {
    return (
        <div className="nav__wrapper">
            <nav className='nav'>
                <div>
                    <NavLink to="/profile" className='nav__item'>
                        <div className="item__img">
                            <img src={nav_user} alt=""/>
                        </div>
                        <div className="item__text">Моя страница</div>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/dialogs" className='nav__item'>
                        <div className="item__img">
                            <img src={nav_message} alt=""/>
                        </div>
                        <div className="item__text">Мои сообщения</div>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/news" className='nav__item'>
                        <div className="item__img">
                            <img src={nav_news} alt=""/>
                        </div>
                        <div className="item__text"> Новости</div>
                    </NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Nav;