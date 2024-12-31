import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Pressable,
  Platform,
<<<<<<< HEAD
=======
  SafeAreaView,
>>>>>>> f31f635 (Mobile new features)
} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
<<<<<<< HEAD
=======
import {ChevronRight, GoBackIcon2} from '../../../assets/icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
>>>>>>> f31f635 (Mobile new features)

const SettingsFolder = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();

  return (
<<<<<<< HEAD
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      className="p-4 bg-background flex-1 bg-customBg">
      <View>
        <Pressable
          onPress={() => navigation.navigate('GeneralInfo')}
          className="flex flex-row border-b border-slate-300 py-4">
          <Text className="text-slate-900 capitalize font-openSans">
            {t('updateInformation')}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('ProfileImage')}
          className="flex flex-row border-b border-slate-300 py-4">
          <Text className="text-slate-900 capitalize font-openSans">
            {t('updateProfileImage')}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('UpdatePassword')}
          className="flex flex-row border-b border-slate-300 py-4">
          <Text className="text-slate-900 capitalize font-openSans">
            {t('updatePassword')}
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
=======
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        className="p-4 bg-background flex-1 bg-white">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <GoBackIcon2 width={20} height={16} color={'#000'} />
          </TouchableOpacity>

          <View className="flex-1 items-center">
            <Text className="text-[#1E2022] text-[16px] font-openSans">
              {t('settingsFolder')}
            </Text>
          </View>
        </View>

        <View className="my-8">
          <Text className="text-[18px] text-[#191919] font-InterBold">
            {t('settingsFolder')}
          </Text>
        </View>

        <View className="relative">
          <Pressable
            onPress={() => navigation.navigate('UpdatePassword')}
            className="flex flex-row border-b border-slate-300 py-4">
            <Text className="text-black capitalize font-InterMedium">
              {t('updatePassword')}
            </Text>

            <View className="absolute mt-6 ml-[350px] right-1">
              <ChevronRight width={7} height={15} color={'#191919'} />
            </View>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
>>>>>>> f31f635 (Mobile new features)
  );
};

export default SettingsFolder;
