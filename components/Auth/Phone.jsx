import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'

function Phone() {
    const [number, setNumber] = useState('');

  return (
    <View>
        <TextInput
                    style={{ margin: 10, height: 40, padding:10, borderWidth: 1 }}
                    placeholder='Phone Number'
                    onChangeText={setNumber}
                    value={number}
                />
                <View style={{ borderWidth: 1, backgroundColor:"white", color:"black", padding:"12px", width:"100px", margin:"auto" }}>
                    <Text>Submit</Text>
                </View>
    </View>
  )
}

export default Phone