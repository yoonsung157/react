import axios from "axios";
import { useEffect, useState } from "react";

export default function Yoon( props ) {
    const [myJSON, setMyJSON ] = useState([]);
    useEffect( () =>  {
        async function fetchData() {
            const response = await axios.get("https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/categories")
            const data = response.data;
            setMyJSON( data );
        }
        fetchData();
    }, []);

    let trTag = myJSON.map( data => {
        return (
            <ul>
                <li> {data.name} </li>
            </ul>
        );
    });

    const [mydata, setMyData ] = useState([]);
    useEffect( () => {
        async function fetchData2() {
            const response = await axios.get("https://hrs-requested-previews-terminal.trycloudflare.com/test")
            const items = response.data.response.body.items.item;
            setMyData( items );
        }
        fetchData2();
    }, []);
    let trTag2 = mydata.map( data => {
        return (
            <tr>
                <td> {data.baseDate} </td> <td> {data.baseTime} </td> <td> {data.category}</td>
            </tr>
        )
    })
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
                <tbody> 
                    <tr><td> 카테고리 목록 </td><td>{trTag}</td></tr>
                    <tr>
                        <td>기능 수행</td><tr>
                                            <td>날짜</td><td>시간</td><td>카테고리</td>
                                         </tr>
                                         {trTag2}
                                         
                    </tr>
                
                </tbody>

            </table>
        </div>
        
    </>)
}