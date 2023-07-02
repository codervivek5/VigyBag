package com.vigbag.android

import android.content.Context
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import com.vigbag.android.databinding.FragmentSignUpBinding

class SignUpFragment : Fragment() {
    private lateinit var binding: FragmentSignUpBinding
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View {
        binding = FragmentSignUpBinding.inflate(inflater, container, false)
        return binding.root
    }
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
        binding.txtLogin.setOnClickListener {
            findNavController().navigate(R.id.action_signUpFragment_to_signInFragment)
        }
        binding.btnSignup.setOnClickListener {
            storeCredentials()
        }
    }
}