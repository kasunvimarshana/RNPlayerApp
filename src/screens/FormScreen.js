import React, {Component} from 'react';
import { StyleSheet, View, ImageBackground, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

const image = require('../img/bg1.png');

const FormScreen = () => {
    const [value, onChangeText] = React.useState();

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
              <Text style={styles.text}>Title</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeText(text)}
                value={value}
              />

              <Button
                title="Submit"
                buttonStyle={ styles.button }
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

    textInput: {
      height: 40, 
      borderColor: 'gray', 
      borderWidth: 1,
      color: '#fff'
    },

    button: {
      margin: 5
    },

    text: {
      color: '#fff'
    }
  });

export default FormScreen;