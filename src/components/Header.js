import React, { useState } from 'react'
import Bars from './svg/bars-solid.svg';
import Close from './svg/window-close-solid.svg';
import {Link} from 'react-router-dom';
// import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export default function Header() {
    const [menu, setMenu] = useState(false);

    const styleMenu = {
        left : menu ? 0 : "-100%"
    }
    return (
        <div>
            <header>
                <div className="logo">
                    <h1><Link to="/products">Citizen</Link></h1>
                </div>
                <ul className="" style={styleMenu}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Sign in / Sign up</Link></li>
                    <li className="menu">
                        <img src={Close} alt="" color="red" width="35" onClick={() => setMenu(!menu)}/>
                    </li>
                </ul>
                <div className="menu">
                    <img src={Bars} alt="menu" width="30" onClick={() => setMenu(!menu)}/> 
                    {/* <MenuOpenIcon color="secondary" alt="menu" fontSize="large" onClick={() => setMenu(!menu)}/> */}
                </div>
                <div className="cart-icon">
                    <span className="quantity-shopping">0</span>
                    <Link to="/cart">
                        <ShoppingCartIcon fontSize="large" color="inherit"/>
                    </Link> 
                </div>
            </header>
            
        </div>
    )
}
