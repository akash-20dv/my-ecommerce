import "./Product.scss";
import Headphone from '../../../assets/products/headphone-prod-1.webp';
import { FaRupeeSign } from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
const Product = ({title , image , price , id }) => {
    const navigate = useNavigate()
   
    return (
        <div className="solo-product-wrapper" onClick={()=>navigate('/product/' + id)}>
            <img src={image} alt="" className="product-thumbnail" />
            <p className="product-title-one">{title}</p>
            <p className="price-product-one"><span> <FaRupeeSign/> </span>{price}/-</p>
        </div>
    )
};

export default Product;
