/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Text,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import RNFS from 'react-native-fs';
import Spinner from 'react-native-loading-spinner-overlay';
import ImagePicker from 'react-native-image-crop-picker';
import {baseUrl} from '../../../utils/baseUrl';
import {Platform} from 'react-native';
import {Image} from 'react-native';
import axios from 'axios';
import {
  checkServerConnection,
  removeUserImageFrontend,
  userRequestReport,
} from '../../../utils/api';
import {useNavigation} from '@react-navigation/native';
import {
  CarbonHelpIcon,
  ChevronRight,
  DownloadIcon,
  EditIcon1,
  LanguageIcon,
  LogOutIcon,
  NotificationIcon,
  PrivacyIcon,
  ProfileIcon,
  SettingIcon,
  SubscriptionIcon,
  TermsIcon,
  WarningIcon,
  XMarkIcon,
} from '../../../assets/icons';
import {useTranslation} from 'react-i18next';
import {Switch} from 'react-native-switch';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {resetCategories} from '../../../redux/reducers/CategorySlice';
import {resetReceipts} from '../../../redux/reducers/ReceiptSlice';
import {resetSubscription} from '../../../redux/reducers/SubscriptionSlice';
import {logOut, updateProfileImage} from '../../../redux/reducers/AuthSlice';

const logoutIcon = require('../../../assets/logout.png');

