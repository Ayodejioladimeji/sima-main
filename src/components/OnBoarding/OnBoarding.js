import {View, Image, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const onboarding1 = require('../../assets/welcome/wel1.png');
const onboarding2 = require('../../assets/welcome/wel2.png');
const onboarding3 = require('../../assets/welcome/wel3.png');

import Onboarding from 'react-native-onboarding-swiper';

const OnBoarding = () => {
  const navigation = useNavigation();

  const dotComponent = ({selected}) => {
    return (
      <View
        className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
<<<<<<< HEAD
          selected ? 'border border-red-400' : ''
        }  p-2`}>
        <View
          className={`w-2 h-2 ${
            selected ? 'bg-red-400' : 'bg-red-200'
=======
          selected ? 'border border-red-500' : ''
        }  p-2`}>
        <View
          className={`w-2 h-2 ${
            selected ? 'bg-red-500' : 'bg-red-400'
>>>>>>> f31f635 (Mobile new features)
          } rounded-full`}></View>
      </View>
    );
  };
  return (
    <Onboarding
      onSkip={() => navigation.navigate('Login')}
      onDone={() => navigation.navigate('Login')}
      DotComponent={dotComponent}
      pages={[
        {
<<<<<<< HEAD
          backgroundColor: '#F8F3EC',
=======
          backgroundColor: '#FFFFFF',
>>>>>>> f31f635 (Mobile new features)
          image: (
            <Image source={onboarding1} className="w-72 h-72 object-contain" />
          ),
          title: '',
          subtitle: (
<<<<<<< HEAD
            <Text className="font-openSans">Scan your receipts with ease.</Text>
=======
            <Text className="font-InterRegular">
              Scan your receipts with ease.
            </Text>
>>>>>>> f31f635 (Mobile new features)
          ),
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image source={onboarding2} className="w-72 h-72 object-contain" />
          ),
          title: '',
          subtitle: (
<<<<<<< HEAD
            <Text className="font-openSans">
=======
            <Text className="font-InterRegular">
>>>>>>> f31f635 (Mobile new features)
              We keep track of your expenses.
            </Text>
          ),
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image source={onboarding3} className="w-72 h-72 object-contain" />
          ),
          title: '',
          subtitle: (
<<<<<<< HEAD
            <Text className="font-openSans">
=======
            <Text className="font-InterRegular">
>>>>>>> f31f635 (Mobile new features)
              Your expenses breakdown - we got you!
            </Text>
          ),
        },
      ]}
    />
  );
};

export default OnBoarding;
