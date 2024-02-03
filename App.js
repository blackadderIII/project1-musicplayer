import { StatusBar } from "expo-status-bar";
import React, { useState, useRef } from "react";
import { StyleSheet, View ,Text} from "react-native";
import {Video} from 'expo-av';

import Controls from "./Controls.js";
import AlbumCover from "./AlbumCover.js";
import AlbumDetails from "./AlbulmDetails.js";
import { TRACKS } from "./tracks-data.js";

export default function App() {
  const [selectedTrack, setSelectedTrack] = useState(0);
  const currentTrack = TRACKS[selectedTrack];

  const [pause, setPause] = useState(false);

  // useRef to hold the reference to the Audio element
  const audioRef = useRef(null);

  // play ,pause
  function togglePlayBtn() {
    setPause(!pause);

    if (audioRef.current) {
      if (!pause) {
        audioRef.current.pauseAsync();
        console.log('pause')
      } else {
        audioRef.current.playAsync();
        console.log('play')
      }
    }
  }

  // play the next song
  function playNext() {
    // if selected track is last song next button should reset and start again from first song
    if (selectedTrack === TRACKS.length - 1) {
      setSelectedTrack(0);
    } else {
      setSelectedTrack(selectedTrack + 1);
    }
  }

  // play the previous song
  function playPrevious() {
    // if selected song is first song previous button should reset and start from the last song backwards.
    if (selectedTrack === 0) {
      setSelectedTrack(TRACKS.length - 1);
    } else {
      setSelectedTrack(selectedTrack - 1);
    }
  }

  return (
    <View style={styles.container}>
      <AlbumCover imageSource={currentTrack.albumArtUrl} />

      <AlbumDetails
        trackName={currentTrack.title}
        trackArtist={currentTrack.artist}
      />

      <Controls
        {...{ togglePlayBtn }}
        {...{ pause }}
        {...{ playNext }}
        {...{ playPrevious }}
      />

      <Video
        ref={audioRef}
        source={currentTrack.audioUrl}
        shouldPlay={!pause}
        isLooping={false}
      />
      
      <Text style={{alignSelf:"center",bottom:-80,color:"#fff"}}>Developed By BlackadderIII</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#223",
  },
});
