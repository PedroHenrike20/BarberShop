import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import Cadastro from './components/Cadastro';
import Login from './components/Login';
import Error from './components/ErrorPage';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact render={(props)=><Home {...props} children={undefined} title="Home"/>}/>
                <Route path="/cadastro" render={(props)=><Home {...props} children={<Cadastro/>} title="Cadastro" />}/>
                <Route path="/login" render={(props)=><Home {...props} children={<Login/>} title="Login" />}/>
                <Route path="*" render={(props)=><Home {...props} children={<Error/>} title="Error"/>} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;