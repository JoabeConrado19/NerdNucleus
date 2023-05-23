import { useNavigate } from "react-router-dom";

import { StyledMainContent } from "./style";
import { useState } from "react";
import ReactPlayer from "react-player";
import { DiscussionEmbed, DisqusThread } from 'disqus-react';




export const AnimeEpMain = (props) => {
  const navigate = useNavigate();
  const [hd, setHd] = useState(true)
  const disqusShortname = 'https-nerdnucleus-vercel-app';
  const disqusConfig = {
    url: `https://nerdnucleus.vercel.app/animes/${props.anime.id}`,
    identifier: props.anime.id,
    title: 'Título do post',
  };

  return (
    <StyledMainContent className="main-content">
      <h2>{props.anime.title}</h2>
    <div className="animePlayer">

      {hd ? (<ReactPlayer className="animePlayer"
      url={props.anime.srcHD}
      controls={true}
      playing={true}
      width="85%"
      height="auto"
      />) : (<ReactPlayer className="animePlayer"
      url={props.anime.srcMedium}
      controls={true}
      playing={true}
      width="85%"
      height="auto"
      />)}

      </div>


      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
     
    </StyledMainContent>
  );
};
