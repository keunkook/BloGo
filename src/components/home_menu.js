import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SignIn from './signin';
import SignUp from './signup';

import '../style/home_menu.css';

class HomeMenu extends Component {
    render() {
        return (
        <div className="home-menuWrap">
            <div className="home-menu">
                <ul className="home-index">
                    <li>
                        <Link to='/' onClick={() => window.location.reload()}>
                            <div className="btn-home">
                                BloGo
                            </div>
                        </Link>
                    </li>
                    <li>
                        <hr className="indexbar"></hr>
                    </li>
                    <li>
                        <SignIn />
                    </li>
                    <li>
                        <SignUp />
                    </li>
                </ul>
            </div>
        </div>
        )
    }
}

export default HomeMenu;