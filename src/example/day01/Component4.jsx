function FrontComp(props) {
    const liRows = [];
    for(let i = 0; i < props.propData1.length; i++) {
        liRows.push(
            <li key={i}>{props.propData1[i]}</li>
        );
    }
    return (<> 
        <li>{props.frTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}
const BackComp = ({propData2, baTitle}) => {
    const liRows = [];
    let keyCnt=0;
    for(let row of propData2) {
        liRows.push(
            <li key={keyCnt++}>{row}</li>
        );
    }
    return (<>
        <li>{baTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}
export default function Component4() {
    // *추후에 연동할 벡엔드와 통신 AXIOS*
    const frontData = ['html5', 'css3', 'javascript', 'jquery'];
    const backData = ['java', 'oracle', 'jsp', 'spring boot'];
    return (<>
        <div>
            <h2> React-Props </h2>
            <ol>
                <FrontComp propData1={frontData} frTitle="프론트엔드"></FrontComp>
                <BackComp propData2={backData} baTitle="백엔드"/>
            </ol>
        </div>
    </>)
}