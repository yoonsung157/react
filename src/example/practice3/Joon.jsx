import { Link } from "react-router-dom"

const Joon = () => {
    return(<>
    <div>
        <h2>안현준</h2>
            <table >
                <tbody>
                    <tr> 
                        <td style={{border: '1px solid black'}}>학과</td> 
                        <td style={{border: '1px solid black'}}>컴퓨터공학과</td> 
                    </tr> 

                    <tr> 
                        <td style={{border: '1px solid black'}}>자기소개</td> 
                        <td style={{border: '1px solid black'}}>안녕하세요~</td> 
                    </tr>
                </tbody>
            </table>

            <Link to="/">홈으로</Link>
        </div>
    </>)
}

export default Joon