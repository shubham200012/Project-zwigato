import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/product-card.css'

import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';

const ProductCard = (props) => {
  const{productid, title, image01, price} = props.item;
  const dispatch = useDispatch()

  const addToCart = () =>{
    dispatch(cartActions.addItem({
      productid,
      title,
      image01,
      price
    }))
  }

  return (
    <div className='product__item'>
      <div className="product__img">
        <img src={image01} alt="product-img" className='w-50' />
      </div>
      <div className="product__content">
        <h5>
            <Link to={`/foods/${productid}`}>{title}</Link>
        </h5>
        <div className='d-flex align-items-cemter justify-content-between'>
            <span className="product__price">Rs.{price}</span>
            <button className="addTOCart__btn" onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
