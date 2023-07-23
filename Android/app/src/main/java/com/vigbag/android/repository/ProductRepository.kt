package com.vigbag.android.repository

import com.vigbag.android.R
import com.vigbag.android.model.Product

class ProductRepository {
    private val allProducts = listOf(
        Product(R.drawable.headphone,
            "Boat Headphone",
            "wireless headphone with best quality"
        ),
        Product(R.drawable.headphone,
            "Sony Headphone",
            "wireless headphone with best quality"
        ),
        Product(R.drawable.headphone,
             "Sony Headphone",
            "wireless headphone with best quality"
        ),
        Product(R.drawable.headphone,
            "Sony Headphone",
            "wireless headphone with best quality"
        ),

        Product(
            R.drawable.t_shirt,
            "Printed T-Shirts",
            "colorful printed t-shirts with multiple colors "
        ),
        Product(
            R.drawable.t_shirt,
            "Printed T-Shirts",
            "colorful printed t-shirts with multiple colors "
        ),
        Product(
            R.drawable.t_shirt,
            "Printed T-Shirts",
            "colorful printed t-shirts with multiple colors "
        ),
        Product(
            R.drawable.t_shirt,
            "Printed T-Shirts",
            "colorful printed t-shirts with multiple colors "
        ),

        Product(
            R.drawable.iphone,
            "Apple Iphone",
            "smartphone made by Apple that combines a computer, iPod, digital camera and highly secure"
        ),
        Product(
            R.drawable.iphone,
            "Apple Iphone",
            "smartphone made by Apple that combines a computer, iPod, digital camera and highly secure"
        ),
        Product(
            R.drawable.iphone,
            "Apple Iphone",
            "smartphone made by Apple that combines a computer, iPod, digital camera and highly secure"
        ),
        Product(
            R.drawable.iphone,
            "Apple Iphone",
            "smartphone made by Apple that combines a computer, iPod, digital camera and highly secure"
        ),
        Product(
            R.drawable.iphone,
            "Apple Iphone",
            "smartphone made by Apple that combines a computer, iPod, digital camera and highly secure"
        ),

        )

    fun getAllProducts(): List<Product> {
        return allProducts
    }
}