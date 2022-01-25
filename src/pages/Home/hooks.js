import { github } from "../../api"
import { useState, useEffect } from "react"

export const useGithubInfo = () => {
    // estados da aplicação
    const [login, setSearchLogin] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = useState({
        id: 0,
        login: '',
        avatar_url: '',
        html_url: '',
        bio: '',
        followers: 0,
        following: 0,
        public_repos:0,
    })
    const [repositories, setRepositories] = useState([]);
    
    //funções
    async function getData() {
        try {
          setLoading(true)
          setError(false)
        const users = await github.get(
          `users/${login}`,
        );
        setUser(users.data);
        const repos = await github.get(
          `users/${login}/repos`,
        );
        setRepositories(repos.data);
        setLoading(false)
        } catch (error) {
          setLoading(false)
          setError(true)
        }
    }
    

    //ciclo de vida da aplicação
    useEffect(()=>{
      if(login){
        getData()
      }
    },[login])

    return {user, repositories, setSearchLogin, loading, error}
}