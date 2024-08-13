import { Image, Text, View, StyleSheet, Platform } from 'react-native';
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from "react";


export default function HomeScreen() {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const signIn = async (email:any, password: any) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed in:', user);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <View >
        <Text style={{color:"orangered"}}>RSS</Text>
        <input onChange={(e) => setEmail(e.target.value)}/>
        <input onChange={(e) => setPass(e.target.value)}/>
        <h1 onClick={() => signIn(email, pass)}>Signin</h1>
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
