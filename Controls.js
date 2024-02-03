import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Controls({ togglePlayBtn, pause ,playNext,playPrevious }) {
  return (
    <View style={styles.container}>
      {/* prevBtn */}
      <TouchableOpacity onPress={playPrevious}>
        <AntDesign name="stepbackward" size={30} color="white" />
      </TouchableOpacity>

      {/* Play/Pause Button */}

      {pause ? (
        <TouchableOpacity style={styles.playPauseBtn} onPress={togglePlayBtn}>
          <AntDesign name="playcircleo" size={40} color="#1B1246" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.playPauseBtn} onPress={togglePlayBtn}>
          <AntDesign name="pausecircleo" size={40} color="#1B1246" />
        </TouchableOpacity>
      )}

      {/* nextBtn */}
      <TouchableOpacity onPress={playNext}>
        <AntDesign name="stepforward" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    justifyContent: "space-around",
  },
  playPauseBtn: {
    width: 120,
    height: 120,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 20,
    borderColor: "#fff",
    margin: 20,
  },
});
