<<<<<<< HEAD
=======
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
>>>>>>> f31f635 (Mobile new features)
import React, {useState, useRef, useCallback, useMemo, useEffect} from 'react';

import {
  ScrollView,
  Text,
  View,
  Image,
  SafeAreaView,
  Alert,
  Modal,
  TouchableOpacity,
  Pressable,
  Keyboard,
  Platform,
  ActivityIndicator,
<<<<<<< HEAD
  PermissionsAndroid,
=======
>>>>>>> f31f635 (Mobile new features)
} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import RNFS from 'react-native-fs';
import ImgToBase64 from 'react-native-image-base64';
<<<<<<< HEAD
import FontAwesome from 'react-native-vector-icons/FontAwesome';
=======
>>>>>>> f31f635 (Mobile new features)
import {useIAP} from 'react-native-iap';
import RNFetchBlob from 'rn-fetch-blob';
import MonthPicker from 'react-native-month-year-picker';

<<<<<<< HEAD
import Icon from 'react-native-vector-icons/AntDesign';
=======
>>>>>>> f31f635 (Mobile new features)
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

<<<<<<< HEAD
import BottomSheet from '@gorhom/bottom-sheet';

=======
>>>>>>> f31f635 (Mobile new features)
import ImagePicker from 'react-native-image-crop-picker';
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';

import LottieView from 'lottie-react-native';
<<<<<<< HEAD
import {useSelector} from 'react-redux';
=======
import {useDispatch, useSelector} from 'react-redux';
>>>>>>> f31f635 (Mobile new features)
import {useTranslation} from 'react-i18next';
import axios from 'axios';
import {baseUrl} from '../../../utils/baseUrl';
import {
  checkServerConnection,
  userLoadSavedImages,
  userSendImageToEmail,
  userUpdateScanFrontend,
  userVerifyAndroidReceipt,
  userVerifyIosReceipt,
} from '../../../utils/api';
<<<<<<< HEAD
import {store} from '../../../store';
import {updateSubscription} from '../../../store/actions/subsActions';
import Spinner from 'react-native-loading-spinner-overlay';
import moment from 'moment';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
=======

import Spinner from 'react-native-loading-spinner-overlay';
import moment from 'moment';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {
  CameraIcon,
  ChecklistIcon,
  DocumentIcon,
  GalleryIcon,
  ScanIcon2,
  ScanIcon3,
  WarningIcon,
  XMarkIcon,
} from '../../../assets/icons';
import RBSheet from 'react-native-raw-bottom-sheet';
import {updateSubscription} from '../../../redux/reducers/SubscriptionSlice';
import ModalPopup from '../../CustomModal/ModalPopup';
>>>>>>> f31f635 (Mobile new features)

const errorLog = ({message, error}) => {
  console.log('An error happened', message, error);
};

const Scan = () => {
<<<<<<< HEAD
  const appStoreShared = process.env.API_SHARED_KEY;
  const scanKey = process.env.API_KEY;

  // console.log(appStoreShared, scanKey);

=======
  const dispatch = useDispatch();

  const appStoreShared = process.env.API_SHARED_KEY;
  const scanKey = process.env.API_KEY;
  const bottomSheetRef = useRef(null);
>>>>>>> f31f635 (Mobile new features)
  const isFocused = useIsFocused();
  const [imgUri, setUri] = useState('');
  const {purchaseHistory, connected, getPurchaseHistory} = useIAP();
  const user = useSelector(state => state.auth.user);
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingSub, setLoadingSub] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [responseText, setResponseText] = useState(null);
  const subscription = useSelector(state => state.subs.subscription);
  const [file, setFile] = useState(null);
  const [userImages, setUserImages] = useState([]);
  const [columns, setColumns] = useState(3);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [urlImage, setUrlImage] = useState(null);
  const [selectedSavedImage, setSelectedSavedImage] = useState(null);
  const [datePicked, setDatePicked] = useState(new Date());
  const [show, setShow] = useState(false);
<<<<<<< HEAD
=======
  const [getImageLoading, setGetImageLoading] = useState(false);
