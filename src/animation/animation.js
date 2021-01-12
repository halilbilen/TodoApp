import React, { Component } from 'react';
import { Text, View, TouchableOpacity, LayoutAnimation } from 'react-native';
import styles from '../styles';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            big: false
        }
    }

    _onPress() {
        LayoutAnimation.linear();
        this.setState({ big: !this.state.big });
    }


    render() {
        const rectangle = {
            width: this.state.big ? 150 : 50,
            height: this.state.big ? 150 : 50
        }
        return (
            <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
                <TouchableOpacity activeOpacity={1} onPress={() => this._onPress()} style={[rectangle, { backgroundColor: 'red' }]}></TouchableOpacity>
            </View>
        );
    }
}