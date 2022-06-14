import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {
    return (
        <View style={StyleSheet.container}>
            <View style={styles.header} >
                <Image
                    source={require('../../assets/background.jpeg')}
                    style={styles.image} />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>TÊNNIS</Text>
                    <Text style={[styles.text, {color: '#CECECF'} ]}> * </Text>
                    <Text style={[styles.text, {color: '#CECECF'} ]}>MASCULINO</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <MaterialIcons
                            name="filter-list"
                            size={24}
                            color="#000">
                        </MaterialIcons>
                    </TouchableOpacity>
                </View>



            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
    },
    header: {
        marginBottom: 8,
    },
    image: {
        width: '100%'

    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%',
    },
    text: {
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%',

    }

});