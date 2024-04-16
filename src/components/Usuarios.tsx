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
        <h1 className="text-6xl mb-4">Usuários</h1>
        <table className="bg-[#FBFBFB]  text-[#F9627D] rounded-2xl border-separate p-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Username</th>
              <th>Email</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.street}, {user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}
 
export default Usuarios;