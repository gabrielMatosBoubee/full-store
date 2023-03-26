import React from 'react';
import { useSelector } from 'react-redux';
import {FaShoppingCart} from 'react-icons/fa'
import style from '../styles/Header.module.css'

function Header() {
    
    const { quantity } = useSelector((globalState) => globalState.cart)

    return (
        <header className={style.Header}>
            <div className={style.cart}>
                <FaShoppingCart className={style.cartIcon}/>
                <p className={style.quantity}>{quantity}</p>
            </div>
        </header>
    );
}

export default Header;