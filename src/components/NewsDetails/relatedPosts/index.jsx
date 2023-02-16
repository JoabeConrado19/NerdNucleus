import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import {RelatedPostsStyles } from "./style"

export const RelatedPosts = (props) => {
    const navigate = useNavigate()
    const [RelatedPosts, setRelatedPosts] = useState([])

    function GetPosts() {
        
        api
            .get(`/news/?category=${props.post.category}`)
            .then((response) => {
                setRelatedPosts([...response.data.results])
                console.log(response.data.results)

            })

    
    
    }


    useEffect(() => {

        GetPosts()
    }, [])


    return (

        <RelatedPostsStyles>
           <h1>Relacionados</h1>
           <ul>
           {RelatedPosts.map((element, index) => {
                        if (RelatedPosts) {
                            return (
                                <li className="Related-Card" style={{ backgroundImage: `Url(${element.thumb})` }}>
                                    <div>
                                        <h2>{element.title}</h2>
                                        <p>{element.date}</p>
                                    </div>
                                </li>
                            )
                        }
                    }
                    )}
           </ul>
        </RelatedPostsStyles>

    )
}