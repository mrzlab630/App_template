import React from 'react';
import { Route,Redirect,Switch } from 'react-router-dom';
import appRoutes from '../appRoutes';




const Switcher = (location,login) =>{

    const routeUrls = Object.keys(appRoutes);

    const renderRoutes = routeUrls.map((itm,idx) => {

        if (appRoutes[itm].private) {

            return (
                <Route
                    key={`renderRoutes-${idx}`}
                    path={appRoutes[itm].path}
                    component={login ? appRoutes[itm].component : false}
                    render={!login ? () => <Redirect to={appRoutes[itm].redirect}/> : () => false}
                    strict={appRoutes[itm].strict}
                />

            );
        }

        if (appRoutes[itm].iflogin) {

            return (
                <Route
                    key={`renderRoutes-${idx}`}
                    path={appRoutes[itm].path}
                    component={!login ? appRoutes[itm].component : false}
                    render={login ? () => <Redirect to={appRoutes[itm].redirect}/> : () => false}
                    strict={appRoutes[itm].strict}
                />

            );
        }

            return (<Route
                key={`renderRoutes-${idx}`}
                path={appRoutes[itm].path}
                component={appRoutes[itm].component}
                exact={appRoutes[itm].exact}
                strict={appRoutes[itm].strict}
            />)

    });



    return(
        <Switch location={location}>
            {
                renderRoutes
            }
            <Redirect to="/Error404"/>
        </Switch>
    );
};


export default Switcher;