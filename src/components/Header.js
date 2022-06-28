import React from "react";

export default function Header() {
    return (
        <header>
            <div>
                <del className={"logo"}><a href="/">PEACEMINUSONE</a></del>
                <span className={"box"}>
                    <a href={"/shop"} className={"menu-el"}> SHOP</a>
                    <a href={"#"} className={"menu-el"}> ARCHIVE</a>
                    <a href={"#"} className={"menu-el"}> EXHIBITION</a>
                    <a href={"#"} className={"menu-el"}> NOTICE</a>
                    <a href={"twitch"}>TWITCH</a>
                </span>
            </div>
            <div></div>
            <span>
                <a className={"box"} href={"#"}> ACCOUNT</a>
                <a className={"box"} href={"#"} className={"menu-el"}> CART(0)</a>
                <a id={"country"} href={"#"} > KR</a>
            </span>
        </header>
    )
}
