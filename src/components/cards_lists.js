import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions';

class CardsLists extends Component {
    componentWillMount() {
        this.props.fetchCardsLists();
    }

    renderCards(card) {
        return (
            <div onClick={() => this.props.fetchCard(card.idx)} className="card" key={card.idx}>
                <Link to={`/detail/${card.idx}`}>
                    <h6 className="card-char">{card.title}</h6>
                </Link>
            </div>
        );
    } 

    render() {
        const { cards } = this.props.posts;
        
        if (!cards) {
            return <div> Loading ... </div>
        }

        return (
            // <div className="CLWrap">
                <div className="lists">
                    {cards.map(this.renderCards.bind(this))}
                </div>
            // </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, actions)(CardsLists);