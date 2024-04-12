import Stick from '../assets/stick2.svg'

const Home: React.FC = () =>{
    return(
        <div className='flex items-center'>
            <div>
                <h1 className="text-3xl">Prova de Responsive Web Development</h1>
                <p>Utilize a barra de navegação para acessar as páginas</p>
            </div>
            <img src={Stick} alt="Boneco de palito" className='h-96 m-auto -rotate-12' />
        </div>
    )
}
 
export default Home;