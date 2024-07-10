import { createContext, useReducer, useContext, useEffect } from "react";
import cartReducer from "./cartReducer";
import { ADD_ITEM, REMOVE_ITEM, INCREMENT_QTY, DECREMENT_QTY, GET_TOTALS, SET_CART_FROM_STORAGE } from "./actions";

const CartContext = createContext();

function useCartContext(){
    return useContext(CartContext);
}

const initialState = {
    items: [],
    sum: 0,
    qty: 0
}

function CartProvider({children}){
    const [state, dispatch] = useReducer(cartReducer, initialState);

    function addItem(item){
        dispatch({type: ADD_ITEM, payload: {item}});
    }

    function removeItem(id){
        dispatch({type: REMOVE_ITEM, payload: {id}});
    }

    function incrementQty(id){
        dispatch({type: INCREMENT_QTY, payload: {id}});
    }

    function decrementQty(id){
        dispatch({type: DECREMENT_QTY, payload: {id}});
    }
    useEffect(()=>{
        dispatch({type: GET_TOTALS});

        if(state !== initialState){
            localStorage.setItem('cart', JSON.stringify(state));
        }

    },[state.items])

    useEffect(()=>{
        const storedCart = localStorage.getItem('cart');
        if(storedCart){
            dispatch({ type: SET_CART_FROM_STORAGE, payload: JSON.parse(storedCart) });
        }

        function handleStorageChange(event){
            if(event.key === 'cart'){
                const updatedCart = event.newValue;
                if(updatedCart){
                    dispatch({ type: SET_CART_FROM_STORAGE, payload: JSON.parse(updatedCart) });
                }
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return()=>{
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    return(
        <CartContext.Provider value={{state, addItem, removeItem, incrementQty, decrementQty}}>
            {children}
        </CartContext.Provider>
    )
}

export {useCartContext, CartProvider}
