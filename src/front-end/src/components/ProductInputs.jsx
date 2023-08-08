import React, { useEffect, useReducer, useState } from 'react';
import style from '../styles/Product.module.css'
import api from '../services/api';

function ProductInputs({ data, id }) {

  const [categoriesAPI, setCategoriesAPI] = useState([])

  const componentDidMount = async () => {

    const categoriesIds = data.categories.map(({id}) => id)

    dispatchUptProduct({type: "inicialState", value: { 
      productName: data.productName,
      image: data.image,
      productDescription: data.productDescription,
      categories: categoriesIds,
      productPrice: data.productPrice,
      discountPercent: data.discountPercent
    }})

      const { data: { categories } } = await api.get("/category")

      setCategoriesAPI(categories)
  }

    useEffect(() => componentDidMount, [])

    const reducer = (state, action) => {
        switch (action.type) {
          case "inicialState" : {
            return {...action.value}
          }
          case "productName" :
            return { ...state, productName: action.value }
          case "image" :
            return { ...state, image: action.value }
          case "productDescription" :
            return { ...state, productDescription: action.value }
          case "productPrice" :
            return { ...state, productPrice: action.value }  
          case "categories" :
            return { ...state, categories: action.value }  
          default : 
            return { ...state }
        }
      }

    const [uptProduct, dispatchUptProduct] = useReducer(reducer, {
        productName: "",
        image: "",
        productDescription: "",
        categories: [],
        productPrice: 0,
        discountPercent: 0
    })
      

      const submit = async () => {
          try {
              if (id) {
                  await api.put(`/products/${id}`, uptProduct)
              } else {
                  await api.post(`products/`, uptProduct)
              }
          } catch (error) {
              console.log(error.response)
          }
      }

        const onChangeReduce = ({ target }) => {
          const { name } = target
          let value = target.type === 'checkbox' ? target.checked : target.value;
          if(target.type === "checkbox") {
            const categoriesIds = uptProduct.categories;
            if(value)  {
              categoriesIds.push(Number(target.id)) 
              value = categoriesIds 
            } else {
              value = categoriesIds.filter((id) => id !== Number(target.id))
            }
          }
            dispatchUptProduct({ type: name, value })
        }

    return (
        <>
            <label htmlFor="Title" className={style.label} >
              Title
              <input type="text" onChange={onChangeReduce} name="productName" id="Title" className={style.input} value={uptProduct.productName} />
            </label>
                <label htmlFor="Image" className={style.label} >
                  Image
                  <input type="text" onChange={onChangeReduce} name="image" id="Image" className={style.input} value={uptProduct.image} />
                </label>
                <label htmlFor="Description" className={style.label} >
                  Description
                  <textarea name='productDescription' onChange={onChangeReduce} id='Description' maxLength="1125" className={style.textArea} value={uptProduct.productDescription} />
                </label>
                  Categories
                <section className={style.categories}>
                  { categoriesAPI.map(({id, category}) => (
                  <label htmlFor={id} key={id} className={style.category} >
                    <p>{category}</p>
                    {
                      uptProduct.categories.some((catId) => Number(catId) === Number(id))
                      ? <input type="checkbox" name="categories" id={id} onChange={onChangeReduce} className={style.input} checked /> :
                      <input type="checkbox" name="categories" id={id} onChange={onChangeReduce} className={style.input} />
                    }
                  </label>
                  )
                  ) }
                </section>
                <label htmlFor="Value" className={style.label} >
                  Value
                  <input name='productPrice' onChange={onChangeReduce} type="number" id="Value" className={style.input} value={uptProduct.productPrice} />
                </label>
                <button onClick={submit}>submit</button>
        </>
    );
}

export default ProductInputs;