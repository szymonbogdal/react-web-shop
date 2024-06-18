import { createContext, useReducer, useContext } from "react";
import cartRedcuer from "./cartReducer";
import { ADD_ITEM, REMOVE_ITEM, INCREMENT_QTY, DECREMENT_QTY } from "./actions";

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

    function incrementQty(id){
        dispatch({type:INCREMENT_QTY, payload: {id}});
    }

    function decrementQty(id){
        dispatch({type:DECREMENT_QTY, payload: {id}});
    }
    return(
        <CartContext.Provider value={{state, addItem, removeItem, incrementQty, decrementQty}}>
            {children}
        </CartContext.Provider>
    )
}

export {useCartContext, CartProvider}
