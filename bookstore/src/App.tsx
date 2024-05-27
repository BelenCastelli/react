import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import BooksPage from './pages/BooksPage';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AddBook from './pages/AddBook';
import EditBook from './pages/EditBook';
// import Home from './pages/Home';

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <main className=' bg-gray-800 flex grow items-center justify-center' >
        {/* <Home/> */}
        {/* <BooksPage/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Books' element={<BooksPage/>}/>
          <Route path='/AddBook' element={<AddBook/>}/>
          <Route path='/EditBook' element={<EditBook/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
