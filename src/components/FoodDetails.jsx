import { useLoaderData } from "react-router-dom";
import { addToCart, addWishList } from "../utils";
import { Helmet } from "react-helmet";


const FoodDetails = () => {
    const food = useLoaderData()
    const {name, description, price, image, category} = food;

    const handleAddToCart = () => {
        addToCart(food)
    }

    const handleWishToCart = () => {
        addWishList(food);
    }


    return (
        <div>
            <h1>Food Details</h1>
            <Helmet>
                <title>{name} food details</title>
            </Helmet>
            <div style={{textAlign: 'center'}}>
                <img style={{width: '400px', height: '200px'}} src={image} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <h4>Category: {category}</h4>
                <h3>Price: {price}</h3>
                <button 
                    onClick={handleAddToCart}
                    style={{cursor: 'pointer'}}>
                    Add to cart</button>
                <button 
                    onClick={handleWishToCart}
                    style={{cursor: 'pointer', marginLeft: '10px'}}>
                    WishList</button>
               
            </div>
        </div>
    );
};

export default FoodDetails;