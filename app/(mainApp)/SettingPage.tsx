import { View, Text, ImageBackground, StyleSheet, Image,Pressable } from 'react-native';

export default function SettingPage() {

return (
  <ImageBackground
  source={require('../../assets/images/LakshmiImage.png')}
  resizeMode="stretch" 
  style={styles.image} >

  <View>
  
  <Pressable> 
           <Text>
            Setting Page yash kumar
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
     justifyContent: 'center',
     alignItems: 'center',
   },

  // fieldText: {
  //   color: '#000000',
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   margin: 10,
  // },

  // input:{
  //   width: 200,
  //   borderWidth: 2,
  //   borderColor: '#555',
  //   borderRadius: 5,
  // },
});