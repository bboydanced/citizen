import React from 'react'
import Bars from './svg/bars-solid.svg';
import Close from './svg/window-close-solid.svg';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <header>
                <div className="logo">
                    <h1><Link to="/products">Citizen</Link></h1>
                </div>
                <ul className="">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Sign in / Sign up</Link></li>
                    <li className="menu">
                        <img src={Close} alt="" width="20"/>
                    </li>
                </ul>
                <div className="menu">
                    <img src={Bars} alt="menu" width="20"/>
                </div>
            </header>
        </div>
    )
}
