import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { StyledHeader } from "../components/Header/style"
import { FeaturedPosts } from "../components/MainPage/Featured Posts"
import { MainContent } from "../components/MainPage/MainContent"
import { SingleNewsMain } from "../components/NewsDetails"
import api from "../services/api"

export const SingleNews = (props) => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    function GetPosts() {

        api
            .get(`/news/${id}`)
            .then((response) => {
                setPost(response.data)
                console.log(response.data)

            })
    }

    useEffect(() => {

        GetPosts()
    }, [])

    if (!post) {
        return <div className="preloader-container"><div class="c-loader"></div></div>;
    }

    // const [posts, setPosts] = useState([{}]);

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
            <SingleNewsMain post={post}/>
        </>
    )
}