package com.example.vigybag.activity

import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.activity.enableEdgeToEdge
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.ViewCompat
import androidx.core.view.WindowInsetsCompat
import com.example.vigybag.R
import com.example.vigybag.databinding.ActivityRegisterBinding
import com.example.vigybag.models.UserModel
import com.google.firebase.Firebase
import com.google.firebase.firestore.firestore

class RegisterActivity : AppCompatActivity() {
    private lateinit var binding: ActivityRegisterBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
//        enableEdgeToEdge()
        binding = ActivityRegisterBinding.inflate(layoutInflater)
        setContentView(binding.root)


        binding.login.setOnClickListener{
            openLogin()
        }

        binding.register.setOnClickListener{
            validateUser()
            storeData()
        }

    }

    private fun storeData() {

        val data = UserModel(name = binding.name.text.toString(), email = binding.email.text.toString())

        Firebase.firestore.collection("users").document(binding.name.text.toString())
            .set(data).addOnSuccessListener {
                Toast.makeText(this, "User Registered", Toast.LENGTH_SHORT).show()
                openLogin()
            }
            .addOnFailureListener{
                Toast.makeText(this, "Failed to register", Toast.LENGTH_SHORT).show()
            }

    }

    private fun validateUser() {
      if (binding.email.text.isEmpty() || binding.password.text.isEmpty())
      {
          Toast.makeText(this, "Please fill all details", Toast.LENGTH_SHORT).show()
      }

        else{
            storeData()
      }
    }

    private fun openLogin() {
        startActivity(Intent(this@RegisterActivity, LoginActivity::class.java))
        finish()
    }


}