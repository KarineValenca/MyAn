import axios from 'axios';

import getRealm from './realm';
import NetworkUtils from './NetworkUtils';
import { apiListAnime, currentSeason } from './consts';

export async function syncListAnime() {
    const wifi = await NetworkUtils.isWifi();
    const season = currentSeason;
    const realm = await getRealm();
    const animes = realm.objects('JikanRepository');
    
    if(wifi && animes.length == 0) {
        await getListAnimeFromApiJikan();
    } else {

    }

    if(wifi && apiListAnime.includes(season)) {

    } else {
        await deleteListAnime(animes);
        await getListAnimeFromApiJikan();
    }
}

export async function getListAnime() {
    const realm = await getRealm();
    const animes = realm.objects('JikanRepository').sorted('title', false);
    
    return animes;
}

async function deleteListAnime(animes) {
    const realm = await getRealm();

    realm.write(() => {
        realm.delete(animes);
    });
}

async function getListAnimeFromApiJikan() {
    try {
        const response = await axios.get(apiListAnime);
        await saveListAnime(response.data.anime);
    } catch(err) {
        console.log(err)
    }
}

async function saveListAnime(animes) {
    const data = {};
    const realm = await getRealm();
    
    for(let aux = 0; aux < animes.length; aux ++) {
        if(animes[aux].episodes === null) {
            animes[aux].episodes = 0;
        }

        if(animes[aux].score === null) {
            animes[aux].score = 5;
        }

        data['mal_id'] = animes[aux].mal_id;
        data['title'] = animes[aux].title;
        data['image_url'] = animes[aux].image_url;
        data['synopsis'] = animes[aux].synopsis;
        data['episodes'] = animes[aux].episodes;
        data['score'] = animes[aux].score;

        realm.write(() => {
            realm.create('JikanRepository', data, 'modified');
        });
    }
}