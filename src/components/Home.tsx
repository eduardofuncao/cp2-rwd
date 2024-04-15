import Stick from '../assets/stick2.svg'

const Home: React.FC = () =>{
    return(
        <div className='flex items-center'>
            <div>
                <h1 className="text-3xl">Prova de Responsive Web Development</h1>
                <p className='mt-6'>Utilize a barra de navegação para acessar as páginas</p>
            </div>
            <img src={Stick} alt="Boneco de palito" className='h-96 m-auto -rotate-12 hover:rotate-0 transition-all' />
        </div>
    )
}
 
export default Home;