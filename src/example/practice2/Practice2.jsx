import { useState } from "react"

function Box(props) {
    const [ value, setValue ] = useState( 0 );
    const setting = ( ) => { setValue( )}
    return (<>
        <input type="text" name="name"></input>
        <input type="text" id="number"></input>
        <input type="text"></input>
        <button onClick={() => console.log(name)}> 등록 </button> 
        
    </>)
}

export default function Practice2( props ) {
    
    return (<>
        <h2> 전화번호부 </h2>
        <Box> </Box>
        
    </>)
    
}

