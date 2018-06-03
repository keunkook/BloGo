import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCategories } from '../actions/index';
import '../style/categories_list.css';

class CategoriesList extends Component {
    componentWillMount() {
        this.props.fetchCategories();
    }

    renderCategory(category) {
        return (
            <Link 
            className="item"
            key={category.idx}
            to={`/cardsearch?category=${category.title}`}>
                <div className="item-content">
                    <h2>{category.title}</h2>
                    <div>{`Favorite : ${category.favorite}`}</div>
                    <div>{`Cards : ${category.cards}`}</div>
                </div>
                <img width="370" height="280" src="images/testimg/ruready.jpg" alt="CT-item" />
            </Link>
        );
    }

    render() {
        const { categories } = this.props.posts;

        if (!categories) {
            return <div> Loading ... </div>;
        }
        
        return (
            <div className="">
                <div className="CTWrap">
                    <div className="grid">
                        <div className="cfx">
                            {categories.map(this.renderCategory)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, { fetchCategories })(CategoriesList);