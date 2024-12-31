import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CustomInput from '../../Common/CustomInput/CustomInput';
import {
  checkServerConnection,
  updateUserInfo,
  updateUserLang,
} from '../../../utils/api';
<<<<<<< HEAD
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import i18next from 'i18next';

const Language = () => {
=======
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import i18next from 'i18next';
import {ChecklistIcon, GoBackIcon2, WarningIcon} from '../../../assets/icons';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native';
import {updateLanguage} from '../../../redux/reducers/AuthSlice';

const Language = () => {
  const {t} = useTranslation();

>>>>>>> f31f635 (Mobile new features)
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const userSubmitLang = async ln => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      const userData = {
        ln,
      };
      setError('');
      setSuccess('');
      try {
        setLoading(true);
        const response = await updateUserLang(userData, user?.token, setError);
        if (response?.status === 200) {
          setSuccess(response.data.message);
<<<<<<< HEAD
          dispatch({
            type: 'UPDATE_LANGUAGE',
            language: response?.data?.updatedUser?.language,
          });
=======
          dispatch(updateLanguage(response?.data?.updatedUser?.language));
>>>>>>> f31f635 (Mobile new features)
          setTimeout(() => {
            setSuccess('');
            setError('');
            i18next.changeLanguage(response?.data?.updatedUser?.language);
<<<<<<< HEAD
            navigation.navigate('Settings');
=======
            navigation.navigate('Profile');
>>>>>>> f31f635 (Mobile new features)
          }, 2000);
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        setSuccess('');
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

  return (
<<<<<<< HEAD
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      className="p-4 bg-background flex-1 bg-customBg">
      <View className="absolute top-2 left-0 right-0 bottom-0 mx-auto my-auto">
        {loading && <ActivityIndicator animating={true} color="#D45055" />}
        {success && (
          <View className="flex-row items-center justify-center my-2">
            <FontAwesome name="check-circle" size={14} color="green" />
            <Text className="text-green-800 ml-1 font-openSans">{success}</Text>
          </View>
        )}

        {error && (
          <View className="flex-row items-center justify-center my-2">
            <FontAwesome name="warning" size={14} color="#D45055" />
            <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
          </View>
        )}
      </View>

      <View className="mt-10">
        <View className="-mt-1">
          <TouchableOpacity
            onPress={() => userSubmitLang('en')}
            className={`p-2 my-2 flex-row items-center  ${
              user?.language === 'en' ? 'bg-slate-200' : 'bg-slate-50'
            }`}>
            {user?.language === 'en' ? (
              <FontAwesome name="check-circle" size={14} color="green" />
            ) : (
              ''
            )}
            <Text className="text-gray-700 pl-2 font-openSans">English</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => userSubmitLang('fr')}
            className={`p-2 my-2 flex-row items-center  ${
              user?.language === 'fr' ? 'bg-slate-200' : 'bg-slate-50'
            }`}>
            {user?.language === 'fr' ? (
              <FontAwesome name="check-circle" size={14} color="green" />
            ) : (
              ''
            )}
            <Text className="text-gray-700 pl-2 font-openSans">French</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
=======
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        className="p-4 bg-background flex-1 bg-white">
        <View className="absolute top-11 left-0 right-0 bottom-0 mx-auto my-auto">
          {loading && <ActivityIndicator animating={true} color="#D45055" />}
          {success && (
            <View className="flex-row items-center justify-center my-2">
              <ChecklistIcon width={14} height={14} color={'#71BA65'} />
              <Text className="text-green-800 ml-1 font-openSans">
                {success}
              </Text>
            </View>
          )}

          {error && (
            <View className="flex-row items-center justify-center my-2">
              <WarningIcon width={14} height={14} color={'#FE0000'} />
              <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
            </View>
          )}
        </View>

        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <GoBackIcon2 width={20} height={16} color={'#000'} />
          </TouchableOpacity>

          <View className="flex-1 items-center">
            <Text className="text-[#1E2022] text-[16px] font-openSans">
              {t('language')}
            </Text>
          </View>
        </View>

        <View className="my-8">
          <Text className="text-[18px] text-[#191919] font-InterBold mt-5">
            {t('language')}
          </Text>
        </View>

        <View className="">
          <View className="-mt-1">
            <TouchableOpacity
              onPress={() => userSubmitLang('en')}
              className={`p-2 my-2 flex-row items-center  ${
                user?.language === 'en'
              }`}>
              <View className="flex-row w-full justify-between border-b border-[#CCCC]">
                <View>
                  <Text className="text-black font-InterMedium mb-3">
                    English
                  </Text>
                </View>

                <View className="mr-4">
                  {user?.language === 'en' ? (
                    <ChecklistIcon width={20} height={20} color={'#71BA65'} />
                  ) : (
                    ''
                  )}
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => userSubmitLang('fr')}
              className={`p-2 my-2 flex-row items-center  ${
                user?.language === 'fr'
              }`}>
              <View className="flex-row w-full justify-between border-b border-[#CCCC]">
                <View>
                  <Text className="text-black font-InterMedium mb-3">
                    French
                  </Text>
                </View>

                <View className="mr-4">
                  {user?.language === 'fr' ? (
                    <ChecklistIcon width={20} height={20} color={'#71BA65'} />
                  ) : (
                    ''
                  )}
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
>>>>>>> f31f635 (Mobile new features)
  );
};

export default Language;
