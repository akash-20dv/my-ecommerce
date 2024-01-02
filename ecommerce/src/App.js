import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './components/Category/Category.jsx'
import SingleProduct from './components/SingleProduct/SingleProduct.jsx'
import Home from './components/Home/Home.jsx'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Newsletter from './components/Footer/Newsletter/Newsletter';
import AppContext from './utils/context.js'

export default function App() {
  return (
    <BrowserRouter>
        <AppContext>
            <Header />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/category/:id' element={<Category />}/>
                {/* <Route path='/category' element={<Category />}/> */}
                <Route path='/product/:id' element={<SingleProduct />}/>
            
            </Routes>
            <Newsletter />
            <Footer />
        </AppContext>
    </BrowserRouter>
  )
}

