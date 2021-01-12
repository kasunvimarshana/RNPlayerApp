import {Container, ListItem, List, Content, Text} from 'native-base';

const VideoScreen = ({navigation}) => {
   return (
      <Container>
         <Content>
            <List>
               <ListItem onPress={
                  () => navigation.navigate('Player Screen', {
                     external: true,
                     videoURL: 'https://www.w3schools.com/html/mov_bbb.mp4'
                  })
               }>
                  <Text>Video 1</Text>
               </ListItem>
               <ListItem onPress={
                  () => navigation.navigate('Player Screen', {
                     external: true,
                     videoURL: 'http://41.216.229.205:8080/live/livestream/index.m3u8'
                  })
               }>
                  <Text>Video 2</Text>
               </ListItem>
            </List>
         </Content>
      </Container>
   )
}
export default VideoScreen;