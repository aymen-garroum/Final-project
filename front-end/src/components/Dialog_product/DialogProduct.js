import './Dialog_product.css'
import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {add_product} from '../../JS/actions/product_actions'

function DialogProduct() {

    const [nom, SetNom] = useState("");
    const [desc, SetDesc] = useState("");
    const [imgPath, SetImgPath] = useState("");
    const [fichePath, SetFichePath] = useState("");

    const dispatch = useDispatch()

    const ajouter_produit = () =>{
        // const produit = {nom: nom, description: desc, image: imgPath[0], fiche: fichePath[0]}
        const produit = {nom: nom, descriptif: desc}
        console.log(produit)
        dispatch(add_product(produit))
    }

    return (
        <dialog className="dialog_box" open={true}>

            <div className="div_form_dialog">
                <label>Nom du produit</label>
                <input onChange={(e)=>{SetNom(e.target.value)}} type="text"></input>
            </div>

            <div className="div_form_dialog">
                <label>Description</label>
                <input onChange={(e)=>{SetDesc(e.target.value)}} type="text"></input>
            </div>

            <div className="div_form_dialog">
                <label>Image</label>
                <input onChange={(e)=>{SetImgPath(e.target.files)}} type="file" accept="image/*"/>
            </div>

            <div className="div_form_dialog">
                <label>Fiche technique</label>
                <input onChange={(e)=>{SetFichePath(e.target.files)}} type="file" accept=".pdf"/>
            </div>

            <button onClick={()=>{ajouter_produit()}}>Ajouter</button>
        </dialog>
    )
}

export default DialogProduct
