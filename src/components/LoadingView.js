import React from 'react';
import {View, Text, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import {BallIndicator} from 'react-native-indicators';

const LoadingView = () => {
  return (
    <View
      style={{
        position: 'absolute',
        height: '100%',
        width: width,
        zIndex: 1,
      }}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{height: 80}}>
<<<<<<< HEAD
          <BallIndicator color="#D45055" size={30} />
=======
          <BallIndicator color="#FE0000" size={30} />
>>>>>>> f31f635 (Mobile new features)
        </View>
        <Text
          style={{color: 'black', fontSize: 16}}
          className="font-openSans"></Text>
      </View>
    </View>
  );
};

export default LoadingView;
