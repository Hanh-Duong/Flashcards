import { useState } from "react";
import Menu from "./Menu";
function Cards(props){
    const [isOpen, setIsOpen] = useState(false);
    function handleClick(event){
        setIsOpen(!isOpen);
    }
    return (
        <div className="menubar">
            <h1 onClick={handleClick}>Finnish</h1>
            {isOpen && <Card/>}
        </div>
    )
}
export default Menubar;