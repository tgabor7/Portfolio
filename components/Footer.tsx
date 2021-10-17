import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import color from '../assets/style.json'

export default () => {
    return (<>
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 'auto'}}>
                <Text style={[styles.copy]}>created by <Text style={styles.font}><br />Tarkó Gábor</Text></Text>
                <View style={{ width: '50%', margin: 'auto', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity style={{ margin: '20' }} onPress={() => {
                        const url = 'https://www.linkedin.com/in/g%C3%A1bor-tark%C3%B3-8a0915205/'
                        window.open(url, '_blank')
                    }}>
                        <Image style={{ width: 35, height: 35, tintColor: '#000', margin: 10 }} source={require('../assets/linkedin.png')} />

                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: '20' }} onPress={() => {
                        const url = 'https://github.com/tgabor7/tgabor7'
                        window.open(url, '_blank')
                    }}>
                        <Image style={{ width: 35, height: 35, tintColor: '#000', margin: 10 }} source={require('../assets/github.svg')} />
                    </TouchableOpacity>
                    <View style={{flexDirection: 'row'}}>
                    <FontAwesomeIcon icon={faEnvelope} size={22} style={{flex: 1, margin: 'auto'}}/>
                    <Text style={[styles.font,{flex: 1, margin: 'auto', fontSize: 14, marginLeft: 10}]}>tgabor7@gmail.com</Text>
                    </View>
                </View>
            </View>

        </View>
    </>)
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: color.theme.complimetary_color,
        paddingTop: 100
    },
    copy: {
        fontSize: 16,
        margin: 50,
        marginTop: 40,
        fontFamily: color.theme.font,
        color: '#222'
    },
    font: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000'
    }
})