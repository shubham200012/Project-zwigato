import React, {useRef} from 'react'
import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import '../../styles/header.css'
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'

const nav__links =[
  {
    display:'Home',
    path: '/home'
  },
  {
    display:'Foods',
    path: '/foods'
  },
  {
    display:'Cart',
    path: '/cart'
  }
  // {
  //   display:'Contact',
  //   path: '/contact'
  // }
]

const Header = () => {
  const menuRef = useRef(null);
  
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Zwigato</h5>
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {
                nav__links.map((item,index)=>(
                  <Link to={item.path} key={index}>{item.display}</Link>
                ))
              }
            </div>
          </div>

          <div className="nav__right d-flex align-items-center gap-3">
            <span className="cart__icon" onClick={toggleCart}>
              <i className="ri-shopping-basket-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            <span className="user">
              <Link to='/login'><i className='ri-user-line'></i></Link>
            </span>
            <span className='mobile__menu' onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
