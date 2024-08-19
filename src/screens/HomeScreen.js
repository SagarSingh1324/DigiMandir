import { Pressable, StyleSheet, Text, View, ImageBackground, } from 'react-native'
import React, { useState } from 'react'
import Auth from '@react-native-firebase/auth';
import {useNavigation, StackActions} from '@react-navigation/native';

export default function HomeScreen() {

    const navigation = useNavigation();

  return (
    <ImageBackground 
        source={require('../assets/Images/GaneshImage.png')}
        resizeMode="cover" 
        style={styles.image} >

        <View style={styles.body}>

{/*             <Text>Email: {Auth().currentUser.email}</Text>
            <Text>UserID: {Auth().currentUser.uid} </Text> */}

            <Pressable
                onPress={async () => {
                    await Auth().signOut();
                    navigation.dispatch(StackActions.replace('Login'));
                }
                }
                style={({ pressed }) => ({ margin: 10, paddingVertical:1, borderRadius:5,
                                           backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text style={styles.text}>
                    Log Out
                </Text>
            </Pressable>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({

    image: {
        flex: 1,
        justifyContent: 'center',
    },

    body: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },

    });