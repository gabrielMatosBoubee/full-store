import React, { useEffect, useState } from 'react';
import api from '../services/api';
import style from '../styles/Product.module.css'
import Layout from '../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { addCartAction } from '../redux/actions/cart';
import { MdDeleteForever } from "react-icons/md"
import { FaEdit } from 'react-icons/fa'
import { TiDelete } from 'react-icons/ti'
import Loading from '../components/Loading';
import ProductInputs from '../components/ProductInputs';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Product({match: { params: { id } }}) {

  const history = useHistory()

    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isOpenEdit, setIsOpenEdit] = useState(false)
    const [isOpenEditDelete, setIsOpenDelete] = useState(false)

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
        sessionStorage.setItem("isAdmin", true)
        setIsAdmin(JSON.parse(sessionStorage.getItem("isAdmin")))
        setProduct(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }

    const deleteProduct = async () => {
      try {
        await api.delete(`/products/${id}`)
        history.push("/products")
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
          {isAdmin ? <span className={style.admin}>
            <FaEdit className={style.icons} id={style.update} onClick={() => setIsOpenEdit(true)} /> 
            {isOpenEdit && <section className={style.popupWrapper}>
              <div className={style.popup}>
                <TiDelete className={style.closeIcon} onClick={() => setIsOpenEdit(false)} />
                <ProductInputs data={ product } id={id} />
              </div>
            </section>
            }
            <h1>{product.productName}</h1>
            <MdDeleteForever className={style.icons} id={style.delete} onClick={() => setIsOpenDelete(true)}/>
            { isOpenEditDelete &&
            <section className={style.popupWrapper}>
              <div className={style.popup}>
                <TiDelete className={style.closeIcon} onClick={() => setIsOpenDelete(false)} />
                <h2>Are you sure you want to delete this item?</h2>
                <div className={style.buttons}>
                <button 
                    className={style.cancel} 
                    onClick={() => setIsOpenDelete(false)}>
                        Cancel
                </button>
                <button 
                    className={style.delete} 
                    onClick={deleteProduct}
                >
                        Delete
                </button>
            </div>
              </div>
            </section>
            }
          </span> : <h1>{product.productName}</h1> 
          }
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