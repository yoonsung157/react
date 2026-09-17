import { Link, NavLink } from "react-router-dom"

export default function SideBar(){
    return(<>
    <div>
        
        
        <div style={{backgroundColor:"black", color:"white"}}>
            <div >5팀 프로젝트</div>
            <div>
                <h3>홈</h3>
                <NavLink to="/">home</NavLink>&nbsp;
            </div>

            <div style={{display:"flex", flexDirection:"column"}}>
                <h4>팀원소개</h4>&nbsp;
                <Link to="/Wook">서현욱</Link>&nbsp;
                <NavLink to="/Yoon">최윤성</NavLink>&nbsp;
                <NavLink to="/Kimdoodoo">김두현</NavLink>&nbsp;
                <NavLink to="/Joon">안현준</NavLink>&nbsp;
            </div>
        </div>
    </div>
    </>)
}