import React from 'react';
import { Link } from 'react-router-dom';

import CardInfo from './card_info';
import CardsLists from './cards_lists';

import '../style/cards.css';

const Cards = () =>{
    return (
        <div className="CardsWrap">
            <CardInfo />
            <CardsLists />
            <div className="createNew">
                { "authtication" && <Link className="helper-right" to='/new' >New Card</Link> }
            </div>
        </div>
    );
}

export default Cards;
