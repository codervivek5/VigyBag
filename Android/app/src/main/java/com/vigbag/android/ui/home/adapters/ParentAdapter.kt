package com.vigbag.android.ui.home.adapters

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.navigation.NavController
import androidx.navigation.Navigation
import androidx.navigation.Navigation.findNavController
import androidx.navigation.findNavController
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.vigbag.android.R
import com.vigbag.android.model.ParentItemDataClass
import com.vigbag.android.ui.home.HomeFragmentDirections

class ParentAdapter(private val parentItemList:List<ParentItemDataClass>, val context: Context): RecyclerView.Adapter<ParentAdapter.ViewHolder>() {
    lateinit var itemDescriptions: Array<String>
//    val navController :NavController = findNavController()

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
        itemDescriptions = arrayOf(
            "Experience crystal-clear sound and impeccable voice quality with our Super Mic Headphone. Engineered with cutting-edge noise-cancelling technology, these headphones deliver an immersive audio experience, perfect for gaming, music, or conference calls. The comfortable over-ear design and adjustable headband ensure a snug fit for extended wear. Connect effortlessly to your devices via Bluetooth and enjoy hours of uninterrupted audio bliss.",
            "Express your style with our Printed Cotton T-Shirt collection. Made from premium-quality, breathable cotton, these tees are perfect for everyday wear. Choose from a wide range of vibrant prints and designs that cater to your unique personality. The soft and durable fabric ensures maximum comfort and longevity, making it a wardrobe staple for casual outings or lounging at home. Add a touch of creativity and flair to your fashion ensemble with our stylish Printed Cotton T-Shirts.",
            "Discover the power of innovation with the mobile. Packed with advanced features and cutting-edge technology, this flagship device takes smartphone capabilities to the next level. The stunning 6.1-inch Liquid Retina display showcases vibrant colors and sharp details, enhancing your viewing experience. Equipped with the A13 Bionic chip, it offers lightning-fast performance for multitasking and gaming. Capture breathtaking photos and 4K videos with the dual 12MP Ultra Wide and Wide cameras. With its sleek design and exceptional battery life, the mobile is the perfect companion for your daily adventures and digital needs.\n"
        )
        val childAdapter = ChildAdapter(item.ChildModelClass,context)
        holder.childRecyclerView.layoutManager =
            LinearLayoutManager(context, LinearLayoutManager.HORIZONTAL, false)
        holder.childRecyclerView.adapter = childAdapter
        childAdapter.setOnItemClickListener(object : ChildAdapter.onItemClickListener{
            override fun onItemClick(position: Int) {

                val navController = Navigation.findNavController(holder.itemView)
                val action = HomeFragmentDirections.actionHomeFragmentToProductPageFragment(childAdapter.childItemList[position].itemName,childAdapter.childItemList[position].itemImage,itemDescriptions[position])
                navController.navigate(action)

            }
        })
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