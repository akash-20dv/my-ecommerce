import React, { useState } from "react";
import "./Search.scss";
import {useNavigate} from 'react-router-dom';
import {MdClose} from 'react-icons/md';
import Product from '../../../assets/products/earbuds-prod-1.webp';
import useFetch  from '../../../hooks/useFetch';
const Search = ({ setShowSearch }) => {
    const[query , setQuery] = useState("")
    const navigate = useNavigate()
    const onChange = (e) =>{
        setQuery(e.target.value)
    }
    let { data } = useFetch(`/api/products?/populate=*&filters[title][$contains]=${query}`)
    if(!query.length){
        data = null ;
    }
    return (
            <div className="searchbar-products">
                <div className="input-box">
                    <input type="text"
                    autoFocus
                    placeholder="Search for products"
                    value={query}
                    onChange={onChange}
                    />
                    <MdClose className="close-svg" onClick={()=>setShowSearch(false)}/>
                </div>
                {data?.data?.map(item=>(

                <div className="product-box" 
                    onClick={() => {
                    navigate("/product/" + item.id);
                    setShowSearch(false)
                    }}
                    key={item.id}>
                    <img className="product-img" src={Product} alt="" />
                    <div className="product-details">
                        <div className="p-name">{item.attributes.title}</div>
                    </div>
                </div>
                ))}
              
            </div>
            )
};

export default Search;
