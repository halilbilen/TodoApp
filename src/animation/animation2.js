import React, { Component } from 'react';
import { Text, View, TouchableOpacity, LayoutAnimation, UIManager } from 'react-native';
import styles from '../styles';



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flexDirection: 'column'
        }
    }
    componentDidMount() {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    _onPress() {
        // LayoutAnimation.configureNext({
        //     duration: 1000,
        //     create: { type: LayoutAnimation.Presets.spring },
        //     update: { type: LayoutAnimation.Presets.spring }
        // });
        LayoutAnimation.spring();
        this.setState({ flexDirection: this.state.flexDirection === 'row' ? 'column' : 'row' });
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: this.state.flexDirection, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ backgroundColor: 'red', width: 100, height: 100 }}></View>
                    <View style={{ backgroundColor: 'blue', width: 100, height: 100 }}></View>
                </View>
                <TouchableOpacity onPress={() => this._onPress()} style={{ backgroundColor: 'blue' }}><Text style={{ textAlign: 'center', fontSize: 30, color: 'white' }}>Degistir</Text></TouchableOpacity>
            </View>
        );
    }
}