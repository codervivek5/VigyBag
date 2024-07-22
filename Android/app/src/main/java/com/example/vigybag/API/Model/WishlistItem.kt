package com.example.vigybag.API.Model

sealed class WishlistItem {
    data class NewAddedProduct(val product: NewAddedProductItem) : WishlistItem()
    data class RecommendModel(val product: RecommendModelItem) : WishlistItem()
}
