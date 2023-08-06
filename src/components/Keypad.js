

function Keypad (){
    function handleChange() {
        console.log("Entering password...");
    }
    return (
        <div>
            <input
            onChange={handleChange}
            type="password"
            placeholder="password"/>



        </div>
    )
}

export default Keypad;