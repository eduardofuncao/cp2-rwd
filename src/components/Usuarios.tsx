import React, { useState, useEffect } from "react";

const Usuarios: React.FC = () =>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () =>{
            const url = `https://jsonplaceholder.typicode.com/users/`;
            try{
                const response = await fetch(url);
                if (!response.ok){
                    throw new Error('Erro ao ler Usuários');
                }
                const data = await response.json();
                setUsers(data);
            }
            catch(error){
                console.error("Não foi possivel buscar os usuários: ", error)
            }
        };
        fetchUsers();

    },[]);
    
    return(
        <div>
            <h1 className="text-8xl mb-4">Usuários</h1>
            
            <ul className="flex flex-wrap w-[105%] -ml-8">
            {users.map((post,index) =>(
            <li key={index} className='w-[30%] bg-[#FBFBFB] shadow rounded-lg mb-4 mr-4 px-3 text-[#F9627D]'>
                <h2 className='font-semibold text-2xl '>{post.name}</h2>
                <p>{post.username}</p>
            </li>
            ))}
        </ul>

        <table className="bg-[#FBFBFB]  text-[#F9627D] rounded-2xl">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
        
            

        </div>
    )
}
 
export default Usuarios;

