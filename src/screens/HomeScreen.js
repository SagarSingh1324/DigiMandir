import { Pressable, StyleSheet, Text, View,} from 'react-native'
import React, { useState } from 'react'
import Auth from '@react-native-firebase/auth';
import {useNavigation, StackActions} from '@react-navigation/native';

export default function HomeScreen() {

    const navigation = useNavigation();

  return (
    <View style={styles.body}>

      <Text style={styles.text}>
        Welcome to DigiMandir
      </Text>

      <Text>Email: {Auth().currentUser.email}</Text>
      <Text>UserID: {Auth().currentUser.uid} </Text>

      <Pressable
            onPress={async () => {

                await Auth().signOut();
                navigation.dispatch(StackActions.replace('Login'));
/*                 if(navigation.canGoBack())
                {
                    navigation.dispatch(StackActions.pop(1));
                }
                } */
            }
            }
            style={({ pressed }) => ({ margin: 10, paddingVertical:7, paddingHorizontal:4, 
                                       borderRadius:5, backgroundColor: pressed ? '#ddd' : '#0f0' })}
        >
            <Text style={styles.text}>
                Log Out
            </Text>
        </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    })