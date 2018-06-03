import React from 'react';

const CardInfo = () => {
    const param = document.location.href.split("?");
    const title = param[1].split('=')[1];
    // console.log(this.props.location.query);
    return (
        <div className="helper-left">
            <h3>{title}</h3>
            <button>정렬</button>
        </div>
    );
}

export default CardInfo;