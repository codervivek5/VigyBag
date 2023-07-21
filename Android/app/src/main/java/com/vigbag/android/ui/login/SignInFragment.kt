package com.vigbag.android.ui.login

import android.os.Bundle
import android.view.View
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import androidx.preference.PreferenceManager
import com.vigbag.android.R
import com.vigbag.android.databinding.FragmentSignInBinding
import com.vigbag.android.util.Constants.Preferences

class SignInFragment : Fragment(R.layout.fragment_sign_in) {
    
    private var _binding: FragmentSignInBinding? = null
    private val binding get() = _binding!!

    private fun validateCredentials() {

        val sharedPreferences = PreferenceManager.getDefaultSharedPreferences(requireContext())
        val savedEmail = sharedPreferences.getString(Preferences.EMAIL, "")
        val savedPassword = sharedPreferences.getString(Preferences.PASSWORD, "")

        binding.etxtEmail.setText(savedEmail)
        binding.etxtPassword.setText(savedPassword)

        binding.btnLogin.setOnClickListener {
            val enteredEmail = binding.etxtEmail.text.toString()
            val enteredPassword = binding.etxtPassword.text.toString()

            // Validate the credentials
            if (enteredEmail == savedEmail && enteredPassword == savedPassword) {
                Toast.makeText(context,"Login Successful",Toast.LENGTH_LONG).show()
            } else {
                Toast.makeText(context,"Invalid Credentials,try Again",Toast.LENGTH_LONG).show()
            }
        }
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        _binding = FragmentSignInBinding.bind(view)
        
        binding.txtSignup.setOnClickListener {
            findNavController().navigate(R.id.action_signInFragment_to_signUpFragment)


        }
        
        binding.btnLogin.setOnClickListener {
            validateCredentials()
            findNavController().navigate(R.id.action_signInFragment_to_homeFragment)
        }
        
    }
    
    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}