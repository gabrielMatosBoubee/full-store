import React from 'react';
import { useSelector } from 'react-redux';
import {FaShoppingCart} from 'react-icons/fa'
import style from '../styles/Header.module.css'
import MenuHamburguer from './MenuHamburguer';

function Header() {
    
    const { quantity } = useSelector((globalState) => globalState.cart)

    return (
        <header className={style.Header}>
            <spam className={style.content}>
                <MenuHamburguer />
                <h2 className={style.title}>FULL-STORE</h2>
                <div className={style.cart}>
                    <FaShoppingCart className={style.cartIcon}/>
                    <p className={style.quantity}>{quantity}</p>
                </div>
            </spam>
        </header>
    );
}

export default Header;