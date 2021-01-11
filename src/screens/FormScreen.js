import React, { Component } from 'react'
import { Text, View } from 'react-native'

const FormScreen = (props) => {
   return (
      <View>
         <Text onPress = {props.updateState}>
            {props.myState}
         </Text>
      </View>
   )
}
export default FormScreen;