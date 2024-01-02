import React, { useEffect , useContext} from "react";
import Banner from "./Banner/Banner";
import "./Home.scss";
import Products from "../Products/Products";
import Category from "./Category/Category";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const Home = () => {
   
    const {products, setProducts ,categories, setCategories} = useContext(Context)
    useEffect(()=>{
        getCategories()
        getProducts()
    },[])
    const getCategories = () =>{
        fetchDataFromApi("/api/categories?populate=*").then((res)=> {
            // console.log( res) 
            setCategories(res)
        })
          
    }
    const getProducts = () =>{
        fetchDataFromApi("/api/products?populate=*").then((res)=> {
            // console.log( res)
            setProducts(res)
        })
          
    }
    return <div>
        <Banner/>
        <Category categories={categories}/>
        <Products products={products} headingText= "Popular Products"/>
    </div>;
};

export default Home;
