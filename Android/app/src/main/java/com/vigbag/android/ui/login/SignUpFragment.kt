package com.vigbag.android.ui.login

import android.content.Context
import android.graphics.Paint
import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import com.vigbag.android.R
import com.vigbag.android.databinding.FragmentSignUpBinding

class SignUpFragment : Fragment(R.layout.fragment_sign_up) {
    
    private var _binding: FragmentSignUpBinding? = null
    private val binding get() = _binding!!
    
    private fun storeCredentials() {
        val sharedPreferences =
            requireContext().getSharedPreferences("LoginPrefs", Context.MODE_PRIVATE)
                  val editor = sharedPreferences.edit()
                  editor.putString("email", binding.etxtEmail.text.toString())
                  editor.putString("password", binding.etxtPassword.text.toString())
                  editor.apply()
                  Toast.makeText(context, "Account registered successfully", Toast.LENGTH_SHORT).show()
    }
    
    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        _binding = FragmentSignUpBinding.bind(view)
        
        binding.txtLogin.setOnClickListener {
            findNavController().navigate(R.id.action_signUpFragment_to_signInFragment)

        }
        binding.txtLogin.paintFlags = Paint.UNDERLINE_TEXT_FLAG

        binding.btnSignup.setOnClickListener {
            storeCredentials()
            findNavController().navigate(R.id.action_signUpFragment_to_homeFragment)
        }
    }
    
    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}