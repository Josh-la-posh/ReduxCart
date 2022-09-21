import { TOGGLE_CART, INCREASE_CART, DECREASE_CART } from "./constant";

export const ToggleCart = () => ({
    type: TOGGLE_CART
});

export const increaseCart = (item) => ({
    type: INCREASE_CART,
    payload: item
});

export const decreaseCart = (id) => ({
    type: DECREASE_CART,
    payload: id
});