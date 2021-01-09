import { useEffect, useState } from 'react';
import axios from 'axios';

import jikan from '../api/jikan';
import { apiListAnime } from '../services/consts';

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
        try {
            
            const response = await axios.get(apiListAnime);
            setResults(response.data.anime);
        } catch (e) {
            setErrorMessage('Something Went Wrong, Try Again Later')
        }
    }

    useEffect(() => {
        searchSeasonAnimeApi()
    }, [])

    return [searchSeasonAnimeApi, results, errorMessage];
}