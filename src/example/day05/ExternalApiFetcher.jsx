import axios from "axios";
import { useEffect, useState } from "react";

function RandomUser( props ) {
    const [myJSON, setMyJSON ] = useState({results: [] }); // 객체 안에 빈 배열 속성으로 초기화
    // useEffect( () => { 하고싶은코드 } , [ ] ) // 최초 한 번만 실행
    useEffect(async function() {
        // await axios.HTTP메소드명( "통신할주소" , body값 );
        const response = await axios.get("https://api.randomuser.me?results=5")
        const data = response.data;
        setMyJSON( data );
    }, []);

    let trTag = myJSON.results.map( data => {
        return (
            <tr key={data.login.md5}> 
                <td> {/* <img src={data.picture.thumbnail} alt = {data.login.username} /> */}
                    <img src="/img/너구리.jpg" style={ { height : "80px"}} /></td>
                <td> <a href='/' onClick={ e => {
                    e.preventDefault();
                    props.onProfile(data);
                }}> {data.login.username} </a></td>
                <td> {data.name.title} {data.name.first} {data.name.last} </td>
                <td> {data.nat} </td>
                <td> {data.email} </td>
            </tr>
        );
    });
    return (
        <div>
            <table border='1'>
                <thead>
                    <tr>
                        <th>사진</th><th>로그인</th><th>이름</th>
                        <th>국가</th><th>Email</th>
                    </tr>
                </thead>
                <tbody>{trTag}</tbody>
            </table>
        </div>
    );
}

export default function ExternalApiFetcher() {
    return (<>
        <h2> 외부 서버 통신 </h2>
        <RandomUser onProfile={ sData => {
            console.log(sData);
            let info = `전화번호: ${sData.cell} 성별: ${sData.gender}
                        username: ${sData.login.username} 
                        password: ${sData.login.password}`;
            alert(info);
        }}> </RandomUser>
    </>);
}