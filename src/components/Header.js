import {NavLink} from "react-router-dom";
import React from "react";

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ul className="nav">
            <li><NavLink to="/" exact={true}>Dashboard</NavLink></li>
            <li><NavLink to="/create" exact={true}>Create</NavLink></li>
            <li><NavLink to="/help" exact={true}>Help</NavLink></li>
        </ul>
    </header>
);

export default Header;