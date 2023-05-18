import React from 'react';
import AllProducts from '../components/AllProducts';
import Header from '../components/Header';
import MenuHamburguerContent from '../components/MenuHamburguerContent';
import { useSelector } from 'react-redux';


function Products() {

    const { isOpen } = useSelector((globalState) => globalState.menuHamburguer)

    return (
        <div>
           <Header />
           { isOpen ? <MenuHamburguerContent /> : <></>} 
           <AllProducts />
        </div>
    );
}

export default Products;