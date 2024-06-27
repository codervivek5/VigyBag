package com.vigbag.android.application

import android.app.Application
import com.vigbag.android.di.repositoryModule
import com.vigbag.android.di.viewModelModule
import org.koin.android.ext.koin.androidContext
import org.koin.android.ext.koin.androidLogger
import org.koin.core.context.startKoin

class App : Application() {

    override fun onCreate() {
        super.onCreate()
        instance = this

        startKoin {
            androidContext(this@App)
            androidLogger()
            modules(viewModelModule, repositoryModule)
        }
    }

    companion object {
        lateinit var instance: App
    }

}