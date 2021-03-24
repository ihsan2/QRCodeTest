import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUsers, setUser} from '../redux/actions/userActions';
import {TextInput} from 'react-native-gesture-handler';
import {login} from '../api';
import {defaultColor} from '../color';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const users = useSelector(state => state.userReducer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    _getUsers();
  }, []);

  const _getUsers = () => {
    dispatch(getUsers());
  };

  const _doLogin = () => {
    setLoading(true);
    login(users, username, password)
      .then(resp => {
        dispatch(setUser(resp.data));
        navigation.navigate('Home');
        _resetState();
      })
      .catch(err => {
        setErr(err.error);
      })
      .finally(() => setLoading(false));
  };

  const _resetState = () => {
    setErr('');
    setUsername('');
    setPassword('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image style={styles.image} source={require('../assets/logo.png')} />
        <View style={styles.labelSection}>
          <Text style={styles.loginText}>Login</Text>
          <Text style={styles.subloginText}>Please login to your account.</Text>
        </View>
        <View style={styles.inputSection}>
          <TextInput
            placeholder={'Masukkan username'}
            style={styles.input}
            value={username}
            onChangeText={val => setUsername(val)}
          />
          <TextInput
            placeholder={'Masukkan password'}
            style={styles.input}
            value={password}
            onChangeText={val => setPassword(val)}
            secureTextEntry={true}
          />
        </View>
        {err ? <Text style={styles.err}>{err}</Text> : null}
        <TouchableOpacity style={styles.btn} onPress={_doLogin}>
          {loading ? (
            <ActivityIndicator color={'#fff'} />
          ) : (
            <Text style={styles.login}>LOGIN</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    marginTop: 20,
    alignSelf: 'center',
  },
  labelSection: {
    paddingHorizontal: 36,
  },
  loginText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subloginText: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.6)',
  },
  inputSection: {
    paddingHorizontal: 36,
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    marginVertical: 20,
  },
  btn: {
    backgroundColor: defaultColor,
    margin: 36,
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
  },
  login: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  err: {
    color: 'red',
    marginHorizontal: 36,
  },
});

export default Login;
