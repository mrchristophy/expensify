import {BrowserRouter, Link, NavLink, Route, Switch} from "react-router-dom";
import React from "react";
import Header from "../components/Header";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import ExpenseCreatePage from "../components/ExpenseCreatePage";
import ExpenseEditPage from "../components/ExpenseEditPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
    <BrowserRouter>

        <div>
            <Header/>
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashboardPage}/>
                <Route path="/create" exact={true} component={ExpenseCreatePage}/>
                <Route path="/edit/:id" exact={true} component={ExpenseEditPage}/>
                <Route path="/help" exact={true} component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>

    </BrowserRouter>
);

export default AppRouter;