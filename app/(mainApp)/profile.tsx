import { Pressable, Text, View, } from 'react-native';

const profile = () => {

  return (
    <View>
        <Text style={{fontSize:30}}>
            welcome to profile  page
        </Text>
        <Pressable>
            <Text>
            profile
            </Text>
        </Pressable>
    </View>
  )
    
};
export default profile;