import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import useResults from '../hooks/useResults'
import ListItem from '../components/ListItem'
import CustomHeader from '../components/CustomHeader'
import Searchbar from '../components/searchBar/SearchBar';

const AnimeListScreen = () => {
    const [searchSeasonAnimeApi, results, errorMessage] = useResults()
    return (
        // <NewSearchBarComponent />
        <Searchbar />
        // <View style={styles.container}>
        //     <CustomHeader title="Animes da temporada" />
        //     <FlatList
        //         data={results}
        //         keyExtractor={(result) => result.mal_id}
        //         renderItem={({ item }) => {
        //             return(
        //                 //Colocar a lista abaixo dentro de searchbar
        //                 <ListItem item={item} />
        //             )
        //         }}
        //         numColumns={2}
        //     />
        // </View>
    )
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
})

AnimeListScreen.navigationOptions = () => {
    return { headerShown: false }
}

export default AnimeListScreen