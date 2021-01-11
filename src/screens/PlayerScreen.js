import React, { Component } from 'react'
import { Text, View } from 'react-native'

const PlayerScreen = ({route}) => {
   return (
      <View>
         <Text onPress = {props.updateState}>
            {props.myState}
         </Text>
      </View>
   )
}
export default PlayerScreen;