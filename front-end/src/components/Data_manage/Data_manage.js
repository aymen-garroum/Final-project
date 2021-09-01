import './Data_manage.css'
import DialogProduct from '../Dialog_product/DialogProduct'
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { delete_product } from '../../JS/actions/product_actions'

import React from 'react'

function Data_manage() {

    const [afficher, SetAfficher] = useState(false)

    const liste_produit = useSelector(state => state)

    const dispatch = useDispatch();

    return (
        <div className="div_manage">
            
            <div className="div_bouton">
            <button className="bouton_new" onClick={()=>{SetAfficher(!afficher)}}>{afficher? "Cacher":"Ajouter"}</button>
            </div>
            
            <div className="div_list">

                {liste_produit.map(el => {return  <div key={el._id} className="div_card">

                                            <img className="img_card" style={{width:"100%", height:"250px"}} src={el.image.data} alt="Can't access to path"/>
                                            <div className="footer_card">
                                            <span className="product_name">{el.nom.toUpperCase()}</span>
                                            <div className="div_bouton_crud"><span id={el._id} onClick={e=> dispatch(delete_product(e.target.id))} className="bouton_crud">Supprimer</span><span className="bouton_crud">Modifier</span></div>
                                            </div>
                                            </div>})}
            </div>
            

            {afficher && <DialogProduct/>}
        
        </div>
    )
}

export default Data_manage
