import { useState, useEffect } from "react";

const Fotos: React.FC = () =>{

    const [fotos, setFotos] = useState([]);

    useEffect(() => {
        // Faz requisição ao api para coletar as fotos
        const fetchFotos = async () =>{
            const url = `https://jsonplaceholder.typicode.com/photos`;
            try{
                const response = await fetch(url);
                if (!response.ok){
                    throw new Error('Erro ao carregar Fotos');
                }
                const data = await response.json();
                setFotos(data);
            }
            catch(error){
                console.error("Não foi possivel buscar os fotos: ", error)
            }
        };
        fetchFotos();

    },[]);


    return(
        <div>
            <h1 className="text-6xl mb-4">Fotos</h1> 
            <ul className="flex flex-wrap w-[105%] -ml-8">
                {/*splice para trabalhar somente com as 9 primeiras fotos*/}
                {fotos.splice(0,9).map((foto,index) =>(
                <li key={index} className='min-w-[180px]  w-[30%] bg-[#FBFBFB] shadow rounded-lg mb-4 mr-4 px-3 text-[#F9627D]'>
                    <h2 className='font-semibold text-2xl truncate'>{foto.title}</h2>
                    <img className="mb-2" src={foto.url} alt="" />
                    <p>{foto.body}</p>
                </li>
                ))}
            </ul>
        </div>
    )
}
 
export default Fotos;