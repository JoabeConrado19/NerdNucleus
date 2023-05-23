import { Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { SearchPage } from '../pages/Search'
import { SingleNews } from '../pages/SingleNews'
import { AnimeEp } from '../pages/animeEp'
import { AnimesList } from '../pages/animesList'

const RoutesMain = () => {

    return (
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/animes' element={<AnimesList/>} />
            <Route path='/animes/:id' element={<AnimeEp/>} />
            <Route path='/:category' element={<LandingPage/>} />
            <Route path='/noticia/:id' element={<SingleNews/>} />
            <Route path='/:category/noticia/:id' element={<SingleNews/>} />
            <Route path='/search-results/:param' element={<SearchPage/>} />
        </Routes>

    )

}

export default RoutesMain