import { Image, StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import React from 'react';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { PhotoType } from "../types/types";
import { darkMode } from "../store/darkMode";

export const DetailsPhoto = observer(({navigation, route}: any) => {
  const photo: PhotoType = route.params.photo;

  navigation.setOptions({ title: photo.title });
  
  const backgroundStyle = {
    backgroundColor: darkMode.isDark ? Colors.darker : Colors.lighter,
  };
    return (
        <View style={{...backgroundStyle, height: '100%'}}>
          <Text style={styles.text}>{photo.title}</Text>
          <Text style={styles.text}>{photo.description}</Text>
          <View style={styles.touch} >
            <Image src={photo.url} style={styles.img} />
          </View>
        </View>
    );
});

const styles = StyleSheet.create({
  img: {
    height: 350,
    width: 350,
  },
  text: {
    padding: 8,
    fontSize: 18,
  },
  touch: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});