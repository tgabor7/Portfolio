import React, { useEffect, useRef } from "react"
import { Animated, Dimensions, StyleSheet, View } from "react-native"
import color from '../assets/style.json'

export default ({ children, style }: any) => {
    
    const value = useRef(new Animated.Value(0)).current
    
    const animationIn = Animated.timing(value,{
        toValue: 1,
        duration: 500,
        useNativeDriver: false
    })

    useEffect(()=>{
        animationIn.start()
    },[])

    return (<>
        <Animated.View style={[styles.container, style,{
            transform: [
                {translateX: value.interpolate({
                    inputRange: [0,1],
                    outputRange: [-Dimensions.get('window').width,0]
                })},
                {
                    skewX: value.interpolate({
                        inputRange: [0,1],
                        outputRange: ['10deg', '0deg']
                    })
                }
            ]
        }]}>
            {children}
        </Animated.View>
    </>)
}
const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
        width: 'auto',
        alignSelf: 'flex-start',
        backgroundColor: color.theme.complimetary_color,
        margin: 20
    }
})