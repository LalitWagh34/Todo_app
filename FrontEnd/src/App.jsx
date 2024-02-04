
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './Pages/SignUp'
import { SignIn } from './Pages/SignIn'
import { Todos } from './Pages/todos'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
         <Route path="/signup" element={<SignUp/>}/>
         <Route path="/signin" element={<SignIn/>}/>
         <Route path="/todos" element={<Todos/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
