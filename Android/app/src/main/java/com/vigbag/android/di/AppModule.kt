package com.vigbag.android.di

import com.vigbag.android.repository.ProductRepository
import com.vigbag.android.viewmodel.ProductViewModel
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module


val viewModelModule = module {
    viewModel {
        ProductViewModel(get())
    }
}

val repositoryModule = module {
    single {
        ProductRepository()
    }
}

