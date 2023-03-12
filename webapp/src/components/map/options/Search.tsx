function Search() {

    function searchMarker() {
        console.log("TODO")
    }

    return (
        <div>
            <h2>Search</h2>
            <div id="searchPanel">
                <input type="text" id="searchText" placeholder="Type to search..."/>
                <input type="button" id="searchButton" value="🔍" onClick={searchMarker}/>
            </div>
        </div>
    )
}

export default Search