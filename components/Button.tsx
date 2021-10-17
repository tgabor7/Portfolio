import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import color from '../assets/style.json'

export default ({ children, onPress, style, selected }: any) => {
    
    const value = useRef(new Animated.Value(0)).current

    const animation = Animated.timing(value, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false
    })

    useEffect(()=>{
        Animated.loop(animation, {
            iterations: -1
        }).start()
    },[])

    return (<>
        <TouchableOpacity onPress={onPress} style={[{ borderRadius: 50, margin: 10, width: 100, height: 100}, style]}>
            <Animated.View style={[styles.button, selected ? { borderWidth: 3, borderColor: color.theme.secondary_color,width: 100, height: 100} : {width: 100, height: 100},{
                borderColor: value.interpolate({
                    inputRange: [0,0.5,1],
                    outputRange: [color.theme.secondary_color, '#000', color.theme.secondary_color]
                })
            }]}>
                <View style={{ margin: 'auto',padding: 10, width:'100%', height:'100%'}}>
                    {children}
                </View>
            </Animated.View>
        </TouchableOpacity>

    </>)
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 50,
        backgroundColor: color.theme.complimetary_color,
    }
})