>>>>>>> f31f635 (Mobile new features)

  const showPicker = useCallback(value => {
    setShow(value);
  }, []);

  const fetchData = async () => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      try {
<<<<<<< HEAD
=======
        setGetImageLoading(true);
>>>>>>> f31f635 (Mobile new features)
        const response = await userLoadSavedImages(user?.token, setError);

        if (response && response?.status === 200 && user) {
          setUserImages(response?.data);
<<<<<<< HEAD
        }
      } catch (error) {
        console.log('Error fetching data:', error);
=======
          setGetImageLoading(false);
        }
        setGetImageLoading(false);
      } catch (err) {
        setGetImageLoading(false);
        console.log('Error fetching data:', err);
>>>>>>> f31f635 (Mobile new features)
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

  const filteredImages = useMemo(() => {
    const selectedMonth = moment(datePicked)?.format('MMMM');
    return userImages?.filter(
<<<<<<< HEAD
      image => moment(image?.createdAt).format('MMMM') === selectedMonth,
=======
      img => moment(img?.createdAt).format('MMMM') === selectedMonth,
>>>>>>> f31f635 (Mobile new features)
    );
  }, [datePicked, userImages]);

  const onValueChange = useCallback(
    (event, newDate) => {
      const selectedDate = newDate || datePicked;

      showPicker(false);
      setDatePicked(selectedDate);
    },
    [datePicked, showPicker],
  );

  useEffect(() => {
    if (user && user?.token) {
      fetchData();
    }
  }, []);

  const remainingScans = subscription && subscription?.receiptsScanned;

<<<<<<< HEAD
  const bottomSheetRef = useRef(null);
=======
>>>>>>> f31f635 (Mobile new features)
  const lottieRef = useRef(null);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const takePhotoFromCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: 768,
        height: 1024,
        cropping: true,
        compressImageMaxHeight: 1024,
        compressImageMaxWidth: 768,
        compressImageQuality: 0.5,
        mediaType: 'photo',
      });
      setFile(image);
      setImage(image.path);

      const pathParts = image.path.split('/');
      const imageNameNew = pathParts[pathParts.length - 1];
      setImageName(imageNameNew);
      bottomSheetRef.current.close();
<<<<<<< HEAD
    } catch (error) {
      if (error.code === 'E_PICKER_CANCELLED') {
=======
    } catch (err) {
      if (err.code === 'E_PICKER_CANCELLED') {
>>>>>>> f31f635 (Mobile new features)
        return false;
      }
    }
  };

  const choosePhotoFromLibrary = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 768,
        height: 1024,
        cropping: true,
        compressImageMaxHeight: 1024,
        compressImageMaxWidth: 768,
        compressImageQuality: 0.5,
        mediaType: 'photo',
      });

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
        Alert.alert('Invalid file type', 'Please select a valid image file.');
        return;
      }

      const pathParts = image.path.split('/');
      const imageNameNew = pathParts[pathParts.length - 1];

      setImageName(imageNameNew);
      setFile(image);
      setImage(image.path);

      bottomSheetRef.current.close();
