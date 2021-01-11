import React, { useState } from 'react'
import { View, TouchableOpacity, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import { styles } from './styleSheet'
import Icon from 'react-native-vector-icons/FontAwesome'


const OptionsMenu = ({ options }) => {
    const [isOptionsVisible, setIsOptionsVisible] = useState(false)
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item }) => (
        <ListItem>
            <ListItem.Title>{item}</ListItem.Title>
        </ListItem>
    )

    const showOptions = () => {
        return (
            <FlatList 
                keyExtractor={keyExtractor}
                data={options}
                renderItem={renderItem}
            />
        )
    }
    
    const onPress = () => {
        setIsOptionsVisible(!isOptionsVisible)
    }

    return (
        <View style = { styles.container }>
            <TouchableOpacity onPress={onPress}>
                    <Icon name="ellipsis-v" size={20} color="orange"/>
                </TouchableOpacity>
            <View style = { styles.optionContainer }>
                { isOptionsVisible ? showOptions() : null }
            </View>
        </View>
    )

}

export default OptionsMenu