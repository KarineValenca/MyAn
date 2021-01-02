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