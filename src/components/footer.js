import React, { Component } from 'react';

import '../style/footer.css';

export default class Footer extends Component {
    render() {
        return (
            <div className="footer-wrap cfx">
                <div className="footer">
                    <div className="logo" />
                    <div className="footer-grid-container">
                        <div className="footer-grid-block">
                            <h3>Hi there!</h3>
                        </div>
                        <div className="footer-grid-block">
                            <h3>Footer</h3>
                        </div>
                        <div className="footer-grid-block">
                            <h3>BloGo</h3>
                        </div>
                        <div className="footer-grid-block">
                            <h3>ah-chu</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
