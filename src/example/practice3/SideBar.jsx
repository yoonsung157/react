import { NavLink } from "react-router-dom";
import './sidebar.css'
export default function SideBar( props ) {
    return (<> 
        <div style={ {display: "flex", flexDirection : "column", width : "200px" ,
            background : "#383141", height : "800px"
        } }>
            <NavLink to = "/home" > 팀 프로젝트 </NavLink>
            <NavLink to = "/yoon"> 최윤성 </NavLink>
            <NavLink to = "/kimdoodoo"> 김두두 </NavLink>
            <NavLink to = "/wook"> 욱 </NavLink>
        </div>
    </>)
}