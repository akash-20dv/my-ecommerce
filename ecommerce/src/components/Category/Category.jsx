import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import "./Category.scss";
import useFetch from "../../hooks/useFetch";

const Category = () => {
const { id } = useParams() ;
const { data } = useFetch(
    `/api/products?populate=*&[filters][categories][id]=${id}`
)
console.log(data)
    return( 
    <div className="category-page-wrapper">
        <div className="catetogy-heading">
            {
                data?.data?.[0]?.attributes?.categories?.data?.[0]
                    ?.attributes?.title
            }
        </div>
        <Products innerPage={true} products={data}/>
    </div>
)};

export default Category;
