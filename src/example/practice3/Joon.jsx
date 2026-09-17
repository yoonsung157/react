import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios";


function ProductFindAll(props){

    const [myJSON, setMyJSON] = useState([]);

    useEffect(() => {async function fetchProducts(){
            const response = await axios.get("https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/products")
            const data = response.data;
            setMyJSON(data);

        }
            fetchProducts();
    }, []);

    let trTag = myJSON.map((data) => {
        return(
            <tr key={data.bno}>
                <td>{data.bno}</td>
                <td>{data.categoryname}</td>
                <td>{data.name}</td>
                <td>{data.price}</td> 
            </tr>
        );
    });

    return(<>
        {trTag}
    </>)

}






const Joon = () => {
    return(<>
    <div>
        <h2>안현준</h2>
            <table border='1'>
                <tbody >
                    <tr> 
                        <td style={{border: '1px solid black'}}>학과</td> 
                        <td style={{border: '1px solid black'}}>컴퓨터공학과</td> 
                    </tr> 

                    <tr> 
                        <td style={{border: '1px solid black'}}>자기소개</td> 
                        <td style={{border: '1px solid black'}}>안녕하세요~</td> 
                    </tr>

                     <tr> 
                        <td style={{border: '1px solid black'}}>제품 목록</td> 
                        <td style={{border: '1px solid black'}}>
                            <table border='1'>
                                <tbody>
                                    <tr>
                                        <td>bno</td>
                                        <td>카테고리</td>
                                        <td>상품명</td>
                                        <td>가격</td> 
                                    </tr>
                                    <ProductFindAll></ProductFindAll>
                                    
                                </tbody>
                            </table>
                            </td> 
                    </tr>
                </tbody>
            </table>

            <Link to="/">홈으로</Link>
        </div>
    </>)
}

export default Joon