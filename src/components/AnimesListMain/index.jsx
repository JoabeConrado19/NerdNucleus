import { useNavigate } from "react-router-dom";

import { StyledMainContent } from "./style";
import moment from "moment";
import "moment/locale/pt-br";

export const AnimeListMain = (props) => {
  const navigate = useNavigate();

  return (
    <StyledMainContent className="main-content">
      <h2>Lançamentos Recentes: </h2>
      <div className="animes-div">
        <ul>
          {props.animes.map((element, index) => {
            console.log(props.posts);
           
            if (element.title) {
              return (
                <li
                  onClick={() => {
                    navigate(`${element.id}`);
                  }}
                  key={index}
                >
                  <div
                    className="top-anime-card"
                    style={{ backgroundImage: `Url(${element.thumb})` }}
                  >
                    <div>
                        {element.title}
                    </div>

                  </div>
                  <div className="bottom-anime-card">
                    <p>Episódio {element.ep}</p>
                    <span>{moment(element.createdAt)
                                  .locale("pt-br")
                                  .fromNow()}
                    </span>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </StyledMainContent>
  );
};
