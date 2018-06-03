import React, { Component } from 'react'

class Comments extends Component {
    comment() {
        return (
            <div className="comWrap">
                <div className="imgArea">
                    <div id="imgSize">
                        <img  src="/images/userjiae/jiae.jpeg" alt="jiae" />
                    </div>
                </div>
                <div className="commArea">
                    <textarea placeholder='comment' />
                </div>
            </div>
        );
    }

    recomment() {
        return (
            <div className="recomWrap">
                
            </div>
        );
    }

    render() {
        return (
            <div className="comments">
                <div className="comm">
                    {this.comment()}
                </div>
            </div>
        )
    }
}

export default Comments;