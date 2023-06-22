import React from 'react'
import './App.css'
import Header from "./component/layout/Header/Header.js"
import Footer from "./component/layout/Footer/Footer.js"
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import webFont from "webfontloader"
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails.js"
function App() {
  React.useEffect(()=>{
    webFont.load({
      google:{
        families:["Roboto","Chilanka"]
      }
    })
  })
  return (
    <Router>  
      <Header/>
      <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/product/:id" Component={ProductDetails}/>
      </Routes>
      
      
      
      <Footer/>
    </Router>
  
  );
}

export default App;
