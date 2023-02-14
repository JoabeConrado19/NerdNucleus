import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { StyledFeatured } from "./style"

export const FeaturedPosts = (props) => {

    const navigate = useNavigate()




    return (
        <StyledFeatured className="featured-container">
            <div className="big-img" onClick={() => { navigate(`noticia/${props.posts[0].id}`) }} style={{ backgroundImage: `Url(${props.posts[0].thumb})` }}>
                <div className="big-img-text">
                    <p>{props.posts[0].date}</p>
                    <h4>{props.posts[0].title}</h4>
                </div>
            </div>
            <div className="mini-img-container">
                <div className="mini-img-container-top">
                {props.posts.map((element, index) => {
                    if(index == 1 || index == 2){
                        return(
                    <div onClick={() => { navigate(`noticia/${element.id}`) }} key={index} className="mini-news" style={{ backgroundImage: `Url(${element.thumb})` }}>
                        <div className="mini-img-text">
                            <p>{element.date}</p>
                            <h4>{element.title}</h4>
                        </div>
                    </div>) }
                    }
                )}

                    

                </div>
                <div className="mini-img-container-bottom">
                {props.posts.map((element, index) => {
                    if(index == 3 || index == 4){
                        return(
                    <div onClick={() => { navigate(`noticia/${element.id}`) }} key={index} className="mini-news" style={{ backgroundImage: `Url(${element.thumb})` }}>
                        <div className="mini-img-text">
                            <p>{element.date}</p>
                            <h4>{element.title}</h4>
                        </div>
                    </div>) }
                    }
                )}
                </div>

            </div>

        </StyledFeatured>
    )
}