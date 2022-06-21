import React from 'react';

function Item(props) {
    let url = props.url;
    return (
        <div className="item">
           <img className={"item-i mage"} src={url}/>
        </div>
    );
}

export default Item;