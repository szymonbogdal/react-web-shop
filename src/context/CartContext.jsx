import { createContext, useReducer, useContext } from "react";
import cartRedcuer from "./cartReducer";
import { ADD_ITEM, REMOVE_ITEM } from "./actions";

const CartContext = createContext();

function useCartContext(){
    return useContext(CartContext);
}

const initialState = {
    items: []
}

function CartProvider({children}){
    const [state, dispatch] = useReducer(cartRedcuer, initialState);

    function addItem(item){
        dispatch({type: ADD_ITEM, payload: {item}});
    }

    function removeItem(id){
        dispatch({type: REMOVE_ITEM, payload: {id}});
    }
    return(
        <CartContext.Provider value={{state, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export {useCartContext, CartProvider}
