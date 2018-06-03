import React, { Component } from 'react';

class MHomeButton extends Component {
    render() {
        // console.log(this.props)
        return (
            <div 
            className="m-btn-wrap"
            onClick={this.props.onMenuChange}>
                <div className="m-btn-container">
                    <div className="m-btn-home">
                        BloGo
                    </div>
                    <div className="arrow">
                        <div className="arrow-opt">
                            <div 
                            className="arrow-anim"
                            >
                                <svg 
                                viewBox="0 0 18 18" 
                                role="presentation" 
                                aria-hidden="true" 
                                focusable="false">
                                    <path 
                                    d="m16.29 4.3a1 
                                    1 0 1 1 1.41 1.42l-8 
                                    8a1 1 0 0 1 -1.41 
                                    0l-8-8a1 1 0 1 1 
                                    1.41-1.42l7.29 7.29z" 
                                    fillRule="evenodd">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MHomeButton;