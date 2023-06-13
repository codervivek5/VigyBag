package com.vigbag.android

import android.content.Context
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.google.android.material.snackbar.Snackbar
import com.vigbag.android.databinding.FragmentSignInBinding

class SignInFragment : Fragment() {
    private lateinit var binding: FragmentSignInBinding
    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View {
        binding = FragmentSignInBinding.inflate(inflater, container, false)
        validateCredentials()
        return binding.root
    }

    private fun validateCredentials() {

        val sharedPreferences = requireContext().getSharedPreferences("LoginPrefs", Context.MODE_PRIVATE)
        val savedEmail = sharedPreferences.getString("email", "")
        val savedPassword = sharedPreferences.getString("password", "")

        binding.etxtEmail.setText(savedEmail)
        binding.etxtPassword.setText(savedPassword)

        binding.btnLogin.setOnClickListener {
            val enteredEmail = binding.etxtEmail.text.toString()
            val enteredPassword = binding.etxtPassword.text.toString()

            // Validate the credentials
            if (enteredEmail == savedEmail && enteredPassword == savedPassword) {
                val snack = Snackbar.make(it,"Login Successful",Snackbar.LENGTH_LONG)
                snack.show()
            } else {
                val snack = Snackbar.make(it,"Invalid Credentials,try Again",Snackbar.LENGTH_LONG)
                snack.show()
            }
        }
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.txtSignup.setOnClickListener {
            parentFragmentManager.beginTransaction()
                .replace(R.id.frameLayout, SignUpFragment())
                .commit()
        }
    }
}