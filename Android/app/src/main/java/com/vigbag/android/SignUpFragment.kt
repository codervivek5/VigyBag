package com.vigbag.android

import android.content.Context
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.vigbag.android.databinding.FragmentSignUpBinding

class SignUpFragment : Fragment() {
    private lateinit var binding: FragmentSignUpBinding
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View {
        binding = FragmentSignUpBinding.inflate(inflater, container, false)
        storeCredentials()
        return binding.root
    }
    private fun storeCredentials() {
        if(binding.btnSignup.isClickable){
            val sharedPreferences = requireContext().getSharedPreferences("LoginPrefs", Context.MODE_PRIVATE)
            val editor = sharedPreferences.edit()
            editor.putString("email", binding.etxtEmail.text.toString())
            editor.putString("password", binding.etxtPassword.text.toString())
            editor.apply()
        }
    }
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        binding.txtLogin.setOnClickListener {
            parentFragmentManager.beginTransaction()
                .replace(R.id.frameLayout, SignInFragment())
                .commit()
        }
    }
}