import React,{Fragment, useEffect}from 'react'
import {CgMouse} from "react-icons/cg"
import "./Home.css"
import MetaData from '../layout/MetaData'
import Product from "./Product.js"
import {clearErrors, getProduct}from"../../actions/productAction.js";
import{useSelector,useDispatch}from"react-redux";
import Loader from '../layout/Loader/Loader.js'
import {useAlert} from 'react-alert'

const Home = () => {
  const alert=useAlert();
  const dispatch=useDispatch();
  const{loading,error,products,productsCount}=useSelector((state)=>state.products)
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {
        loading ?<Loader />:(<Fragment>
          <MetaData title="SHOPAMORE"/>
         <div className="banner">
            <p>Welcome to SHOPAMORE</p>
            <h1>Find amazing products below</h1>
            <a href="#container">
              <button>
                  Scroll<CgMouse/>
              </button>
            </a>
         </div>
         <h2 className="homeHeading">Featured Product</h2>
         <div className="container" id="container">
          {products &&products.map((product)=><Product product={product}/>)}
  
  
         </div>
      </Fragment>)
      }
    </Fragment>
  )
}

export default Home;