import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { StyledHeader } from "../components/Header/style"
import { FeaturedPosts } from "../components/MainPage/Featured Posts"
import { MainContent } from "../components/MainPage/MainContent"
import { SingleNewsMain } from "../components/NewsDetails"
import { RelatedPosts } from "../components/NewsDetails/relatedPosts"
import api from "../services/api"

export const SearchPage = (props) => {
   
    const { param } = useParams();
    const [posts, setPosts] = useState([]);

    function GetPosts() {

        api
            .get(`/news/?title=${param}`)
            .then((response) => {
                setPosts([...response.data.results])
                console.log(response.data.results)

            })
    }

    useEffect(() => {

        GetPosts()
    }, [])

 
   

 


    // function GetPosts (){
    //     api
    //         .get(`/news/`)
    //         .then((response) => {
    //             setPosts(response.data.results)
    //             console.log(posts)

    //         })
    // }

    // useEffect(() => {

    //     GetPosts()
    // })



    return (
        <>
            <Header />
            {/* <div className="search-results">
                <h1>Resultados da pesquisa</h1>
                <ul></ul>
            </div> */}
            <MainContent posts={posts} h2="Resultado da pesquisa"/>
        </>
    )
}