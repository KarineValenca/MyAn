import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'


const ListItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.title}</Text>
            <Image style={styles.image} source={{ uri: item.image_url }}/>
            <Feather name="bell" />
            <Text> Notifique-me </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: 100,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 5,
        alignSelf: 'center',
        margin: 10

    },
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        margin: 10,
        width: 170,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    text: {
        textAlign: 'center',
        margin: 5
    }
})

export default ListItem