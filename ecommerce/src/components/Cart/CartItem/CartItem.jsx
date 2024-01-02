import "./CartItem.scss";
import {FaPlus , FaTrash, FaMinus} from 'react-icons/fa'
import CartProduct from '../../../assets/products/earbuds-prod-1.webp';
import { Context } from "../../../utils/context";
import { useContext } from "react";

const CartItem = () => {
    const {cartItems, handleAddToCart , handleRemoveCart , handleCartProductQuantity} = useContext(Context)
    console.log(cartItems)
    return(
        <>
        {cartItems.map((item)=>(

         <div className="product-section" key={item.id}>
                    <div className="leftside-img">
                        <img src={process.env.REACT_APP_DEV_URL+item.attributes.image.data[0].attributes.url} alt="" />
                    </div>
                    <div className="product-cart-details">
                        <p className="product-name">{item.attributes.title}</p>
                        <div className="buttons">
                            <div className="quantity">
                                <FaMinus onClick={()=> handleCartProductQuantity('dec' , item) }/> 
                                <span>{item.attributes.quantity}</span> 
                                <FaPlus onClick={()=>handleCartProductQuantity('inc' , item)}/>
                            </div> 
                            <span className="del-btn" onClick={()=>handleRemoveCart(item)}><FaTrash/> Delete</span>

                        </div>
                        <div className="price-purchase">
                            <div className="price">Rs {item.attributes.price * item.attributes.quantity}</div>
                            <div className="buynow">Buy Now </div>
                        </div>
                    </div>
                </div>
        ))}
        </>
        )
};

export default CartItem;
