import React, { useEffect } from 'react';
import style from '../styles/MenuHamburguer.module.css'
import { useDispatch } from 'react-redux';
import { menuAction } from '../redux/actions/menuHamburguer';

function MenuHamburguer() {

  
  const dispatch = useDispatch() 
  
  
  const menu = ({ target }) => {
    dispatch(menuAction(target.checked))
  }

  useEffect(() => { dispatch(menuAction(false)) }, [])

    return (
        <div>
            <input id='menu' type='checkbox' className={style.menu} onChange={menu} />
              <label htmlFor="menu">
            <div className={style.hamburgerLines}>
                <span className={`${style.line} ${style.line1}`}></span>
                <span className={`${style.line} ${style.line2}`}></span>
                <span className={`${style.line} ${style.line3}`}></span>
            </div>
              </label>
        </div>
    );
}

export default MenuHamburguer;