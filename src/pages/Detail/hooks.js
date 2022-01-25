import { github } from "../../api"
import { useState, useEffect } from "react"

export const useGithubrepos = (user, repos) => {
    const [repositorio, setRepositorio] = useState({})
    const [languages, setLanguages] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    
    async function getData(){
        try {
            setLoading(true)
            setError(false)
            const rep = await github.get(
            `repos/${user}/${repos}`,
            );
            setRepositorio(rep.data);
            const lang = await github.get(
            `repos/${user}/${repos}/languages`,
            );
            const langArray = Object.entries(lang.data).map(([name, value]) => {
                return { name, value };
            });
            setLanguages(langArray);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
        
    }

    useEffect(() => {
    if(user && repos){
        getData()
    }
    },[user,repos]) 

    return{repositorio,languages,loading, error}
}