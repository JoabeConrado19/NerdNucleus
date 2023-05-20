import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { StyledHeader } from "../components/Header/style"
import { FeaturedPosts } from "../components/MainPage/Featured Posts"
import { MainContent } from "../components/MainPage/MainContent"
import api from "../services/api"

export const AnimeEp = (props) => {

    const { nome } = useParams();
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [firstClick, setFirstClick] = useState(false)



    // function nextPage(){
    //     setPage(page + 1)
    // }

    // useEffect(() => {

    //     GetPosts()
    // }, [page])

  
    // if (posts.length <= 1) {
    //     return <div className="preloader-container"><div class="c-loader"></div></div>;
    // }

    


    return (
        <>
            <Header setPosts={setPosts} setFirstClick={setFirstClick}/>

        </>
    )
}