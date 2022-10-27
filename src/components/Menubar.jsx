import { useState } from "react";
import Menu from "./Menu";
function Menubar(props){
    const [isOpen, setIsOpen] = useState(false);
    function handleClick(event){
        setIsOpen(!isOpen);
    }
    return (
        <div className="menubar">
            <button onClick={(handleClick)}>Menu</button>
            {isOpen && <Menu/>}
        </div>
    )
}
export default Menubar;