import './Card.css'
import React from 'react'
import {Link} from 'react-router-dom'

function Card(product) {

    return (
        
        <div className="div_card">

            <img className="img_card" style={{width:"100%", height:"250px"}} src={product.product.image.data} alt="Can't access to path"/>
            <div className="footer_card">
                <span className="product_name">{product.product.nom}</span>
                <Link to={`/produits/${product.product._id}`} className="button_info">Plus d'infos</Link>
            </div>
        </div>
    )
}

export default Card
