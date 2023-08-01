package com.vigbag.android.viewmodel

import androidx.lifecycle.ViewModel
import com.vigbag.android.model.Product
import com.vigbag.android.repository.ProductRepository

class ProductViewModel(private val productRepository : ProductRepository) : ViewModel() {

    private val allItems = productRepository.getAllProducts()

    // Function to search for items based on the provided query
    fun searchItems(query: String): List<Product> {
        return allItems.filter {
            it.name.contains(query, true) || it.desc.contains(query, true)
        }
    }
}
