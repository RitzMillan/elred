import {combineReducers} from '@reduxjs/toolkit'
import {categoryData} from './categoryReducer'
import {subcategoryData} from './subcategoryReducer'
import {heightData} from './heightReducer'
import {productData} from './productReducer'
import {popupData} from './popupReducer'
import {addToCartData} from './addToCartReducer'

export default combineReducers({
    categoryData,
    subcategoryData,
    heightData,
    productData,
    popupData,
    addToCartData,
    
})