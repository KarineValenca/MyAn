import { useEffect, useState } from 'react'
import jikan from '../api/jikan'

export default() => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchTopAnimeApi = async(page) => {
        try{
            const response = await jikan.get('/top/anime/1')
            setResults(response.data.top)
        } catch (e) {
            setErrorMessage('Something went wrong, try again later')
        }
    }

    const searchSeasonAnimeApi = async() => {
        console.log("funcao chamada")
        try {
            const response = await jikan.get('/season/2020/winter')
            console.log(response) 
            setResults(response.data.anime)
        } catch (e) {
            setErrorMessage('Something went wrong, try again later')
        }
    }

    useEffect(() => {
        //searchTopAnimeApi()
        searchSeasonAnimeApi()
    }, [])

    return [searchSeasonAnimeApi, results, errorMessage]
}