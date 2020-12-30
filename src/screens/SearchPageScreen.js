import React from 'react';

import SearchbarComponent from '../components/searchBar/SearchBarComponent';

const SearchPageScreen = () => {

    return (
        <SearchbarComponent />
    );
}

SearchPageScreen.navigationOptions = () => {
    return { headerShown: false }
}

export default SearchPageScreen;