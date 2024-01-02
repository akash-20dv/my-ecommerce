import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.scss";
import {  FaMinus, FaPlus, FaShoppingBasket } from "react-icons/fa";
import  Earbuds  from "../../assets/products/earbuds-prod-1.webp";
import RelatedProducts from './RelatedProducts/RelatedProducts'
import { Context } from "../../utils/context";
import useFetch from "../../hooks/useFetch";
const SingleProduct = () => {
    const [quantity,setQuantity] = useState(1);
    const { handleAddToCart } = useContext(Context)
    const { id } = useParams();
    const { data } = useFetch(`/api/products?populate=*&[filters][id]=${id}`)

    if(!data) return;
    const currentProduct = data?.data[0]?.attributes ;
    
    const increment = () =>{
        setQuantity((prevState=>prevState + 1))
        
    }
    const decrement = () =>{
        setQuantity((prevState)=> {
            if(prevState===1) return 1;
            return prevState - 1;
        })
     }
    
    return (<>
    <div className="product-page-wrapper">
        <div className="left-side">
            <img src={process.env.REACT_APP_DEV_URL + currentProduct.image.data[0].attributes.url} alt="Earbuuds" />
        </div>
        <div className="right-side">
            <div className="product-content">
                <div className="title">{data ? data.data[0].attributes?.title : "title loading..."}</div>
                <div className="price">Rs {currentProduct.price}/-</div>
                <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corrupti nam neque autem exercitationem impedit illo quos ex vitae delectus! Earum excepturi repellendus, animi odit totam provident ipsum nobis recusandae. </div>
                <div className="count-button">
                <FaMinus onClick={decrement}/> <span> {quantity} </span> <  FaPlus onClick={increment}/>
                </div>
                <div onClick={
                    ()=>{ handleAddToCart(data?.data[0], quantity);
                        setQuantity(1)
                }} 
                className="cartbutton">
                    Add To Cart <FaShoppingBasket/>
                </div>
                <div className="category-name">
                    Category: <span>{currentProduct.categories.data[0].attributes.title}</span>
                </div>
            </div>
        </div>
    </div>
    <div className="related-products-div">
        <RelatedProducts productId = {id} 
            categoryId={currentProduct.categories.data[0].id}
        />
    </div>
    </>
    )
};

export default SingleProduct;
