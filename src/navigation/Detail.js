import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Detail({ navigation }) {
    // const { itemId } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Detail Screen</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                <Text>Menü</Text>
            </TouchableOpacity>
        </View>
    )
}
