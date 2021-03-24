import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Vibration,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  QRScannerRectView,
  QRScannerView,
} from 'react-native-qrcode-scanner-view';
import {defaultColor} from '../color';
import Modal from './Modal';
import {RNCamera} from 'react-native-camera';

const w = Dimensions.get('window').width;

const ScanQR = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(null);

  const _closeModal = () => {
    setVisible(false);
  };

  const _toProfil = () => {
    setVisible(false);
    navigation.navigate('Profile', {scan: true, userScan: user});
  };

  const renderMenu = () => {
    return (
      <TouchableOpacity
        style={styles.scan}
        onPress={() => navigation.goBack(null)}>
        <Icon name="qrcode-scan" size={24} color="#fff" />
        <Text style={styles.scanText}>Kembali ke Kode QR Anda</Text>
      </TouchableOpacity>
    );
  };

  const renderTitleBar = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.vIcon}
          onPress={() => navigation.goBack(null)}>
          <Icon name="chevron-left" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'transparent'}}>
      <RNCamera
        style={{flex: 1}}
        onBarCodeRead={({data}) => {
          // Vibration.vibrate([0, 100]);
          setVisible(true);
          setUser(JSON.parse(data));
        }}
        scanBarAnimateReverse>
        <QRScannerRectView
          maskColor={'rgba(16,158,146,0.5)'}
          cornerStyle={{borderColor: defaultColor}}
          hintText={''}
        />
      </RNCamera>
      {/* <QRScannerView
        onScanResult={({data}) => {
          setVisible(true);
          setUser(JSON.parse(data));
        }}
        renderHeaderView={renderTitleBar}
        renderFooterView={renderMenu}
        scanBarAnimateReverse={true}
        hintText={''}
        maskColor={'rgba(16,158,146,0.6)'}
        cornerStyle={{borderColor: defaultColor}}
      /> */}
      <Modal
        isVisible={visible}
        closeModal={_closeModal}
        toProfil={_toProfil}
        user={user}
      />
      {renderTitleBar()}
      {renderMenu()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scan: {
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    width: w,
    justifyContent: 'center',
  },
  scanText: {
    color: '#fff',
    fontSize: 20,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    position: 'absolute',
    top: 0,
  },
  vIcon: {
    backgroundColor: 'rgba(0,0,0,0.36)',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 20,
  },
});

export default ScanQR;
