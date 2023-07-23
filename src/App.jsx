import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'




function App() {
  

  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App