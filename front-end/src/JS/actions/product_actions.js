import { GET_PRODUCTS } from "../constants/action_types";
import axios from 'axios'


export const get_products = () => (dispatch) => {
    axios.get("/produits")
        .then((res) => dispatch({type: GET_PRODUCTS, payload: res.data}))
        .catch(err=>{console.log(err)})
    }


export const add_product = (produit) => (dispatch) => {
    axios.post("/data_manage", produit)
        .then(res => console.log(res))
        .then(() => dispatch(get_products()))
        .catch(err => console.log(err))       
}

export const delete_product = (id) => (dispatch) => {
    axios.delete(`/data_manage/${id}`)
        .then(res => console.log(res))
        .then(() => dispatch(get_products()))
        .catch(err => console.log(err))
}
