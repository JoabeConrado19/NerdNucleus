import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { AnimeEpMain } from "../components/AnimesEpMain"
import api from "../services/api"

export const AnimeEp = (props) => {

    const { id } = useParams();
    const [anime, setAnime] = useState([]);
    const [loading, setLoading] = useState(false)
    

    useEffect(() => {
        console.log("fazendo requisição")
        setLoading(true)
            api
                .get(`/animes/${id}`)
                .then((response) => {
                    setAnime(response.data)
                    console.log(response.data)
                    console.log('rodando api1')
                    setLoading(false)
                })
    }, [])
    



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
            <Header />
            <AnimeEpMain anime={anime}/>
            
        </>
    )
}