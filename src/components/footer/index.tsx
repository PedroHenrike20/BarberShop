import React from 'react';
import './styles.css';
import LogoFooter from '../../assets/imagens/logonm.png';
import {Link} from 'react-router-dom';

function Footer(){
    return(
        <div id="footer-container">
            <footer className="page-footer-container">
                <div className="container-logo">
                    <Link to="/">
                        <img src={LogoFooter} className="LogoFooter" alt="Logo"/>
                    </Link>
                </div>
            </footer>
        </div>

    );
}

export default Footer;