
import CartActionTypes from  './cart.types';

const INITIAL_VALUE={
    hidden:false
}

const cartReducer=(state=INITIAL_VALUE,action)=>{
    switch(action.type){
        case CartActionTypes.SHOW_CART_DRODOWN:
            return{
                ...state,
                hidden:!state.hidden
            }
            default:
                return state;
    }
}
export default cartReducer;