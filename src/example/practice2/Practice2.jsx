import { useState } from "react"
import './Practice2.css'
let count = 3;
export default function Practice2( props ) {
    const [ list, setList ] = useState([
        { id : 1, name : "신동엽", number : "010-7894-7894", age : 50 },
        { id : 2, name : "유재석", number : "010-1234-1234", age : 30 }
    ]);
    const [name, setName ] = useState("");
    const [number, setNumber ] = useState("");
    const [age, setAge ] = useState("");

    const setting = ( ) => { 
        list.push( { id: count, name: name, number: number, age : age } )
        console.log(list);
        count++;
        setList( [...list] );
    }
    const deleteList = (id) => {
        setList(list.filter( (list) => list.id != id))
        console.log(list);
    }
    return (<>
        <h2> 전화번호부 </h2>
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
        
        
        {
            list.map( i => { return (<> 
                <div class ="box">
                    <li> <p class="bold">성명:</p> <p>{i.name}</p>  <p class="bold">연락처:</p> <p >{i.number}</p> <p class="bold">나이:{i.age}</p> </li> 
                    <button class = "delete" onClick={ () => { deleteList(i.id) }}> 삭제 </button>
                </div>
                
                
            </>)})
        }
        <p> 총 {list.length}명 </p>
    </>)
    
}

