import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SearchProvider } from './context/SearchProvider'
import Apod from './pages/Apod'
import DateForm from './pages/DateForm'
import Layout from './pages/Layout'
import Random from './pages/Random'
import Search from './pages/Search'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <SearchProvider>
            <Layout/>
          </SearchProvider>
        }>
          <Route index element={<DateForm/>}/>
          <Route path='search' element={<Search/>}/>
          <Route path='apod' element={<Apod/>}/>
          <Route path='random' element={<Random/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
