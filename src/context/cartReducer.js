import { ADD_ITEM, REMOVE_ITEM, INCREMENT_QTY, DECREMENT_QTY, GET_TOTALS, SET_CART_FROM_STORAGE } from "./actions";

function cartReducer(state, action){
    switch (action.type){
        case ADD_ITEM:
            const newItem = {...action.payload.item, qty:1};
            return {items: [...state.items, newItem]}
        case REMOVE_ITEM:
            return {items: state.items.filter(item => item.id !== action.payload.id)}
        case INCREMENT_QTY:
            const incItems = state.items.map((item)=>{
                if(item.id === action.payload.id){
                    return {...item, qty: item.qty+1}
                }
                return item
            });
            return { ...state, items: incItems }
        case DECREMENT_QTY:
            const decItems = state.items.map((item)=>{
                if(item.id === action.payload.id){
                    return {...item, qty: item.qty-1}
                }
                return item
            }).filter((item) => item.qty > 0);
            return { ...state, items: decItems }
        case GET_TOTALS:
            let {sum, qty} = state.items.reduce((total, item)=>{
                total.sum += item.qty * item.price;
                total.qty += item.qty;
                return total; 
            },
            {sum: 0, qty: 0})
            sum = sum.toFixed(2);
            return {...state, sum, qty}
        case SET_CART_FROM_STORAGE:
            return action.payload;
        default:
            return state;
    }
}

export default cartReducer;