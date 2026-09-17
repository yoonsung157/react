import Home from "./Home";
import SideBar from "./SideBar";
import { Route, Routes } from "react-router-dom";
import Wook from "./Wook";
import Joon from "./Joon";
import Kimdoodoo from "./Kimdoodoo";
import Yoon from "./Yoon";

export default function App(){
    return (<>
    <div style={{display:"flex", flexDirection:"row" , height:"800px"}}>
        <div style={{width:"300px",backgroundColor:"black"}}>
            <SideBar></SideBar>
        </div>

        <div style={{display:"flex", margin:"auto" }}>
            <Routes>
                <Route path="/" element={<Home/>} ></Route>

                <Route path="/Wook" element={<Wook/>} ></Route>
                <Route path="/Yoon" element={<Yoon/>} ></Route>
                <Route path="/Kimdoodoo" element={<Kimdoodoo/>} ></Route>
                <Route path="/Joon" element={<Joon/>} ></Route>

            </Routes>
        </div>
    
    </div>
    </>)
}