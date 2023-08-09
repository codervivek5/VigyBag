package com.vigbag.android

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.navArgs
import com.vigbag.android.databinding.FragmentProductPageBinding


class ProductPageFragment : Fragment() {
    private var _binding: FragmentProductPageBinding? = null
    val binding get() = _binding!!
    val args : ProductPageFragmentArgs by navArgs()

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        _binding = FragmentProductPageBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        val productImage = args.imageResource
        val productName= args.itemName
        val productDescription = args.itemDescription
        binding.productsImageView.setImageResource(productImage)
        binding.productsItemDescription.text = productDescription
        binding.productsItemName.text = productName
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }

}