const Profile = () => {
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
  const [switchVal, setSwitchVal] = useState(false);

  const navigation = useNavigation();
  const user = useSelector(state => state.auth.user);
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

        dispatch(updateProfileImage(res?.data?.profile_image));

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

                    dispatch(updateProfileImage(response?.data?.img));

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

  const getIcon = iconName => {
    switch (iconName) {
      case 'Profile':
        return <ProfileIcon width={20} height={20} color={'#FE0000'} />;
      case 'Notification':
        return <NotificationIcon width={20} height={20} color={'#FE0000'} />;
      case 'Setting':
        return <SettingIcon width={20} height={20} color={'#FE0000'} />;
      case 'Language':
        return <LanguageIcon width={20} height={20} color={'#FE0000'} />;
      case 'Subscription':
        return <SubscriptionIcon width={20} height={20} color={'#FE0000'} />;
      case 'Help Center':
        return <CarbonHelpIcon width={20} height={20} color={'#FE0000'} />;
      case 'downloadReport':
        return <DownloadIcon width={20} height={20} color={'#FE0000'} />;

      case 'Terms':
        return <TermsIcon width={20} height={20} color={'#FE0000'} />;
      case 'Privacy':
        return (
          <PrivacyIcon
            width={20}
            height={20}
            color={'#FE0000'}
            subColor={'#FE0000'}
          />
        );
      case 'Logout':
        return <LogOutIcon width={20} height={20} color={'#FE0000'} />;

      default:
        return null;
    }
  };

  const getSettingsMenu = [
    {
      id: 1,
      title: t('editProfile'),
      iconName: 'Profile',
      icon: getIcon('Profile'),
      page: 'GeneralInfo',
    },
    // {
    //   id: 2,
    //   title: t('notification'),
    //   iconName: 'Notification',
    //   icon: getIcon('Notification'),
    //   page: 'Notification',
    // },
    {
      id: 3,
      title: t('settingsFolder'),
      iconName: 'Setting',
      icon: getIcon('Setting'),
      page: 'SettingsFolder',
    },
    {
      id: 4,
      title: t('language'),
      iconName: 'Language',
      icon: getIcon('Language'),
      page: 'Language',
    },
    {
      id: 5,
      title: t('payAsYouGo'),
      iconName: 'Subscription',
      icon: getIcon('Subscription'),
      page: 'SubscriptionFolder',
    },
    {
      id: 10,
      title: t('downloadReport'),
      iconName: 'downloadReport',
      icon: getIcon('downloadReport'),
    },
    {
      id: 6,
      title: t('helpCenter'),
      iconName: 'Help Center',
      icon: getIcon('Help Center'),
      page: 'HelpCenter',
    },
    {
      id: 7,
      title: t('privacy'),
      iconName: 'Privacy',
      icon: getIcon('Privacy'),
      page: 'Privacy',
    },
    {
      id: 8,
      title: t('termsAndConditions'),
      iconName: 'Terms',
      icon: getIcon('Terms'),
      page: 'TermsOfServices',
    },
    {
      id: 9,
      title: t('logout'),
      iconName: 'Logout',
      icon: getIcon('Logout'),
    },
  ];

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '963627114564-rmvn1ajb26oo4tj3fl4vq9v2i1lvclhi.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const handleLogout = async () => {
    Alert.alert(
      'Confirm Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            dispatch(logOut());
            dispatch(resetCategories());
            dispatch(resetReceipts());
            dispatch(resetSubscription());
          },
        },
      ],
      {cancelable: false},
    );
  };

  const revokeSignInWithAppleToken = async () => {
    try {
      const {authorizationCode} = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.REFRESH,
      });

      if (!authorizationCode) {
        throw new Error(
          'Apple Revocation failed - no authorizationCode returned',
        );
      } else {
        handleLogout();
      }
    } catch (err) {
      console.log('Error revoking Apple access:');
    }
  };

  const revokeAccess = async () => {
    try {
      handleLogout();
      await GoogleSignin.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  const generateReport = async () => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      try {
        setLoading(true);
        const response = await userRequestReport(user?.token, setError);
        if (response && response?.status === 200) {
          Alert.alert(response.data.message);
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        className="p-4 bg-background flex-1 bg-white">
        {error && (
          <View className="flex-row items-center justify-center my-2">
            <WarningIcon width={14} height={14} color={'#FE0000'} />
            <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
          </View>
        )}
        {loading && <Spinner visible={loading} color="#D45055" />}

        <View className="justify-center items-center mb-4">
          <Text className="font-InterMedium text-[16px] text-[#1E2022]">
            {t('profile')}
          </Text>
        </View>

        <View className="w-full flex justify-center items-center bg-white h-32">
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
              <XMarkIcon width={12} height={12} color={'#fff'} />
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
                width: 24,
                height: 24,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
                backgroundColor: '#FE0000',
              }}>
              <EditIcon1 width={14} height={14} color={'white'} />
            </View>
          </TouchableOpacity>

          <View className="justify-center items-center">
            <Text className="font-openSans font-semibold text-[16px] text-[#070821]">
              {user?.name}
            </Text>
          </View>
        </View>

        <ScrollView
          className="flex-1 mt-1"
          showsVerticalScrollIndicator={false}>
          {getSettingsMenu &&
            getSettingsMenu?.map((item, index) => {
              return (
                <TouchableOpacity
                  disabled={item?.title === 'Notification'}
                  onPress={() => {
                    if (item.id === 9) {
                      user && user.google
                        ? revokeAccess()
                        : user && user.apple
                          ? revokeSignInWithAppleToken()
                          : handleLogout();
                    } else if (item.id === 10) {
                      generateReport();
                    } else if (item?.title === 'Notification') {
                      return null;
                    } else {
                      navigation.navigate(item?.page);
                    }
                  }}
                  key={item?.id}
                  className="pb-1 flex-row justify-between items-center my-2 mx-2 ">
                  <View
                    style={{
                      width: '10%',
                    }}>
                    <View className="w-10 h-10 justify-center items-center rounded-full bg-red-100 ">
                      {item?.icon}
                    </View>
                  </View>

                  <View
                    style={{
                      width: '86%',
                      marginLeft: 20,
                    }}
                    className={`flex-row justify-between items-center mr-3 ${
                      index === getSettingsMenu.length - 1
                        ? ''
                        : 'border-b border-b-gray-200'
                    } w-[300px] pb-1`}>
                    <View className="justify-start items-center">
                      <Text className="text-md font-DMSansBold text-[#070821]">
                        {item?.title}
                      </Text>
                    </View>
                    <View className="justify-end items-center">
                      {item?.id === 2 ? (
                        <Switch
                          value={switchVal}
                          onValueChange={() =>
                            setSwitchVal(prevState => !prevState)
                          }
                          disabled={true}
                          activeText={''}
                          inActiveText={''}
                          circleSize={25}
                          barHeight={25}
                          backgroundActive={'#1976D2'}
                          backgroundInactive={'gray'}
                          circleBorderInactiveColor="#1976D2"
                          circleBorderActiveColor="#1976D2"
                        />
                      ) : (
                        <ChevronRight width={5} height={11} color={'#bbc3ce'} />
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}

          <View className="pb-40" />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Profile;
