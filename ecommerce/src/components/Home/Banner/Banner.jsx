import "./Banner.scss";
import  bannerImg  from "../../../assets/banner-img.png";
export default function Banner() {
    return ( 
        <div className="banner-wrapper">
            <div className="banner-image-home">
               
                <div className="left-text">
                    <h1>Headphones</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis tempore magni odio suscipit natus at repellat sed laudantium nesciunt quas aperiam laboriosam necessitatibus nihil officia ipsum non, ducimus saepe rem.</p>
                    <div className="buttons-home-banner">
                <a href="#">Explore</a>
                <a href="#">Know More</a>
            </div>
                </div>
                <img src={bannerImg} alt="Banner Image" />
              
            </div>
           
        </div>
  )
};


