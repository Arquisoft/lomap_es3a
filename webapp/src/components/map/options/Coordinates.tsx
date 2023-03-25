function Coordinates(){
    return (
        <div>
            <h2>Latitud</h2>
            <input type="text" id="latitude" readOnly={true}/>
            <h2>Longitud</h2>
            <input type="text" id="longitude" readOnly={true}/>
        </div>
    )
}
export default Coordinates