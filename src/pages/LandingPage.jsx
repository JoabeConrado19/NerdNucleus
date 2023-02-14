import { useEffect, useState } from "react"
import { Header } from "../components/Header"
import { StyledHeader } from "../components/Header/style"
import { FeaturedPosts } from "../components/MainPage/Featured Posts"
import { MainContent } from "../components/MainPage/MainContent"
import api from "../services/api"

export const LandingPage = () => {

    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);


    function GetPosts() {
        setLoading(true)
        console.log("fazendo requisição")
    
        api
            .get(`/news/?page=${page}`)
            .then((response) => {
                setPosts([...posts ,...response.data.results])
                console.log(posts)
                setLoading(false)

                


            })
    }

    function nextPage(){
        setPage(page + 1)
    }

    useEffect(() => {

        GetPosts()
    }, [page])

  
    if (posts.length <= 1) {
        return <div className="preloader-container"><div class="c-loader"></div></div>;
    }

    


    return (
        <>
            <Header />
            <FeaturedPosts posts={posts} />
            <MainContent posts={posts} nextPage={nextPage} loading={loading} />
            
            

        </>
    )
}