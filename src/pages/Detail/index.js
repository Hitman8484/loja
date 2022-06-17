import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

import Dot from "../../component/Dot";
import SizeButton from "../../component/SizeButton";

import Button from "../../component/Button";
import Footer from "../../component/Footer";


export default function Detail({ navigation }) {

    navigation.setOptions({
        headerTitle: 'Nike Moonlight'
    })

    return (
        <ScrollView style={styles.container}>
            <Image
                source={require('../../assets/5.webp')}
                style={styles.image}
                resizeMode='cover'
            />

            <View>

                <View>
                    <Text style={[styles.title, { fontSize: 24 }]}>R$ 149,90</Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, { fontSize: 30 }]}>Nike Moonlight</Text>
                </View>

            </View>

            <View style={styles.dotContainer}>
                <Dot color='#2379f4' />
                <Dot color='#Fb6e53' />
                <Dot color='#ddd' />
                <Dot color='#000' />
            </View>

            <View style={{ flexDirection: 'row', width: '100%' }}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <SizeButton bgColor="#17181a" color="#FFF">40</SizeButton>
                    <SizeButton>39</SizeButton>
                    <SizeButton>38</SizeButton>
                    <SizeButton>37</SizeButton>

                </ScrollView>
            </View>


            <View style={styles.textContent}>
                <Text style={styles.textTitle}>
                    Nike Moonlight
                </Text>
                <Text style={styles.textContent}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                </Text>
                <Text style={styles.textList}>
                    - Categoria: Amortercimento
                </Text>
                <Text style={styles.textList}>
                    - Material: Borracha
                </Text>
            </View>
            <Button onClick={()=> alert('Adicionado ao carrinho')}/>

            <View style={styles.line}/>

            <Footer/>


        </ScrollView>


    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF'
    },

    image: {
        width: '100%'
    },
    title: {
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '3%',
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '7%',
    },
    textContent: {
        fontSize: 16,
        lineHeight: 23,
        marginVertical: '2%',
        paddingHorizontal: '2%',
        marginHorizontal: '2%',
    },
    textTitle: {
        fontSize: 22,
        lineHeight: 23,
        marginHorizontal: '2%',
        marginVertical: '2%',
        paddingTop: '3%',
    },
    textList:{
        fontSize: 16,
        lineHeight: 23,
        marginVertical: '2%',
        marginHorizontal: '2%',
    },
    line: {
      borderWidth:1,
      borderBottomColor:'#DDD',
      marginVertical:'2%',

    },

})