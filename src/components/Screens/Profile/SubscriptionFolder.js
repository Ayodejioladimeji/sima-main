<<<<<<< HEAD
=======
/* eslint-disable react-hooks/exhaustive-deps */
>>>>>>> f31f635 (Mobile new features)
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  Alert,
  ActivityIndicator,
  Modal,
  TouchableOpacity,
  Keyboard,
  Linking,
<<<<<<< HEAD
} from 'react-native';
import {useIAP} from 'react-native-iap';
import Icon from 'react-native-vector-icons/AntDesign';
=======
  SafeAreaView,
} from 'react-native';
import {useIAP} from 'react-native-iap';
>>>>>>> f31f635 (Mobile new features)
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
<<<<<<< HEAD
import {store} from '../../../store';
import {signOut} from '../../../store/actions/authActions';
import {resetCategories} from '../../../store/actions/categoryActions';
import {resetReceipts} from '../../../store/actions/receiptActoins';
import {
  resetSubscription,
  updateSubscription,
} from '../../../store/actions/subsActions';
=======

>>>>>>> f31f635 (Mobile new features)
import {
  checkServerConnection,
  userDeleteAccountFrontend,
  userPasswordConfirmDel,
  userVerifyAndroidReceipt,
  userVerifyIosReceipt,
} from '../../../utils/api';
<<<<<<< HEAD
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {useSelector} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useForm} from 'react-hook-form';
import CustomInput from '../../Common/CustomInput/CustomInput';
=======
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {useDispatch, useSelector} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useForm} from 'react-hook-form';
import CustomInput from '../../Common/CustomInput/CustomInput';
import {
  ChecklistIcon,
  ChevronRight,
  GoBackIcon2,
  WarningIcon,
  XMarkIcon,
} from '../../../assets/icons';
import {signOut} from '@react-native-firebase/auth';
import {resetCategories} from '../../../redux/reducers/CategorySlice';
import {resetReceipts} from '../../../redux/reducers/ReceiptSlice';
import {
  resetSubscription,
  updateSubscription,
} from '../../../redux/reducers/SubscriptionSlice';
>>>>>>> f31f635 (Mobile new features)

const errorLog = ({message, error}) => {
  console.log('An error happened', message, error);
};

