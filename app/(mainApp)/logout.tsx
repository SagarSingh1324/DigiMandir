import { Pressable, Text, View, } from 'react-native';

const logout = () => {

  return (
    <View>
        <Text style={{fontSize:30}}>
            welcome to logout  page
        </Text>
        <Pressable>
            <Text>
            logout
            </Text>
        </Pressable>
    </View>
  )
    
};
export default logout;

