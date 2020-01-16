import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import useResults from '../hooks/useResults'
import ListItem from '../components/ListItem'

const AnimeListScreen = () => {
    const [searchSeasonAnimeApi, results, errorMessage] = useResults()
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Animes da temporada</Text>
            <FlatList
                data={results}
                keyExtractor={(result) => result.mal_id}
                renderItem={({ item }) => {
                    return(
                        <ListItem item={item} />
                    )
                }}
                numColumns={2}
            />
        </View>
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

export default AnimeListScreen