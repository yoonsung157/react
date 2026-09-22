export default function ArticleWrite(props) {
    return (
        <article>
            <form onSubmit={(event) => {
                event.preventDefault();

                const form = event.currentTarget;
                const title = form.title.value;
                const writer = form.writer.value;
                const contents = form.contents.value;

                props.writeAction(title, writer, contents);
            }}>
                <table id ="boardTable">
                    <tbody>
                        <tr>
                            <th>작성자</th>
                            <td>
                                <input type="text" name="writer" />
                            </td>
                        </tr>
                        <tr>
                            <th>제목</th>
                            <td>
                                <input type="text" name="title" />
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <textarea name="contents" cols="22" rows="3"></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" value="전송" />
            </form>
        </article>
    );
}