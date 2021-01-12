import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';
export default class Header extends Component {

    render() {
        return (
            <View onLayout={(e) => {
                console.log(e.nativeEvent);
            }} style={styles.header}>
                <Text style={styles.headerText}>{this.props.title}</Text>
            </View>
        );
    }
}
