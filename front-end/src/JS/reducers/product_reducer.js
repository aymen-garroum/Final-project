import {GET_PRODUCTS} from '../constants/action_types'

export const product_reducer = (state = [], action) => {

    switch(action.type)
    {
        case GET_PRODUCTS: return state = action.payload

        default : return state
    }
}