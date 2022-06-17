import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";

import Shoes from '../../component/Shoes';


export default function Footer() {
    return (
        <View>
            <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                    <View sytle={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/6.webp')} cost="249,90">
                            Nike SunLight
                        </Shoes>
                    </View>

                    <View sytle={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/4.webp')} cost="99,90">
                            Nike Deeper
                        </Shoes>
                    </View>

                    <View sytle={{ marginHorizontal: 10 }}>
                        <Shoes img={require('../../assets/5.webp')} cost="149,90">
                            Nike SunLight
                        </Shoes>
                    </View>


                </ScrollView>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    },
    
})