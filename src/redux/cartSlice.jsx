import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem("vigybag-cart")) || [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        manageCartItem: (state, action) => {
            const { product, quantity } = action.payload
            
            const existingItem = state.items.find(item => item.id === product.id)

            let newQuantity = quantity
            if (existingItem) {
                newQuantity = existingItem.quantity + quantity > 0 ? existingItem.quantity + quantity : 0;
            }

            const filteredCart = state.items.filter(item => item.id !== product.id);

            let newCart = []
            if (newQuantity === 0) {
                newCart = filteredCart
            }
            else {
                const newItem = {
                    id: product.id,
                    title: product.title,
                    quantity: newQuantity,
                    price: product.price,
                    total: newQuantity * product.price,
                    image: product.image,
                }
                newCart = [...filteredCart, newItem]
            }
            newCart = newCart.sort((a, b) => a.id - b.id)
            localStorage.setItem("vigybag-cart", JSON.stringify(newCart))
            state.items = newCart
        },

        clearCart: (state, action) => {
            localStorage.setItem("vigybag-cart", JSON.stringify([]))
            state.items = []
        }
    }
})

export const { manageCartItem, clearCart } = cartSlice.actions
export default cartSlice.reducer