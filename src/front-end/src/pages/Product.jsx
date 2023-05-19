import React, { useEffect, useState } from 'react';
import api from '../services/api';
import style from '../styles/Product.module.css'
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { addCartAction } from '../redux/actions/cart';
import Loading from '../components/Loading';

function Product({match: { params: { id } }}) {

    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const dispatch = useDispatch();
    const { quantity, productsCart } = useSelector((globalState) => globalState.cart);

    const addProduct = ({productName, id, productPrice, image}) => {
      let product = productsCart.find((product) => product.id === id);
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
        const { data } = await api.get(`/products/${id}`)
        setProduct(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => componentDidMount, [])

    const erroImage = 'https://www.quitandadelivery.com/images/geral/sem_foto_big.jpg';

    return (
        <Layout>
          { isLoading ? <Loading /> :
          <>
          <h1>{product.productName}</h1>
          <img className={style.img} src={product.image ? product.image : erroImage} 
           alt={product.productName}/> 
          <div className={style.Container}>
            <h2 className={style.title}>Description:</h2>
            <p className={style.description}>{product.productDescription}</p>
          </div>
          <div className={style.Container}>
          <h2 className={style.title}>Categories: </h2>
          {product?.categories?.map(({category, id}) => <p key={id}>{category}</p>)}
          </div>
          <div className={style.Container}>
          <h2 className={style.title}>Buy {product.productName}</h2>
            <div id={style.buy}>
              <p className={style.R}>R$
                  <span className={style.price}>{String(product.productPrice).replace('.', ',')}</span>
              </p>
              <button 
                  className={style.button} 
                  type='button' 
                  onClick={() => addProduct({...product})}>
                    Add to cart
                </button>
            </div>
          </div>
          </>
          }
        </Layout>
    );
}

export default Product;