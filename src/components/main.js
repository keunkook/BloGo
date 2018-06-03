import React from 'react';

import SearchBar from './searchbar';
import Categories from './categories_list';

import '../style/main.css';


// const LOCALHOST;

const Main = () => {
    return (
        <div className="MainWrap">
            <div className="imgWrap">
                <div className="background-overlay" />
                <img
                className="background"
                src="/images/testimg/main-lovelyz.jpg"
                alt="lovelyz" />
                <div className="front">
                    <div className="wrap">
                        <div className="title-box">
                            <div className="bolder">
                                <h1>lovelyz & lovlinus</h1>
                            </div>
                        </div>
                        <div className="main-Searchbar">
                            <SearchBar />
                        </div>
                    </div>
                </div>
            </div>
            <Categories />
        </div>
    );
}
export default Main;