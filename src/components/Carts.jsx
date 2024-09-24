import { useEffect, useState } from "react";
import { getCart, removeFromCart } from "../utils";
import { Helmet } from "react-helmet";

const Carts = () => {
    // const carted = getCart();

    const [carted, setCarted] = useState([]);

    useEffect(() =>{
        setCarted(getCart())

    }, [])

    const removeCart = (id)=>{
        removeFromCart(id)
        setCarted(carted.filter(cart => cart.id !==id))
    };

    return (
        <div>
            <h2>This is cart</h2>
            <Helmet>
                <title>Carts | Foods</title>
            </Helmet>
            <div>
                {
                    carted.length > 0 ? (
                        carted.map(cart => <div key={cart.id}>
                            <img style={{width: '400px', height: '200px'}} src={cart.image} alt="" />
                            <h2>{cart.name}</h2>
                            <p>{cart.category}</p>
                            <button onClick={()=>removeCart(cart.id)}>Remove item</button>
                        </div>)
                    ) : (
                        <p>Your cart is empty</p>
                    )
                }
            </div>
        </div>
    );
};

export default Carts;