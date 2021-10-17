import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { LinearGradient } from "expo-linear-gradient"
import React, { useCallback, useEffect, useRef, useState } from "react"
import { Animated, Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import color from "../assets/style.json"
import Button from "./Button"
import Card from "./Card"
import Footer from "./Footer"
import content from '../assets/content.json'
import Divider from "./Divider"
import Header from "./Header"

export default () => {

    const value = useRef(new Animated.Value(0)).current
    const scrollValue = useRef(new Animated.Value(0)).current

    const [card, setCard] = useState(0)
    const scrollView = useRef<ScrollView>(null)
    const [top, setTop] = useState(true)

    const animateCard = (n: number) => {
        Animated.timing(value, {
            toValue: n,
            duration: 200,
            useNativeDriver: false
        }).start()
    }

    const animateScrollButton = Animated.timing(scrollValue, {
        toValue: 1,
        duration: 150,
        useNativeDriver: false
    })
    const animateScrollButtonClose = Animated.timing(scrollValue, {
        toValue: 0,
        duration: 150,
        useNativeDriver: false
    })

    const switchCard = (n: number) => {
        setCard(n)
        animateCard(n)
    }

    useEffect(() => {
        if (top) animateScrollButton.start()
        else animateScrollButtonClose.start()
    }, [top])

    return (<>
        <Header />
        {<Animated.View style={[styles.scrollTop, {
            transform: [
                {
                    scale: scrollValue.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0]
                    })
                }
            ]
        }]}><TouchableOpacity style={[styles.scrollTop, { bottom: 0, left: 0 }]} onPress={() => {
            scrollView.current?.scrollTo({
                y: 0,
                animated: true
            })
        }}>
                <View style={{ width: '100%', height: '100%' }}>
                    <FontAwesomeIcon style={styles.scrollArrow} icon={faArrowUp} size={40} />
                </View>
            </TouchableOpacity></Animated.View>}
        <ScrollView showsVerticalScrollIndicator={false} ref={scrollView} onScroll={e => {
            if (e.nativeEvent.contentOffset.y > 0) setTop(false)
            else setTop(true)
        }}>
            <LinearGradient colors={[color.theme.primary_color, color.theme.secondary_color, color.theme.complimetary_color]}>
                <View style={styles.container}>
                    <Divider title="Introduction" />

                    <Card style={{ flex: 1, minWidth: '50%', maxWidth: '100%', }}>
                        <Text style={styles.h1}>About me</Text>
                        <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
                            <Image source={require('../assets/profile.png')} style={{ width: 100, height: 100, borderRadius: 50, margin: 20 }}></Image>
                            <Text style={[styles.p, { maxWidth: 500 }]}>{content.content.aboutme}</Text>
                        </View>
                    </Card>
                    <Divider title="Methodology" />
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                        <Card style={{ flex: 1, minWidth: 300, maxWidth: 1000 }}>
                            <Text style={styles.h1}>My Stack</Text>
                            <Text style={styles.p}>{content.content.mystack}</Text>
                        </Card>
                        <Card style={{ flex: 1, flexWrap: 'wrap', minWidth: 300, maxWidth: 1000, minHeight: 400 }}>
                            <View style={styles.stackCard}>
                                <Button style={styles.button} selected={card === 0} onPress={() => {
                                    switchCard(0)
                                }}>
                                    <Image style={{ zIndex: 3, width: '50%', height: '100%', margin: 'auto' }} source={require("../assets/MongoDB_Leaf_FullColor_RGB.svg")}></Image>
                                </Button>
                                <Button style={styles.button} selected={card === 1} onPress={() => {
                                    switchCard(1)
                                }}>
                                    <Image style={{ zIndex: 3, width: '100%', height: '100%', margin: 'auto' }} source={require("../assets/expressjs-icon.svg")}></Image>
                                </Button>
                                <Button style={styles.button} selected={card === 2} onPress={() => {
                                    switchCard(2)
                                }}>
                                    <Image style={{ zIndex: 3, width: '100%', height: '100%', margin: 'auto' }} source={require("../assets/React-icon.svg")}></Image>

                                </Button>
                                <Button style={styles.button} selected={card === 3} onPress={() => {
                                    switchCard(3)
                                }}>
                                    <Image style={{ zIndex: 3, width: '100%', height: '60%', margin: 'auto' }} source={require("../assets/Node.js_logo.svg")}></Image>
                                </Button>
                            </View>
                            <Animated.View style={[{ backgroundColor: color.theme.secondary_color, borderRadius: 5, margin: 20 },
                            {
                                transform: [
                                    {
                                        scale: value.interpolate({
                                            inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
                                            outputRange: [1, 0, card === 1 ? 1 : 0, 0, card === 2 ? 1 : 0, 0, 1]
                                        })
                                    }
                                ], borderRadius: value.interpolate({
                                    inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
                                    outputRange: [0, 20, 0, 20, 0, 20, 0]
                                })
                            }]}>

                                <Text style={[styles.p, { zIndex: 1 }]}>{
                                    content.content.stack[card].content
                                   
                                }</Text>
                                <Text onPress={()=>{
                                    window.open(content.content.stack[card].link, '_blank')
                                }} style={[styles.p, {color: '#00f', textDecorationLine: 'underline'}]}>
                                    Learn more
                                </Text>
                            </Animated.View>
                        </Card>

                    </View>
                    <Divider title="Experience" />
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {content.content.projects.map((e: any) => {
                            return (<Card style={{ minWidth: 300, maxWidth: 1000, flex: 1 }}>
                                <Text style={styles.h1}>{e.title}</Text>
                                <Text style={styles.p}>{e.description}</Text>
                                <Text style={styles.p}>For more details check out the projects <Text onPress={() => {
                                    window.open(e.link, '_blank')
                                }} style={{ color: '#00f', textDecorationLine: 'underline' }}>github</Text> page.</Text>
                            </Card>)
                        })}
                    </View>
                    <Divider title="Skills" />
                    <View style={{ margin: 'auto', flexDirection: 'row', flexWrap: 'wrap' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.p, { fontWeight: 'bold' }]}>Languages</Text>
                            {content.content.skills.languages.map(e => {
                                return <Text style={styles.p}>{e}</Text>
                            })}
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={[styles.p, { fontWeight: 'bold' }]}>Technologies</Text>
                            {content.content.skills.technologies.map(e => {
                                return <Text style={styles.p}>{e}</Text>
                            })}
                        </View>

                    </View>
                </View>
            </LinearGradient>

            <Footer />
        </ScrollView>
    </>)
}
export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    button: {
        width: 100
    },
    h1: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20,
        fontFamily: color.theme.font
    },
    p: {
        padding: 20,
        fontSize: 16,
        fontFamily: color.theme.font,
    },
    stackCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 20,
        height: '100%'
    },
    scrollTop: {
        width: 60,
        height: 60,
        position: 'absolute',
        backgroundColor: color.theme.secondary_color,
        zIndex: 3,
        elevation: 3,
        left: 50,
        bottom: 100,
        borderRadius: 40
    },
    scrollArrow: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: color.theme.complimetary_color
    }
})