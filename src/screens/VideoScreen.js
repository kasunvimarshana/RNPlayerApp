import React, {Component} from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import {ListItem, List, Content} from 'native-base';

const image = require('../img/bg1.png');

const VideoScreen = ({navigation}) => {
   return (
      <View style={styles.container}>
         <ImageBackground source={image} style={styles.image}>
            <Content>
               <List>
                  <ListItem onPress={
                     () => navigation.navigate('Player', {
                        external: true,
                        videoURL: 'https://www.w3schools.com/html/mov_bbb.mp4'
                     })
                  }>
                     <Text style={styles.text}>Video 1</Text>
                  </ListItem>
               </List>
            </Content>
         </ImageBackground>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: "column",
      //alignItems: 'center',
      //justifyContent: 'center',
    },

    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      padding: 10
    },

    text: {
      color: '#fff'
    }
 });

export default VideoScreen;