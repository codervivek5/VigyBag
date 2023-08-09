package com.vigbag.android.ui.home

import android.os.Bundle
import android.view.View
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import com.vigbag.android.R
import com.vigbag.android.databinding.FragmentHomeBinding
import com.vigbag.android.model.ChildItemDataClass
import com.vigbag.android.model.ParentItemDataClass
import com.vigbag.android.ui.home.adapters.ParentAdapter

class HomeFragment : Fragment(R.layout.fragment_home) {

    private var _binding: FragmentHomeBinding? = null
    private val binding get() = _binding!!

    private lateinit var parentAdapter: ParentAdapter
    private lateinit var parentItemList: ArrayList<ParentItemDataClass>
    private lateinit var headphoneList: ArrayList<ChildItemDataClass>
    private lateinit var tshirtList: ArrayList<ChildItemDataClass>
    private lateinit var phoneList: ArrayList<ChildItemDataClass>

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        _binding = FragmentHomeBinding.bind(view)
        onaddAllData()
    }

    private fun onaddAllData() {
        headphoneList = ArrayList()
        phoneList = ArrayList()
        tshirtList = ArrayList()
        parentItemList = ArrayList()

        headphoneList.add(
            ChildItemDataClass(
                R.drawable.headphone,
                "Super Mic Headphone",
                "wireless headphone with quality mic",
                4.5,
                "(13)"
                )
        )
        headphoneList.add(
            ChildItemDataClass(
                R.drawable.headphone,
                "Super Mic Headphone",
                "wireless headphone with quality mic",
                4.5,
                "(13)")
        )
        headphoneList.add(
            ChildItemDataClass(
                R.drawable.headphone,
                "Super Mic Headphone",
                "wireless headphone with quality mic",
                4.5,
                "(13)"
                )
        )
        headphoneList.add(
            ChildItemDataClass(
                R.drawable.headphone,
                "Super Mic Headphone",
                "wireless headphone with quality mic",
                4.5,
                "(13)"
                )
        )
        headphoneList.add(
            ChildItemDataClass(
                R.drawable.headphone,
                "Super Mic Headphone",
                "wireless headphone with quality mic",
                4.5,
                "(13)"
                )
        )

        parentItemList.add(ParentItemDataClass("Headphones for you!", headphoneList))


        tshirtList.add(
            ChildItemDataClass(
                R.drawable.t_shirt,
                "Printed Cotton T-Shirt",
                "printed cotton t-shirt in multiple colors",
                4.0,
                "(10)",
                )
        )
        tshirtList.add(
            ChildItemDataClass(
                R.drawable.t_shirt,
                "Printed Cotton T-Shirt",
                "printed cotton t-shirt in multiple colors",
                4.0,
                "(10)"
                )
        )
        tshirtList.add(
            ChildItemDataClass(
                R.drawable.t_shirt,
                "Printed Cotton T-Shirt",
                "printed cotton t-shirt in multiple colors",
                4.0,
                "(10)"
                )
        )
        tshirtList.add(
            ChildItemDataClass(
                R.drawable.t_shirt,
                "Printed Cotton T-Shirt",
                "printed cotton t-shirt in multiple colors",
                4.0,
                "(10)"
                )
        )
        tshirtList.add(
            ChildItemDataClass(
                R.drawable.t_shirt,
                "Printed Cotton T-Shirt",
                "printed cotton t-shirt in multiple colors",
                4.0,
                "(10)"
                )
        )
        tshirtList.add(
            ChildItemDataClass(
                R.drawable.t_shirt,
                "Printed Cotton T-Shirt",
                "printed cotton t-shirt in multiple colors",
                4.0,
                "(10)"
            )
        )

        parentItemList.add(ParentItemDataClass("T-Shirts for you!", tshirtList))


        phoneList.add(
            ChildItemDataClass(
                R.drawable.iphone,
                "Mobile with top features",
                "think different",
                5.0,
                "(16)"
            )
        )
        phoneList.add(
            ChildItemDataClass(
                R.drawable.iphone,
                "Mobile with top features",
                "think different",
                5.0,
                "(16)"
            )
        )
        phoneList.add(
            ChildItemDataClass(
                R.drawable.iphone,
                "Mobile with top features",
                "think different",
                5.0,
                "(16)"
            )
        )
        phoneList.add(
            ChildItemDataClass(
                R.drawable.iphone,
                "Mobile with top features",
                "think different",
                5.0,
                "(16)"
            )
        )
        phoneList.add(
            ChildItemDataClass(
                R.drawable.iphone,
                "Mobile with top features",
                "think different",
                5.0,
                "(16)"
            )
        )


        parentItemList.add(ParentItemDataClass("Mobiles for you!", phoneList))

        parentAdapter = ParentAdapter(parentItemList, requireContext())
        binding.recyclerView.layoutManager = LinearLayoutManager(requireContext())
        binding.recyclerView.adapter = parentAdapter
        parentAdapter.notifyDataSetChanged()
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }

}