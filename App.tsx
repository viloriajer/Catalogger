/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {CatalogItem, getAll} from './CatalogItem/getAll';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [items, setItems] = useState<Array<CatalogItem> | null>(null);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    getAll().then(data => setItems(data));
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <Text>Hello</Text>
        {items?.map(({title, purchaseDate, serialNo}) => {
          return (
            <View>
              <Text>{title}</Text>
              <Text>{serialNo}</Text>
              <Text>{purchaseDate.toDate().toLocaleDateString()}</Text>
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;
