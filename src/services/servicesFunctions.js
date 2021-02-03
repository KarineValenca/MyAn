import getRealm from './realm'; 
import { apiListAnime, jikanRepository } from './consts';

export const currentSeasonAnime = (currentMonth) => {
    let season = '';

    if(currentMonth > 3 && currentMonth <= 5) {
        season = 'spring';
    } else if(currentMonth > 5 && currentMonth <= 8) {
        season = 'summer';
    } else if(currentMonth > 8 && currentMonth <= 11) {
        season = 'fall';
    } else {
        season = 'winter';
    }

    return season;
};

export const syncListAnime = async () => {
    const realm = await getRealm();
    console.log('principe ali')
    // const animes = realm.objects(jikanRepository);
    
    // if(netInfo.type == 'wifi' && animes.length == 0) {
    //     await getListAnime();
    //     const animesList = realm.objects(jikanRepository).sorted('title', true);
    //     setFilteredDataSource(animesList);
    //     setMasterDataSource(animesList);
    // } else {
    //     const animesList = realm.objects(jikanRepository).sorted('title', false);
    //     setFilteredDataSource(animesList);
    //     setMasterDataSource(animesList);
    // } 
}

async function getListAnime(season) {
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
        data['mal_id'] = animes[aux].mal_id;
        data['title'] = animes[aux].title;
        data['image_url'] = animes[aux].image_url;
        data['synopsis'] = animes[aux].synopsis;
        data['episodes'] = animes[aux].episodes;

        realm.write(() => {
            realm.create(jikanRepository, data, 'modified');
        });
    }
}

async function updateListAnime(animes) {

}