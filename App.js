import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, FlatList } from 'react-native';
import styles from './src/styles';
import Header from './src/components/header';
import Item from './src/components/item';

const Data = [
  { title: "Deneme 1", check: false },
  { title: "Deneme 2", check: true },
  { title: "Deneme 3", check: false },
  { title: "Deneme 4", check: true },
  { title: "Deneme 5", check: false },
  { title: "Deneme 6", check: true },
  { title: "Deneme 7", check: false },
  { title: "Deneme 9", check: true },
  { title: "Deneme 10", check: false },
  { title: "Deneme 11", check: true },
  { title: "Deneme 12", check: false },
  { title: "Deneme 13", check: true },
  { title: "Deneme 14", check: false },
  { title: "Deneme 15", check: true },
];
export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header title={"Yapılacak Listesi"} />
        <View style={styles.itemContainer}>
          {/* <ScrollView>
            {Data.map((item) =>
              <Item title={item.title} check={item.check} />
            )}
          </ScrollView> */}
          <FlatList
            data={Data} renderItem={({ item, index }) => <Item index={index}  title={item.title} check={item.check} />}
          />
        </View>

        <TouchableOpacity onPress={() => { alert("Hello"); }} style={styles.createButton}><Text style={styles.createButtonText}>+</Text></TouchableOpacity>
        {/* <Image style={{ height: 299, width: 399 }} source={require('./src/assets/images/A.jpg')} /> */}
      </View>
    );
  }
}
