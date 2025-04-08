import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { currency, addToCart, removeFromCart, cartItems } = useAppContext();

    const navigate = useNavigate();

    return product && (
        <div onClick={()=> {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}} 
        className="border border-gray-300 rounded-2xl p-4 bg-white shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-[240px]">
            <div className="group cursor-pointer flex items-center justify-center mb-3">
                <img
                    className="group-hover:scale-105 transition-transform duration-200 h-32 object-contain"
                    src={product.image?.[0] || assets.placeholder}
                    alt={product.name}
                />
            </div>
            <div className="text-sm text-gray-600 space-y-1">
                <p className="uppercase tracking-wide text-xs text-gray-400">{product.category}</p>
                <p className="text-gray-800 font-semibold text-base truncate">{product.name}</p>
                <div className="flex items-center gap-1">
                    {Array(5).fill('').map((_, i) => (
                        <img
                            key={i}
                            className="w-4 h-4"
                            src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                            alt="star"
                        />
                    ))}
                    <span className="text-xs text-gray-500">({product.rating || 4})</span>
                </div>
            </div>
            <div className="flex items-end justify-between mt-4">
                <div>
                    <p className="text-lg font-semibold text-primary leading-tight">
                        {currency}{product.offerPrice}
                    </p>
                    <p className="text-xs text-gray-400 line-through">
                        {currency}{product.price}
                    </p>
                </div>

                <div onClick={(e) => e.stopPropagation()} className="text-primary">
                    {!cartItems[product._id] ? (
                        <button
                            className="flex items-center gap-1 text-sm px-3 py-1.5 bg-primary/10 border border-primary/40 rounded-full hover:bg-primary/20 transition"
                            onClick={() => addToCart(product._id)}
                        >
                            <img src={assets.cart_icon} alt="cart_icon" className="w-4 h-4" />
                            Add
                        </button>
                    ) : (
                        <div className="flex items-center gap-2 bg-primary/10 px-2 py-1 rounded-full">
                            <button
                                onClick={() => removeFromCart(product._id)}
                                className="text-sm px-2 hover:text-red-500 transition"
                            >
                                −
                            </button>
                            <span className="w-5 text-center font-medium text-sm">{cartItems[product._id]}</span>
                            <button
                                onClick={() => addToCart(product._id)}
                                className="text-sm px-2 hover:text-green-600 transition"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
