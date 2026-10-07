import { Client } from "@stomp/stompjs";
import { useEffect, useRef, useState } from "react";

export default function ChatRoom( props ) {
    // 1. useState 이란? 상태(값) 저장하고 변경시 해당 컴포넌트/함수 재실행/재호출 훅/라이브러리
    // const [변수명, set변수명 ] =  useState(초기값);
    const [message, setMessage ] =  useState(''); // 입력받은 메시지
    const [messages, setMessages ] = useState([]); // 메시지들, 서버로부터 받은 메시지들
    const clientRef = useRef( null );

    //
    useEffect( () => {
        // const client = new Client( { brokerURL : "접속할백엔드브로커주소", onConnect : 접속성공이벤트})
        const client = new Client( { 
            brokerURL : "ws://localhost:8080/ws-chat", // 스프링의 'registerStompEndpoints' 정의 주소와 일치
            onConnect : () => { // 접속 성공하면 실행되는 이벤트/함수
                // 특정 경로 구독 신청
                // client.subscribe( "구독경로", (message) => {메시지 받았을 때} ) // 스프링의 'configureMessageBroker' 정의 주소와 일치
                client.subscribe( "/sub/chat/room/general", (message) => {
                    // 만약에 특정 경로의 구독에서 메시지를 받았을 때
                    // JSON.parse(문자열 -> JS객체 변환) vs JSON.stringify(JS객체 -> 문자열 변환)
                    // axios 통신은 JSON이 기본값으로 자동 변환 지원~
                    messages.push( JSON.parse( message.body ) );
                    setMessages( messages ); // 렌더링
                } )
            }
        })
        // 5. stomp 실행, client.activate()
        client.activate()
        // 6. client 객체 다른 함수(전송함수) 사용하기 위해
        clientRef.current = client;
        // 7. 만약에 컴포넌트 사라지면(사망) , stomp 종료, client.deactivate();
        return () => { client.deactivate(); }
    }, [ ])
    // 2. 전송시 백엔드에게 메시지 보내기
    const sendMessage = (e) => {
        console.log(message);
        // 8. 만약에 소켓객체가 없으면 실패
        if(clientRef.current == null) return;
        // 9. 메시지 전송, client.publish( { destination : "/발행주소" , body : 내용물} )
        const info = {
            type : 'TALK', roomId: "general", sender : "user",
            content : message, date : new Date().toISOString
        }
        clientRef.current.publish( {destination : "/pub/chat/message" , 
            body : JSON.stringify( info ) 
        })
    }

    return (
        <>
            <h3> 채팅방 </h3>
            { messages.map( (msg) => {
                <div>
                    { msg.sender } : { msg.content}
                </div>
            })
            }
            <input value={ message } onChange={ (e) => setMessage( e.target.value )}/>
            <button type="button" onClick={ sendMessage }> 전송 </button>

        </>
    )
}