import React from 'react';
import { auth } from "../../firebase/config";
import { sendEmailVerification, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Phone from "./Phone"


function Auth() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [createSignUp, setCreateSignUp] = useState(false);
    const [servererror, setServerError] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const [emailAuth, setEmailAuth] = useState(false);

    const signIn = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setIsLoggedin(true);
            setUserInfo(user);
            console.log('User signed in:', user);
            setServerError(false);
        } catch (error) {
            console.log('Error signing in:', JSON.stringify(error), error.customData._tokenResponse.error.message);
            setServerError(true);
            setErrMessage(error.customData._tokenResponse.error.message || "Invalid credentials!")
        }
    };

    const signUp = async (email, password) => {
        if (password !== confirmPass) {
            setServerError(true);
            setErrMessage("Confirmed password is not same");
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            setIsLoggedin(true);
            setUserInfo(user);
            setServerError(false);
            console.log('User signed up:', user);
        } catch (error) {
            console.log('Error signing up:', JSON.stringify(error), error.customData._tokenResponse.error.message);
            setServerError(true);
            setErrMessage(error.customData._tokenResponse.error.message)
        }
    };

    const emailVerification = async () => {
        const user = userInfo;
        if (user)
            try {
                await sendEmailVerification(user, {
                    handleCodeInApp: true,
                    url: 'https://daily-shares.firebaseapp.com'
                }).then((user) => {
                    console.log(user)
                })
            } catch (e) {
                console.log(e);
            }
    }

    const signinemail = (key) => {
        setEmailAuth(key);
    }
    const signinfb = async() => {
       
    }
    const signingoogle = () => {}
   
    
    const handleSignout = async () => {
        try {
            await signOut(auth);
            setIsLoggedin(false);
            setUserInfo({});
            console.log('User signed out successfully');
        } catch (error) {
            console.log('Error signing out:', error.message);
        }
    };
    
 
    if (isLoggedin) {
        return (
            <View>
                <Text style={{ color: "green", fontSize: 14 }}>SIGNED IN</Text>
                <Text style={{ color: "green", fontSize: 14 }}>{userInfo.email}</Text>
                <Text style={{ color: "green", fontSize: 14 }} onPress={() => emailVerification()}>
                    {userInfo.emailVerified ? "Verified User" : "Verify?"}
                </Text>
                <Text style={{ color: "green", fontSize: 14 }}>{userInfo.phoneNumber}</Text>
                <Text style={{ color: "green", fontSize: 14 }}>{userInfo.photoURL}</Text>
                <Text style={{ color: "black", fontSize: 14 }} onClick={() => handleSignout()}>{'Sign Out'}</Text>
            </View>
        )
    } else {
        return (
            <View>

                {emailAuth ? <View>              
                <TextInput
                    style={{ margin: 10, height: 40, borderWidth: 1 }}
                    placeholder='Email'
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={{ margin: 10, height: 40, borderWidth: 1 }}
                    placeholder='Password'
                    onChangeText={setPass}
                    value={pass}
                    secureTextEntry
                />
                {createSignUp ? (
                    <TextInput
                        style={{ margin: 10, height: 40, borderWidth: 1 }}
                        placeholder='Confirm Password'
                        onChangeText={setConfirmPass}
                        value={confirmPass}
                        secureTextEntry
                    />
                ) : null}

                {servererror ? (
                    <Text style={{ margin: "auto", padding: 10, color: "red" }}>
                        {errMessage}
                    </Text>
                ) : null}

                {createSignUp ? (
                    <TouchableOpacity onPress={() => signUp(email, pass)}>
                        <Text style={{ margin: "auto", padding: 10, borderColor: "black", borderWidth: 1 }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={() => signIn(email, pass)}>
                        <Text style={{ margin: "auto", padding: 10, borderColor: "black", borderWidth: 1 }}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity onPress={() => setCreateSignUp(!createSignUp)}>
                    <Text style={{ margin: "auto" }}>
                        {createSignUp ? "Already have an account? Sign In" : "Create Account?"}
                    </Text>
                </TouchableOpacity>
                </View> : null}

                {emailAuth ? null : <Phone />}

                
                <View style={{ border: "1px dotted black", width: "150px", margin: "auto", marginTop: "20px", marginBottom: "20px" }} />
                {emailAuth ? <Text style={{ margin: "auto", marginTop: "10px", padding: "10px", border: "1px solid black" }} onClick={() => signinemail(false)}>Sign in with Phone Number</Text> : <Text style={{ margin: "auto", marginTop: "10px", padding: "10px", border: "1px solid black" }} onClick={() => signinemail(true)}>Sign in with Email</Text>}
                <Text style={{ margin: "auto", marginTop: "10px", padding: "10px", border: "1px solid black" }} onClick={() => signingoogle()}>Sign in with GOOGLE</Text>
                <Text style={{ margin: "auto", marginTop: "10px", padding: "10px", border: "1px solid black" }} onClick={() => signinfb()}>Sign in with FB</Text>
            </View>
        )
    }
}

export default Auth;
