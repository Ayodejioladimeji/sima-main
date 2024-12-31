<<<<<<< HEAD
=======
/* eslint-disable react-native/no-inline-styles */
>>>>>>> f31f635 (Mobile new features)
import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
<<<<<<< HEAD
=======
  SafeAreaView,
  Alert,
>>>>>>> f31f635 (Mobile new features)
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from 'react-hook-form';
import CustomInput from '../../Common/CustomInput/CustomInput';
import {checkServerConnection, updateUserInfo} from '../../../utils/api';
<<<<<<< HEAD
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';

const GeneralInfo = () => {
=======
import {useNavigation} from '@react-navigation/native';
import {ActivityIndicator} from 'react-native';
import {ChecklistIcon, GoBackIcon2, WarningIcon} from '../../../assets/icons';
import {Image} from 'react-native';
import RNFS from 'react-native-fs';
import ImageCropPicker from 'react-native-image-crop-picker';
import SettingsInput from '../../Common/CustomInput/SettingsInput';
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import {baseUrl} from '../../../utils/baseUrl';
import {
  updateProfileImage,
  updateProfileName,
} from '../../../redux/reducers/AuthSlice';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const GeneralInfo = () => {
  const {t} = useTranslation();

>>>>>>> f31f635 (Mobile new features)
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

<<<<<<< HEAD
=======
  const [image, setImage] = useState(null);

>>>>>>> f31f635 (Mobile new features)
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const {control, handleSubmit, reset} = useForm({
    defaultValues: {
      name: user?.name || '',
    },
  });

  const signUpSubmit = async data => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      const {name} = data;

      const userData = {
        name,
      };
      setError('');
      setSuccess('');
      try {
        setLoading(true);
        const response = await updateUserInfo(userData, user?.token, setError);
        if (response?.status === 200) {
          setSuccess(response.data.message);
<<<<<<< HEAD
          dispatch({
            type: 'UPDATE_PROFILE_NAME',
            name: response?.data?.updatedUser?.name,
          });
          setTimeout(() => {
            setSuccess('');
            setError('');
            navigation.navigate('Settings');
=======
          dispatch(updateProfileName(response?.data?.updatedUser?.name));
          setTimeout(() => {
            setSuccess('');
            setError('');
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

<<<<<<< HEAD
  return (
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
          name="name"
          control={control}
          placeholder="Name"
          rules={{
            required: 'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          }}
        />

        <TouchableOpacity
          onPress={handleSubmit(signUpSubmit)}
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
  const uploadImage = async (uri, base64) => {
    setLoading(true);
    const uriArr = uri.split('.');
    const fileType = uriArr[uriArr.length - 1];
    const file = `data:${fileType};base64,${base64}`;
    await axios
      .post(
        `${baseUrl}upload-image`,
        {image: file},
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: user?.token,
          },
        },
      )
      .then(res => {
        setLoading(false);
        Alert.alert('Image uploaded successfully');
        dispatch(updateProfileImage(res?.data?.profile_image));

        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log('CLOUDINARY ERROR', err);
        setLoading(false);
      });
  };

  const choosePhotoFromLibrary = async () => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      await ImageCropPicker.openPicker({
        width: 768,
        height: 1024,
        cropping: true,
        compressImageMaxHeight: 1024,
        compressImageMaxWidth: 768,
        compressImageQuality: 0.5,
        mediaType: 'photo',
      })
        .then(async image => {
          const validImageExtensions = [
            'jpg',
            'jpeg',
            'png',
            'gif',
            'JPEG',
            'JPG',
            'PNG',
          ];
          const extension = image.path.split('.').pop().toLowerCase();

          if (!validImageExtensions.includes(extension)) {
            Alert.alert(
              'Invalid file type',
              'Please select a valid image file.',
            );
            return;
          }

          const base64 = await RNFS.readFile(image.path, 'base64');
          setImage(image.path);
          uploadImage(image.path, base64);
        })
        .catch(err => {
          if (err.code === 'E_PICKER_CANCELLED') {
            return false;
          }
        });
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        className="p-4 bg-background flex-1 bg-white">
        <View className="">
          <View className="flex-row justify-between items-center">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <GoBackIcon2 width={20} height={16} color={'#000'} />
            </TouchableOpacity>

            <Text className="text-[#1E2022] ml-6 text-[16px] font-openSans">
              {t('editProfile')}
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

          <View className="justify-center items-center mt-5">
            <TouchableOpacity
              onPress={choosePhotoFromLibrary}
              className="justify-center items-center z-10">
              <Image
                source={{
                  uri: image === null ? user?.img : image,
                }}
                style={{
                  width: 75,
                  height: 75,
                  borderRadius: 100,
                }}
              />

              <Text className="text-[15px] text-[#1976D2] font-bold font-openSans mt-5">
                {t('changeProfilePhoto')}
              </Text>
            </TouchableOpacity>
          </View>

          <View className="mt-5">
            <Text className="mt-2 text-[15px] font-openSans font-bold text-custom-black-500">
              {t('fullName')}
            </Text>
            <SettingsInput
              name="name"
              control={control}
              placeholder="Name"
              rules={{
                required: 'Name is required',
                minLength: {
                  value: 3,
                  message: 'Name should be at least 3 characters long',
                },
                maxLength: {
                  value: 24,
                  message: 'Name should be max 24 characters long',
                },
              }}
            />
          </View>

          <View className="justify-center items-center">
            <TouchableOpacity
              onPress={handleSubmit(signUpSubmit)}
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

export default GeneralInfo;
