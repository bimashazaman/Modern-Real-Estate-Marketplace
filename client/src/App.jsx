import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'
import CreateListing from './pages/CreateListing'
import UpdateListing from './pages/UpdateListing'
import Listing from './pages/Listing'

function App() {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/profile'
          element={currentUser ? <Profile /> : <SignUp />}
        />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/create-listing' element={<CreateListing />} />
        <Route path='/update-listing/:listingId' element={<UpdateListing />} />
        <Route path='/listing/:listingId' element={<Listing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
