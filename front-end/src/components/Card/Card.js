import './Card.css'

import React from 'react'

function Card(product) {

    // const open_pdf = (e) => {
    //     e.preventDefault()
    //     const win = window.open();
    //     win.document.write('<iframe src="' + e.target.href + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')
    // }

    return (
        
        <div className="div_card">

            <img className="img_card" style={{width:"100%", height:"250px"}} src={product.product.image.data} alt="Can't access to path"/>
            <div className="footer_card">
                <span className="product_name">{product.product.nom}</span>
                <span key={product.product._id} className="button_info">Plus d'infos</span>
                {/* <a onClick={e=>{open_pdf(e)}} href={product.product.fiche.data} rel="noopener noreferrer" type="application/pdf">{product.product.fiche.nom}</a> */}
            </div>
        </div>
    )
}

export default Card
