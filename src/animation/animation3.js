import React, { Component } from 'react';
import { Text, View, TouchableOpacity, LayoutAnimation, UIManager, Animated } from 'react-native';
import styles from '../styles';


const ATouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
export default class App extends Component {

    constructor(props) {
        super(props);
        this.rentangle = new Animated.Value(0);
    }
    componentDidMount() {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    _onPress() {
        Animated.timing(this.rentangle, {
            toValue: this.rentangle._value === 0 ? 1 : 0, duration: 1000
        }).start()
    }

    render() {
        let rotateAnim = this.rentangle.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "90deg"]
        });

        let size = this.rentangle.interpolate({
            inputRange: [0, 1],
            outputRange: [50, 150]
        });

        let opacity = this.rentangle.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0, 1]
        });

        return (
            <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
                <TouchableOpacity activeOpacity={1} onPress={() => this._onPress()}>
                    <Animated.View style={{ opacity, transform: [{ rotateZ: rotateAnim }], backgroundColor: 'red', width: size, height: size }}></Animated.View>
                </TouchableOpacity></View>
        );
    }
}   