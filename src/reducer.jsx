import { TOGGLE_CART, INCREASE_CART, DECREASE_CART } from "./constant";

const initialState = {
    istoggle: false,
    totalQuantity: 0,
    items: []
}

export const reducer = (state=initialState, action) => {
   
    switch(action.type) {
        case TOGGLE_CART:
             return {
                 ...state,
                 istoggle : !state.istoggle
             }
        case INCREASE_CART:
            return addItemToCart(state,action);
            
        case DECREASE_CART:
            return removeItemFromCart(state,action);

        default:
            return state;
    }
}





const addItemToCart = (state,action) => {

        const addItem = action.payload;

        let cartItems = [...state.items];

        const existingItem = cartItems.find((item) => item.id === addItem.id );

        let   updatedItems;
    
       let  totalQuantity = state.totalQuantity + 1;

        if(existingItem){

            const updatedItem =  {
                    ...existingItem,
                    totalPrice: existingItem.totalPrice + action.payload.price,
                    quantity: existingItem.quantity + 1,
            }
         const existingItemIndex = cartItems.findIndex((item) => item.id === addItem.id);

         cartItems[existingItemIndex] = updatedItem;

         updatedItems = cartItems;
        
        }else{
           updatedItems = cartItems.concat(Object.assign({},addItem,{totalPrice : addItem.price,quantity : addItem.quantity + 1})); 

        }

    


    return {
        ...state,
        totalQuantity: totalQuantity,
        items: [...updatedItems]
    }
}






const removeItemFromCart = (state,action) => {
   
    const itemId = action.payload;

    const cartItems = [...state.items];

    const existingItem= cartItems.find((item) => item.id === itemId);

    let  updatedItems;
    let totalQuantity;
    if(state.totalQuantity === 0){
      totalQuantity = 0;
    }else{
        totalQuantity = state.totalQuantity - 1 ;
    }
    

    if(existingItem && existingItem.quantity > 1){
        const updatedItem =  {
                ...existingItem,
                totalPrice: (existingItem.totalPrice - existingItem.price),
                quantity: existingItem.quantity  - 1,
        }
    let existingItemIndex =  cartItems.findIndex((item) => item.id ===  itemId );

    cartItems[existingItemIndex] = updatedItem;

       updatedItems = cartItems;
    
    }else{
       updatedItems = cartItems.filter((item) => item.id !==  itemId );
    }

return {
    ...state,
    totalQuantity: totalQuantity ,
    items: [...updatedItems]
}
}