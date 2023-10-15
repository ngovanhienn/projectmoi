import { View, Text,Image } from 'react-native'
import React from 'react'

const Pay = () => {
  return (
    <View>
       <Image
            style={{height:'100%', width:'100%'}}
            source={require('../Image/qr3.jpg')}
          />
    </View>
  )
}

export default Pay