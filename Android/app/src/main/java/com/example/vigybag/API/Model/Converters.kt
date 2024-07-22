//package com.example.vigybag.API.Model
//
//import androidx.room.TypeConverter
//import com.google.gson.Gson
//
//class RatingConverter {
//
//        @TypeConverter
//        fun fromRatingX(ratingX: RatingX?): String? {
//            return Gson().toJson(ratingX)
//        }
//
//        @TypeConverter
//        fun toRatingX(ratingXString: String?): RatingX? {
//            return Gson().fromJson(ratingXString, RatingX::class.java)
//        }
//    }

package com.example.vigybag.API.Model

import androidx.room.TypeConverter
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken

class Converters {

    @TypeConverter
    fun fromRating(rating: Rating?): String? {
        return rating?.let {
            Gson().toJson(it)
        }
    }

    @TypeConverter
    fun toRating(ratingString: String?): Rating? {
        return ratingString?.let {
            val type = object : TypeToken<Rating>() {}.type
            Gson().fromJson(it, type)
        }
    }

    @TypeConverter
        fun fromRatingX(ratingX: RatingX?): String? {
            return Gson().toJson(ratingX)
        }

        @TypeConverter
        fun toRatingX(ratingXString: String?): RatingX? {
            return Gson().fromJson(ratingXString, RatingX::class.java)
        }
}

