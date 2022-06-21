import React from 'react';
import './index.css';
import App from './App';
import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import Shop from "./components/Shop";

const rootElement= document.getElementById('root');

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="" element={<Main/>}/>
                <Route path="shop" element={<Shop/>} />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
