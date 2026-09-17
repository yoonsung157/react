import axios from "axios";


const PostProduct = async(product) => {
    await axios.post("https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/products", product)

}




const Kimdoodoo = () => {    
    return(<>
        <div>
            <h2> 김두현 </h2>
            <table>
                <tr>
                    <td style={ { background : "#ebebeb", width : "80px", padding: "10px" }}> 학과 </td> <td> 컴퓨터공학과 </td>
                </tr>
                <tr>
                    <td style={ { background : "#ebebeb", padding: "10px"}}> 자기소개 </td> <td> 관계라는 건 대단한 게 아니다. 대부분은 적당한 거짓말과 침묵으로 유지된다. </td>
                </tr>
                <tr>
                    <td style={ { background : "#ebebeb", padding: "10px"}}> 제품등록폼 </td>
                    <td>
                        <form onSubmit={(event)=>{
                            const product = {"name": event.target.productName.value, "price": event.target.price.value, "cno": event.target.categoryNo.value}
                            console.log(product);
                            event.preventDefault();
                            PostProduct(product);
                        }}>
                            <input placeholder="제품명 (예: 기계식 키보드)" name="productName"></input>
                            <input placeholder="가격 (예: 45000)" name="price"></input>
                            <input placeholder="카테고리번호(cno) (예: 1)" name="categoryNo"></input>
                            <input type="submit"></input>
                        </form>

                    </td>
                </tr>
            </table>
        </div>
    </>)
}

export default Kimdoodoo;