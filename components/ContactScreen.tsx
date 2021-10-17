import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import color from '../assets/style.json'
import Footer from "./Footer";
import { styles } from "./MainScreen";

export default () => {
    return (<>
        <ScrollView>
            <LinearGradient colors={[color.theme.primary_color, color.theme.secondary_color, color.theme.complimetary_color]}>
                <View style={{ marginBottom: 200, marginTop: 100 }}>
                    <Text style={[styles.h1, { margin: 'auto', color: '#fff', fontSize: 30}]}>Send me a message</Text>
                    <TextInput style={pageStyles.input} placeholder="Contact info"></TextInput>
                    <TextInput style={[pageStyles.input, { height: 400, textAlignVertical: 'top' }]} multiline={true} placeholder="Your message"></TextInput>
                    <TouchableOpacity style={pageStyles.button}>
                        <Text style={[styles.p, { color: '#fff' }]}>Send</Text>
                    </TouchableOpacity>
                </View>
                <Footer />
            </LinearGradient>
        </ScrollView>
    </>)
}
const pageStyles = StyleSheet.create({
    input: {
        fontSize: 24,
        margin: 'auto',
        minWidth: '50%',
        backgroundColor: '#fff',
        color: '#000',
        marginBottom: 50,
        padding: 10
    },
    button: {
        backgroundColor: color.theme.primary_color,
        margin: 'auto',
    }
})