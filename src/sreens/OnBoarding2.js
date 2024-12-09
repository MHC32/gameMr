import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Onboarding2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding2</Text>
    </View>
  )
}

export default Onboarding2

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  text: {
    color: 'white'
  }
})