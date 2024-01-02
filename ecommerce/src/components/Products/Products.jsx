import React from "react";
import "./Products.scss";
import  Product  from "../Products/Product/Product";
import { useNavigate } from "react-router-dom";
const Products = ({ innerPage ,headingText , products }) => {
    return  ( 
    <div className="popular-products-div">
     {!innerPage && <div className="products-section-heading">
               {headingText}
        </div>}
        <div className="products" >
            { products?.data?.map((item)=>(

                <Product  key={item.id} id={item.id} title={item.attributes.title} image={process.env.REACT_APP_DEV_URL + item.attributes.image.data[0].attributes.url} price={item.attributes.price}/>
                ))
            }
        </div>
    </div>
        )
   
};

export default Products;
