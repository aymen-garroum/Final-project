import './Card.css'

import React from 'react'

function Card(product) {
    return (
        
        <div className="div_card">
            {console.log(product)}

            <img className="img_card" src="https://www.labelado.com/media/filer_public_thumbnails/filer_public/c4/dd/c4dd893c-10d0-4737-bab6-6c2c6972b721/water-resistant-glossy-paper.jpg__450x0_q95_crop_subsampling-2_upscale.jpg" alt="Can't access to path"/>
            <div className="footer_card">
                <span className="product_name">{product.product.nom}</span>
                <span className="button_info">Plus d'infos</span>
            </div>
        </div>
    )
}

export default Card
