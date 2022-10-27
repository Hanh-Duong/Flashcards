function Button(props){
    function handleClick(event){
        console.log("Great! You're in!");
        alert("Great! You're in!")}
    return (
        <button className="button" onClick={handleClick}>Let's get started!</button>
    )
}
export default Button;