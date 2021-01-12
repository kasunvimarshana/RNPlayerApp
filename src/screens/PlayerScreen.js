import {Container} from 'native-base';
import Video from 'react-native-video';

const PlayerScreen = ({navigation, route}) => {
   const {external, videoURL} = route.params;
   return (
      <Container>
         <Video
            controls
            paused
            muted
            source={external ? {uri: videoURL} : videoURL}
            style={{flex: 1}}
         />
      </Container>
   )
}
export default PlayerScreen;