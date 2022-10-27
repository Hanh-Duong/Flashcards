const Search = function (props){
    const[searchText, setSearchText]=useState("")
    const handleChange = function (event){
        setSearchText (event.target.value)

    return (<>
        <input 
        type = "Text"
        className="Search"
        onChange = {handleChange}
        value = {text}
        />
        <p></p>
        </>
    );
    }
}