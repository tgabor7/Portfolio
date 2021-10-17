import { faLink } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import color from '../assets/style.json'


export default ({navigation}: any) => {
    return (<>
        <View style={styles.container}>
            <View style={{ flexDirection: 'row',flexWrap: 'wrap' }}>
                <TouchableOpacity>
                    <Text style={[styles.text, { fontWeight: 'bold' }]}>Tarkó Gábor</Text>
                </TouchableOpacity>
                <Text style={[styles.text, { fontWeight: '100' }]}>portfolio</Text>
            </View>
        </View>
    </>)
}
const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: color.theme.primary_color,
        elevation: 2,
        zIndex: 2,
    },
    text: {
        fontFamily: "Brush Script MT",
        color: '#fff',
        fontSize: 30,
        padding: 10
    }
})