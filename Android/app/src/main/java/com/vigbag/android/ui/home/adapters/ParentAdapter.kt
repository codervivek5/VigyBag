package com.vigbag.android.ui.home.adapters

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.vigbag.android.R
import com.vigbag.android.model.ParentItemDataClass

class ParentAdapter(private val parentItemList:List<ParentItemDataClass>, val context: Context): RecyclerView.Adapter<ParentAdapter.ViewHolder>() {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val view = LayoutInflater.from(parent.context).inflate(
            R.layout.parent_item,
            parent,
            false
        )
        return ViewHolder(view)
        
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        val item = parentItemList[position]
        holder.title.text = item.title

        val childAdapter = ChildAdapter(item.ChildModelClass,context)
        holder.childRecyclerView.layoutManager =
            LinearLayoutManager(context, LinearLayoutManager.HORIZONTAL, false)
        holder.childRecyclerView.adapter = childAdapter
        childAdapter.notifyDataSetChanged()
    }

    override fun getItemCount(): Int {
        return parentItemList.size
    }

    class ViewHolder(ItemView: View) : RecyclerView.ViewHolder(ItemView) {
        val childRecyclerView: RecyclerView = ItemView.findViewById(R.id.rv_child)
        val title: TextView = ItemView.findViewById(R.id.title)
    }
}