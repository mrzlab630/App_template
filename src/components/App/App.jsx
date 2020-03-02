import React from "react";
import { Switch ,Redirect,useLocation } from 'react-router-dom';
import {createStore} from '../../store/';


import Switcher from '../../routing/client/Switcher';
import {InfoInConsole} from '../../utilities';
import {Provider} from "react-redux";
import useEffectAsync from '../../hooks/useEffectAsync';
import {getPagesFromAPI} from '../../store/actions';


const App = () => {

    InfoInConsole();

    let location = useLocation();

    const store = createStore;

    const state = store && store.getState() || false;
    const {fatalError:{message:fatalErrorMessage}} = state || false;

    if(fatalErrorMessage){
        console.error(`Error`,fatalErrorMessage);
    }

  //  console.log('App',{props,store,state,location:location.pathname});



    useEffectAsync(async () => {

        const urlParam = location && location.pathname ? location.pathname.split('/')  : false;
        const params = !urlParam[1] || urlParam[1].length === 0 ? 'home' : urlParam[1];


         await getPagesFromAPI(params)(store.dispatch);

    }, [location]);




    return(
        <Provider store={store}>
        <Switch>
        {
            Switcher(location)
        }
        <Redirect to="/Error404"/>
    </Switch>
        </Provider>
    )


};

export default App;