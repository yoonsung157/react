import axios from "axios";
import { useEffect, useState } from "react";

export default function Yoon( props ) {
    const [myJSON, setMyJSON ] = useState([]);
    useEffect(async function() {
        const response = await axios.get("https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/categories")
        const data = response.data;
        setMyJSON( data );
    }, []);

    let trTag = myJSON.map( data => {
        return (
            <ul>
                <li> {data.name} </li>
            </ul>
        );
    });
    return (<> 
        <div>
            <h2> 최윤성 </h2>
            <table border='1'>
                <thead>
                    <tr>
                        <td style={ { background : "#ebebeb", width : "80px", padding: "10px" }}>학과</td><td>컴퓨터공학과</td>
                    </tr>
                    <tr>
                        <td style={ { background : "#ebebeb", padding: "10px"}}>자기소개</td><td>안녕하세요</td>
                    </tr>
                </thead>
                <tbody> <td> 카테고리 목록 </td> <td>{trTag}</td></tbody>
            </table>
        </div>
        
    </>)
}