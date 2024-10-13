import { Pressable, Text, View, } from 'react-native';

const homepage = () => {

  return (
    <View>
        <Text style={{fontSize:30}}>
            welcome to Home  page
        </Text>
        <Pressable>
            <Text>
                HomePage
            </Text>
        </Pressable>
    </View>
  )
    
};
export default homepage;

