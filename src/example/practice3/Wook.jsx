import axios from "axios";
import { useState } from "react";

export default function Wook(props) {

    // cname은 반드시 Wook 함수 바로 안쪽에 있어야 함
    const [cname, setCname] = useState("");

    const 카테고리등록 = async () => {

        const category = {
            name: cname
        };

        console.log("보내는 데이터:", category);

        try {

            const response = await axios.post(
                "https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/categories",
                category
            );

            console.log("서버 응답:", response.data);

        } catch (error) {

            console.log("에러:", error);
            console.log("서버 에러:", error.response?.data);

        } finally {

            // 성공/실패 상관없이 입력칸 비우기
            setCname("");
        }
    };

    return (
        <>
            <div>

                <h2>서현욱</h2>

                <table>
                    <tbody>

                        <tr>
                            <td style={{ background: "#f8fafc" }}>
                                학과
                            </td>
                            <td>
                                컴퓨터공학과
                            </td>
                        </tr>

                        <tr>
                            <td>
                                자기소개
                            </td>
                            <td>
                                안녕하세요~
                            </td>
                        </tr>

                        <tr>
                            <td>
                                기능 수행
                            </td>

                            <td>
                                <input
                                    type="text"
                                    placeholder="새 카테고리명"
                                    value={cname}
                                    onChange={(e) => {
                                        setCname(e.target.value);
                                    }}
                                />

                                <button onClick={카테고리등록}>
                                    등록
                                </button>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </>
    );
}