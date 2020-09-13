import React from 'react'
import ImgFundo from '../../assets/imagens/completo.png';

import './styles.css';
import Header from '../../components/header';
import Footer from '../../components/footer';


interface Props {
    title: string,
}
const Home: React.FC<Props> = (props) =>{
    
    return(
        
        <div id="page-home">
            <Header title={props.title}/>
            <div className="conteudo-page-home">
                {props.children}
            </div>
            <div id="page-home-content"> 
                <img src={ImgFundo} alt="Logo fundo"/>
            </div>
            <Footer/>           
        </div>       
    )
        
}
export default Home;