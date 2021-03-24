import React, {useEffect} from 'react';
import {SafeAreaView, Image, ActivityIndicator, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {defaultColor} from '../color';

const Splash = ({navigation}) => {
  const user = useSelector(state => state.userReducer.user);

  useEffect(() => {
    _checkUser();
  }, []);

  const _checkUser = () => {
    setTimeout(() => {
      if (user) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Login');
      }
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <ActivityIndicator
        color={defaultColor}
        size={'large'}
        style={styles.load}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 120,
    paddingTop: 40,
  },
  load: {
    position: 'absolute',
    bottom: 120,
  },
});

export default Splash;
