import { useState } from "react"
const list = [ 
    { name : "신동엽", number : "010-7894-7894", age : 50 },
    { name : "유재석", number : "010-1234-1234", age : 30 }
]

function Box(props) {
    const [ list, setList ] = useState([
        { name : "신동엽", number : "010-7894-7894", age : 50 },
        { name : "유재석", number : "010-1234-1234", age : 30 }
    ]);
    const [name, setName ] = useState("");
    const [number, setNumber ] = useState("");
    const [age, setAge ] = useState("");
    const setting = ( ) => { 
        list.push( { name: name, number: number, age : age } )
    }
    return (<>
        <input 
            placeholder="성명" value={name} 
            onChange={(e) => setName(e.target.value)}>
        </input>
        <input 
            placeholder="연락처 (예: 010-1234-5678)" 
            value={number} onChange={(e) => setNumber(e.target.value)}>

        </input>
        <input placeholder="나이" value={age}
        onChange={(e) => setAge(e.target.value)}></input>
        <button onClick={() => { setting() } }> 등록 </button> 
        
    </>)
}

function List( props ) {
    let count = 0;
    return (<>
        {
            list.map( i => { return (<> 
                <li key = {count++}> 성명:{i.name} 연락처:{i.number} 나이:{i.age} </li>
            </>)})
        }
        
    </>)
}

export default function Practice2( props ) {
    
    return (<>
        <h2> 전화번호부 </h2>
        <Box> </Box>
        <List> </List>
        
    </>)
    
}

