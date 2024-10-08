import { Pressable, StyleSheet, Text, View, TextInput, Switch, Alert, ImageBackground,} from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
// import auth from '@react-native-firebase/auth'


export default function Signup() {

  const [Username, setUsername] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [ShowPassword, setShowPassword] = useState(false);
  const toggleSwitch = () => setShowPassword(previousState => !previousState);
  const [Message, setMessage] = useState("")

  // const navigation = useNavigation();

  // const handleSignUp = async () => {

  //   try {
  //     if( Username.length > 0 && Email.length > 0 && Password.length > 0 )
  //     {
  //       const isUserCreated = await auth().createUserWithEmailAndPassword(
  //         Email,
  //         Password,
  //       );

  //       await auth().currentUser.sendEmailVerification()

  //       await auth().signOut()

  //       Alert.alert("Please verify Your Email")

  //       navigation.navigate('Login')
  //     }else{
  //       Alert.alert("Please Enter All Details")
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     setMessage(err.message);
  //   }

  return (
    <ImageBackground
      source={require('../../assets/images/SignUpBgImage.png')}
      resizeMode="stretch" 
      style={styles.image} >

      <View style={styles.body}>

        <Text style={{fontSize:40, margin:15, marginTop:40, }}>
            Signup Screen
        </Text>

        <Text style={styles.fieldText}>
            Username
        </Text>

        <TextInput 
          maxLength={20}
          style={styles.input}
          placeholder='e.g. Sagar Singh'
          value = {Username}
          onChangeText={value => setUsername(value)}
        />

        <Text style={styles.fieldText}>
            E-mail
        </Text>

        <TextInput 
          inputMode='email'
          style={styles.input}
          placeholder='e.g. abc@gmail.com'
          value = {Email}
          onChangeText={value => setEmail(value)}
        />

        <Text style={styles.fieldText}>
            Password
        </Text>

        <TextInput 
          placeholder='Enter your password'
          secureTextEntry = {!ShowPassword}
          style={styles.input}
          value = {Password}
          onChangeText={value => setPassword(value)}
        />

        <Text style={{fontSize:12, margin:5,}}>
          Show Password
        </Text>

        <Switch style={{}}
          trackColor={{false: '#767577', true: '#f5d17d'}}
          thumbColor={ShowPassword ? '#f5ae07' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={ShowPassword}
        />

        <Pressable
          //onPress={() => handleSignUp()}
          style={({ pressed }) => ({ alignItems:'center', margin: 10, paddingVertical:4, paddingHorizontal:5,
            borderRadius: 5, backgroundColor: pressed ? '#ddd' : '#00FFFF' })}
        >
            <Text style = {{fontSize: 20, color:'#000000'}}>
              Sign Up
            </Text>
        </Pressable>

         <Pressable
          onPress={() => {
            router.replace('./login');
          }}
            style={({ pressed }) => ({ margin: 10, paddingVertical:7, paddingHorizontal:4, 
                                       borderRadius:5, backgroundColor: pressed ? '#ddd' : '#0f0' })}
        >
            <Text style={{color:'#000000', fontSize:14,}}>
                Already have an account? Log in
            </Text>
        </Pressable>
      </View>
    </ImageBackground> 
  )
};
const styles = StyleSheet.create({

  image: {
    flex: 1,
    justifyContent: 'center',
  },
  

  body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },

  fieldText: {
      color: '#000000',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
  },

  input:{
    width: 200,
    borderWidth: 2,
    borderColor: '#555',
    borderRadius: 5,
  },

})