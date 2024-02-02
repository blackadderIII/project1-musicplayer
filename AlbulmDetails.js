import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function AlbulmDetails({trackName,trackArtist}) {
  return (
    <View style={{justifyContent:'center'}}>
      <Text style={styles.name}>{trackName}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    name:{
        fontSize:40,
        color:'#fff',
        alignSelf:'center',
        fontWeight:'bold'
    },
    artist:{
        fontSize:20,
        color:'#fff',
        alignSelf:'center'
    }
})