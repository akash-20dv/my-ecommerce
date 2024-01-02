import "./Cart.scss";
import {MdClose} from 'react-icons/md';
import {BsCartX} from 'react-icons/bs';
import CartItem from "./CartItem/CartItem";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";

const Cart = ({ setShowCart }) => {
    const { cartItems , cartSubTotal } = useContext(Context)
    const stripePayment = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY_STRIPE)
    const checkedOut = async () =>{
      try { const stripe = await stripePayment
        const res = await makePaymentRequest.post('/api/orders', {
           products: cartItems,
        });
        await stripe.redirectToCheckout({
            sessionId:  res.data.stripeSession.id
        })}
        catch(error){
           alert(error)
        }
    }
    return (
    <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-head">
                    <p>Shopping Cart</p>
                    <span onClick={()=>setShowCart(false)}>
                    <MdClose />
                    </span>
                </div>
             { !cartItems?.length &&  <div className="empty-cart">
                    <BsCartX/>
                    <span>No product is in the cart</span>
                    <button className="return-cta">RETURN TO SHOP</button>
                </div>}
             {  !!cartItems?.length && <> <CartItem/>
               <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">Subtotal: </span>
                        <span className="text total">{cartSubTotal}</span>
                    </div>
                    <div className="button">
                        <button className="checkout-cta" onClick={checkedOut}>
                            Checkout
                        </button>
                    </div>
               </div> </>}
            </div>
    </div>
)
}

export default Cart;
