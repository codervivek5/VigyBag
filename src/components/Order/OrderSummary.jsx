import React from "react";
import { useSelector } from "react-redux";

const currencyFormatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });
const cardClass = "p-4 bg-white rounded-lg shadow-md";

const calculateShipping = (itemsTotal, threshold, rate) => {
  return itemsTotal >= threshold ? 0.00 : rate;
};

function OrderSummary() {

    const items = useSelector(state => state.cart.items)

    const itemsTotal = items.reduce((acc, item) => acc + item.total, 0);

    const shippingThreshold = 500.00;
    const shippingRate = 40.00;

    let shipping = calculateShipping(itemsTotal, shippingThreshold, shippingRate);
    let total = itemsTotal + shipping;
    
    if (itemsTotal === 0) {
        return (
        <div className="mb-5">
            <h2 className="text-2xl font-bold mb-6 text-black">Subtotal</h2>
            <div className={`${cardClass} space-y-2`} style={{ border: "1px solid black" }}>
                <p className="text-lg font-semibold text-zinc-800">Order Summary</p>
                <p className="my-5">You have no items in the shopping cart!</p>
                <ul className="list-inside text-zinc-700 space-y-1 list-none">
                    <li className="flex items-center justify-between gap-5 font-bold text-xl">
                        <span>Total</span>
                        <span>{currencyFormatter.format(total)}</span>
                    </li>
                </ul>
            </div>
        </div>
        )
    }

    return (
        <div className="mb-5">
            <h2 className="text-2xl font-bold mb-6 text-black">Subtotal</h2>
            <div className={`${cardClass} space-y-2`} style={{ border: "1px solid black" }}>
                <p className="text-lg font-semibold text-zinc-800">Order Summary</p>
                <ul className="list-inside text-zinc-700 space-y-1 list-none">
                    <hr />
                    {items.map((item, index) => (
                        <li key={index} className="flex items-center justify-between gap-5 py-1">
                            <span>{item.title}</span>
                            <span>{currencyFormatter.format(item.total)}</span>
                        </li>
                    ))}
                    <li className="flex items-center justify-between gap-5 font-bold">
                        <span>Shipping</span>
                        {shipping === 0.00 ? (
                            <span className="text-green-600">FREE</span>  //FREE display
                        ) : (
                            <span>{currencyFormatter.format(shipping)}</span>
                        )}
                    </li>
                    <hr />
                    <li className="flex items-center justify-between gap-5 font-bold text-xl">
                        <span>Total</span>
                        <span>{currencyFormatter.format(total)}</span>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default OrderSummary;
