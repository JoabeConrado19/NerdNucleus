import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { StyledHeader } from "../components/Header/style"
import { FeaturedPosts } from "../components/MainPage/Featured Posts"
import { MainContent } from "../components/MainPage/MainContent"
import api from "../services/api"

export const LandingPage = (props) => {

    const { category } = useParams();
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [firstClick, setFirstClick] = useState(false)


    function GetPosts() {
        
        console.log(category)
        if(firstClick){
            setPosts([])
            setFirstClick(false)
        }
        setLoading(true)
        console.log("fazendo requisição")
        console.log(category)
    if(category != undefined){
        api
            .get(`/news/?category=${category}&page=${page}`)
            .then((response) => {
                setPosts([...posts ,...response.data.results])
                console.log(response.data.results)
                console.log('rodando api1')
                setLoading(false)
            })

    }
    else{
        api
            .get(`/news/?page=${page}`)
            .then((response) => {
                setPosts([...posts ,...response.data.results])
                console.log(response.data.results)
                console.log('rodando api1')
                setLoading(false)
            })

    }
    
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
            <Header setPosts={setPosts} GetPosts={GetPosts} setFirstClick={setFirstClick}/>
            <button onClick={()=>{console.log(category)}}></button>
            <FeaturedPosts posts={posts} />
            <MainContent posts={posts} nextPage={nextPage} loading={loading} />
            
            

        </>
    )
}