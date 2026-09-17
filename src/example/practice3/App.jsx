
import { Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Yoon from "./Yoon";
import Home from "./Home";
import Kimdoodoo from "./Kimdoodoo";
import Wook from "./Wook";

export default function App( props ) {
    return (<>
        <div style={ { display : "flex"} }>
            <SideBar> </SideBar>
            <Routes>
                <Route path="home" element = { <Home/> } />
                <Route path="yoon" element = { <Yoon/> } />
                <Route path="kimdoodoo" element = { <Kimdoodoo/> } />
                <Route path="/wook" element = { <Wook/> } />
            </Routes>
        </div>
        
    </>)
}