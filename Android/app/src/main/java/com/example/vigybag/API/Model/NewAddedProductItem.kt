package com.example.vigybag.API.Model

import androidx.room.Entity
import androidx.room.PrimaryKey
import java.io.Serializable

@Entity(tableName = "wishlist")
data class NewAddedProductItem(
    @PrimaryKey(autoGenerate = true) val id:Int,
    val category: String,
    val description: String,
    val image: String,
    val price: Double,
    val rating: RatingX,
    val title: String,
    var isLiked:Boolean


    ):Serializable