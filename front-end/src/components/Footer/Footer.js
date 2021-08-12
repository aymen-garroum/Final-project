import './Footer.css'

import React from 'react'

function Footer() {
    return (
        <div className="div_footer">
            <div className="footer_infos">
                <div>
                    <p style={{textAlign:"left"}}>Laboratoire des papiers chimiques tunisien<br/>
                    Avenue Habib Bourguiba<br/>
                    Zone industrielle de Jedeida<br/>
                    1124 Jedeida<br/>
                    </p>
                </div>

                <div>
                    <p style={{textAlign:"left"}}>Téléphone : 71.539.121 / 71.637.524<br/>
                    Fax : 71.539.388<br/>
                    E-mail : lpct@planet.tn
                    </p>
                </div>
            </div>
            
            <hr style={{width:"10%"}}></hr>

            <p style={{textAlign:'center'}}>Tous les droits sont réservés © Aymen Garroum</p>
        </div>
    )
}

export default Footer
