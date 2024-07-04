package com.example.vigybagg.activity

import android.content.Intent
import android.os.Bundle
import android.os.Looper
import androidx.appcompat.app.AppCompatActivity
import com.example.vigybagg.databinding.ActivitySplashBinding

class SplashActivity : AppCompatActivity() {
    private lateinit var binding: ActivitySplashBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivitySplashBinding.inflate(layoutInflater)
        setContentView(binding.root)


       android.os.Handler(Looper.getMainLooper()).postDelayed({
                 startActivity(Intent(this@SplashActivity, SignUpActivity::class.java))
        }, 100)

    }
}