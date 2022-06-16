import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

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

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width:'100%',
        backgroundColor: '#FFF'
    },

    image: {
        width: '100%'
    },
    title:{
        fontFamily: 'Anton_400Regular',
        paddingHorizontal: '3%',
    }
})