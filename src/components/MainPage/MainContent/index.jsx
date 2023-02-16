import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api"
import { StyledFeatured, StyledMainContent } from "./style"

export const MainContent = (props) => {
    const navigate = useNavigate()

    return (

        <StyledMainContent className="main-content">
            <div className="container-left">
                <h2>{props.h2}</h2>
                <ul>

                    {props.posts.map((element, index) => {
                        console.log(props.posts)
                        if (element.title) {
                            return (
                                <li onClick={() => { navigate(`noticia/${element.id}`) }} key={index}>
                                    <div className="card-container-left">
                                        <img src={element.thumb} alt="" srcset="" />
                                    </div>
                                    <div className="card-container-right">
                                        <p className="badge">{element.category}</p>
                                        <p className="date">{element.date}</p>
                                        <h5 className="new-title">{element.title}</h5>
                                        <p className="mini-description">{element.subtitle}</p>
                                    </div>
                                </li>
                            )
                        }
                    }
                    )}
                    {props.loading ? (
                        <div className="Pre-loader-bottom-container">
                            <div class="c-loader2"></div>
                        </div>
                    ) : (
                        <div className="SeeMore-Container">
                            <button onClick={() => {
                                props.nextPage()
                            }} className="see-more">Ver Mais!</button></div>

                    )}





                </ul>
            </div>
            <div className="container-right">
                <h2>Siga nossas redes sociais!</h2>
            </div>
        </StyledMainContent>

    )
}