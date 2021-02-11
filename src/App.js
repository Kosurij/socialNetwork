import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';


function App() {
  return (
    <div className='app__wrapper'>
      <Header />
      <div className="wrapper_background">
        <Nav />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
