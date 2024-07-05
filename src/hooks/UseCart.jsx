function UseCart() {

    const addToCart = (product, quantity) => {
        let cart = JSON.parse(localStorage.getItem("vigybag-cart")) || [];

        const existingItem = cart.filter(item => item.id === product.id)

        const newQuantity = existingItem.length == 0 ? quantity
            : existingItem[0].quantity + quantity > 0 ? existingItem[0].quantity + quantity : 0;

        const filteredCart = cart.filter(item => {
            console.log(item.id, product.id)
            return item.id !== product.id
        });

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

        localStorage.setItem("vigybag-cart", JSON.stringify(newCart))
    };

    const clearCart = () => {
        localStorage.setItem("vigybag-cart", JSON.stringify([]))
    }

    const getCart = () => {
        const cart = JSON.parse(localStorage.getItem("vigybag-cart")) || []
        return cart.sort((a, b) => a.id - b.id)
    }

    return { addToCart, clearCart, getCart }
}

export default UseCart;