const express = require("express")
const router = express.Router()
const Product = require('../models/product')

router.get('/produits', (req,res)=> {
    Product.find({},(err, docs)=>{
        if(err){res.send(`L'erreur suivante est survenue ${err}`)}
        res.send(docs)
    })
})

router.post('/data_manage', async(req,res) => {
    try{let new_product = await new Product({nom: req.body.nom,
        descriptif: req.body.descriptif,
        image: {nom: req.body.image.nom, data: req.body.image.data},
        fiche: {nom: req.body.fiche.nom, data: req.body.fiche.data}})

        await new_product.save((err,docs)=>{
            res.send("Produit ajouté avec succès")
        })
        }   
    catch(err){
        res.send(`L'erreur suivante est survenue ${err}`)
    }
})

router.delete('/data_manage/:id', async(req,res) =>{
    try{ const found_product = await Product.findByIdAndDelete(req.params.id, (err,docs)=> {
        if(docs){res.send("Produit supprimé avec succès")}
    })
    }
    catch(err){res.send(`L'erreur suivante est survenue ${err}`)}    
})

router.put('/data_manage/:productID', async(req,res) =>{
    try{ const found_product = await Product.findById(req.params.productID)
        if(req.body.nom){found_product.nom = req.body.nom}
        if(req.body.descriptif){found_product.descriptif = req.body.descriptif}
        if(req.body.image.data){found_product.image = req.body.image.data}
        if(req.body.fiche.data){found_product.fiche = req.body.fiche.data}

        await found_product.save()
        res.send("Produit modifié avec succès")

    }
    catch(err){res.send(`L'erreur suivante est survenue ${err}`)}
})

module.exports = router