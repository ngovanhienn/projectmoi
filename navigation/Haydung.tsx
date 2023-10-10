import { View, Text, StyleSheet,style } from 'react-native'
import React from 'react'

type HaydungProps = {
    tile:string
}

const Haydung = ({tile}:HaydungProps) => {
  return (
    <View style={styles.item}>
      <View> 
        <Text style={styles.text1}>{tile}</Text> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    text1: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'red',
    },
    text2: {
        
        fontSize: 16,
        color: 'blue',
    },
})
export default Haydung;