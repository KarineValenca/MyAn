import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import NotifyButton from './NotifyButton'


const ListItem = ({ item }) => {
    const changeIcon = (actualIconName) => {
        console.log("clicked")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.title}</Text>
            <Image style={styles.image} source={{ uri: item.image_url }}/>
            <NotifyButton />
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
        margin: 5,

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
    },
})

export default ListItem