<<<<<<< HEAD
    } catch (error) {
      if (error.code === 'E_PICKER_CANCELLED') {
=======
    } catch (err) {
      if (err.code === 'E_PICKER_CANCELLED') {
>>>>>>> f31f635 (Mobile new features)
        return false;
      }
    }
  };

  const convertImageToBase64 = async imagePath => {
    try {
      setLoading(true);
      const base64String = await ImgToBase64.getBase64String(imagePath);
      setLoading(false);
      return base64String;
<<<<<<< HEAD
    } catch (error) {
      console.log('Error converting image to base64:', error);
=======
    } catch (err) {
      console.log('Error converting image to base64:', err);
>>>>>>> f31f635 (Mobile new features)
      throw error;
    }
  };

  const handleURLScan = async base64Image => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      try {
        setLoading(true);
        const formData = new FormData();
        formData.append('document', {
          uri: `data:image/jpeg;base64,${base64Image}`,
          type: 'image/jpeg',
          name: 'image.jpg',
        });

        const response = await fetch(
          'https://api.mindee.net/v1/products/mindee/expense_receipts/v5/predict',
          {
            method: 'POST',
            headers: {
              Authorization: `Token ${scanKey}`,
            },
            body: formData,
          },
        );

        if (response.ok) {
          const resUp = await userUpdateScanFrontend(user?.token, setError);
          if (resUp && resUp.status === 200) {
<<<<<<< HEAD
            store.dispatch(updateSubscription(resUp.data.subscription));
=======
            dispatch(updateSubscription(resUp.data.subscription));
>>>>>>> f31f635 (Mobile new features)
          }
          const responseBody = await response.text();
          setResponseText(responseBody);
          navigation.navigate('ScanResultScreen', {
            responseText: responseBody,
          });
        } else {
          Alert.alert('This image is not supported!');
        }
        setLoading(false);
<<<<<<< HEAD
      } catch (error) {
        console.log('Error:', error);
=======
      } catch (err) {
        console.log('Error:', err);
>>>>>>> f31f635 (Mobile new features)
        Alert.alert('An error occurred.');
        setLoading(false);
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

  const handleImagePress = async imagePath => {
<<<<<<< HEAD
=======
    console.log('Pressed');
>>>>>>> f31f635 (Mobile new features)
    setImage(null);
    bottomSheetRef.current.close();
    try {
      const base64Image = await convertImageToBase64(imagePath);
      setUrlImage(base64Image);
<<<<<<< HEAD
    } catch (error) {
=======
    } catch (err) {
>>>>>>> f31f635 (Mobile new features)
      console.log('Error:', error);
      Alert.alert('An error occurred.');
      setLoading(false);
    }

    setModalVisible(false);
  };

  const handleImageEmail = async imagePath => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      const imageData = {
        image_link: imagePath,
      };

      setError('');
      setSuccess('');

      try {
        setLoading(true);
        const res = await userSendImageToEmail(
          imageData,
          user?.token,
          setError,
        );

        if (res && res.status === 200) {
          Alert.alert(res.data.message);
        }
        setLoading(false);
<<<<<<< HEAD
      } catch (error) {
        console.log('Error:', error);
=======
      } catch (err) {
        console.log('Error:', err);
>>>>>>> f31f635 (Mobile new features)
        Alert.alert('An error occurred.');
        setLoading(false);
      }

      setModalVisible(false);
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

  const cancelAndAddNew = useCallback(() => {
    setImage(null);
    setUrlImage(null);
<<<<<<< HEAD
    bottomSheetRef?.current?.expand();
=======
    bottomSheetRef?.current?.open();
>>>>>>> f31f635 (Mobile new features)
  }, []);

  const uploadImage = async () => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      const base64 = await RNFS.readFile(image, 'base64');
      setLoading(true);
      const uriArr = image.split('.');
      const fileType = uriArr[uriArr.length - 1];
      const file = `data:${fileType};base64,${base64}`;
      try {
        const response = await axios.post(
          `${baseUrl}upload-image-receipt`,
          {image: file},
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Authorization: user?.token,
            },
          },
        );

        if (response.status === 200) {
          await fetchData();
          await handleScan();

          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (err) {
        setLoading(false);
        console.log('CLOUDINARY ERROR', err);
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

  const handleScan = async () => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      if (!image) {
        Alert.alert('Please select an image to scan.');
        return;
      }

      try {
        setLoading(true);
        const base64Image = await RNFS.readFile(image, 'base64');

        const formData = new FormData();
        formData.append('document', {
          uri: `data:image/jpeg;base64,${base64Image}`,
          type: file.mime,
          name: imageName,
        });

        const response = await fetch(
          'https://api.mindee.net/v1/products/mindee/expense_receipts/v5/predict',
          {
            method: 'POST',
            headers: {
              Authorization: `Token ${scanKey}`,
            },
            body: formData,
          },
        );

        if (response.ok) {
          const resUp = await userUpdateScanFrontend(user?.token, setError);
          if (resUp && resUp.status === 200) {
<<<<<<< HEAD
            store.dispatch(updateSubscription(resUp.data.subscription));
=======
            dispatch(updateSubscription(resUp.data.subscription));
>>>>>>> f31f635 (Mobile new features)
          }
          const responseBody = await response.text();
          setResponseText(responseBody);
          navigation.navigate('ScanResultScreen', {
            responseText: responseBody,
          });
        } else {
          Alert.alert('This image is not supported!');
          return;
        }
        setLoading(false);
<<<<<<< HEAD
      } catch (error) {
        console.log('Error:', error);
=======
      } catch (err) {
        console.log('Error:', err);
>>>>>>> f31f635 (Mobile new features)
        Alert.alert('An error occurred.');
      } finally {
        setLoading(false);
      }
    } else {
      const errorMessage = '';
      setError(errorMessage);
    }
  };

  const handleGetPurchaseHistory = async () => {
    try {
      setLoading(true);
      await getPurchaseHistory();
      setLoading(false);
<<<<<<< HEAD
    } catch (error) {
      setLoading(false);
      errorLog({message: 'handleGetPurchaseHistory', error});
=======
    } catch (err) {
      setLoading(false);
      errorLog({message: 'handleGetPurchaseHistory', err});
>>>>>>> f31f635 (Mobile new features)
    }
  };

  useEffect(() => {
    if (connected) {
      handleGetPurchaseHistory();
    }
  }, [connected]);

  useFocusEffect(
    React.useCallback(() => {
      console.log('Scan Focused');
      handleGetPurchaseHistory();
    }, []),
  );

  const loadAndroidData = useCallback(async () => {
    let isMounted = true;
    const isServerConnected = await checkServerConnection();
    if (isServerConnected && isFocused) {
      setLoadingSub(true);
      if (purchaseHistory?.length > 0) {
        if (Platform.OS === 'android') {
          try {
            const androidRes = await userVerifyAndroidReceipt(
              {
                receipt: purchaseHistory[0]?.transactionReceipt,
                productId: purchaseHistory[0]?.transactionReceipt?.productId,
                purchaseToken:
                  purchaseHistory[0]?.transactionReceipt?.purchaseToken,
              },
              user?.token,
              setError,
            );

            if (isMounted && androidRes && androidRes.data.success) {
              if (androidRes.data.subscriptionData) {
<<<<<<< HEAD
                store.dispatch(
                  updateSubscription(androidRes.data.subscriptionData),
                );
              }
            }
          } catch (error) {
            console.log(error);
=======
                dispatch(updateSubscription(androidRes.data.subscriptionData));
              }
            }
          } catch (err) {
            console.log(err);
>>>>>>> f31f635 (Mobile new features)
          }
        } else {
          const isTestEnvironment = __DEV__;

          try {
            const verificationResponse = await userVerifyIosReceipt(
              {
                receiptData: purchaseHistory[0]?.transactionReceipt,
                password: appStoreShared,
                isTestEnvironment,
              },
              user?.token,
              setError,
            );

            if (
              isMounted &&
              verificationResponse &&
              verificationResponse?.data?.success
            ) {
              if (verificationResponse.data.subscriptionData) {
<<<<<<< HEAD
                store.dispatch(
=======
                dispatch(
>>>>>>> f31f635 (Mobile new features)
                  updateSubscription(
                    verificationResponse.data.subscriptionData,
                  ),
                );
              }
            }
<<<<<<< HEAD
          } catch (error) {
            console.log(error);
=======
          } catch (err) {
            console.log(err);
>>>>>>> f31f635 (Mobile new features)
          }
        }
      }

      setLoadingSub(false);
    } else {
      const errorMessage = '';
      setError(errorMessage);
    }

    return () => {
      isMounted = false;
    };
<<<<<<< HEAD
  }, [
    purchaseHistory,
    user?.token,
    setError,
    appStoreShared,
    store,
    isFocused,
  ]);
