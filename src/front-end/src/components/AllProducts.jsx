import axios from 'axios';
import React, { useEffect, useState } from 'react';
import style from '../styles/AllProducts.module.css'

function AllProducts() {

    const [products, setProducts] = useState([])

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
           <div className={style.product} key={id} id={id}>
           <h3>{productName}</h3>
           <img src={image ? image : 'https://www.quitandadelivery.com/images/geral/sem_foto_big.jpg'} 
           className={style.image} alt={productName}/>
           <p className={style.R}>R$
              <spam className={style.price}>{String(productPrice).replace('.', ',')}</spam>
           </p>
           <button className={style.button} type='button'>Add to cart</button>
           </div>
           )
           )}    
        </div>
    );
}

export default AllProducts;