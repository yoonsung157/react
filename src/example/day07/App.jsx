import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import List from "./list";
import Write from "./Write";

export default function App( props ){
    return (<> 
        <Routes>
            <Route path="/list" element={<List></List>} />
            <Route path="Write" element={<Write> </Write> } />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </>);
}