=======
  }, [purchaseHistory, user?.token, setError, appStoreShared, isFocused]);
>>>>>>> f31f635 (Mobile new features)

  useEffect(() => {
    loadAndroidData();
  }, [loadAndroidData]);

<<<<<<< HEAD
  const handleCancel = () => {
    navigation.navigate('Home');
  };

  const checkPermission = async image_URL => {
    if (Platform.OS === 'ios') {
      downloadImage(image_URL);
    } else {
      try {
        downloadImage(image_URL);
      } catch (error) {
        console.log(error);
      }
    }
  };

=======
>>>>>>> f31f635 (Mobile new features)
  const savePicture = async image_URL => {
    if (Platform.OS === 'android') {
      let dirs = RNFetchBlob.fs.dirs;
      let randomNumber = Math.floor(Math.random() * 1000000);
      let filePath = `${dirs.DownloadDir}/sima_${randomNumber}.jpg`;

      RNFetchBlob.config({
        fileCache: true,
        appendExt: 'jpg',
        path: filePath,
      })
        .fetch('GET', image_URL)
        .then(res => {
          Alert.alert('Image Downloaded Successfully');
        })
        .catch(error => {
          console.log('Error:', error);
        });
    } else if (Platform.OS === 'ios') {
      const {dirs} = RNFetchBlob.fs;
      const downloadDest = `${dirs.DocumentDir}/${
        (Math.random() * 1000) | 0
      }.jpg`;

      const response = await RNFetchBlob.config({
        fileCache: true,
        appendExt: 'jpg',
        path: downloadDest,
      }).fetch('GET', image_URL);

      const filePath = response.path();
      let fileUri = filePath.replace('file://', '');

      CameraRoll?.saveAsset(fileUri, {type: 'photo'})
        .then(res => {
          Alert.alert('Image Downloaded Successfully.');
          setUri(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

<<<<<<< HEAD
  return (
    <SafeAreaView style={{flex: 1}} className=" bg-customBg">
=======
  useEffect(() => {
    if (isFocused) {
      bottomSheetRef.current.open();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={{flex: 1}} className=" bg-white">
>>>>>>> f31f635 (Mobile new features)
      {loadingSub && <Spinner visible={loadingSub} color="#FE0002" />}

      {error && (
        <View className="flex-row items-center justify-center my-2">
<<<<<<< HEAD
          <FontAwesome name="warning" size={14} color="#D45055" />
=======
          <WarningIcon width={14} height={14} color={'#FE0000'} />
>>>>>>> f31f635 (Mobile new features)
          <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
        </View>
      )}

<<<<<<< HEAD
      {image && !urlImage && (
        <View className="flex-1 justify-center items-center">
          <Image
            source={{
              uri: image,
            }}
            className="w-full h-3/5"
            resizeMode="contain"
          />

          {loading ? (
            <LottieView
              ref={lottieRef}
              style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                width: 670,
                height: hp(100),
              }}
              source={require('../../../assets/animation/scan_doc.json')}
              autoPlay
              loop
            />
          ) : (
            <>
              <TouchableOpacity
                className="px-3 py-2 rounded-md bg-red-500 items-center my-1 w-2/3"
                onPress={uploadImage}>
                <Text className="text-md font-bold text-white font-openSans">
                  Next{' '}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="px-3 py-2 rounded-md bg-customRed items-center my-1 w-2/3"
                onPress={cancelAndAddNew}>
                <Text className="text-md font-bold text-white font-openSans">
                  Cancel and add new
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}

      {urlImage && !image && (
        <View className="flex-1 justify-center items-center">
          <Image
            source={{uri: `data:image/jpeg;base64,${urlImage}`}}
            className="w-full h-3/5"
            resizeMode="contain"
          />

          {loading ? (
            <LottieView
              ref={lottieRef}
              style={{
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
                width: 670,
                height: hp(100),
              }}
              source={require('../../../assets/animation/scan_doc.json')}
              autoPlay
              loop
            />
          ) : (
            <>
              <TouchableOpacity
                className="px-3 py-2 rounded-md bg-red-500 items-center my-1 w-2/3"
                onPress={() => handleURLScan(urlImage)}>
                <Text className="text-md font-bold text-white font-openSans">
                  Next{' '}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="px-3 py-2 rounded-md bg-customRed items-center my-1 w-2/3"
                onPress={cancelAndAddNew}>
                <Text className="text-md font-bold text-white font-openSans">
                  Cancel and add new
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}

      <Modal
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => handleCloseModal()}
        transparent>
        <View className="justify-center items-center w-full h-full p-3">
          <Pressable
            className="w-full h-full absolute bg-white opacity-20"
            onPress={() => handleCloseModal()}
          />
          <Pressable
            onPress={() => Keyboard.dismiss()}
            className={`relative p-6 w-full ${
              Platform.OS === 'ios' ? 'h-3/5 bottom-10' : 'h-[500]'
            } items-center bg-slate-100 rounded-md`}>
            <TouchableOpacity
              onPress={() => handleCloseModal()}
              className="absolute top-2 right-2 z-10">
              <Icon name="close" size={19} color="black" />
            </TouchableOpacity>

            {userImages?.length !== 0 && (
              <View className="items-center my-4">
                <Text className="text-xl my-1 font-openSans">
                  Select an image
                </Text>

                <TouchableOpacity
                  onPress={showPicker}
                  className="h-12 rounded-md flex justify-center items-center">
                  <Text className="font-openSans text-black">
                    {moment(datePicked).format('MMMM, YYYY')}
                  </Text>
                </TouchableOpacity>
                {show && (
                  <View className="flex-1 justify-center items-center">
                    <MonthPicker
                      autoTheme={false}
                      onChange={onValueChange}
                      value={datePicked}
                      minimumDate={new Date(2000, 0)}
                      maximumDate={new Date()}
                      locale="en"
                    />
                  </View>
                )}
              </View>
            )}

            <View className="absolute flex justify-center items-center top-2">
              {loading && (
                <ActivityIndicator animating={true} color="#D45055" />
              )}

              {success && (
                <View className="flex-row items-center justify-center my-2">
                  <FontAwesome name="check-circle" size={14} color="green" />
                  <Text className="text-green-800 ml-1 font-openSans">
                    {success}
                  </Text>
                </View>
              )}

              {error && (
                <View className="flex-row items-center justify-center my-2">
                  <FontAwesome name="warning" size={14} color="#D45055" />
                  <Text className="text-red-500 ml-1 font-openSans">
                    {error}
                  </Text>
                </View>
              )}
            </View>

            <ScrollView contentContainerStyle={{flexGrow: 1}}>
              <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
                {!loading && userImages?.length === 0 && (
                  <View className="flex justify-center items-center">
                    <Text className="text-xl font-openSans text-black">
                      You have no images.{' '}
                    </Text>
                  </View>
                )}
                {filteredImages && filteredImages?.length === 0 && (
                  <View>
                    <Text className="text-center text-red-600">
                      No images found for{' '}
                      {moment(datePicked).format('MMMM, YYYY')}
                    </Text>
                  </View>
                )}
                {filteredImages?.map((item, index) => (
                  <TouchableOpacity
=======
      <View
        className={`justify-center items-center ${
          image || urlImage ? 'mt-4' : 'mt-20'
        }`}>
        <TouchableOpacity onPress={() => bottomSheetRef.current.open()}>
          <ScanIcon2 width={133} height={133} />
        </TouchableOpacity>
        <Text className="my-7 font-InterRegular text-sm text-[#9A9A9A]">
          Scan your Documents
        </Text>
      </View>

      <ScrollView>
        {image && !urlImage && (
          <View className="flex-1 justify-center items-center">
            <Image
              source={{
                uri: image,
              }}
              className="w-full min-h-[260px]"
              resizeMode="contain"
            />

            {loading ? (
              <LottieView
                ref={lottieRef}
                style={{
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1000,
                  width: 670,
                  height: hp(100),
                }}
                source={require('../../../assets/animation/scan_doc.json')}
                autoPlay
                loop
              />
            ) : (
              <>
                <TouchableOpacity
                  className="px-3 py-2 rounded-md bg-customRed items-center  my-3 w-2/3"
                  onPress={uploadImage}>
                  <Text className="text-md font-bold text-white font-openSans">
                    Next
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="px-3 py-2 rounded-md bg-customRed items-center my-1 w-2/3"
                  onPress={cancelAndAddNew}>
                  <Text className="text-md font-bold text-white font-openSans">
                    Cancel and add new
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        )}

        {urlImage && !image && (
          <View className="flex-1 justify-center items-center">
            <Image
              source={{uri: `data:image/jpeg;base64,${urlImage}`}}
              className="w-full h-[250px]"
              resizeMode="contain"
            />

            {loading ? (
              <LottieView
                ref={lottieRef}
                style={{
                  position: 'absolute',
                  justifyContent: 'center',
                  alignItems: 'center',
                  zIndex: 1000,
                  width: 670,
                  height: hp(100),
                }}
                source={require('../../../assets/animation/scan_doc.json')}
                autoPlay
                loop
              />
            ) : (
              <>
                <TouchableOpacity
                  className="px-3 py-2 rounded-md bg-red-500 items-center my-1 w-2/3"
                  onPress={() => handleURLScan(urlImage)}>
                  <Text className="text-md font-bold text-white font-openSans">
                    Next
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  className="px-3 py-2 rounded-md bg-customRed items-center my-1 w-2/3"
                  onPress={cancelAndAddNew}>
                  <Text className="text-md font-bold text-white font-openSans">
                    Cancel and add new
                  </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        )}

        <View className="mb-48" />
      </ScrollView>

      <ModalPopup visible={modalVisible}>
        <View className="h-[80%] justify-center items-center">
          <TouchableOpacity
            onPress={() => handleCloseModal()}
            className="absolute top-2 right-2 z-10">
            <XMarkIcon width={15} height={15} color={'#000'} />
          </TouchableOpacity>

          {userImages?.length !== 0 && (
            <View className="items-center my-4">
              <Text className="text-xl my-1 font-openSans">
                Select an image
              </Text>

              <TouchableOpacity
                onPress={showPicker}
                className="h-12 rounded-md flex justify-center items-center">
                <Text className="font-openSans text-black">
                  {moment(datePicked).format('MMMM, YYYY')}
                </Text>
              </TouchableOpacity>
              {show && (
                <View className="flex-1 justify-center items-center">
                  <MonthPicker
                    autoTheme={false}
                    onChange={onValueChange}
                    value={datePicked}
                    minimumDate={new Date(2000, 0)}
                    maximumDate={new Date()}
                    locale="en"
                  />
                </View>
              )}
            </View>
          )}

          <View className="absolute flex justify-center items-center top-2">
            {getImageLoading && (
              <ActivityIndicator animating={true} color="#D45055" />
            )}

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

          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
              {!getImageLoading && userImages?.length === 0 && (
                <View className="flex justify-center items-center">
                  <Text className="text-xl font-openSans text-black">
                    You have no images.
                  </Text>
                </View>
              )}
              {filteredImages && filteredImages?.length === 0 && (
                <View>
                  <Text className="text-center text-red-600">
                    No images found for
                    {moment(datePicked).format('MMMM, YYYY')}
                  </Text>
                </View>
              )}
              {filteredImages
                ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((item, index) => (
                  <View
>>>>>>> f31f635 (Mobile new features)
                    key={index}
                    style={{
                      width: filteredImages?.length === 1 ? '70%' : '44%',
                      padding: 2,
                      marginRight: index % 2 === 0 ? 30 : 0,
                    }}>
                    <Image
                      source={{uri: item.secure_url}}
                      style={{
                        width: '100%',
                        aspectRatio: 1,
                      }}
                    />

                    <TouchableOpacity
<<<<<<< HEAD
                      disabled={loading}
=======
                      disabled={getImageLoading}
>>>>>>> f31f635 (Mobile new features)
                      onPress={() => savePicture(item.secure_url)}
                      className="bg-slate-500 justify-center items-center p-1">
                      <Text style={{color: 'white'}} className="font-openSans">
                        Download
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
<<<<<<< HEAD
                      disabled={loading}
=======
                      disabled={getImageLoading}
>>>>>>> f31f635 (Mobile new features)
                      onPress={() => handleImagePress(item.secure_url)}
                      className="bg-slate-600 justify-center items-center p-1">
                      <Text style={{color: 'white'}} className="font-openSans">
                        Select
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
<<<<<<< HEAD
                      disabled={loading}
=======
                      disabled={getImageLoading}
>>>>>>> f31f635 (Mobile new features)
                      onPress={() => handleImageEmail(item.secure_url)}
                      className="bg-gray-500 justify-center items-center p-1">
                      <Text style={{color: 'white'}} className="font-openSans">
                        Email me
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => setSelectedSavedImage(item?.secure_url)}
                      className="bg-red-500 rounded-b-md justify-center items-center p-1 mb-4">
                      <Text style={{color: 'white'}} className="font-openSans">
                        Preview
                      </Text>
                    </TouchableOpacity>
<<<<<<< HEAD
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>

            <View className="flex-row justify-center items-center">
              {selectedSavedImage && (
                <View className="flex-1">
                  <TouchableOpacity
                    onPress={() => setSelectedSavedImage(null)}
                    className={`absolute top-${hp(100) <= 667 ? 2 : 2} right-${
                      hp(100) <= 667 ? 2 : 2
                    } z-10 bg-white rounded-full p-1`}>
                    <Icon name="close" size={19} color="black" />
                  </TouchableOpacity>
                  <Image
                    source={{
                      uri: selectedSavedImage,
                    }}
                    resizeMode="cover"
                    style={{
                      width: hp(100) <= 667 ? '100%' : '100%',
                      height: '100%',
                    }}
                  />
                </View>
              )}
            </View>
          </Pressable>
        </View>
      </Modal>

      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        style={{marginBottom: 50}}>
        <View className="p-8 bg-white pt-1">
          <View className="flex justify-center items-center my-1">
            <Text className="text-xl font-openSans text-black">
              {t('uploadPhoto')}
            </Text>
            <Text className="text-gray-500 text-base font-openSans">
              {t('chooseReceipt')}
            </Text>
          </View>

          {remainingScans > 0 && (
            <View>
              <TouchableOpacity
                className={`px-3 py-2 rounded-md bg-customRed items-center ${
                  hp(100) <= 667
                    ? 'my-1'
                    : `${Platform.OS === 'ios' ? 'my-3' : 'my-2'}`
                }`}
                onPress={takePhotoFromCamera}>
                <Text className="text-md font-bold text-white font-openSans">
                  {t('takePhoto')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`px-3 py-2 rounded-md bg-customRed items-center ${
                  hp(100) <= 667
                    ? 'my-1'
                    : `${Platform.OS === 'ios' ? 'my-3' : 'my-2'}`
                }`}
                onPress={choosePhotoFromLibrary}>
                <Text className="text-md font-bold text-white font-openSans">
                  {t('fromLibrary')}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`px-3 py-2 rounded-md bg-customRed items-center ${
                  hp(100) <= 667
                    ? 'my-1'
                    : `${Platform.OS === 'ios' ? 'my-3' : 'my-2'}`
                }`}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text className="text-md font-bold text-white font-openSans">
                  {t('fromPreviousImages')}
                </Text>
              </TouchableOpacity>
=======
                  </View>
                ))}
            </View>
          </ScrollView>

          <View className="flex-row justify-center items-center">
            {selectedSavedImage && (
              <View className="flex-1">
                <TouchableOpacity
                  onPress={() => setSelectedSavedImage(null)}
                  className={`absolute top-${hp(100) <= 667 ? 2 : 2} right-${
                    hp(100) <= 667 ? 2 : 2
                  } z-10 bg-white rounded-full p-1`}>
                  <XMarkIcon width={15} height={15} color={'#000'} />
                </TouchableOpacity>
                <Image
                  source={{
                    uri: selectedSavedImage,
                  }}
                  resizeMode="cover"
                  style={{
                    width: hp(100) <= 667 ? '100%' : '100%',
                    height: '100%',
                  }}
                />
              </View>
            )}
          </View>
        </View>
      </ModalPopup>

      <RBSheet ref={bottomSheetRef} className="flex-1">
        <View className="p-8 pt-1">
          {remainingScans > 0 && (
            <View className="p-4">
              <View className="p-4">
                <View className="my-2 flex-row h-[50px] w-full items-center">
                  <Text className="text-lg  font-InterMedium  text-[#2C3D7A] my-3">
                    Choose From
                  </Text>
                </View>

                <View className="flex-row justify-between pt-1">
                  <TouchableOpacity
                    onPress={choosePhotoFromLibrary}
                    className="flex-row justify-start items-center">
                    <View className="bg-[#FF7976] rounded-md p-2">
                      <DocumentIcon width={17} height={17} color={'#fff'} />
                    </View>
                    <Text className="text-[14px] font-InterMedium ml-2 text-[#2C3D7A]">
                      Document
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={choosePhotoFromLibrary}
                    className="flex-row justify-start items-center">
                    <View className="bg-[#57CAEB] rounded-md p-2">
                      <GalleryIcon width={17} height={17} color={'#fff'} />
                    </View>
                    <Text className="text-[14px] font-InterMedium ml-2 text-[#2C3D7A]">
                      Gallery
                    </Text>
                  </TouchableOpacity>
                </View>

                <View className="flex-row justify-between my-4">
                  <TouchableOpacity
                    onPress={takePhotoFromCamera}
                    className="flex-row justify-start items-center">
                    <View className="bg-[#8976FF] rounded-md p-2">
                      <CameraIcon width={17} height={17} color={'#fff'} />
                    </View>
                    <Text className="text-[14px] font-InterMedium ml-2 text-[#2C3D7A]">
                      {t('takePhoto')}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      bottomSheetRef.current.close();
                      setTimeout(() => setModalVisible(true), 400);
                    }}
                    className="flex-row justify-start items-center">
                    <View className="bg-[#EB57D3] rounded-md p-2">
                      <ScanIcon3 width={18} height={18} color={'#fff'} />
                    </View>
                    <Text className="text-[14px] font-InterMedium ml-2 text-[#2C3D7A]">
                      Recent
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
>>>>>>> f31f635 (Mobile new features)
            </View>
          )}

          {remainingScans === 0 && (
<<<<<<< HEAD
            <TouchableOpacity
              className={`px-3 py-2 rounded-md bg-customRed items-center ${
                hp(100) <= 667
                  ? 'my-2'
                  : `${Platform.OS === 'ios' ? 'my-3' : 'my-1'}`
              }`}
              onPress={() => navigation.navigate('SubscriptionFolder')}>
              <Text className="text-md font-bold text-white font-openSans">
                Subscribe for more scans
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            className={`px-3 py-2 rounded-md bg-slate-700 items-center ${
              hp(100) <= 667
                ? 'my-1'
                : `${Platform.OS === 'ios' ? 'my-3' : 'my-1'}`
            }`}
            onPress={handleCancel}>
            <Text className="text-md font-bold font-openSans text-white">
              {t('cancel')}
            </Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
=======
            <View className="mt-10">
              <TouchableOpacity
                className={`px-3 py-2 rounded-md bg-customRed items-center ${
                  hp(100) <= 667
                    ? 'my-2'
                    : `${Platform.OS === 'ios' ? 'my-3' : 'my-1'}`
                }`}
                onPress={() => navigation.navigate('SubscriptionFolder')}>
                <Text className="text-md font-bold text-white font-openSans">
                  Subscribe for more scans
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </RBSheet>
>>>>>>> f31f635 (Mobile new features)
    </SafeAreaView>
  );
};

export default gestureHandlerRootHOC(Scan);
