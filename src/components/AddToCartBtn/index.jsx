import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import './btn.css'

function AddToCartBtn({product, className}){
    const [clicked, setClicked] = useState(false);
    const {addItem, state} = useCartContext();

    if(state.items.find(item=>item.id === product.id)){
        return(
            <button 
                className={`${className} ${className}--added ${clicked?`${className}--clicked`:''}`} 
                disabled
            >
                Item in cart
            </button>
        )
    }else{
        return(
            <button 
                className={`${className} ${className}--add`} 
                onClick={()=>{setClicked(true);addItem(product)}}
            >
                Add to cart
            </button>
        )
    }
}

export default AddToCartBtn;