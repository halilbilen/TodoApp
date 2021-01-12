import React, { Component } from 'react';
import { View, Text, TouchableOpacity, LayoutAnimation, UIManager, Animated } from 'react-native';
import styles from '../styles';
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { detail: false }
    this.loadAnim = new Animated.Value(0);
  }
  componentDidMount() {
    UIManager.setLayoutAnimationEnabledExperimental(true);
    Animated.timing(this.loadAnim, {
      toValue: 1, duration: 1000, useNativeDriver: true, delay: this.props.index * 100
    }).start();
  }

  _onPress() {
    LayoutAnimation.spring();
    this.setState({
      detail: !this.state.detail
    })
  }

  render() {
    let load = this.loadAnim.interpolate({
      inputRange: [0, 1],
      outputRange: [50, 0]
    })

    return (
      <TouchableOpacity onPress={() => this._onPress()} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ position: 'absolute', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', width: 250, left: this.state.detail ? 0 : -250 }}>
          <TouchableOpacity style={{ marginLeft: 10, width: 40, height: 40, borderRadius: 20, backgroundColor: 'red' }} />
          <TouchableOpacity style={{ marginLeft: 10, width: 40, height: 40, borderRadius: 20, backgroundColor: 'blue' }} />
          <TouchableOpacity style={{ marginLeft: 10, width: 40, height: 40, borderRadius: 20, backgroundColor: 'black' }} />
        </View>
        <Animated.View style={[styles.itemBox, { flex: 1, left: this.state.detail ? 250 : 0 }, { transform: [{ translateY: load }] }]}>
          <Text style={[styles.itemText, this.props.check && styles.itemTextTrue]}>{this.props.title}</Text>
          <TouchableOpacity style={
            this.props.check ?
              styles.itemCheckTrue : styles.itemCheckFalse
          } elevation={5} onPress={() => { this.click }} />
        </Animated.View >
      </TouchableOpacity>
    );
  }
}
Item.defaultProps = {
  check: false
}
export default Item;