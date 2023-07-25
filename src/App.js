import './App.css'
import Landing from './pages/Landing'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  )
}

export default App
