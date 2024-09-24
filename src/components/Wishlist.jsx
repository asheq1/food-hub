import { useEffect, useState } from "react";
import { getWishlist, removeFromWishlist } from "../utils";
import { Helmet } from "react-helmet";

const Wishlist = () => {
    // const wishs = getWishlist();
    const [ wishs, setWishs] = useState([]);

    useEffect(()=>{
        setWishs(getWishlist())
    }, [])

    const removeWish = (id) => {
        removeFromWishlist(id)  
        // remove from UI
        setWishs(wishs.filter(wish => wish.id !== id))
    }

    return (
        <div>
            <h2>WishList product</h2>
            <Helmet>
                <title>WIshlist | foods</title>
            </Helmet>
            <div>
                {
                    wishs.length > 0 ? (
                        wishs.map(wish => <div key={wish.id}>
                            <img style={{width: '400px', height: '200px'}} src={wish.image} alt="" />
                            <h2>{wish.name}</h2>
                            <p>{wish.description}</p>
                            <button onClick={()=>removeWish(wish.id)}>Remove </button>
                        </div>)
                    ) : (
                        <p>Your wish list is empty</p>
                    )
                }
            </div>
        </div>
    );
};

export default Wishlist;