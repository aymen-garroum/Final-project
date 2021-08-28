
import {Slide} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './Home.css'
import image_1 from './papier-1.jpg'
import image_2 from './papier-2.jpg'
import image_3 from './lpct_img1.jpg'
import img_qualite from './photo-qualite.png'
import img_respons from './photo-responsabilite.png'
import img_confiance from './photo-confiance.png'
import img_boussa from './imprimerie-boussaa.jpg'
import img_focus from './focus-graphics.jpg'
import img_simpact from './imprimerie-simpact.png'
import img_yamama from './imprimerie-yamama.png'
import img_chahmi from './all-print-chahmi.png'
import img_art_couleurs from './imprimerie-art-couleurs.png'
import React from 'react'

function Home() {
    return (
        <div className="div_home">

            <div className="slide">
            <Slide easing="ease">
                <div className="each-slide">
                    <div style={{backgroundImage: `url(${image_3})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{backgroundImage: `url(${image_1})`}}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{backgroundImage: `url(${image_2})`}}>
                    </div>
                </div>
            </Slide>
            </div>

            <div className="bande">
                <h1>La société</h1>
            </div>

            <p className="presentation">Fort de plus de 40 ans d’expérience, la société LPCT est aujourd’hui un acteur majeur de la distribution de papiers d’impression et cartons d’emballage en Tunisie.<br/> 
                Basée à la zone industrielle de Jedeida à Mannouba, nous sommes au service de centaines de clients et proposons une gamme riche de produits, pouvant répondre à tous types de besoins et même les plus spécifiques.<br/> 
                Souhaitant répondre à vos besoins, notre engagement vise à vous apporter le support d’impression et d’emballage répondant à votre besoin et ce, quelque soit votre secteur d’activité ou votre lieu d’implantation.<br/> 
                Nous avons ainsi développé de multiples partenariats internationaux avec les producteurs les plus performants du secteur pour vous offrir des produits aux normes internationales et à la pointe de la technologie.<br/>  
                Les besoins de chaque client étant unique, la LPCT s’engage à fournir un service spécifique adaptés à vos besoins, tel est notre Engagement Qualité.
            </p>

            <div className="bande">
                <h1>Nos valeurs</h1>
            </div>

            <div className="div_contents">
                <div className="card_valeurs">
                    <h1>Confiance</h1>
                    <img className="img_valeurs" src={img_confiance} alt="Error"/>
                </div>
                <div className="card_valeurs">
                    <h1>Responsabilité</h1>
                    <img className="img_valeurs" src={img_respons} alt="Error"/>
                </div>
                <div className="card_valeurs">
                    <h1>Qualité</h1>
                    <img className="img_valeurs" src={img_qualite} alt="Error"/>
                </div>
            </div>

            <div className="bande">
                <h1>Nos références</h1>
            </div>

            <div className="div_contents">
                
                <div className="card_ref">
                    <h1>Imprimerie Boussaa</h1>
                    <img style={{width:"15%"}} src={img_boussa} alt="Error"/>
                </div>

                <div className="card_ref">
                    <h1>Groupe El-Yamama</h1>
                    <img style={{width:"20%"}} src={img_yamama} alt="Error"/>
                </div>

                <div className="card_ref">
                    <h1>Imprimerie Simpact</h1>
                    <img style={{width:"40%"}} src={img_simpact} alt="Error"/>
                </div>

                <div className="card_ref">
                    <h1>Imprimerie Art et Couleurs</h1>
                    <img style={{width:"50%"}} src={img_art_couleurs} alt="Error"/>
                </div>

                <div className="card_ref">
                    <h1>Focus Graphics</h1>
                    <img style={{width:"40%"}} src={img_focus} alt="Error"/>
                </div>

                <div className="card_ref">
                    <h1>All Print Chahmi</h1>
                    <img style={{width:"50%"}} src={img_chahmi} alt="Error"/>
                </div>

                


            </div>

        </div>
    )
}

export default Home
