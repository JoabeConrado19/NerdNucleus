import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Header } from "../components/Header"
import { StyledHeader } from "../components/Header/style"
import { FeaturedPosts } from "../components/MainPage/Featured Posts"
import { MainContent } from "../components/MainPage/MainContent"
import api from "../services/api"
import {AnimeListMain} from '../components/AnimesListMain/index'

export const AnimesList = (props) => {

    const [animes, setAnimes] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);



    
    useEffect(() => {
        console.log("fazendo requisição")
        setLoading(true)
    
            api
                .get(`/animes/`)
                .then((response) => {
                    setAnimes([...response.data.results])
                    console.log(response.data.results)
                    console.log('rodando api1')
                    setLoading(false)
                })
    
        

        
    }, [])

    if (animes.length <= 1) {
        return <div className="preloader-container"><div class="c-loader"></div></div>;
    }

    return (
        <>
            <Header/>
            <AnimeListMain loading={loading} animes={animes}/>
            
           

        </>
    )
}