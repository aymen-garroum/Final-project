import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function Header() {

    const [show, Setshow] = useState(false)

    return (
        <div className="div_header">

            <div className="div_logo_menu">

            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 160 160">
                <g>
                    <g className="logo_svg" fill="white" fillOpacity="1" stroke="#000" strokeOpacity="0" transform="translate(-5.356 -44.643)">
                    <g strokeWidth="1.337" imageRendering="auto" transform="translate(-13.13 -59.792)">
                    <rect width="148.663" height="13.663" x="23.799" y="245.46" ry="0"></rect>
                    <rect width="148.663" height="13.663" x="-259.124" y="-37.462" ry="0" transform="matrix(0 -1 -1 0 0 0)"></rect></g>
                    <g transform="translate(-.97 -.56)"> <path strokeWidth="0.951" d="M41.445 51.036H160.494V65.08500000000001H41.445z"></path>
                    <path strokeWidth="0.951" d="M41.445 81.261H160.494V95.31H41.445z"></path>
                    <path strokeWidth="0.726" d="M-95.31 146.219H-51.036V160.493H-95.31z" transform="rotate(-90)"></path></g>
                    <g transform="translate(-1.777 -.474)"><path strokeWidth="0.844" d="M42.228 110.925H93.884V125.08H42.228z"></path>
                    <path strokeWidth="0.844" d="M42.228 155.868H93.884V170.023H42.228z"></path>
                    <path strokeWidth="0.901" d="M-170.024 42.228H-110.92500000000001V56.327H-170.024z" transform="rotate(-90)"></path></g>
                    <g> <path strokeWidth="0.844" d="M107.922 110.422H159.578V124.578H107.922z"></path>
                    <path strokeWidth="0.901" d="M-169.549 126.701H-110.45000000000002V140.79999999999998H-169.549z" transform="rotate(-90)"></path></g></g>
                </g>
            </svg>

            <span onClick={() => Setshow(!show)} className="menu_icon">≡</span>

            </div>

            <div className={show ? "liste_menu_responsive": "liste_menu"}>
                <Link className="header_links" to="/">Accueil</Link>
                <Link className="header_links" to="/produits">Produits</Link>
                <Link className="header_links" to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Header
