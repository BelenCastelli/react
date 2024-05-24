import Footer from './components/Footer';
import Header from './components/Header';
import BooksPage from './pages/BooksPage';
// import Home from './pages/Home';

function App() {

  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
      <main className=' bg-gray-800 flex grow items-center justify-center' >
        {/* <Home/> */}
        <BooksPage/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
