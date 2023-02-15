import styled from "styled-components";
export const StyledNewsDetailsMain = styled.div`

.newsDetailsTitle-container{
      width: 85%;
      margin: 50px auto;
    
      h1{
        color: white;
        font-size: 36px;
      }
      
      h3{
        color: #EAEAEA;
        font-size: 26px;
        margin-top: 40px;
        margin-bottom: 10px;
        font-weight: 400;
      }

      span{
       color: #EAEAEA;
       font-size: 18px;

      }

      

}

.BigImgContainer{
    display: flex;
    margin-left: 100px ;
}

.BigImgContainer > img{
  width: 75%;
}

.content-left{
  background: #2c2c54;
  border-radius: 4px;
  padding: 20px;
  width: 50%;
  margin-left: 100px;
}

.content-left > p{
  color: white;
  margin: 30px 0 30px 0;


}

.content-left > ul > li{
  margin: 30px 0 30px 0;

}

.content-left > ul > li > a{
  color: white;
  pointer-events: none;
}

.content-left > ul > li > p > a{
  color: white;
  pointer-events: none;
}

.content-left{
  color: white;
  font-size: 24px;
  line-height: 27px;
  margin-top: 70px;

}


.content-left > p > a{
  color: white;
  pointer-events: none;
}

.content-left > :nth-last-child(-n + 4) {
  display: none;
}

.content-left > figure{
  margin-bottom: 10px;
  max-width: 100%;

}

.content-left > figure > img {
  width: 100%;
  height: auto;
  margin: 20px 0 10px 0;
}

@media (max-width: 871px) {
  .BigImgContainer > img{

    width: 100%;
    
  }
  .BigImgContainer{
    margin: 0;
  }

  .newsDetailsTitle-container{
    margin-top: 0px;
    width: 100vw;
  }

  .content-left{
    width: 100vw;
    margin: 40px 0;

}
}




 
  
`;