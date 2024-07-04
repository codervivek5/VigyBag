package com.example.vigybagg


import android.app.AlertDialog
import android.content.Context
import android.os.Build
import android.view.LayoutInflater
import android.widget.Toast
import androidx.annotation.RequiresApi
import com.example.vigybagg.databinding.ProgressDialogBinding
import com.google.firebase.auth.FirebaseAuth
import java.time.LocalDate
import java.time.format.DateTimeFormatter

object utils {
    private var dialog:AlertDialog? = null

    fun showDialog(context: Context, message:String)
    {
        val progress = ProgressDialogBinding.inflate(LayoutInflater.from(context))
        progress.tvMessage.text = message
        dialog = AlertDialog.Builder(context).setView(progress.root).setCancelable(false).create()
        dialog!!.show()
    }

    fun hideDialog()
    {
        dialog?.dismiss()
    }

    fun showToast(context:Context, message:String)
    {
        Toast.makeText(context, message, Toast.LENGTH_SHORT).show()
    }

    private var firebaseAuthInstance:FirebaseAuth?= null
    fun getAuthInstance(): FirebaseAuth{
        if (firebaseAuthInstance == null)
        {
            firebaseAuthInstance = FirebaseAuth.getInstance()
        }
        return firebaseAuthInstance!!
    }

    fun  getCurrentUserId(): String?
    {
        return FirebaseAuth.getInstance().currentUser?.uid
    }

    fun getRandomId(): String {
        return (1..25).map{(('A'..'Z') + ('a'..'z') + ('0'..'9')).random()}.joinToString("")
    }

    @RequiresApi(Build.VERSION_CODES.O)
    fun getCurrentData(): String? {
        val currentData = LocalDate.now()
        val formatter = DateTimeFormatter.ofPattern("dd-MM-YYY")
        return currentData.format(formatter)


    }

}