import React, { Component } from 'react';
import { Text, View, TouchableOpacity, LayoutAnimation, UIManager, Animated, ScrollVsiew } from 'react-native';
import styles from '../styles';
export default class App extends Component {

    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);
    }
    componentDidMount() {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    renderDetail() {
        const data = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        return data.map(() =>
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <View style={{ margin: 5, width: 40, height: 40, borderRadius: 20, backgroundColor: 'yellow' }} />
                </View>
                <View style={{ marginLeft: 10, marginRight: 10, flex: 1, borderBottomWidth: 1, borderColor: '#eee', flexDirection: 'column', justifyContent: 'center' }}>
                    <View><Text style={{ fontWeight: 'bold' }}>Deneme </Text></View>
                    <View><Text style={{ color: '#666', fontSize: 12 }}>Merhaba</Text></View>
                </View>
            </View>
        );
    }

    render() {
        let searchBarHeight = this.animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: [1, 0],
            extrapolate: 'clamp'
        });
        let searchBarTranslate = this.animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: [0, -15],
            extrapolate: 'clamp'
        });

        let bigTextTranslate = this.animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: [0, -10],
            extrapolate: 'clamp'
        });

        let smallTextOpacity = this.animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
            extrapolate: 'clamp'
        });
        let searchBarOpacity = this.animatedValue.interpolate({
            inputRange: [0, 10],
            outputRange: [1, 0]
        });
        let headerTranslate = this.animatedValue.interpolate({
            inputRange: [0, 100],
            outputRange: [0, -100],
            extrapolate: 'clamp'
        });

        return (
            <View style={styles.container}>
                <View style={{ zIndex: 1, backgroundColor: '#eee', flexDirection: 'row', height: 64, padding: 10, alignItems: 'center', paddingBottom: 0 }}>
                    <View style={{ flex: 1 }}><Text style={{ textAlign: 'left', color: "#06f" }}>Düzenle</Text></View>
                    <View style={{ flex: 1 }}><Animated.Text style={{ opacity: smallTextOpacity, textAlign: 'center', color: "#000", fontWeight: 'bold', fontSize: 15 }}>Sohbet</Animated.Text></View>
                    <View style={{ flex: 1 }}><Text style={{ textAlign: 'right', color: "#06f" }}>Yeni</Text></View>
                </View>
                <Animated.View style={{ zIndex: 0, top: 64, left: 0, right: 0, position: 'absolute', transform: [{ translateY: headerTranslate }], borderWidth: 1, backgroundColor: '#eee', borderColor: '#ddd' }}>
                    <Animated.View style={{ transform: [{ translateY: bigTextTranslate }] }}><Text style={{ fontSize: 25, fontWeight: 'bold', textAlign: 'left' }}>Sohbet</Text></Animated.View>
                    <View>
                        <Animated.View style={{ transform: [{ translateY: searchBarTranslate }, { scaleY: searchBarHeight }], justifyContent: 'center', marginRight: 5, marginLeft: 5, marginBottom: 10, marginStart: 5, borderRadius: 10, height: 30, backgroundColor: '#ddd' }}>
                            <Animated.Text style={{ opacity: searchBarOpacity, paddingLeft: 10, fontSize: 13, color: '#777' }}>Arama</Animated.Text>
                        </Animated.View>
                    </View>
                </Animated.View>

                <View style={{ flex: 1 }}>
                    <Animated.ScrollView
                        style={{ paddingTop: 80 }}
                        scrollEventThrottle={1}
                        onScroll={Animated.event(
                            [
                                {
                                    nativeEvent: {
                                        contentOffset: { y: this.animatedValue }// aşağı yukarı y yana doğru x
                                    }
                                }
                            ],
                            { useNativeDriver: true }
                        )}
                    >
                        {this.renderDetail()}
                    </Animated.ScrollView>
                </View>
            </View>
        );
    }
}   