import styled from "styled-components";
export const StyledFeatured = styled.div`


border: 1px solid #2c2c54;
width: 96%;
height: 450px;
padding: 20px 10px;
display: flex;
justify-content: space-between;
margin: 0 auto;
margin-top: 50px;
border-radius: 4px;


.big-img{
    
    width: 50%;
    height: 100%;
    margin-right: 15px;
    overflow: hidden;
    display: flex;
    align-items: end;
    transition: all ease 0.5s;
    
}

.big-img:hover{
    width: 71%;
    height: 101%;
    
    
}

.mini-img-container{
    
    
    width: 50%;
    height: 100%;
    
}

.mini-img-container-top{
    width: 99%;
    height: 48%;
    
    display: flex;
    justify-content: space-between;
}

.mini-img-container-bottom{
    width: 99%;
    
    height: 48%;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;

}

.mini-news{
    height: 100%;
    width: 49%;
    background-size: cover;
    display: flex;
    align-items: end;
    transition: all ease 0.5s;
    margin: 0px 5px 0 5px;

}

.mini-news:hover{
    height: 100%;
    width: 99%;

}



.big-img-text{
     z-index: 1;  padding: 20px;
     margin-bottom: 0px

}

.mini-img-text{
    z-index: 1;  padding: 10px;
    margin-bottom: 0px
    

}

.big-img-text > h4{

        font-size: 32px;
        
        color: white;
        font-weight: 900;
        text-shadow: 1px 1px #000000;
        
        
    
}

 .big-img-text > p{
    font-size: 18px;
    color: white;
    text-shadow: 1px 1px #000000;
    

}



.mini-img-text > p{
    font-size: 14px;
    color: white;
    text-shadow: 1px 1px #000000;
    

}

.mini-img-text > h4{
    font-size: 18px;
    color: white;
    text-shadow: 1px 1px #000000;
    

}




  
 
  
`;