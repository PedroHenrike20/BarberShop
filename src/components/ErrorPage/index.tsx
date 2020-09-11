import React from 'react';
import './styles.css';

function Error(){
    return(
        <div id="conteudo-page-error">
            <div className="conteudo-content">
                <h1>HTTP Error 404</h1>
                <p>Page Not Found on Server!</p>
            </div>
        </div>
    )
}
export default Error;