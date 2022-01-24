import { github } from "../../api"
import { useState, useEffect } from "react"

export const useGithubrepos = (user, repos) => {
    const [repositorio, setRepositorio] = useState({})
    const [languages, setLanguages] = useState({})
    const [loading, setLoading] = useState(false)

    
    async function getData(){
        try {
            setLoading(true)
            const rep = await github.get(
            `repos/${user}/${repos}`,
            );
            setRepositorio(rep.data);
            const lang = await github.get(
            `repos/${user}/${repos}/languages`,
            );
            setLanguages(lang.data);
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
        
    }

    useEffect(() => {
    if(user && repos){
        getData()
    }
    },[user,repos]) 

    return{repositorio,languages,loading}
}