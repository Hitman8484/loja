import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Button(props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnContainer} onPress={props.onClick}>
                <Text style={styles.title}>SUBLIME</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnContainer: {
        width: '90%',
        height: 50,
        backgroundColor: '#17181a',
        borderRadius: 5,
        marginVertical: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
       fontSize: 17,
       color:'#FFF',

    },
})