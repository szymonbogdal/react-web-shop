import { ADD_ITEM, REMOVE_ITEM } from "./actions";

function cartRedcuer(state, action){
    switch (action.type){
        case ADD_ITEM:
            return {...state,
            items: [...state.items, action.payload.item]}
        case REMOVE_ITEM:
            return {items: state.items.filter(item => item.id !== action.payload.id)}
        default:
            return state;
    }
}

export default cartRedcuer;