import React from 'react';
import style from '../styles/MenuHamburguerContente.module.css'
import {HiHome} from 'react-icons/hi'
import {MdDiscount} from 'react-icons/md'
import {TbCategory} from 'react-icons/tb'
import {BiSupport} from 'react-icons/bi'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MenuHamburguerContent() {
    
    const history = useHistory()

    return (
        <div className={style.content}>
            <span className={style.link} onClick={() => history.push('/products')}>
                <HiHome className={style.icons}/> Home
            </span>
            <span className={style.link} onClick={() => history.push('/sale-products')}>
                <MdDiscount className={style.icons} /> In sale
            </span>
            <span className={style.link} onClick={() => history.push('/categories')}>
                <TbCategory className={style.icons} /> Category
            </span>
            <a href='https://www.linkedin.com/in/gabriel-matos-boubee/' target='blank' style={{'text-decoration': "none"}}>
                <span className={style.link}><BiSupport className={style.icons} /> Enter in contact</span>
            </a>
        </div>
    );
}

export default MenuHamburguerContent;