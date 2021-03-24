import React, {useState} from 'react';
import {
  View,
  Text,
  useWindowDimensions,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import Profile from './Profile';
import QR from './QR';
import {defaultColor} from '../color';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'profile',
      title: 'Profile',
      icon: 'account-box-multiple-outline',
    },
    {key: 'qr', title: 'QR Code', icon: 'qrcode-scan'},
  ]);

  const renderScene = ({route}) => {
    switch (route.key) {
      case 'profile':
        return <Profile navigation={navigation} />;
      case 'qr':
        return <QR navigation={navigation} />;
    }
  };

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorContainerStyle={styles.tabBar}
        indicatorStyle={styles.tabBarIndicator}
        renderLabel={({route, focused, color}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Icon
              color={focused ? defaultColor : '#CACACA'}
              name={route.icon}
              size={22}
            />
            <Text
              style={[
                styles.tabBarLabel,
                focused ? styles.tabBarLabelActive : {},
              ]}>
              {route.title}
            </Text>
          </View>
        )}
        style={styles.tabBar}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    elevation: 0,
    shadowOpacity: 0,
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 0.5,
  },
  tabBarIndicator: {
    backgroundColor: defaultColor,
  },
  tabBarLabel: {
    color: '#CACACA',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  tabBarLabelActive: {
    color: defaultColor,
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Home;
