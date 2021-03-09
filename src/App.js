import './App.css';
import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Nav from './Components/Nav/Nav';
import Profile from './Components/Profile/Profile';
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News";

import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
    return (
        <Router>
            <div className='wrapper_background'>
                <Header/>
                <div className='container flex'>
                    <Nav/>
                    <Route exact path='/' component={Profile}/>
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/news' component={News}/>
                </div>
            </div>
        </Router>
    );
}

export default App;