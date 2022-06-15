import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import Shoes from "../../component/Shoes";

import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header} >
                <Image
                    source={require('../../assets/background.jpeg')}
                    style={styles.image} />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>TÊNNIS</Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}> * </Text>
                    <Text style={[styles.text, { color: '#CECECF' }]}>MASCULINO</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
                        <MaterialIcons
                            name="filter-list"
                            size={24}
                            color="#000">
                        </MaterialIcons>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.line} />
            <ScrollView >

                <Text style={styles.text}>LANÇAMENTOS</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/5.webp')} cost="R$ 149,90"  onClick={()=> navigation.navigate('Detail') }> Nike MoonLigh</Shoes>
                    <Shoes img={require('../../assets/6.webp')} cost="R$ 249,90"  onClick={()=> navigation.navigate('Detail') }> Nike SunLight</Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/3.webp')} cost="R$ 99,90" onClick={()=> alert('Adicionado ao carrinho')}> Nike SunShine/Shoes</Shoes>
                    <Shoes img={require('../../assets/4.webp')} cost="R$ 149,90" onClick={()=> alert('Adicionado ao carrinho')}> Nike RedVelvet</Shoes>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/1.webp')} cost="R$ 349,90" onClick={()=> alert('Adicionado ao carrinho')}> Nike MoonLigh</Shoes>
                    <Shoes img={require('../../assets/1.webp')} cost="R$ 299,90" onClick={()=> alert('Adicionado ao carrinho')}> Nike SunLight 2</Shoes>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Shoes img={require('../../assets/1.webp')} cost="R$ 349,90" onClick={()=> alert('Adicionado ao carrinho')}> Nike MoonLigh</Shoes>
                    <Shoes img={require('../../assets/1.webp')} cost="R$ 299,90" onClick={()=> alert('Adicionado ao carrinho')}> Nike SunLight 3</Shoes>
                </View>
            </ScrollView>

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

    },
    line: {
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 3,
    }

});