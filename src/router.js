import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import{ Feather } from '@expo/vector-icons'

import { TouchableOpacity } from "react-native";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
 
const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
                />


                <Stack.Screen name="Detail"
                component={Detail}
                options={{
                    headerRight: () => (
                        <TouchableOpacity>
                            <Feather
                            name='shopping-cart'
                            size={30}
                            color="black"
                            style={{marginRight: 20}}
                            />
                        </TouchableOpacity>
                    )
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Routes;