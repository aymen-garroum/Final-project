import './Auth.css'

import React from 'react'

function Auth() {
    return (
        <div className="div_admin">

            <div className="div_form_admin">
            <label for="login">Login</label>
            <input id="login" type="text"></input>
            </div>
            
            <div className="div_form_admin">
            <label for="mdp">Mot de passe</label>
            <input id="mdp" type="password"></input>
            </div>
            
            <div className="div_form_admin">
            <span className="btn_div_admin">S'identifier</span>
            <span className="btn_div_admin">Annuler</span>
            </div>
            
        </div>
    )
}

export default Auth
