import {Image, View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
const Logo = require('../../assets/sima-logo.png');
import {useRoute} from '@react-navigation/native';
const AuthHeader = ({loading}) => {
  const route = useRoute();
  const getHeaderText = () => {
    switch (route.name) {
      case 'Login':
<<<<<<< HEAD
        return 'Welcome back!';
      case 'Signup':
        return 'Great to have you!';
      case 'ForgotPassword':
        return 'Reset your password';
      default:
        return 'Welcome back!';
=======
        return 'Login';
      case 'Signup':
        return 'Register';
      case 'ForgotPassword':
        return 'Reset your password';
      default:
        return 'Login';
>>>>>>> f31f635 (Mobile new features)
    }
  };

  const getSubHeaderText = () => {
    switch (route.name) {
      case 'Login':
<<<<<<< HEAD
        return 'Sign In to your account';
=======
        return 'Welcome back to the App!';
>>>>>>> f31f635 (Mobile new features)
      case 'Signup':
        return 'Create your account';
      case 'ForgotPassword':
        return '';
      default:
<<<<<<< HEAD
        return 'Welcome back!';
    }
  };
  return (
    <View className="h-44 ">
      <Image
        source={Logo}
        className={`w-[24%] h-20 self-center mb-5 `}
        resizeMode="contain"
      />
      <Text className={`text-black text-2xl mt-1 font-openSans font-semibold`}>
        {getHeaderText()}
      </Text>
      <Text className="text-gray-500 mt-2 font-openSans font-semibold">
        {getSubHeaderText()}
      </Text>
      <View className="absolute bottom-1 right-0 left-0">
=======
        return 'Welcome back to the App!';
    }
  };
  return (
    <View className="h-24 ">
      <Text
        className={` text-2xl mt-1 text-center font-InterExtraBold text-custom-red-500`}>
        {getHeaderText()}
      </Text>
      <Text className="text-custom-black-500 mt-2 text-[16px] text-center font-InterRegular ">
        {getSubHeaderText()}
      </Text>
      <View className="top-10">
>>>>>>> f31f635 (Mobile new features)
        {loading && <ActivityIndicator animating={true} color="#D45055" />}
      </View>
    </View>
  );
};

export default AuthHeader;
