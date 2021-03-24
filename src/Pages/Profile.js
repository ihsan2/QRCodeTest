import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {defaultColor} from '../color';
import {logout} from '../redux/actions/userActions';

const Profile = ({navigation, route}) => {
  const userScan = route?.params?.userScan;
  const scan = route?.params?.scan;
  const user = scan ? userScan : useSelector(state => state.userReducer.user);
  const dispatch = useDispatch();

  const _doLogout = () => {
    dispatch(logout());
    navigation.navigate('Login');
  };

  return (
    <View style={styles.body}>
      <Image source={require('../assets/bg.jpeg')} style={styles.bg} />
      <View style={styles.profile}>
        <Image source={{uri: user?.img}} style={styles.img} />
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.username}>@{user?.username}</Text>
        <View style={styles.follSection}>
          <View style={[styles.foll1, {marginRight: 40}]}>
            <Text style={styles.foll}>{user?.followers}</Text>
            <Text style={styles.follCount}>Followers</Text>
          </View>
          <View style={styles.foll1}>
            <Text style={styles.foll}>{user?.following}</Text>
            <Text style={styles.follCount}>Following</Text>
          </View>
        </View>
      </View>
      {scan ? null : (
        <TouchableOpacity style={styles.btn} onPress={_doLogout}>
          <Text style={styles.logout}>LOGOUT</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bg: {
    width: '100%',
    height: 150,
  },
  profile: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: -20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 20,
    marginTop: -60,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
  username: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.6)',
  },
  follSection: {
    flexDirection: 'row',
    marginTop: 16,
  },
  foll1: {
    alignItems: 'center',
  },
  foll: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  follCount: {
    color: 'rgba(0,0,0,0.8)',
    marginTop: 5,
  },
  btn: {
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 2,
    borderColor: defaultColor,
    marginBottom: 20,
    marginHorizontal: 40,
    borderRadius: 50,
    alignItems: 'center',
  },
  logout: {
    color: defaultColor,
    fontWeight: 'bold',
  },
});

export default Profile;
