import styled from "styled-components";
export const RelatedPostsStyles = styled.div`


    width: 95%;
    height: auto;
    margin: 30px auto;
    background-color: #2c2c54;
    border-radius: 4px;
    overflow-y: hidden;
    padding: 40px 0;

    h1{
      color: white;
      width: 100%;
      text-align: center;
      margin-top: 20px;
      font-size: 22px;

    }

    ul{
      height: 280px;
      display: flex;
      overflow-x: scroll;
      margin-top: 10px;
      padding: 10px 5px;
    }

    ul > li{
      min-width: 250px;
      width: 200;
      height: 200;
      
      min-height: 200px;
      margin-right: 15px;
    }

    .Related-Card{
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: end;
      border-radius: 4px;
    }

    .Related-Card > div{
      margin-bottom: 20px;
      
    }

    .Related-Card > div > p{
      margin-top: 10px;
      color: white;
      text-shadow: 1px 1px #000000;

      
    }

    .Related-Card > div > h2{
      color: white;
      text-shadow: 1px 1px #000000;
      font-size: 17px;

    }



 

`;