import React from 'react';
import Item from "./Item";

function Shop(props) {
    let images = [
        "https://cdn01.peaceminusone.com/data/item/PMOHT056BLFRKR/2_1.jpg",
        "https://cdn01.peaceminusone.com/data/item/PMOAC053NAKR/3_1.jpg",
        "https://cdn01.peaceminusone.com/data/item/PMOAC054MTFRKR/5_1.jpg",
        "https://cdn01.peaceminusone.com/data/item/PMOAC054PKFRKR/6_1.jpg"
    ];
    return (
        <div className="main container" >
            <Item url={images[0]}/>
            <Item url={images[1]}/>
            <Item url={images[2]}/>
            <Item url={images[3]}/>
            <Item url={null}/>
            <Item url={null}/>
        </div>
    );
}

export default Shop;