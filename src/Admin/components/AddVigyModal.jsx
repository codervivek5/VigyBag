import React, { useState } from 'react';

const AddVigyModal = ({ setShowAddModal, handleAddVigy }) => {
    const [newVigy, setNewVigy] = useState({
        name: '',
        totalProduct: 0,
        sellProduct: 0,
        pendingProduct: 0,
        returnOrder: 0,
        totalIncome: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        handleAddVigy(newVigy);
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
            <div className="relative top-20 mx-auto p-5 border w-full max-w-md shadow-lg rounded-md bg-white">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Add New Vigy</h3>
                    <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Close</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-3 py-2 border rounded mb-3"
                        value={newVigy.name}
                        onChange={(e) => setNewVigy({ ...newVigy, name: e.target.value })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Total Product"
                        className="w-full px-3 py-2 border rounded mb-3"
                        value={newVigy.totalProduct}
                        onChange={(e) => setNewVigy({ ...newVigy, totalProduct: parseInt(e.target.value) })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Sell Product"
                        className="w-full px-3 py-2 border rounded mb-3"
                        value={newVigy.sellProduct}
                        onChange={(e) => setNewVigy({ ...newVigy, sellProduct: parseInt(e.target.value) })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Pending Product"
                        className="w-full px-3 py-2 border rounded mb-3"
                        value={newVigy.pendingProduct}
                        onChange={(e) => setNewVigy({ ...newVigy, pendingProduct: parseInt(e.target.value) })}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Return Order"
                        className="w-full px-3 py-2 border rounded mb-3"
                        value={newVigy.returnOrder}
                        onChange={(e) => setNewVigy({ ...newVigy, returnOrder: parseInt(e.target.value) })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Total Income"
                        className="w-full px-3 py-2 border rounded mb-3"
                        value={newVigy.totalIncome}
                        onChange={(e) => setNewVigy({ ...newVigy, totalIncome: e.target.value })}
                        required
                    />
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                            Add Vigy
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVigyModal;