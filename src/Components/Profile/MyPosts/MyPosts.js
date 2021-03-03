import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={style.posts}>
            <div className={style.create}>
                <form action="">
                    <input type="text" className={style.input} placeholder='Что у вас нового?' />
                    <button className={style.button}> Опубликовать </button>
                </form>
            </div>
            <Post message='Hello' />
            <Post message='How are you?' />
            <Post message='Bye' />
        </div>
    )
}

export default MyPosts;