const SubscriptionFolder = () => {
<<<<<<< HEAD
=======
  const dispatch = useDispatch();
>>>>>>> f31f635 (Mobile new features)
  const appStoreShared = process.env.API_SHARED_KEY;
  const isFocused = useIsFocused();
  const {connected, purchaseHistory, getPurchaseHistory} = useIAP();
  const navigation = useNavigation();
  const user = useSelector(state => state.auth.user);
  const subscription = useSelector(state => state.subs.subscription);
  const {t} = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [delAcc, setDelAcc] = useState(false);
  const {control, handleSubmit, reset} = useForm();

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '963627114564-rmvn1ajb26oo4tj3fl4vq9v2i1lvclhi.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const handleCloseModal = () => {
    setModalVisible(false);
    setError('');
    setSuccess('');
    reset();
  };

  const handleLogout = async () => {
<<<<<<< HEAD
    store.dispatch(signOut());
    store.dispatch(resetCategories());
    store.dispatch(resetReceipts());
    store.dispatch(resetSubscription());
=======
    dispatch(signOut());
    dispatch(resetCategories());
    dispatch(resetReceipts());
    dispatch(resetSubscription());
>>>>>>> f31f635 (Mobile new features)
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
    } catch (error) {
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

  const handleDeleteAccount = async () => {
    Alert.alert(
      'Delete Account',
      'Are you sure you want to delete your account? This action cannot be undone.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            setModalVisible(!modalVisible);
          },
          style: 'destructive',
        },
      ],
    );
  };

  const confirmAccountDel = async formData => {
    const isServerConnected = await checkServerConnection();
    if (isServerConnected) {
      const {password} = formData;

      const newData = {
        password,
      };

      try {
        setLoading(true);
        const res = await userPasswordConfirmDel(
          newData,
          user?.token,
          setError,
        );
        if (res && res.status === 200) {
          if (
            (subscription && subscription.plan === 'no_plan') ||
            subscription.plan === 'free' ||
            subscription.plan === 'cancelled' ||
            subscription.plan === 'expired'
          ) {
            const res = await userDeleteAccountFrontend(user?.token, setError);
            if (res && res.status === 200) {
              Alert.alert(res.data.message);
              setLoading(false);
              setModalVisible(false);
              user && user.google
                ? handleLogout()
                : user && user.apple
<<<<<<< HEAD
                ? revokeSignInWithAppleToken()
                : handleLogout();
=======
                  ? revokeSignInWithAppleToken()
                  : handleLogout();
>>>>>>> f31f635 (Mobile new features)
            }
          } else if (
            subscription?.plan !== 'free' &&
            subscription.status === 'active'
          ) {
            Alert.alert(
              'Subscription Active',
              'You have an active subscription. Please cancel your subscription before deleting your account.',
              [
                {
                  text: 'OK',
                  onPress: () => setModalVisible(false),
                },
              ],
              {cancelable: false},
            );
            setLoading(false);
          } else {
            const res = await userDeleteAccountFrontend(user?.token, setError);
            if (res && res.status === 200) {
              Alert.alert(res.data.message);
              setLoading(false);
              setModalVisible(false);
              user && user.google
                ? handleLogout()
                : user && user.apple
<<<<<<< HEAD
                ? revokeSignInWithAppleToken()
                : handleLogout();
=======
                  ? revokeSignInWithAppleToken()
                  : handleLogout();
>>>>>>> f31f635 (Mobile new features)
            }

            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    } else {
      const errorMessage = 'Server is busy or not connected!';
      setError(errorMessage);
    }
  };

  const handleGetPurchaseHistory = async () => {
    try {
      setLoading(true);
      await getPurchaseHistory();
      setLoading(false);
    } catch (error) {
      errorLog({message: 'handleGetPurchaseHistory', error});
    }
  };

  useEffect(() => {
    if (connected) {
      handleGetPurchaseHistory();
    }
  }, [connected]);

  useFocusEffect(
    React.useCallback(() => {
      console.log('Settings focused update lis');
      handleGetPurchaseHistory();
    }, []),
  );

  const loadAndroidData = useCallback(async () => {
    let isMounted = true;
    const isServerConnected = await checkServerConnection();
    if (isServerConnected && isFocused) {
      setLoading(true);
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
=======
                dispatch(updateSubscription(androidRes.data.subscriptionData));
>>>>>>> f31f635 (Mobile new features)
              }
            }
          } catch (error) {
            console.log(error);
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

      setLoading(false);
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

  return (
<<<<<<< HEAD
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      className="p-4 bg-background flex-1 bg-customBg">
      <View>
        {error && (
          <View className="flex-row items-center justify-center my-2">
            <FontAwesome name="warning" size={14} color="#D45055" />
            <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
          </View>
        )}
        <Modal
          animationType="fade"
          visible={modalVisible}
          onRequestClose={() => !loading && handleCloseModal()}
          transparent>
          <View className="justify-center items-center z-1000 w-full h-full p-3 ">
            <Pressable
              className="w-full h-full absolute bg-white opacity-20"
              onPress={() => !loading && handleCloseModal()}
            />
            <Pressable
              onPress={() => Keyboard.dismiss()}
              className={`relative p-6 w-full ${
                Platform.OS === 'ios' ? 'h-2/5 bottom-10' : 'h-80'
              } items-center bg-slate-100 rounded-md`}>
              <TouchableOpacity
                onPress={() => !loading && handleCloseModal()}
                className="absolute top-2 right-2 z-10">
                <Icon name="close" size={19} color="black" />
              </TouchableOpacity>

              <View className="absolute flex justify-center items-center top-5">
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

              <View className="flex-1 justify-center">
                <View>
                  <Text className="mt-2 font-openSans">Password</Text>
                  <CustomInput
                    name="password"
                    control={control}
                    placeholder="Password"
                    secureTextEntry={true}
                    rules={{
                      required: 'Password is required',
                    }}
                  />
                </View>

                <View className="flex-row my-2">
                  <TouchableOpacity
                    onPress={handleSubmit(confirmAccountDel)}
                    disabled={loading}
                    className="bg-customRed rounded-lg w-full p-2 text-center my-2">
                    <Text className="text-sm text-white text-center font-openSans font-bold">
                      Submit
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Pressable>
          </View>
        </Modal>

        <Pressable
          onPress={() => navigation.navigate('ChooseAPlan')}
          className="flex flex-row border-b border-slate-300 py-4">
          <Text className="text-slate-900 capitalize font-openSans">
            {t('chooseAPlan')}
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('PaymentHistory')}
          className="flex flex-row border-b border-slate-300 py-4">
          <Text className="text-slate-900 capitalize font-openSans">
            {t('paymentHistory')}
          </Text>
        </Pressable>

        {!loading && purchaseHistory?.length !== 0 && (
          <Pressable
            onPress={() => {
              if (Platform.OS === 'ios') {
                Linking.openURL('https://apps.apple.com/account/subscriptions');
              } else {
                Linking.openURL(
                  'https://play.google.com/store/account/subscriptions',
                );
              }
            }}
            className="flex flex-row border-b border-slate-300 py-4">
            <Text className="text-slate-900 capitalize font-openSans">
              {t('cancelAPlan')}
            </Text>
          </Pressable>
        )}

        <Pressable
          onPress={() => handleDeleteAccount()}
          className="flex flex-row border-b border-slate-300 py-4">
          <Text className="text-slate-900 capitalize font-openSans">
            {t('deleteAccount')}
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
              {t('payAsYouGo')}
            </Text>
          </View>
        </View>

        <View>
          {error && (
            <View className="flex-row items-center justify-center my-2">
              <WarningIcon width={14} height={14} color={'#FE0000'} />
              <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
            </View>
          )}
          <Modal
            animationType="fade"
            visible={modalVisible}
            onRequestClose={() => !loading && handleCloseModal()}
            transparent>
            <View className="justify-center items-center z-1000 w-full h-full p-3  ">
              <Pressable
                className="w-full h-full absolute bg-white opacity-20"
                onPress={() => !loading && handleCloseModal()}
              />
              <Pressable
                onPress={() => Keyboard.dismiss()}
                className={`relative p-6 w-full ${
                  Platform.OS === 'ios' ? 'h-2/5 bottom-10' : 'h-80'
                } items-center bg-slate-100 rounded-md`}>
                <TouchableOpacity
                  onPress={() => !loading && handleCloseModal()}
                  className="absolute top-2 right-2 z-10">
                  <XMarkIcon width={15} height={15} color={'#000'} />
                </TouchableOpacity>

                <View className="absolute flex justify-center items-center top-5">
                  {loading && (
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
                      <Text className="text-red-500 ml-1 font-openSans">
                        {error}
                      </Text>
                    </View>
                  )}
                </View>

                <View className="flex-1 justify-center">
                  <View>
                    <Text className="mt-2 font-openSans">Password</Text>
                    <CustomInput
                      name="password"
                      control={control}
                      placeholder="Password"
                      secureTextEntry={true}
                      rules={{
                        required: 'Password is required',
                      }}
                    />
                  </View>

                  <View className="flex-row my-2">
                    <TouchableOpacity
                      onPress={handleSubmit(confirmAccountDel)}
                      disabled={loading}
                      className={`${
                        loading ? 'bg-slate-400' : 'bg-customRed'
                      } rounded-full w-full h-[45px] p-2 justify-center items-center my-2`}>
                      <Text className="text-sm text-white  font-InterMedium ">
                        Submit
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Pressable>
            </View>
          </Modal>

          <View className="my-8">
            <Text className="text-[18px] text-[#191919] font-InterBold">
              {t('payAsYouGo')}
            </Text>
          </View>

          <View className="relative">
            <Pressable
              onPress={() => navigation.navigate('ChooseAPlan')}
              className="flex flex-row border-b border-slate-300 py-4">
              <Text className="text-black capitalize font-InterMedium">
                {t('chooseAPlan')}
              </Text>

              <View className="absolute mt-6 ml-[350px] right-1">
                <ChevronRight width={7} height={15} color={'#191919'} />
              </View>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate('PaymentHistory')}
              className="flex flex-row border-b border-slate-300 py-4">
              <Text className="text-black capitalize font-InterMedium">
                {t('paymentHistory')}
              </Text>

              <View className="absolute mt-6 ml-[350px] right-1">
                <ChevronRight width={7} height={15} color={'#191919'} />
              </View>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate('TermsOfServices')}
              className="flex flex-row border-b border-slate-300 py-4">
              <Text className="text-black capitalize font-InterMedium">
                {t('termsAndConditions')}
              </Text>

              <View className="absolute mt-6 ml-[350px] right-1">
                <ChevronRight width={7} height={15} color={'#191919'} />
              </View>
            </Pressable>

            {!loading && purchaseHistory?.length !== 0 && (
              <Pressable
                onPress={() => {
                  if (Platform.OS === 'ios') {
                    Linking.openURL(
                      'https://apps.apple.com/account/subscriptions',
                    );
                  } else {
                    Linking.openURL(
                      'https://play.google.com/store/account/subscriptions',
                    );
                  }
                }}
                className="flex flex-row border-b border-slate-300 py-4">
                <Text className="text-black capitalize font-InterMedium">
                  {t('cancelAPlan')}
                </Text>
              </Pressable>
            )}

            <Pressable
              onPress={() => handleDeleteAccount()}
              className="flex flex-row border-b border-slate-300 py-4">
              <Text className="text-black capitalize font-InterMedium">
                {t('deleteAccount')}
              </Text>

              <View className="absolute mt-6 ml-[350px] right-1">
                <ChevronRight width={7} height={15} color={'#191919'} />
              </View>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
>>>>>>> f31f635 (Mobile new features)
  );
};

export default SubscriptionFolder;
