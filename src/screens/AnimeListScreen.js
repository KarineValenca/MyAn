import React from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import useResults from '../hooks/useResults'

const AnimeListScreen = () => {
    const [searchTopAnimeApi, results, errorMessage] = useResults()
    return (
        <View>
            <Text>Top Animes</Text>
            <FlatList
                data={results}
                keyExtractor={(result) => results.mal_id}
                renderItem={({ item }) => {
                    return(
                        <Text>{item.title}</Text>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default AnimeListScreen