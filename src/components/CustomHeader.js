import React from 'react'
import { Header } from 'react-native-elements'

const CustomHeader = ({ title }) => {
    return (
        <Header
            //leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: title, style: { color: '#fff', fontSize: 18 } }}
            //rightComponent={{ icon: 'home', color: '#fff' }}
        />
    )
}

export default CustomHeader