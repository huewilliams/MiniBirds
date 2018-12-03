import React from 'react';
import './CSS/Header.css';
import Home from './img/home-button.png'
import logo from './img/MiniBirds-Logo.png'

const Header = ({onTwit, logOut, onKeyPress}) => {
    return (
        <div className="main-header">
            <div className="home" onKeyPress={onKeyPress}>
                <img src={Home} alt="홈" className="home-img"></img>
                <div className="home-letter">홈</div>
            </div>
            <div className="main">
                <img src={logo} alt="로고" className="logo-img"></img>
            </div>
            <div className="header-right">
                <ul className="twit_box">
                    <li className="twit" onTwit={onTwit}>트윗하기</li>
                    <li className="twit" logOut={logOut}>로그아웃</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;