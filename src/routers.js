import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from "./pages/LinksPage";
import {CreatePage} from "./pages/CreatePage";
import {DetailPage} from "./pages/DetailsPage";
import {AuthPage} from "./pages/AuthPages";


export const useRouters = isAuthenticated =>{
    if(isAuthenticated){
        return(
            <Switch>
                <Route path={"/links"} exact>
                    <LinksPage />
                </Route>
                <Route path={"/create"} exact>
                    <CreatePage />
                </Route>
                <Route path={"/detail/:id"} exact>
                    <DetailPage />
                </Route>
                <Redirect to={"/create"}/>
            </Switch>
        )
    }
    return(
        <Switch>
            <Route path={"/"} exact>
                <AuthPage/>
            </Route>
            <Redirect to={"/"}/>
        </Switch>
    )
}