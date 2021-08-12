import './Data_manage.css'
import DialogProduct from '../Dialog_product/DialogProduct'
import { useState } from 'react'

import React from 'react'

function Data_manage() {

    const [afficher, SetAfficher] = useState(false)

    return (
        <div className="div_manage">
            
            <div className="div_bouton">
            <button className="bouton_new" onClick={()=>{SetAfficher(!afficher)}}>{afficher? "Cacher":"Ajouter"}</button>
            </div>
            

            <div className="div_list">

            </div>
            

            {afficher && <DialogProduct/>}
        
        </div>
    )
}

export default Data_manage
