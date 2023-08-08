import React from 'react';
import { useSelector } from 'react-redux';
import {FaShoppingCart} from 'react-icons/fa'
import style from '../styles/Header.module.css'
import MenuHamburguer from './MenuHamburguer';
import MenuHamburguerContent from '../components/MenuHamburguerContent';

function Header() {
    
    const { quantity } = useSelector((globalState) => globalState.cart)
    const { isOpen } = useSelector((globalState) => globalState.menuHamburguer)
    
    return (
        <>
        <header className={style.Header}>
            <span className={style.content}>
                <MenuHamburguer />
                <h2 className={style.title}>FULL-STORE</h2>
                <div className={style.cart}>
                    <FaShoppingCart className={style.cartIcon}/>
                    <p className={style.quantity}>{quantity}</p>
                </div>
            </span>
        </header>
        { isOpen ? <MenuHamburguerContent /> : <></>}
        </>
    );
}

export default Header;