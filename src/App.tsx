
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { FaUser, FaGithub } from "react-icons/fa";
import { MdClass } from 'react-icons/md';

import './App.css'
import Home from './components/Home';
import Posts from './components/Posts';
import Usuarios from './components/Usuarios';
import Fotos from './components/Fotos';

function App() {
  
  return (
    <>
    <Router>
      <div className='bg-[#35393C] min-h-screen text-[#FBFBFB] box-border'>
        <div className="w-[60%] m-auto font-sans">
          <header className="text-5xl" >
            <h1 className="">Checkpoint 2 - RWD</h1>
          </header>
          <nav>
            <ul className="flex w-64 space-x-4 p-3 bg-[#F9627D] rounded-xl mb-4 mt-4">
              <li><Link to='/' className="hover:text-red-950">Início</Link></li>
              <li><Link to='/posts'className="hover:text-red-950">Posts</Link></li>
              <li><Link to='/usuarios'className="hover:text-red-950">Usuários</Link></li>
              <li><Link to='/fotos'className="hover:text-red-950">Fotos</Link></li>      
            </ul>
          </nav>
          <main className="flex-grow mb-4">
            <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/posts" element={<Posts/>}/>
                  <Route path="/usuarios" element={<Usuarios/>}/>
                  <Route path="/fotos" element={<Fotos/>}/>
            </Routes>
          </main>
          <div className='mb-20'></div>
          <footer className="gap-2 flex justify-center items-center rounded-t-xl fixed bottom-0 w-[50%] h-12 bg-[#F9627D] ">
            <FaUser className=''></FaUser>
            <p>Eduardo Função - RM553362</p>
            <MdClass></MdClass>
            <p>1TDSZ</p>
            <FaGithub></FaGithub>
            <p className='hover:font-extrabold'><a href="https://github.com/eduardofuncao/cp2-rwd">GitHub</a></p>
          </footer>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
