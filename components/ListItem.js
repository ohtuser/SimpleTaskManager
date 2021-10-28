import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ScrollView, Button, View } from 'react-native';

const ListItem = props => {
    const bgColors = ['#CADF52', '#51B354', '#0093CB', '#3C5DA9', '#843692', '#843692', '#3C5DA9', '#CADF52', '#0093CB', '#3C5DA9'];
    const colors = ['#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff', '#fff'];
    return (
        <View style={{ width: '97%', flexDirection: 'row' }}>
            <View style={{ width: '100%' }}>
                <TouchableOpacity style={[s.itemStyle, { backgroundColor: bgColors[props.bgColor] }]} onPress={() => props.itemPressed(props.itemId)}>
                    <Text style={{ width: '100%', color: colors[props.bgColor] }}>{props.item}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const s = StyleSheet.create({
    itemStyle: {
        paddingVertical: 5,
        marginBottom: 5,
        backgroundColor: 'dodgerblue',
        // color: '#000',
        paddingLeft: 10,
        borderRadius: 5,
        // minHeight: 100
    }
});

export default ListItem;