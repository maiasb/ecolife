import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ConsultaCep } from '../pages/ConsultaCep'

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConsultaCep />} />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes
