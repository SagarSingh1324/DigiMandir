import {View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import React, {useEffect} from 'react';
import Auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  //
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(async() => {
        const unsubscribe = await Auth().onAuthStateChanged(user => {
            const routeName = user !== null ? 'Home' : 'Login';
            unsubscribe();
            navigation.dispatch(StackActions.replace(routeName));
        });

      }, 3000);

    return () => {};
  }, []);

  return (
        <View style={styles.body}>
            <ImageBackground 
                source={require('../assets/Images/LakshmiImage.png')}
                resizeMode="cover" 
                style={styles.image} >
            </ImageBackground>
        </View>
  )
}

const styles = StyleSheet.create({

    body: {
        flex: 1,
        justifyContent: 'center',
    },

    image: {
        flex: 1,
        justifyContent: 'center',
      },

  });