import React, {Component} from 'react';
import { StyleSheet, View, Dimensions, ImageBackground } from 'react-native';
import { Video } from 'expo-av';

const image = require('../img/bg1.png');
const { width, height } = Dimensions.get('window');

const PlayerScreen = ({navigation, route}) => {
   const {external, videoURL} = route.params;
    return (
        <View style={styles.container}>
            <Video
                source={{ uri: videoURL }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={false}
                isLooping={false}
                useNativeControls
                style={styles.video}
            />
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

    video: {
        width: width,
        height: height / 3
    }
});

export default PlayerScreen;