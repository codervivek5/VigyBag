package com.vigbag.android.ui.home.adapters

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.RatingBar
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.vigbag.android.R
import com.vigbag.android.model.ChildItemDataClass

class ChildAdapter(private val childItemList:List<ChildItemDataClass>, val context: Context): RecyclerView.Adapter<ChildAdapter.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(context).inflate(R.layout.each_item,null,false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item=childItemList[position]
        holder.childItemImage.setImageResource(item.itemImage)
        holder.childItemName.text = item.itemName
        holder.childItemSpecs.text = item.itemSpecs
        holder.childItemReviews.text = item.itemReviews
        holder.childItemRating.rating = item.itemRating.toFloat()
    }

    override fun getItemCount(): Int {
        return childItemList.size
    }

    class ViewHolder(ItemView: View):RecyclerView.ViewHolder(ItemView){
        val childItemImage: ImageView = ItemView.findViewById(R.id.itemImage)
        val childItemName: TextView = ItemView.findViewById(R.id.itemName)
        val childItemSpecs: TextView = ItemView.findViewById(R.id.itemSpecs)
        val childItemReviews: TextView = ItemView.findViewById(R.id.itemReviews)
        val childItemRating: RatingBar = ItemView.findViewById(R.id.itemRating)
    }
}