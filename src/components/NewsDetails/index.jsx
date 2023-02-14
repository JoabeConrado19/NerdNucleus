import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {StyledNewsDetailsMain } from "./style"

export const SingleNewsMain = (props) => {
    const navigate = useNavigate()

    return (

        <StyledNewsDetailsMain className="main-content">
           <div className="newsDetailsTitle-container">
                <b><h1>{props.post.title}</h1></b>
                <h3>{props.post.subtitle}</h3>
                <span>{props.post.date}</span>
            </div>
            <div className="BigImgContainer">
                <img src={props.post.thumb} alt="" srcset="" />
            </div>
            <div dangerouslySetInnerHTML={{ __html: props.post.text }} />
        </StyledNewsDetailsMain>

    )
}