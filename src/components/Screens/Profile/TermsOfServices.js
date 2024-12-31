import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

const privacyUrl = 'https://simainc.ca/terms-and-conditions';

const TermsOfServices = () => {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
      }}
<<<<<<< HEAD
      className="bg-customBg">
=======
      className="bg-white">
>>>>>>> f31f635 (Mobile new features)
      <WebView
        source={{uri: privacyUrl}}
        style={{flex: 1, position: 'relative', top: -40}}
      />
    </View>
  );
};

export default TermsOfServices;
