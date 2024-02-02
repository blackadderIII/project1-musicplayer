import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { Video } from 'expo-av';

import Controls from './Controls.js';
import AlbumCover from './AlbumCover.js';
import AlbumDetails from './AlbulmDetails.js';
import { TRACKS } from './tracks-data.js';

export default function App() {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const currentTrack = TRACKS[selectedTrack];

  const [pause, setPause] = useState(false);

  // useRef to hold the reference to the Audio element
  const audioRef = useRef(null);

  function togglePlayBtn() {
    setPause(!pause);

    if (audioRef.current) {
      if (!pause) {
        audioRef.current.pauseAsync();
      } else {
        audioRef.current.playAsync();
      }
    }
  }
  

  return (
    <View style={styles.container}>
      <AlbumCover imageSource={currentTrack.albumArtUrl} />

      <AlbumDetails trackName={currentTrack.title} trackArtist={currentTrack.artist} />

      <Controls {...{ togglePlayBtn }} {...{ pause }} />

      <Video
        ref={audioRef}
        source={require('./music1.mp3')}
        shouldPlay={!pause}
        isLooping={false}
      />

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#223',
  },
});
