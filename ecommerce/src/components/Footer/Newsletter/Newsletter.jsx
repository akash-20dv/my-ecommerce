import React from "react";
import "./Newsletter.scss";
import { FaLinkedinIn , FaFacebook ,FaInstagram} from "react-icons/fa";
import {RiTwitterXFill} from "react-icons/ri"
import NewsletterImg from "../../../assets/newsletter-bg.jpeg";
const Newsletter = () => {
    return (
    <div className="newsletter-wrapper">
        <img src={NewsletterImg} alt="newsletter" />
        <div className="newsletter-content">
            <p className="newsletter-heading">Newsletter</p>
            <p className="para-newsletter">
                   Signup For Latest Updates And Offers
            </p>
            <div className="input-newsletter">
                <input type="text" placeholder="Email address"/>
                <button>Subscribe</button>
            </div>
            <div className="icons-list">
                <FaLinkedinIn/>
                <FaFacebook/>
                <RiTwitterXFill/>
                <FaInstagram/>
            </div>
        </div>
    </div>
)};

export default Newsletter;
