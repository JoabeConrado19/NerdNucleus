import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { StyledHeader } from "./style"


export const Header = (props) => {
    const navigate = useNavigate()
    const [searchValue, setSearchValue] = useState('');
    function handleInputChange(event) {
        setSearchValue(event.target.value);
      }

    return (
        <StyledHeader>
            <nav class="navbar">
                {/* <img src="logo.png" alt="Logo" class="logo"/> */}
                <h1 onClick={()=>{navigate('/')}}> NERDNUCLEUS</h1>
                    <ul class="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a onClick={()=>{
                            navigate('/games')
                            window.location.reload()
                    }}>Games</a></li>
                        <li><a onClick={()=>{
                            navigate('/filmes')
                            window.location.reload()}}>Filmes</a></li>
                        <li><a onClick={()=>{
                            navigate('/séries')
                            window.location.reload()}}>Series</a></li>
                        <li><a onClick={()=>{
                            navigate('/tecnologia')
                            window.location.reload()}}>Ciência e Tecnologia</a></li>
                        <li><a href="#" onClick={()=>{
                            navigate('/animes')
                            window.location.reload()}}>Animes</a></li>
                    </ul>
                    <form class="search-form" onSubmit={(e)=>{
                        e.preventDefault()
                         window.location.href = `/search-results/${searchValue}`;

                    }}>
                        <input type="text" placeholder="Pesquisar" value={searchValue} onChange={handleInputChange}/>
                            <button type="submit">Go</button>
                    </form>
            </nav>
        </StyledHeader>


    )
}