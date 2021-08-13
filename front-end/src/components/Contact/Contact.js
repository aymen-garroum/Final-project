import React from 'react'
import './Contact.css'

function Contact() {

    // const [societe, SetSociete] = useState("");
    // const [mail, SetEmail] = useState("");
    // const [phone, SetPhone] = useState("");
    // const [request, SetRequest] = useState("");

    return (
        <div className="section_contact">
            <div className="div_coordonnees">
            <p className="coordonnees">Laboratoire des papiers chimiques tunisien<br/>
                    Avenue Habib Bourguiba<br/>
                    Zone industrielle de Jedeida<br/>
                    1124 Jedeida<br/>
                    Téléphone : 71.539.121 / 71.637.524<br/>
                    Fax : 71.539.388<br/>
                    E-mail : lpct@planet.tn
            </p>

            <iframe title="google_maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1596.024172022987!2d9.93735775814434!3d36.865261640882395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd2adb9c9b8ba3%3A0xb1af958b2e97e40a!2sLPCT%20Laboratoires%20Des%20Papiers%20Chimique!5e0!3m2!1sfr!2stn!4v1627376275657!5m2!1sfr!2stn" width="50%" height="210px" style={{border:"5px solid #6d747c"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
            
            {/* <div className="div_contact">
                <div className="div_infos"> 
                    <input type="text" placeholder="Nom ou société"></input>
                    <input type="text" placeholder="Email"></input>
                    <input type="text" placeholder="Télephone"></input>
                </div>
                
                <textarea style={{marginBottom:"2%", border:"solid 1px", borderRadius:"2px", width:"100%", height:"200px"}} placeholder="Message"></textarea>
                <span className="msg_envoyer">Envoyer</span>

            </div> */}
        
        </div>
    )
}

export default Contact
