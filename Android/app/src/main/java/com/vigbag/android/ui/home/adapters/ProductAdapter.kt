package com.vigbag.android.ui.home.adapters

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.vigbag.android.R
import com.vigbag.android.model.Product

class ProductAdapter : RecyclerView.Adapter<ProductAdapter.ViewHolder>() {
    private var product: List<Product> = emptyList()

    fun setProducts(newProducts: List<Product>) {
        product = newProducts
        notifyDataSetChanged()
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(
            R.layout.each_product,
            parent,
            false
        )
        return ViewHolder(view)

    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = product[position]
        holder.img.setImageResource(item.image)
        holder.title.text = item.name
        holder.desc.text = item.desc
    }

    override fun getItemCount(): Int {
        return product.size
    }

    class ViewHolder(ItemView: View) : RecyclerView.ViewHolder(ItemView) {
        val title: TextView = ItemView.findViewById(R.id.txt_product_name)
        val img: ImageView = ItemView.findViewById(R.id.img_product)
        val desc: TextView = ItemView.findViewById(R.id.txt_product_desc)
    }
}