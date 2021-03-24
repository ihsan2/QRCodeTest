import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {defaultColor} from '../color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const w = Dimensions.get('window').width;

const ModalView = ({isVisible, closeModal, toProfil, user}) => {
  return (
    <View>
      <Modal isVisible={isVisible}>
        <View style={styles.body}>
          <Image source={{uri: user?.img}} style={styles.img} />
          <Text style={styles.username}>{user?.username?.toUpperCase()}</Text>
          <Text style={styles.name}>{user?.name}</Text>
          <TouchableOpacity style={styles.btn} onPress={toProfil}>
            <Text style={styles.txt}>Lihat Profil</Text>
          </TouchableOpacity>
          <Icon
            name={'close'}
            size={30}
            color={'#000'}
            style={styles.icon}
            onPress={closeModal}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: w - 80,
    height: 360,
    alignSelf: 'center',
    alignItems: 'center',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    marginTop: 36,
  },
  username: {
    color: defaultColor,
    fontSize: 40,
    marginTop: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  name: {
    color: 'rgba(0,0,0,0.8)',
    fontSize: 20,
    marginTop: 4,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: defaultColor,
    width: '80%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  txt: {color: '#fff', fontSize: 16, fontWeight: 'bold'},
  icon: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
});

export default ModalView;
