
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './Pages/SignUp'
import { SignIn } from './Pages/SignIn'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/signin" element={<SignIn/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
