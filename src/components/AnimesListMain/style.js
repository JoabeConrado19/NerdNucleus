import styled from "styled-components";
export const StyledMainContent = styled.div`

h2{
    color: white;
    margin-top: 60px;
    font-size: 26px;
    margin-bottom: 60px;
}

.animes-div{
    height: auto;
}

.animes-div > ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex
}

.animes-div > ul > li{
    min-width: 320px;
    max-width: 320px;
    height: 270px;
    margin-bottom: 0px;
    
}

.top-anime-card{
    height: 80%;
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: 143%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
   
}

.top-anime-card > div{
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(44,44,84,0.7);
    color: white;
    flex-wrap: wrap;
    font-size: 16px;
    word-wrap: break-word;

    
}

.bottom-anime-card{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding: 0 10px;
    color: white;
   
}



.SeeMore-Container{
    display: flex;
    justify-content: center;
}

.see-more{
    height: 40px;
    width: 100%;
    margin: 0 auto;
    font-size: 16px;
    background-color: #2c2c54;
    color: white;
    border: white 2px solid;
    transition: all ease 0.5s;
    border-radius: 5px;
}

.see-more:hover{
background-color: white;
color: #2c2c54;
    
}

.Pre-loader-bottom-container{
display: flex;
justify-content: center;
height: 40px;
margin: 0;
padding: 0;
}


 
  
`;