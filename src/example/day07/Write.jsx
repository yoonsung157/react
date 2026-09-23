import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Write() {
    const navigate = useNavigate();

    // 등록함수
    const 등록함수 = async ( event ) => {
        event.preventDefault();
        console.log( event.target.writer.value )
        const obj = {
            name : event.target.writer.value ,
            subject : event.target.title.value,
            content : event.target.contents.value
        }
        // axios
        const response = await axios.post("http://localhost:8080/api", obj)
        const data = response.data;
        if( data == true ) { navigate("/list")}
    }

    return (<>
        <div>
            <h2>게시판-작성</h2>
        </div>
        <nav>
            <Link to="/list">목록</Link>
        </nav>
        <article>
            <form onSubmit={ event => { 등록함수(event) }}>
                작성자 : <input name="writer" /> <br/>
                제목 : <input name="title" /> <br/>
                내용 : <textarea name="contents" rows="3" /> <br/>
                <input type="submit" value="작성" />
            </form>
        </article>
    </>)
}