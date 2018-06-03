import React, { Component } from 'react';
import { connect } from 'react-redux';

import Comments from './comments';

import * as actions from '../actions';

class CardDetail extends Component {
    render() {
        const { card } = this.props.posts;
        return (
            <div className="CDwrap">
                <div className="card-detail">
                {/* img 넣을것인지? */}
                    <h2>{card.title}</h2>
                    <div><h6 className="date" >{card.date} {`조회수: 0`}</h6></div>
                    <div className="title-bottom" />
                    <div className="contents">
                        {card.contents}
                    </div>
                </div>

                <Comments />
            </div>
        )
    }
}

function mapStateToProps ({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, actions)(CardDetail);
