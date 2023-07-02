package com.vigbag.android

import android.os.Bundle
import android.preference.PreferenceManager
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import com.vigbag.android.databinding.FragmentSignInBinding

class SignInFragment : Fragment() {
    private var _binding: FragmentSignInBinding? = null

    private val binding get() = _binding!!
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View {
        _binding = FragmentSignInBinding.inflate(inflater, container, false)
        validateCredentials()
        return binding.root
    }

    private fun validateCredentials() {

        val sharedPreferences = PreferenceManager.getDefaultSharedPreferences(requireContext())
        val savedEmail = sharedPreferences.getString(PREF_KEY_EMAIL, "")
        val savedPassword = sharedPreferences.getString(PREF_KEY_PASSWORD, "")

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

        binding.txtSignup.setOnClickListener {
           findNavController().navigate(R.id.action_signInFragment_to_signUpFragment)
        }
    }
    companion object {
        private const val PREF_KEY_EMAIL = "email"
        private const val PREF_KEY_PASSWORD = "password"
    }
    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}