import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartAction } from '../redux/actions/cart';
import style from '../styles/AllProducts.module.css'

function AllProducts() {

    const [products, setProducts] = useState([])

    const dispatch = useDispatch();

    const { quantity, productsCart } = useSelector((globalState) => globalState.cart);

    const addProduct = ({productName, id, productPrice, image}) => {
      let product = productsCart.find((product) => product.id === id);
      console.log(productsCart)
      if (product) {
        product.quantity = product.quantity + 1;
        const result = productsCart.filter((productCart) => productCart.id !== id);
        result.push(product);
        const allQuantity = quantity + 1;
        return dispatch(addCartAction({productsCart: result, quantity: allQuantity}));
      }
        product = {productName, id, productPrice, image, quantity: 1}
        const result = productsCart;
        result.push(product);
        const allQuantity = quantity + 1;
        return dispatch(addCartAction({productsCart: result, quantity: allQuantity}));
    }

    const componentDidMount = async () => {
      try {
        const {data} = await axios.get('http://localhost:3001/products');
        setProducts(data)
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => componentDidMount, [])

    return (
        <div className={style.allProducts}>
         {products.map(({id, productName, productPrice, image}) => (
           <div className={style.product} key={id}>
           <h3>{productName}</h3>
           <img src={image ? image : 'https://www.quitandadelivery.com/images/geral/sem_foto_big.jpg'} 
           className={style.image} alt={productName}/>
           <p className={style.R}>R$
              <spam className={style.price}>{String(productPrice).replace('.', ',')}</spam>
           </p>
           <button 
              className={style.button} 
              type='button' 
              onClick={() => addProduct({productName, id, productPrice, image})}>
                Add to cart
            </button>
           </div>
           )
           )}    
        </div>
    );
}

export default AllProducts;