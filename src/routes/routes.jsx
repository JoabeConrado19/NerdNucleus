import { Route, Routes } from 'react-router-dom'
import { LandingPage } from '../pages/LandingPage'
import { SingleNews } from '../pages/SingleNews'

const RoutesMain = () => {

    return (
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/noticia/:id' element={<SingleNews/>} />


        </Routes>

    )

}

export default RoutesMain