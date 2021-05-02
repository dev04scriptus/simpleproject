import React from 'react'
import { Home, AboutUs, OurService, Portfolio, Careers, ContactUs, PageNotFound } from '../Components'
import { Switch, Route, } from "react-router-dom";

export default function Routers() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/aboutus" component={AboutUs} />
            <Route exact path="/ourservice" component={OurService} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/careers" component={Careers} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    )
}
