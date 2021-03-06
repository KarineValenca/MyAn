import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import useResults from '../hooks/useResults';

import ListItem from '../components/ListItem';
import CustomHeader from '../components/CustomHeader';

const AnimeListScreen = () => {
    
    const [searchSeasonAnimeApi, results, errorMessage] = useResults();
    
    return (
        <View style = { styles.container }>
            <CustomHeader title = 'Animes da temporada' />
            <FlatList
                data = { results }
                keyExtractor = {(result) => result.mal_id}
                renderItem = {({ item }) => {
                    return(
                        <ListItem item = { item } />
                    );
                }}
                numColumns = { 2 }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        margin: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
});

AnimeListScreen.navigationOptions = () => {
    return { headerShown: false }
}

export default AnimeListScreen;