
// export default function 컴포넌트명( props ) { }
// JSX란? HTML과 유사한 확장문법
// 주의할점: 리엑트가 만든 가상의HTML(DOM) 
// 차이점 : class -> className, onclick -> onClick
// 실제DOM( 개수한계, 상태없고 )
// 가짜DOM( 새로운 DOM, *상태*(props) 있고 )
export default function MyMarkup( props ) {
    return <div> 내가 만든 마크업/컴포넌트</div>
}