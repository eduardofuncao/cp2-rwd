import React, { useState, useEffect } from "react";

const Posts: React.FC = () =>{
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () =>{
            const url = `https://jsonplaceholder.typicode.com/posts`;
            try{
                const response = await fetch(url);
                if (!response.ok){
                    throw new Error('Erro ao carreagar posts');
                }
                const data = await response.json();
                setPosts(data);
            }
            catch(error){
                console.error("Não foi possivel buscar os posts: ", error)
            }
        };
        fetchPosts();

    },[]);
    
    return(
        <div>
            <h1 className="text-6xl mb-4">Posts</h1>
                
            <ul className="flex flex-wrap w-[105%] -ml-8">
                {posts.splice(0,9).map((post,index) =>(
                <li key={index} className='min-w-[180px]  w-[30%] bg-[#FBFBFB] shadow rounded-lg mb-4 mr-4 px-3 text-[#F9627D]'>
                    <h2 className='font-semibold text-2xl '>{post.title}</h2>
                    <p>{post.body}</p>
                </li>
                ))}
            </ul>
            

        </div>
    )
}
 
export default Posts;