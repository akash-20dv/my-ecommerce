import "./Category.scss";
import CatImage from '../../../assets/category/cat-1.jpg'
import { useNavigate } from "react-router-dom";
const Category = ({ categories }) => {
  const navigate =  useNavigate()
    return (
    <div className="category-wrapper">
        <div className="category-heading">Categories</div>
        <div className="categories">
        {categories && categories?.data?.map((item)=>(
              <div className="category-box" key={item.id} onClick={()=> navigate(`/category/${item.id}`)}>
              <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} className="category-box-inner" alt="category"/>
              </div>
        ))
          }
            
        </div>
    </div>
    )
};

export default Category;
