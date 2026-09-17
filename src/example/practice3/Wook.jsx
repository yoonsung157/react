import './wook.css'
import { Link } from "react-router-dom";
export default function Wook(props){
    return (<>
        <div>
            <h2>서현욱</h2>
            <table>
                <tbody>
                    <tr className="aaa"> 
                        <td>학과</td> 
                        <td>컴퓨터공학과</td> 
                    </tr> 

                    <tr className="aaa"> 
                        <td>자기소개</td> 
                        <td>안녕하세요~</td> 
                    </tr>
                </tbody>
            </table>

            <Link to="/">홈으로</Link>
        </div>
    </>)
}