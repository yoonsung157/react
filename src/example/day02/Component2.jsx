// 구조분해 : 객체/배열 내 요소들을 각각 변수로 분해
// const { name, age } = {name:'유재석' , age:40}
// console.log(name, age);
// const [ name, setName ] = [ '유재석', function setter(){} ]

import { useState } from "react";

// console.log( name ); setName( );
let 전역변수 = 0; // 함수밖에 변수
export default function Component2( props ) {
    let 지역변수 = 0; // 함수안에 변수
    // 1. 전역변수,지역변수 증가함수 : 내부적으로는 증가 O, 화면으로는 증가 X ( return은 1번만 하니까)
     
    const 증가함수1 = ( ) => {
        전역변수++;
        지역변수++;
        console.log(전역변수, 지역변수);
    }
    
    // 2. useState 함수 이용한 새로고침 ( 함수 재호출 --> 함수 return )
    // const [ 상태변수명, set상태변수명 ] = useState( 초기값 );
    // setXXX( 새로운값 ) : 자동으로 현재 함수/컴포넌트 재실행 <- return 재실행, 지역변수는 초기화
    const [ count , setCount ] = useState( 0 );
    const 증가함수2 = ( ) => { setCount( count+1 ); }

    // 3. 수박 요소 1개를 갖는 배열 초기값으로 상태변수 선언
    // 3(상수 101호) -> 4(상수 102호) : 1+2 => 3(상수 101호), 리터럴은 고정값 <- 상수 / 같이 사용
    // 과일상자(201호)[ 수박(301호) ] ==> 과일상자.push(사과 302호) : 과일상자의 주소값은? 201호
    // 즉) push는 값 변경이 아니다.
    // *** useState 상태(값)의 주소값이 변경되어야만 새로고침이 된다. ***
    // 주로 스프레드연산자 이용하여 배열/객체 복사한다.  ...객체명, ...배열명
    const [ array , setArray ] = useState( ['수박'] );
    // 배열내 '사과' 요수 추가하여 setXXX 배열을 대입한다.
    const 증가함수3 = ( ) => { 
        // array.push('사과'); setArray( array ); console.log( array ); 
        array.push( '사과' ); setArray( [ ...array ] );
    }
    return (<> 
        <h3> 상태 관리 </h3>
        <h4> 전역변수: { 전역변수 } 지역변수 : { 지역변수 } </h4>
        <button onClick={ 증가함수1 }> 버튼1 </button>
        <h4> 상태변수 : { count } </h4>
        <button onClick={ 증가함수2 }> 버튼2 </button>
        <h4> 상태변수 : { array } </h4>
        <button onClick={ 증가함수3 }> 버튼3 </button>
    </>)
}