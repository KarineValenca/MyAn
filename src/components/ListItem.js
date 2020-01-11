import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ListItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text>{item.title}</Text>
            <Image style={styles.image} source={{ uri: item.image_url }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 450,
        borderRadius: 5,
        alignSelf: 'center'
    },
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
            }
})

export default ListItem