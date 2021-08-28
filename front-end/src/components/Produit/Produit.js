import React from 'react'
import "./Produit.css"
import {useSelector} from 'react-redux'

function Produit(props) {

    const liste = useSelector(state => state)

    const id = props.produit.match.params.id_produit

    const produit = liste.find(el=> {return el._id === id})

    const open_pdf = (e) => {
        e.preventDefault()
        const win = window.open();
        win.document.write('<iframe src="' + e.target.href + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')
    }

    return (
        <div className="div_description">
            <img style={{width:"100%"}} src={produit.image.data} alt="Can't access to path"></img>
            <h1 style={{color: "#6d747c"}}>PRODUIT : {produit.nom}</h1>
            <p className="desc_div_produit"><strong>Description et applications : </strong>{produit.descriptif}</p>
            <p className="ft_div_produit"><strong>Fiche technique : </strong><a onClick={e=>{open_pdf(e)}} href={produit.fiche.data} rel="noopener noreferrer" type="application/pdf">{produit.fiche.nom}</a></p>
            
        </div>
    )
}

export default Produit
