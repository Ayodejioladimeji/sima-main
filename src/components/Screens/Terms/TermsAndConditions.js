import {useNavigation} from '@react-navigation/native';
import React from 'react';
<<<<<<< HEAD
import {Text, TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';
import AntDesign from 'react-native-vector-icons/AntDesign';
=======
import {TouchableOpacity, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {GoBackIcon2} from '../../../assets/icons';
>>>>>>> f31f635 (Mobile new features)

const url = 'https://simainc.ca/terms-and-conditions';

const TermsAndConditions = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
      }}>
      <TouchableOpacity
        style={{
          width: 48,
          height: 48,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}>
<<<<<<< HEAD
        <AntDesign name="arrowleft" size={22} color="#000" />
=======
        <GoBackIcon2 width={20} height={16} color={'#000'} />
>>>>>>> f31f635 (Mobile new features)
      </TouchableOpacity>
      <WebView
        source={{uri: url}}
        style={{flex: 1, position: 'relative', top: -40}}
      />
    </View>
  );
};

export default TermsAndConditions;
