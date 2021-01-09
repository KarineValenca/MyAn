import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Card, ListItem } from 'react-native-elements'
import { styles } from './styleSheet'

const OptionsMenu = ({ options }) => {
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem>
            <ListItem.Title>{item}</ListItem.Title>
        </ListItem>
    )
    
    return (
        <View style = { styles.container }>
                <FlatList 
                    keyExtractor={keyExtractor}
                    data={options}
                    renderItem={renderItem}
                />
        </View>
    )

}

export default OptionsMenu