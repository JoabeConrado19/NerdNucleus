import styled from "styled-components";
export const StyledMainContent = styled.div`


width: 96%;
margin: 0 auto;
margin-top: 40px;
display: flex;
justify-content: space-between;


.container-left{
    background: #2c2c54;
    width: 65%;
    height: auto;
    border-radius: 4px;
    padding: 20px;
    
}

.container-left > h2{
    color: white;
    margin: 20px 0 20px 0;
    font-size: 24px;
    font-weight: 800;

    
}

.container-right{
    background: #2c2c54;
    width: 30%;
    height: 500px;
    border-radius: 4px;

}

.container-left > ul{
    height: auto;

    
}

.container-left > ul > li{
    display: flex;
    margin-bottom: 30px;
    
}

.card-container-left{

    width: 50%;
    height: 100%;
    overflow: hidden;
}

.card-container-left > img{

    width: 110%;
    border-radius: 10px;

}

.card-container-right{
    width: 50%;
    height: 100%;
    padding: 20px;
    

}

.badge{
    color: #49be25;
    font-weight: 800;
    font-size: 22px;
    margin-bottom: 14px;
}

.date{
    color: white;
    font-weight: 100;
    margin-bottom:14px;
    font-size: 18px
}

.new-title{
    color: white;
    font-size: 24px;
    margin-bottom: 14px;
    font-weight: 900;
}

.mini-description{
    color: white;
    font-size: 18px;
}

.container-right > h2{
    color: white;
    width: 100%;
    font-size: 20px;
    margin: 40px auto;
    
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
}

 
  
`;