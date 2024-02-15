import React, { useEffect } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { observer } from 'mobx-react-lite'
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { photosStore } from '../store/photos';
import { darkMode } from '../store/darkMode';

export const Home = observer(({navigation}: any) => {
  const isLoad = photosStore.isLoad;
  const isDark = darkMode.isDark;
  const photos = photosStore.photos;
  const backgroundStyle = {
    backgroundColor: isDark ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    photosStore.getPhotos();
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {isLoad
        ? <View style={styles.spinner}>
            <Text style={styles.text}>Загрузка...</Text>
          </View>
        : photos.length > 0
          ? <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={backgroundStyle}>
              {photos.map(el => (
                    <TouchableOpacity
                      key={el.id}
                      onPress={() => navigation.navigate('DetailsPhoto', {photo: el})}
                      style={styles.touch}>
                      <Image src={el.url} style={styles.img} />
                    </TouchableOpacity>
                  ))}
            </ScrollView>
          : <View style={styles.spinner}>
              <Text style={styles.text}>Фотографий нет</Text>
            </View>}
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  img: {
    height: 350,
    width: 350,
  },
  spinner: {
    height: '100%',
  },
  text: {
    textAlign: 'center',
    padding: 15,
    fontSize: 20,
  },
  touch: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});
