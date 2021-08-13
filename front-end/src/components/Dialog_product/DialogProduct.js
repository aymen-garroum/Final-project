import './Dialog_product.css'
import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {add_product} from '../../JS/actions/product_actions'

function DialogProduct() {

    const [nom, SetNom] = useState("");
    const [desc, SetDesc] = useState("");
    const [imgFile, SetImgFile] = useState({nom:"",data:""});
    const [ficheFile, SetFicheFile] = useState({nom:"",data:""});

    const dispatch = useDispatch()

    const update_fiche = (e) => {

        const name = e.target.files[0].name

        let reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);

        reader.onload = (e) => {SetFicheFile({nom: name, data: e.target.result})}

    }

    const update_img = (e) =>{

        const name = e.target.files[0].name

        let reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);

        reader.onload = (e) => {SetImgFile({nom: name, data: e.target.result})}

    }

    const ajouter_produit = () =>{

        const produit = {nom: nom, descriptif: desc, image: imgFile, fiche: ficheFile}

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
                <input onChange={(e)=>{update_img(e)}} type="file" accept="image/*"/>
            </div>

            <div className="div_form_dialog">
                <label>Fiche technique</label>
                <input onChange={(e)=>{update_fiche(e)}} type="file" accept=".pdf"/>
            </div>

            <button onClick={()=>{ajouter_produit()}}>Ajouter</button>
        </dialog>
    )
}

export default DialogProduct
