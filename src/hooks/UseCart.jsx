function UseCart() {

    const addToCart = (product, quantity) => {
        let cart = JSON.parse(localStorage.getItem("vigybag-cart")) || [];
        console.log("cart", cart)

        const existingItem = cart.filter(item => item.id === product.id)
        console.log("existing", existingItem)

        const newQuantity = existingItem.length == 0 ? quantity
            : existingItem[0].quantity + quantity > 0 ? existingItem[0].quantity + quantity : 0;

        const filteredCart = cart.filter(item => {
            console.log(item.id, product.id)
            return item.id !== product.id
        });

        let newCart = []
        console.log(newQuantity)
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
        console.log("new art", newCart)

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