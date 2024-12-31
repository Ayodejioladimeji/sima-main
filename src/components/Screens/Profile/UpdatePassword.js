import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
<<<<<<< HEAD
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import CustomInput from '../../Common/CustomInput/CustomInput';
import {checkServerConnection, updatePassword} from '../../../utils/api'; // You'll need to create this API function
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

const UpdatePassword = () => {
=======
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import {checkServerConnection, updatePassword} from '../../../utils/api'; // You'll need to create this API function
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import SettingsInput from '../../Common/CustomInput/SettingsInput';
import {
  ChecklistIcon,
  EyeIcon3,
  EyeIcon4,
  GoBackIcon2,
  WarningIcon,
} from '../../../assets/icons';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native';

const UpdatePassword = () => {
  const {t} = useTranslation();

>>>>>>> f31f635 (Mobile new features)
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

<<<<<<< HEAD
=======
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);

>>>>>>> f31f635 (Mobile new features)
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const {control, handleSubmit, reset} = useForm();

  const updatePasswordSubmit = async data => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
<<<<<<< HEAD
      const {newPassword} = data;
=======
      const {newPassword, newConPassword} = data;

      if (newPassword !== newConPassword) {
        Alert.alert('Warning', 'Password does not match ');
        return;
      }
>>>>>>> f31f635 (Mobile new features)

      const userData = {
        password: newPassword,
      };
      setError('');
      setSuccess('');
      try {
        setLoading(true);
        const response = await updatePassword(userData, user?.token, setError);
        if (response?.status === 200) {
          setSuccess(response.data.message);
          reset();
          setTimeout(() => {
            setSuccess('');
            setError('');
<<<<<<< HEAD
            navigation.navigate('Settings');
=======
            navigation.navigate('Profile');
>>>>>>> f31f635 (Mobile new features)
          }, 4000);
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
      <View className="my-4">
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

        <CustomInput
          name="newPassword"
          control={control}
          placeholder="New Password"
          rules={{
            required: 'New Password is required',
            minLength: {
              value: 6,
              message: 'Password should be at least 6 characters long',
            },
          }}
          secureTextEntry={true}
        />

        <TouchableOpacity
          onPress={handleSubmit(updatePasswordSubmit)}
          disabled={loading}
          className={`${
            loading ? 'bg-slate-400' : 'bg-customRed'
          } rounded-lg w-full p-2 text-center my-2`}>
          <Text className="text-sm text-white text-center font-openSans font-bold">
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
=======
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        className="p-4 bg-background flex-1 bg-white">
        <View>
          <View className="flex-row justify-between items-center">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>

            <Text className="text-[#1E2022] ml-6 text-[16px] font-openSans ">
              {t('settingsFolder')}
            </Text>

            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text className="text-[#FF3062] text-[13px] font-InterBold">
                {t('cancel')}
              </Text>
            </TouchableOpacity>
          </View>

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
          <View className="my-8">
            <Text className="text-[18px] text-[#191919] font-InterBold">
              {t('updatePassword')}
            </Text>
          </View>
          <View>
            <Text className="mt-2 font-InterSemiBold text-custom-black-500">
              {t('newPassword')}
            </Text>
            <SettingsInput
              name="newPassword"
              control={control}
              placeholder={t('newPassword')}
              rules={{
                required: 'New Password is required',
                minLength: {
                  value: 6,
                  message: 'Password should be at least 6 characters long',
                },
              }}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              className={`absolute ${
                Platform.OS === 'ios' ? 'top-[25px]' : 'top-[54px]'
              } right-3`}>
              {showPassword ? (
                <EyeIcon3 width={22} height={22} color={'#999DA3'} />
              ) : (
                <EyeIcon4 width={22} height={22} color={'#999DA3'} />
              )}
            </TouchableOpacity>
          </View>
          <View>
            <Text className="mt-2 font-InterSemiBold text-custom-black-500">
              {t('confirmPassword')}
            </Text>
            <SettingsInput
              name="newConPassword"
              control={control}
              placeholder={t('confirmPassword')}
              rules={{
                required: 'Confirm Password is required',
                minLength: {
                  value: 6,
                  message: 'Password should be at least 6 characters long',
                },
              }}
              secureTextEntry={!showConPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConPassword(!showConPassword)}
              className={`absolute ${
                Platform.OS === 'ios' ? 'top-[25px]' : 'top-[54px]'
              } right-3`}>
              {showConPassword ? (
                <EyeIcon3 width={22} height={22} color={'#999DA3'} />
              ) : (
                <EyeIcon4 width={22} height={22} color={'#999DA3'} />
              )}
            </TouchableOpacity>
          </View>
          <View className="justify-center items-center">
            <TouchableOpacity
              onPress={handleSubmit(updatePasswordSubmit)}
              disabled={loading}
              className={`${
                loading ? 'bg-slate-400' : 'bg-customRed'
              } rounded-full w-[222px] h-[45px] p-2 justify-center items-center my-2`}>
              <Text className="text-sm text-white  font-InterMedium ">
                {t('update')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
>>>>>>> f31f635 (Mobile new features)
  );
};

export default UpdatePassword;
