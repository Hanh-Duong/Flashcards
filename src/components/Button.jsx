import React from "react";
import {Link} from "react-router-dom";

export default function Button() {
    return (
        <button className="button">
            <Link to="/Lessons">Let's get started!</Link>
        </button>
    )
}
