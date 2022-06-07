import React from "react";

export default function Header() {
    return (
        <header>
            <div>
                <del className={"logo"}>PEACEMINUSONE</del>
                <span className={"box"}>
                    <a href={"#"} className={"menu-el"}> SHOP</a>
                    <a href={"#"} className={"menu-el"}> ARCHIVE</a>
                    <a href={"#"} className={"menu-el"}> EXHIBITION</a>
                    <a href={"#"} className={"menu-el"}> NOTICE</a>
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
