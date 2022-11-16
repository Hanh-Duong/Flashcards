import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Menu(props) {
    return (
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Lessons">Lessons</Link></li>
        </ul>
    );
}
export default Menu;