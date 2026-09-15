import FrontComp2 from "./FrontComp2";
import { useState } from "react";
import BackComp2 from "./BackComp2";
function Component3() {
    const [mode, setMode] = useState('both');
    const handleSetMode = (mode) => {
        setMode(mode);
    };
    let contents = '';
    if(mode === 'front') {
        contents = <>
            <FrontComp2 onSetMode={(mode)=> {
                setMode(mode);
            }}> </FrontComp2>
        </>
    }
    else if(mode === 'back') {
        contents = <>
            <BackComp2 setMode={setMode} />
        </>
    }
    else {
        contents = <>
            <FrontComp2 onSetMode={(mode) => {
                handleSetMode(mode);
            }}> </FrontComp2>
            <BackComp2 setMode={handleSetMode} />
        </>
    }
    return (<>
        <h2><a href="/" onClick={(event) => {
            event.preventDefault();
            setMode('both');
        }}> React-state </a></h2>
        <ol>
            {contents}
        </ol>
    </>)
}
export default Component3