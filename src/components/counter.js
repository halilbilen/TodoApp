import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ count: ++this.state.count });
            console.log(this.state.count);
        }, 1000)

    }

    componentWillUnmount() {
        clearInterval(this.count);
    }
    render() {
        return (
            <View>
                <Text style={styles.textStyle}> {this.state.count}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 50,
        color: 'white'
    }
})
export default Welcome;