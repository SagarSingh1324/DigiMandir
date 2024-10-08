import { Pressable, Text, View, } from 'react-native';

const ContentPage = () => {

  return (
    <View>
        <Text style={{fontSize:30}}>
            welcome to setting page
        </Text>
        <Pressable>
            <Text>
                settings
            </Text>
        </Pressable>
    </View>
  )
    
};
export default ContentPage;