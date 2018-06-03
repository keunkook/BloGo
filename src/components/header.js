import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import windowSize from 'react-window-size';

import SignUp from './signup';
import SignIn from './signin';
import ForgotPassword from './forgot_password';
import SearchBar from './searchbar';
import MHomeButton from './m_home_button';
import HomeMenu from './home_menu';

import '../style/header.css';
import '../style/signup-common.css';

const SIGN_IN = 'SIGN_IN';
const SIGN_UP = 'SIGN_UP';
const FORGOT_PASSWORD = 'FORGOT_PASSWORD';


class Header extends Component {
    constructor() {
        super();

        this.state = {
            homeIsOpen: false,
            modalIsOpen: false,
            currentModal: ''
        }

        this.menuChange = this.menuChange.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        this.onForgotPassword = this.onForgotPassword.bind(this);
        this.closeModal = this.closeModal.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
    }

    ModalOpen = () => {
        switch(this.state.currentModal) {
            case SIGN_IN:
            return <SignIn
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal} 
            onSignUp={this.onSignUp}
            onForgotPassword={this.onForgotPassword} />
            case SIGN_UP:
            return <SignUp
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            onSignIn={this.onSignIn} />
            case FORGOT_PASSWORD:
            return <ForgotPassword
            modalIsOpen={this.state.modalIsOpen}
            closeModal={this.closeModal}
            onSignIn={this.onSignIn} />
            default:
            return null;
        }
    }

    menuChange() {
        this.setState({
            homeIsOpen: !this.state.homeIsOpen
        });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    onSignIn() {
        this.setState({
            modalIsOpen: true,
            currentModal: SIGN_IN
        });
    }

    onSignUp() {
        this.setState({
            modalIsOpen: true,
            currentModal: SIGN_UP
        });
    }

    onForgotPassword() {
        this.setState({
            modalIsOpen: true,
            currentModal: FORGOT_PASSWORD
        });
    }

    render() {
        const param = document.location.href.split("?");
        const urlPath = param[0].split('3000');
        return (
            <div className="HDWrap">
                <div className="topbar">
                    <div className="home">
                        {this.props.windowWidth > 580 ? 
                        <Link to='/' onClick={() => window.location.reload()}>
                            <div className="btn-home">
                                BloGo
                            </div>
                        </Link> : 
                        <MHomeButton onMenuChange={this.menuChange} />}
                    </div>
                    <div className="form-control">
                        {urlPath[1] !== '/'&& <SearchBar />}
                    </div>
                    {this.props.windowWidth > 580 && 
                    <div className="signWrap">
                        <div className="btn-sign" onClick={this.onSignIn}>
                            Sign In
                        </div>
                        <div className="btn-sign" onClick={this.onSignUp}>
                            Sign Up
                        </div>
                        
                        {this.ModalOpen()}

                        <div id="imgSize">
                            <img src="/images/userjiae/jiae.jpeg" alt="jiae" />
                        </div>
                    </div>}
                </div>
                {this.state.homeIsOpen && <HomeMenu />}
            </div>
        );
    }
}

export default windowSize(Header);

// .replace(/\s/gi, "");

// * : 뒤에 이어지는 문자까지 모두 선택
// d : 숫자를 의미함
// s : 공백을 의미함
// ^ : 시작하는 점을 의미함
// $ : 끝나는 점을 의미함
// {/* <Link to={`/${info.toLowerCase().replace(/\s/gi, "")}`}>{info}</Link> */}


// import React from 'react';
// import {Link} from 'react-router-dom';

// const Header = () => (
//   <header>
//     <nav>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/contact">Contact</Link></li>
//       <li><Link to="/login">Login</Link></li>
//     </nav>
//   </header>
// );

// const AuthHeader = ({ isLoggedIn }) => {
//   if (isLoggedIn) {
//     return (<Header />);
//   }
//   return (<div></div>);
// }

// export default AuthHeader;

