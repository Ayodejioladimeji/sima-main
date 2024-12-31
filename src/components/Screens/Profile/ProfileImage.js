import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
<<<<<<< HEAD
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import RNFS from 'react-native-fs';
import Feather from 'react-native-vector-icons/Feather';
=======
import RNFS from 'react-native-fs';

>>>>>>> f31f635 (Mobile new features)
import Spinner from 'react-native-loading-spinner-overlay';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';
import {baseUrl} from '../../../utils/baseUrl';
import {Platform} from 'react-native';
import {Image} from 'react-native';
import axios from 'axios';
import {
  checkServerConnection,
  removeUserImageFrontend,
} from '../../../utils/api';
import {useNavigation} from '@react-navigation/native';
<<<<<<< HEAD
=======
import {WarningIcon, XMarkIcon} from '../../../assets/icons';
import {updateProfileImage} from '../../../redux/reducers/AuthSlice';
>>>>>>> f31f635 (Mobile new features)

const ProfileImage = () => {
  const navigation = useNavigation();
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const choosePhotoFromLibrary = async () => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      await ImagePicker.openPicker({
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
        .catch(error => {
          if (error.code === 'E_PICKER_CANCELLED') {
            return false;
          }
        });
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

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
<<<<<<< HEAD
        dispatch({
          type: 'UPDATE_PROFILE_IMAGE',
          img: res.data.profile_image,
        });
=======

        dispatch(updateProfileImage(res?.data?.profile_image));
>>>>>>> f31f635 (Mobile new features)

        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        console.log('CLOUDINARY ERROR', err);
        setLoading(false);
      });
  };

  const removeUserImage = async () => {
    const showRemoveImagePrompt = () => {
      Alert.alert(
        'Remove Image',
        'Are you sure you want to remove your image?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: async () => {
              // Proceed with removing the image
              const isServerConnected = await checkServerConnection();
              if (isServerConnected) {
                setError('');
                try {
                  setLoading(true);
                  const response = await removeUserImageFrontend(
                    user?.token,
                    setError,
                  );
                  if (response?.status === 200) {
                    setImage(response.data.img);
                    Alert.alert(response.data.message);
<<<<<<< HEAD
                    dispatch({
                      type: 'UPDATE_PROFILE_IMAGE',
                      img: response.data.img,
                    });
=======

                    dispatch(updateProfileImage(response?.data?.img));
>>>>>>> f31f635 (Mobile new features)

                    setLoading(false);
                  }
                } catch (err) {
                  setLoading(false);
                  setError('');
                }
              } else {
                const errorMessage = 'Server is busy or not connected!';
                setError(errorMessage);
              }
            },
          },
        ],
        {cancelable: false},
      );
    };

    showRemoveImagePrompt();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
<<<<<<< HEAD
      className="p-4 bg-background flex-1 bg-customBg">
      {error && (
        <View className="flex-row items-center justify-center my-2">
          <FontAwesome name="warning" size={14} color="#D45055" />
=======
      className="p-4 bg-background flex-1 bg-white">
      {error && (
        <View className="flex-row items-center justify-center my-2">
          <WarningIcon width={14} height={14} color={'#FE0000'} />
>>>>>>> f31f635 (Mobile new features)
          <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
        </View>
      )}
      {loading && <Spinner visible={loading} color="#D45055" />}
<<<<<<< HEAD
      <View className="w-full flex justify-center items-center bg-customBg h-32">
=======
      <View className="w-full flex justify-center items-center bg-white h-32">
>>>>>>> f31f635 (Mobile new features)
        <TouchableOpacity className="z-20" onPress={() => removeUserImage()}>
          <View
            style={{
              position: 'absolute',
              top: -4,
              right: 15,
              width: 23,
              height: 23,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}>
<<<<<<< HEAD
            <Feather name="x" color="#fff" size={20} />
=======
            <XMarkIcon width={12} height={12} color={'#fff'} />
>>>>>>> f31f635 (Mobile new features)
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={choosePhotoFromLibrary} className="z-10">
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
          <View
            style={{
              position: 'relative',
              bottom: 30,
              left: 50,
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}>
<<<<<<< HEAD
            <Feather name="camera" color="#fff" size={20} />
=======
            {/* <Feather name="camera" color="#fff" size={20} /> */}
>>>>>>> f31f635 (Mobile new features)
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ProfileImage;
