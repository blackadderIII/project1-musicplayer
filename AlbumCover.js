import React from "react";
import { Dimensions, Image, View } from "react-native";

const {width} = Dimensions.get("window").width;

export default function AlbumCover(albumCover) {
    const {imageSource} = albumCover
  return (
    <View style={{ margin: 30 }}>
      <Image
        source={{uri:imageSource}}
        style={{ width, height: 300,borderRadius:80}}
        resizeMode={'contain'}
      />
    </View>
  );
}
