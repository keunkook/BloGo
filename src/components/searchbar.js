import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchItems } from '../actions/index';


class SearchBar extends Component {
    constructor (props) {
        super(props)

        this.state = { term: '' }
    }

    onInputChange({ target }) {
        this.setState({ term: target.value });
    }

    onSubmit(event) {
        event.preventDefault()

        if (!this.state.term) {
            return;
        }

        this.props.searchItems(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <div className="formWrap">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="search-input-holder">
                        <input 
                        type="text"
                        className='form-inp search-input'
                        placeholder='검색어를 입력해 주세요.'
                        value={this.state.term} 
                        onChange={this.onInputChange.bind(this)} />
                        {/* <button type='submit'>Submit</button> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, { searchItems })(SearchBar);