package com.example.vigybag.API

import com.example.vigybag.API.Model.NewAddedProductItem
import com.example.vigybag.API.Model.RecommendModelItem
import retrofit2.Call
import retrofit2.Response
import retrofit2.http.GET


interface ApiInterface {

    @GET("products")
    fun getProducts():Call<List<RecommendModelItem>>

    @GET("products/category/jewelery")
    fun getNewProducts():Call<List<NewAddedProductItem>>





}

