import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import qrLogo from '../assets/qrlogo.png';
import {defaultColor} from '../color';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {request, check, PERMISSIONS} from 'react-native-permissions';

const QR = ({navigation}) => {
  const user = useSelector(state => state.userReducer.user);

  const _toScan = async () => {
    if (Platform.OS === 'android') {
      const camera = await check(PERMISSIONS.ANDROID.CAMERA);
      if (camera === 'granted') {
        navigation.navigate('ScanQR');
      } else {
        await request(PERMISSIONS.ANDROID.CAMERA);
      }
    } else {
      navigation.navigate('ScanQR');
    }
  };
  return (
    <View>
      <ImageBackground source={require('../assets/bgqr.jpg')} style={styles.bg}>
        <View style={styles.qrV}>
          <View style={{marginTop: 36}} />
          <QRCode
            value={JSON.stringify(user)}
            logo={qrLogo}
            logoSize={50}
            logoBackgroundColor="white"
            backgroundColor="white"
            color={defaultColor}
            size={240}
          />
          <Text style={styles.username}>@{user?.username.toUpperCase()}</Text>
        </View>
        <TouchableOpacity style={styles.scan} onPress={_toScan}>
          <Icon name="camera-outline" size={24} color="#fff" />
          <Text style={styles.scanText}>Pindai kode QR</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qrV: {
    width: '85%',
    height: 360,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  username: {
    color: defaultColor,
    fontSize: 36,
    marginTop: 24,
    fontWeight: 'normal',
  },
  scan: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  scanText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
  },
});

export default QR;
