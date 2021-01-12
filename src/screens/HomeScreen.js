import React, {Component} from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';

const image = require('../img/bg1.png');

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Button
            title="Video"
            size={15}
            type="outline"
            buttonStyle={ styles.button }
            onPress={() => navigation.navigate("Video")}
          /> 
          <Button
            title="Form"
            size={15}
            type="outline"
            buttonStyle={ styles.button }
            onPress={() => navigation.navigate("Form")}
          />
        </ImageBackground>
      </View>
    );
};

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

    button: {
      margin: 5
    }
  });

export default HomeScreen;