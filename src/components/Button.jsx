import React from "react";
import {Link} from "react-router-dom";
import '../App.css';

export default function Button() {
    return (
        <button className="button">
            <Link to="/Lessons">Let's get started!</Link>
        </button>
    );
}
