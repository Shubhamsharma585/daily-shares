import { Text, View, StyleSheet, Platform } from 'react-native';
import Auth from "../../components/Auth/Auth";


export default function HomeScreen() {


  return (
    <View>
        <Text style={{color:"orangered", fontSize:16, margin: 12}}>Home</Text>
        <Auth />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
