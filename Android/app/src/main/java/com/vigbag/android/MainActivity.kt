package com.vigbag.android

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.vigbag.android.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    lateinit var binding:ActivityMainBinding
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setTheme(R.style.Theme_VigyBag)
        binding=ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

    }
}

