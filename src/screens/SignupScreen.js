import { Pressable, StyleSheet, Text, View, TextInput, } from 'react-native'
import React from 'react'

export default function SignupScreen({ navigation }) {

  const onPressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.body}>
        <Text style={styles.text}>
            Signup Screen
        </Text>

        <Text style={styles.text}>
            Username
        </Text>

        <TextInput 
          maxLength={20}
          style={styles.input}
          placeholder='e.g. Sagar Singh'
        />

        <Text style={styles.text}>
            Password
        </Text>

        <TextInput 
          secureTextEntry
          style={styles.input}
        />

        <Text style={styles.text}>
            Confirm password
        </Text>

        <TextInput 
        secureTextEntry
          style={styles.input}
        />

        <Text style={styles.text}>
            E-mail
        </Text>

        <TextInput 
          inputMode='email'
          style={styles.input}
        />

        <Pressable
            onPress={onPressHandler}
            style={({ pressed }) => ({ margin: 10, backgroundColor: pressed ? '#ddd' : '#0f0' })}
        >
            <Text style={styles.text}>
                Already have an account? Log in
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
input:{
  width: 200,
  borderWidth: 2,
  borderColor: '#555',
  borderRadius: 5,
},
})