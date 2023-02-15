import { StyledHeader } from "./style"


export const Header = () => {

    return (
        <StyledHeader>
            <nav class="navbar">
                {/* <img src="logo.png" alt="Logo" class="logo"/> */}
                <h1>NERDNUCLEUS</h1>
                    <ul class="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Filmes</a></li>
                        <li><a href="#">Series</a></li>
                        <li><a href="#">Ciência e Tecnologia</a></li>
                        <li><a href="#">Animes</a></li>
                    </ul>
                    <form class="search-form">
                        <input type="text" placeholder="Pesquisar"/>
                            <button type="submit">Go</button>
                    </form>
            </nav>
        </StyledHeader>


    )
}