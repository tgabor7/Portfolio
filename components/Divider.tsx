import React from "react"
import { Text, View } from "react-native"
import { styles } from "./MainScreen"

export default ({ title }: any) => {
    return (<><View style={{margin: 'auto', width: '95%', borderBottomColor: '#fff', borderBottomWidth: 1}}>
        <Text style={[styles.h1, {color: '#fff'}]}>{title}</Text>
    </View>
    </>)
}