import { useEffect, useState } from 'react';

import jikan from '../api/jikan';
import { currentSeasonAnime } from '../consts/consts';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentSeason = currentSeasonAnime(currentMonth);

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

            const response = await jikan.get('/season/' + currentYear + '/' + currentSeason);
            setResults(response.data.anime)
        } catch (e) {
            setErrorMessage('Something went wrong, try again later')
        }
    }

    useEffect(() => {
        searchSeasonAnimeApi()
    }, [])

    return [searchSeasonAnimeApi, results, errorMessage];
}