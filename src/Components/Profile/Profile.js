import './Profile.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Avatar from "./Avatar/Avatar";
import Memories from "./Memories/Memories";

const Profile = () => {
    return (
        <div className='profile'>
            <div className='profile__block profile__block--small'>
                <Avatar user={{
                    src: 'https://placehold.it/200/333',
                }}/>
            </div>
            <div className='profile__block profile__block--medium'>
                <ProfileInfo user={
                    {
                        name: 'Yuri Kosenko',
                        date: '02.05.1996',
                        city: 'Москва',
                        education: 'МГУ',
                        friends: '300',
                        subscribers: 127,
                        photos: 54,
                        marks: 12
                    }
                }/>
            </div>
            <div className='profile__block profile__block--small profile__block--height-sm'>
                <Memories/>
            </div>
            <div className='profile__block profile__block--medium'>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;