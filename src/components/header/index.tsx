import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';


interface HeaderProps{
    title: string,
}
const Header:React.FC<HeaderProps> = (props) => {
    return(
        <div id="container-header">
            <header className="page-header-container">
                <div className="container-title-header">
                    <h1 className="title-page">{props.title}</h1>
                </div>
                <div className="container-buttons-header">
                    <Link className="link" to="/cadastro" >Cadastrar</Link>
                    <div id="espacamento"/>
                    <button>
                        <Link className="link" to="/login">Entrar</Link>
                    </button>
                        
                    
                </div>

            </header>
        </div>
    )
}

export default Header;