
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { FaUser, FaGithub } from "react-icons/fa";
import { MdClass } from 'react-icons/md';
import { FaFlagCheckered, FaDev } from 'react-icons/fa6';

import Home from './components/Home';
import Posts from './components/Posts';
import Usuarios from './components/Usuarios';
import Fotos from './components/Fotos';

function App() {
  
  return (
    <>
    <Router>
      <div className='bg-[#35393C] min-h-screen text-[#FBFBFB] box-border'>
        <header className="text-xl flex justify-between mt-2" >
            <h1 className="ml-8 flex gap-1 items-center"> <FaFlagCheckered></FaFlagCheckered>Checkpoint 2</h1>
            <h1 className='mr-8 text-xl flex gap-1 items-center'>Responsive Web <FaDev></FaDev></h1>
        </header>

        {/*Barra de navegação*/}
        <nav>
          <ul className="flex w-[50%] min-w-[250px] space-x-4 p-3 bg-[#F9627D] rounded-r-xl mb-4 mt-4 shadow-2xl justify-end">
            <li><Link to='/' className="hover:text-red-950">Início</Link></li>
            <li><Link to='/posts'className="hover:text-red-950">Posts</Link></li>
            <li><Link to='/usuarios'className="hover:text-red-950">Usuários</Link></li>
            <li><Link to='/fotos'className="hover:text-red-950">Fotos</Link></li>      
          </ul>
        </nav>

        <div className="w-[60%] m-auto font-sans">
          
          
          <main className="flex-grow mb-4">
            {/*Roteamento de páginas*/}
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
            <p className='hover:text-red-950'><a href="https://github.com/eduardofuncao/cp2-rwd">GitHub</a></p>
          </footer>
        </div>
      </div>
    </Router>
    </>
  )
}

export default App
