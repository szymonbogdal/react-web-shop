import { ADD_ITEM, REMOVE_ITEM, INCREMENT_QTY, DECREMENT_QTY } from "./actions";

function cartRedcuer(state, action){
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
        default:
            return state;
    }
}

export default cartRedcuer;