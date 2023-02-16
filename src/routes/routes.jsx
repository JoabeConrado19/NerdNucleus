import { Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { SearchPage } from '../pages/Search'
import { SingleNews } from '../pages/SingleNews'

const RoutesMain = () => {

    return (
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/:category' element={<LandingPage/>} />
            <Route path='/noticia/:id' element={<SingleNews/>} />
            <Route path='/:category/noticia/:id' element={<SingleNews/>} />
            <Route path='/search-results/:param' element={<SearchPage/>} />
        </Routes>

    )

}

export default RoutesMain