import _header from "./header_section.js"
import _posts from "./posts_section.js"
import _post_router from "./post.js";
import {Route, BrowserRouter, Routes} from "react-router-dom"
function main() {
    return (
        <>
            <_header></_header>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<_posts></_posts>}></Route>
                        <Route path="/post/:post_idx" element={<_post_router></_post_router>}></Route>
                        <Route path="*" element={<_posts></_posts>}></Route>
                    </Routes>
            </BrowserRouter>
        </>
    );
}

export default main;
