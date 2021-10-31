import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { LoginComponent } from '../auth/LoginComponent';
import { RegisterEstudentsComponent } from '../auth/RegisterEstudentsComponent';
import { RegisterDocentsComponent } from '../auth/RegisterDocentsComponent';
import { MainAsignarComponent } from '../AsignarMaterias/MainAsignarComponent';
import { DashBoardComponent } from '../dashboard/DashBoardComponent';
import { MainDashBoard } from '../dashboard/MainDashBoard';
import { Autenticacion } from '../auth/Autenticacion';
import "../../styles/styles.css"


export const RouterApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={LoginComponent}/>
                <Route exact path="/registerdocentes" component= {RegisterDocentsComponent}/>
                <Route exact path="/registerestudents" component={RegisterEstudentsComponent}/>
                <Route exact path="/asignarmaterias" component={MainAsignarComponent}/>
                <Route exact path="/Dashboard" component={DashBoardComponent}/>
                <Route path="/main" component={MainDashBoard}/>
                <Route path="/" component={Autenticacion}/>
            </Switch>
        </Router>
    );
};