import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const addToCart = (food) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    const itemExists = cart.find(item => item.id === parseInt(food.id))
    if(itemExists){
        toast.error('Already added to cart')
    } else{
        cart.push(food);
        localStorage.setItem('cart', JSON.stringify(cart))
        toast.success('Added To Cart')
    }

}

export const addWishList = food => {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    
    let isExists = wishlist.find(item => item.id === parseInt(food.id))
    if(isExists){
        toast.error('Already added to wishlist this product')
    } else{
        wishlist.push(food);
        localStorage.setItem('wishlist', JSON.stringify(wishlist))
        toast.success('Added to Wishlist')
    }

}

export const removeFromCart = (foodId) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    const updatedCart = cart.filter(item => item.id !== foodId);
    
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast('Removed from Cart!');

}

export const removeFromWishlist = (foodId) =>{
    let wish = JSON.parse(localStorage.getItem('wishlist')) || [];
    let updatedWishExists = wish.filter(item => item.id !== foodId)

    localStorage.setItem('wishlist', JSON.stringify(updatedWishExists))
    toast('Removed from wishlist')
}

export const getCart = () =>{
    return JSON.parse(localStorage.getItem('cart')) || [];
}

export const getWishlist = () => {
    return JSON.parse(localStorage.getItem('wishlist')) || []
}

