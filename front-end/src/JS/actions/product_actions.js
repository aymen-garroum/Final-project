import { GET_PRODUCT, GET_PRODUCTS } from "../constants/action_types";
import axios from 'axios'


export const get_products = () => (dispatch) => {
    axios.get("/produits")
        .then((res) => dispatch({type: GET_PRODUCTS, payload: res.data}))
        .catch(err=>{console.log(err)})
    }


export const add_product = (produit) => (dispatch) => {
    axios.post("/data_manage", produit)
        // .then(() => dispatch(get_products()))
        .then(res => console.log(res))
        .catch(err => console.log(err))       
}
