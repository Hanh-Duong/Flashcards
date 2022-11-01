import React from "react";
import {Link} from "react-router-dom";

function Button(props){
    return (
        <button className="button">
                <Link to="/Lessons">Let's get started!</Link>
            </button>
    )
}
export default Button;