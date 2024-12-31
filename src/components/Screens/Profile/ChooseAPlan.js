<<<<<<< HEAD
=======
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
>>>>>>> f31f635 (Mobile new features)
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Linking,
} from 'react-native';
<<<<<<< HEAD
import {useSelector} from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
=======
import {useDispatch, useSelector} from 'react-redux';
>>>>>>> f31f635 (Mobile new features)

import {PurchaseError, requestSubscription, useIAP} from 'react-native-iap';
import {
  userVerifyAndroidReceipt,
  userVerifyIosReceipt,
} from '../../../utils/api';
import {Modal} from 'react-native';
import {Pressable} from 'react-native';
import {Keyboard} from 'react-native';
<<<<<<< HEAD
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Spinner from 'react-native-loading-spinner-overlay';
import {store} from '../../../store';
import {updateSubscription} from '../../../store/actions/subsActions';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
=======
import Spinner from 'react-native-loading-spinner-overlay';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import moment from 'moment';
import {
  ChecklistIcon,
  ChevronRight,
  ShieldCheckmarkOutlineIcon,
  ShieldCheckmarkSharpIcon,
  XMarkIcon,
} from '../../../assets/icons';
import {updateSubscription} from '../../../redux/reducers/SubscriptionSlice';
import {useTranslation} from 'react-i18next';
>>>>>>> f31f635 (Mobile new features)

const errorLog = ({message, error}) => {
  console.log('An error happened', message, error);
};

const isIos = Platform.OS === 'ios';
const isPlay = Platform.OS === 'android';

<<<<<<< HEAD
const ChooseAPlan = () => {
=======
const ChooseAPlan = ({navigation}) => {
  const dispatch = useDispatch();
  const {t, i18n} = useTranslation();
>>>>>>> f31f635 (Mobile new features)
  const appStoreShared = process.env.API_SHARED_KEY;
  const user = useSelector(state => state.auth.user);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const subscription = useSelector(state => state.subs.subscription);
  const [iosSubs, setIosSubs] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [modal, setModal] = useState(false);
  const [subsCancel, setSubsCancel] = useState(false);
<<<<<<< HEAD
=======
  const [paymentSecret, setPaymentSecret] = useState(null);
  const [paymentSheetVisible, setPaymentSheetVisible] = useState(null);
>>>>>>> f31f635 (Mobile new features)

  const {
    purchaseHistory,
    connected,
    subscriptions,
    getSubscriptions,
    currentPurchase,
    finishTransaction,
    getPurchaseHistory,
  } = useIAP();

  const subscriptionSkus = Platform.select({
    android: ['basicmonthly599', 'premiummonthly999'],
    ios: ['basicmonthly599', 'premiummonthly999'],
  });

  const handleGetSubscriptions = async () => {
    try {
      setLoading(true);
      await getSubscriptions({skus: subscriptionSkus});

      setLoading(false);
<<<<<<< HEAD
    } catch (error) {
      setLoading(false);
      errorLog({message: 'handleGetSubscriptions', error});
=======
    } catch (err) {
      setLoading(false);
      errorLog({message: 'handleGetSubscriptions', err});
>>>>>>> f31f635 (Mobile new features)
    }
  };

  useEffect(() => {
    handleGetSubscriptions();
  }, [connected]);

  const handleCloseModal = () => {
    setModal(false);
    setSubsCancel(false);
    setError('');
    setLoading(false);
    setPaymentSecret(null);
    setSelectedPlan(null);
    setPaymentSheetVisible(null);
    setSuccess('');
  };

  const handlePlanSelection = (name, productId, price, offToken) => {
    const selected = {
      name: name,
      id: productId,
      price: price,
      offerToken: offToken,
    };
    setSelectedPlan(selected);
  };

  const handleBuySubscription = async () => {
    if (isPlay && !selectedPlan.offerToken) {
      console.log(
        `There are no subscription Offers for selected product (Only required for Google Play purchases): ${selectedPlan.id}`,
      );
    }
    try {
      setLoading(true);
      await requestSubscription({
        sku: selectedPlan.id,
        ...(selectedPlan.offerToken && {
          subscriptionOffers: [
            {sku: selectedPlan.id, offerToken: selectedPlan.offerToken},
          ],
        }),
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof PurchaseError) {
        console.log({message: `[${error.code}]: ${error.message}`, error});
      } else {
        console.log({message: 'handleBuySubscription', error});
      }
    }
  };

  useEffect(() => {
    const checkCurrentPurchase = async purchase => {
      if (purchase) {
        try {
          const receipt = purchase.transactionReceipt;
          console.log('called');
          if (receipt) {
            if (Platform.OS === 'ios') {
              const isTestEnvironment = __DEV__;

              setLoading(true);
              const verificationResponse = await userVerifyIosReceipt(
                {
                  receiptData: receipt,
                  password: appStoreShared,
                  isTestEnvironment,
                },
                user?.token,
                setError,
              );

              if (verificationResponse && verificationResponse?.data?.success) {
                const latestReceiptInfo =
                  verificationResponse.data.latestReceiptInfo;

                const subscriptionsData = latestReceiptInfo.map(receiptInfo => {
                  return {
                    productId: receiptInfo.product_id,
                    expiresDate: receiptInfo.expires_date_ms,
                    cancelled: false,
                  };
                });

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
                  setIosSubs(subscriptionsData);
                  setSelectedPlan(null);
                }
              }
              setLoading(false);
            } else {
              setLoading(true);
              const developerPayload = JSON.stringify({
                email: user?.email,
                userId: user?.id,
              });

              const res = await finishTransaction({
                purchase: currentPurchase,
                isConsumable: false,
                developerPayloadAndroid: developerPayload,
              });

              if (res.code === 'OK') {
                const androidRes = await userVerifyAndroidReceipt(
                  {
                    receipt,
                    productId: receipt?.productId,
                    purchaseToken: receipt?.purchaseToken,
                  },
                  user?.token,
                  setError,
                );

                if (androidRes && androidRes.data.success) {
                  const latestReceiptInfo = androidRes.data.latestReceiptInfo;

                  const subscriptionsData = latestReceiptInfo.map(
                    receiptInfo => ({
                      productId: receiptInfo.product_id,
                      expiresDate: receiptInfo.expires_date_ms,
                      cancelled: receiptInfo.cancelled,
                    }),
                  );

                  if (androidRes.data.subscriptionData) {
<<<<<<< HEAD
                    store.dispatch(
=======
                    dispatch(
>>>>>>> f31f635 (Mobile new features)
                      updateSubscription(androidRes.data.subscriptionData),
                    );

                    setIosSubs(subscriptionsData);
                    setSelectedPlan(null);
                  }
                }

                setLoading(false);
              }
            }
          }
<<<<<<< HEAD
        } catch (error) {
          if (error instanceof PurchaseError) {
            errorLog({message: `[${error.code}]: ${error.message}`, error});
          } else {
            errorLog({message: 'handleBuyProduct', error});
=======
        } catch (err) {
          if (error instanceof PurchaseError) {
            errorLog({message: `[${error.code}]: ${error.message}`, err});
          } else {
            errorLog({message: 'handleBuyProduct', err});
>>>>>>> f31f635 (Mobile new features)
          }
        }
      }
    };

    checkCurrentPurchase(currentPurchase);
  }, [
    currentPurchase,
    finishTransaction,
    userVerifyIosReceipt,
    userVerifyAndroidReceipt,
<<<<<<< HEAD
    store,
=======
>>>>>>> f31f635 (Mobile new features)
    setIosSubs,
  ]);

  useEffect(() => {}, [iosSubs]);

  const subscriptionDate = subscription && moment(subscription.nextBillingDate);
  const currentDate = moment();

  let highestPrice = 0;

  subscriptions.forEach(subscription => {
    if (
      subscription.subscriptionOfferDetails &&
      subscription.subscriptionOfferDetails.length > 0
    ) {
      subscription.subscriptionOfferDetails.forEach(detail => {
        if (
          detail.pricingPhases &&
          detail.pricingPhases.pricingPhaseList &&
          detail.pricingPhases.pricingPhaseList.length > 0
        ) {
          const firstPricingPhase = detail.pricingPhases.pricingPhaseList[0];

          if (
            firstPricingPhase.priceAmountMicros !== undefined &&
            firstPricingPhase.priceCurrencyCode !== undefined
          ) {
            const price =
              parseFloat(firstPricingPhase.priceAmountMicros) / 1000000;

            if (price > highestPrice) {
              highestPrice = price;
            }
          } else {
            console.log(
              `Price information not available for ${subscription.name}`,
            );
          }
        } else {
          console.log(
            `Price information not available for ${subscription.name}`,
          );
        }
      });
    }
  });

  const handleGetPurchaseHistory = async () => {
    try {
      await getPurchaseHistory();
    } catch (error) {
      errorLog({message: 'handleGetPurchaseHistory', error});
    }
  };

  useEffect(() => {
    if (connected) {
      handleGetPurchaseHistory();
    }
  }, [connected]);

  const loadAndroidData = useCallback(async () => {
    let isMounted = true;
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
            const latestReceiptInfo = androidRes.data.latestReceiptInfo;

            const subscriptionsData = latestReceiptInfo.map(receiptInfo => ({
              productId: receiptInfo.product_id,
              expiresDate: receiptInfo.expires_date_ms,
              cancelled: receiptInfo.cancelled,
            }));

            setIosSubs(subscriptionsData);

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
          setError(error);
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
            const latestReceiptInfo =
              verificationResponse.data.latestReceiptInfo;

            const subscriptionsData = latestReceiptInfo.map(receiptInfo => ({
              productId: receiptInfo.product_id,
              expiresDate: receiptInfo.expires_date_ms,
              cancelled: false,
            }));

            if (verificationResponse.data.subscriptionData) {
<<<<<<< HEAD
              store.dispatch(
=======
              dispatch(
>>>>>>> f31f635 (Mobile new features)
                updateSubscription(verificationResponse.data.subscriptionData),
              );

              setIosSubs(subscriptionsData);
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    }

    setLoading(false);

    return () => {
      isMounted = false;
    };
<<<<<<< HEAD
  }, [purchaseHistory, user?.token, setError, appStoreShared, store]);
=======
  }, [purchaseHistory, user?.token, setError, appStoreShared]);
>>>>>>> f31f635 (Mobile new features)

  useEffect(() => {
    loadAndroidData();
  }, [loadAndroidData]);

<<<<<<< HEAD
  // }, [purchaseHistory, user?.token, setError, appStoreShared, store]);

=======
>>>>>>> f31f635 (Mobile new features)
  return (
    <KeyboardAwareScrollView
      style={{
        flex: 1,
      }}
<<<<<<< HEAD
      className="bg-customBg"
      enableOnAndroid={true}>
      {error && (
        <View className="flex-row items-center justify-center my-2">
          <FontAwesome name="warning" size={14} color="#D45055" />
          <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
        </View>
      )}
=======
      className="bg-white"
      enableOnAndroid={true}>
      {error && (
        <View className="flex-row items-center justify-center my-2">
          <ChecklistIcon width={14} height={14} color={'#71BA65'} />
          <Text className="text-red-500 ml-1 font-openSans">{error}</Text>
        </View>
      )}

>>>>>>> f31f635 (Mobile new features)
      <Modal
        animationType="fade"
        visible={modal}
        onRequestClose={() => handleCloseModal()}
        transparent>
        <View className="justify-center items-center z-50 w-full h-full p-3 ">
          <Pressable
            className="w-full h-full absolute bg-white opacity-20"
            onPress={() => handleCloseModal()}
          />
          <Pressable
            onPress={() => Keyboard.dismiss()}
            className={`relative p-6 w-full ${
              Platform.OS === 'ios' ? 'h-2/5 bottom-10' : 'h-80'
            } items-center bg-white rounded-lg`}>
            <TouchableOpacity
              onPress={() => handleCloseModal()}
              className="absolute top-2 right-2 z-10">
<<<<<<< HEAD
              <Icon name="close" size={25} color="black" />
=======
              <XMarkIcon width={15} height={15} color={'#000'} />
>>>>>>> f31f635 (Mobile new features)
            </TouchableOpacity>

            {subsCancel ? (
              <View className="flex-1 justify-center items-center">
<<<<<<< HEAD
                <MaterialIcons name="beenhere" size={70} color="#FE0002" />
=======
                <ShieldCheckmarkSharpIcon
                  width={70}
                  height={70}
                  color={'#FE0002'}
                />
>>>>>>> f31f635 (Mobile new features)
                <Text className="my-4 text-xl text-slate-700 font-openSans">
                  Your Sima subscription
                </Text>
                <Text className="my-4 text-xl text-slate-700 font-openSans">
                  cancellation is now complete.
                </Text>
              </View>
            ) : (
              <View className="flex-1 justify-center items-center">
<<<<<<< HEAD
                <Ionicons
                  name="shield-checkmark-outline"
                  size={70}
                  color="green"
=======
                <ShieldCheckmarkOutlineIcon
                  width={70}
                  height={70}
                  color={'green'}
>>>>>>> f31f635 (Mobile new features)
                />

                <Text className="my-4 text-2xl font-bold text-green-700 font-openSans">
                  Thank you.
                </Text>
                <Text className="my-4 text-xl text-slate-700 font-openSans">
                  Your payment has been made.
                </Text>
              </View>
            )}
          </Pressable>
        </View>
      </Modal>

      <ScrollView>
        {loading && <Spinner visible={loading} color="#FE0002" />}

        <View className="p-1">
          {!loading &&
            subscription &&
            subscription.plan === 'free' &&
            subscriptions &&
            subscriptions?.length > 0 &&
            subscriptionDate.isAfter(currentDate) && (
              <View className="flex-col justify-center items-center mb-4">
                <Text className="text-black text-lg mr-1">
<<<<<<< HEAD
                  Free (5 scans) until{' '}
=======
                  Free (5 scans) until
>>>>>>> f31f635 (Mobile new features)
                </Text>
                <Text className="text-lg my-3 text-black">
                  {moment(subscription.nextBillingDate).format(
                    'MMM DD, YYYY - h:mm A',
                  )}
                </Text>

                <Text className="text-black text-center">
                  Free subscription will not renew automatically until you
                  subscribe to a plan.
                </Text>
              </View>
            )}

<<<<<<< HEAD
          <Text className="text-xl font-semibold text-slate-900 text-center mb-2 font-openSans">
            Subscribe scans
          </Text>

          <View className="flex flex-col mb-4">
            {[...Array(Math.ceil(subscriptions?.length / 2)).keys()].map(
              pairIndex => {
                return (
                  <View
                    className="flex flex-row justify-between items-center"
                    key={pairIndex}>
=======
          <Text className="text-xl text-center mt-2 font-semibold text-[#191919] font-InterBold mb-3 pl-3 ">
            Subscribe scans
          </Text>

          <ScrollView className="flex-1 mb-4">
            {[...Array(Math.ceil(subscriptions?.length / 1)).keys()].map(
              pairIndex => {
                return (
                  <View className="flex" key={pairIndex}>
>>>>>>> f31f635 (Mobile new features)
                    {subscriptions &&
                      subscriptions
                        ?.sort((a, b) => a.price - b.price)
                        ?.slice(pairIndex * 2, pairIndex * 2 + 2)
                        .map((plan, i) => {
<<<<<<< HEAD
                          {
                            /* const owned =
                            iosSubs &&
                            iosSubs[0]?.productId === plan.productId &&
                            Date.now() < iosSubs[0]?.expiresDate; */
                          }
=======
>>>>>>> f31f635 (Mobile new features)
                          const owned =
                            iosSubs &&
                            iosSubs.length > 0 &&
                            iosSubs[0].cancelled === false &&
                            iosSubs[0].productId === plan.productId &&
                            Date.now() < iosSubs[0].expiresDate;

                          const subscriptionOfferDetail = isPlay
                            ? plan.subscriptionOfferDetails.find(
                                detail =>
                                  detail.pricingPhases &&
                                  detail.pricingPhases.pricingPhaseList &&
                                  detail.pricingPhases.pricingPhaseList[0] &&
                                  parseFloat(
                                    detail.pricingPhases.pricingPhaseList[0]
                                      .priceAmountMicros,
                                  ) &&
                                  detail.pricingPhases.pricingPhaseList[0]
                                    .priceCurrencyCode &&
                                  parseFloat(
                                    detail.pricingPhases.pricingPhaseList[0]
                                      .priceAmountMicros,
                                  ) !== 0,
                              )
                            : null;

                          const price = isPlay
                            ? subscriptionOfferDetail
                              ? `${subscriptionOfferDetail.pricingPhases.pricingPhaseList[0].formattedPrice}`
                              : 'Price not available'
                            : null;

                          const offToken = isPlay
                            ? plan.subscriptionOfferDetails[0].offerToken
                            : null;

                          return (
                            <TouchableOpacity
                              key={i}
                              className={`flex-1 p-0 mx-4 my-3 rounded-xl relative`}
                              disabled={
                                (subscription.plan !== 'free' &&
                                  subscription.planPrice === highestPrice &&
                                  subscription.status === 'active') ||
                                (subscription.plan !== 'free' &&
                                  plan.price < highestPrice &&
                                  subscription.status === 'active') ||
                                owned
                              }
                              onPress={() =>
                                isPlay
                                  ? handlePlanSelection(
                                      plan.name,
                                      plan.productId,
                                      price,
                                      offToken,
                                    )
                                  : handlePlanSelection(
                                      plan.title,
                                      plan.productId,
                                      plan?.currency + ' ' + plan.price,
                                      null,
                                    )
                              }>
                              {owned && (
                                <View className="absolute z-10 bg-customRed rounded-xl px-2 right-0">
                                  <Text className="text-white font-bold text-xs">
                                    Subscribed
                                  </Text>
                                </View>
                              )}

                              <View
                                className={`${
                                  selectedPlan?.name ===
                                  (isPlay ? plan?.name : plan?.title)
<<<<<<< HEAD
                                    ? 'border-red-200 bg-red-200 rounded-t-lg h-32 justify-center items-center'
                                    : owned
                                    ? 'border-green-100 bg-green-100 rounded-t-lg h-32 justify-center items-center'
                                    : 'border-slate-100 bg-slate-100 rounded-t-lg h-32 justify-center items-center'
                                }`}>
                                <Text
                                  className={`${
                                    selectedPlan?.name === plan?.name ||
                                    selectedPlan?.name === plan?.title ||
                                    (subscription &&
                                      subscription.plan === plan?.name) ||
                                    selectedPlan?.plan === plan.title
                                      ? 'text-slate-900 font-semibold'
                                      : 'text-slate-900'
                                  } text-lg text-center text-md capitalize font-openSans mt-2 `}>
                                  {isPlay ? plan.name : plan.title}
                                </Text>

                                <Text
                                  className={`${
                                    selectedPlan?.name ===
                                    (isPlay ? plan?.name : plan?.title)
                                      ? 'text-gray-700'
                                      : 'text-gray-800'
                                  } text-center text-lg my-1 font-openSans`}>
                                  {isIos
                                    ? `${plan?.currency} ${plan?.price}`
                                    : price}{' '}
                                  {'\n'} /month
                                </Text>
                              </View>

                              <View className="relative h-20 bg-white flex justify-center items-center rounded-b-lg">
=======
                                    ? 'border-red-500 border rounded-3xl h-32 flex justify-between items-center pl-3'
                                    : owned
                                      ? 'border-green-100 border rounded-3xl h-32 pl-3 flex justify-between items-center'
                                      : 'border-slate-100 border rounded-3xl h-32 pl-3 flex justify-between items-center'
                                } flex-row`}>
                                <View className="flex-1 w-3/4">
                                  <Text
                                    className={`${
                                      selectedPlan?.name === plan?.name ||
                                      selectedPlan?.name === plan?.title ||
                                      (subscription &&
                                        subscription.plan === plan?.name) ||
                                      selectedPlan?.plan === plan.title
                                        ? 'text-[#2E75FF] font-semibold'
                                        : 'text-[#2E75FF] font-semibold'
                                    } text-xl capitalize font-openSans mt-2`}>
                                    {isPlay ? plan.name : plan.title}
                                  </Text>
                                  <Text
                                    className={`${
                                      selectedPlan?.name ===
                                      (isPlay ? plan?.name : plan?.title)
                                        ? 'text-gray-700'
                                        : 'text-gray-800'
                                    } text-md my-1 font-InterMedium`}>
                                    {isIos
                                      ? `${plan?.currency} ${plan?.price}`
                                      : price}
                                  </Text>
                                  <Text
                                    className={`${
                                      selectedPlan?.name ===
                                      (isPlay ? plan?.name : plan?.title)
                                        ? 'text-gray-700'
                                        : 'text-gray-800'
                                    } text-xs my-1 font-InterMedium`}>
                                    Expires in 30 day(s)
                                  </Text>

                                  <Text
                                    className={`${
                                      selectedPlan?.name ===
                                        (isPlay ? plan?.name : plan?.title) ||
                                      (subscription &&
                                        subscription?.plan ===
                                          (isPlay ? plan?.name : plan?.title))
                                        ? 'text-gray-800 '
                                        : 'text-gray-600'
                                    } text-sm my-1 font-semibold`}>
                                    {plan?.description}
                                  </Text>
                                </View>

                                <View className="mr-4">
                                  {selectedPlan?.name ===
                                  (isPlay ? plan?.name : plan?.title) ? (
                                    <ChecklistIcon
                                      width={20}
                                      height={20}
                                      color={'#71BA65'}
                                    />
                                  ) : (
                                    <View
                                      style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 10,
                                        backgroundColor: '#ECEEF2',
                                      }}
                                    />
                                  )}
                                </View>
                              </View>

                              <View className="relative  bg-white flex justify-center items-center rounded-b-lg">
>>>>>>> f31f635 (Mobile new features)
                                {subscription &&
                                  subscription.status === 'active' &&
                                  subscription.plan === plan.name && (
                                    <View className="absolute top-4 z-10 bg- rounded-xl px-2 flex-row justify-center items-center">
                                      <Text className="font-bold text-xs text-black">
<<<<<<< HEAD
                                        Expires in:{' '}
=======
                                        Expires in:
>>>>>>> f31f635 (Mobile new features)
                                      </Text>
                                      <Text className="text-xs text-black">
                                        {moment(
                                          subscription.currentPeriodEnd,
<<<<<<< HEAD
                                        ).diff(moment(), 'days')}{' '}
=======
                                        ).diff(moment(), 'days')}
>>>>>>> f31f635 (Mobile new features)
                                        day (s)
                                      </Text>
                                    </View>
                                  )}
<<<<<<< HEAD
                                <Text
                                  className={`${
                                    selectedPlan?.name ===
                                      (isPlay ? plan?.name : plan?.title) ||
                                    (subscription &&
                                      subscription?.plan ===
                                        (isPlay ? plan?.name : plan?.title))
                                      ? 'text-gray-800 font-bold'
                                      : 'text-gray-600'
                                  } text-center text-sm my-1 font-openSans`}>
                                  {plan?.description}
                                </Text>
=======
>>>>>>> f31f635 (Mobile new features)
                              </View>
                            </TouchableOpacity>
                          );
                        })}
                  </View>
                );
              },
            )}

            <View
              style={{alignItems: 'center', marginVertical: 10}}
              className="mx-4">
              <Text style={{color: '#444', fontWeight: 'bold'}}>
                Subscriptions automatically renew until canceled.
              </Text>
            </View>
<<<<<<< HEAD
          </View>
=======

            <View className="flex-row justify-center items-center">
              <Text>See our </Text>
              <Pressable
                onPress={() => navigation.navigate('TermsOfServices')}
                className="flex flex-row py-4">
                <Text className="text-black capitalize font-InterMedium underline">
                  {t('termsAndConditions')}
                </Text>
              </Pressable>
            </View>
            <View className="pb-1" />
          </ScrollView>
>>>>>>> f31f635 (Mobile new features)

          {!loading && subscriptions?.length !== 0 && selectedPlan?.id && (
            <View>
              <TouchableOpacity
                disabled={!selectedPlan || loading}
                onPress={handleBuySubscription}
                className={` ${
                  selectedPlan && selectedPlan?.name
                    ? 'bg-customRed'
<<<<<<< HEAD
                    : 'bg-slate-500'
                } flex flex-row justify-between items-center mb-4 rounded-xl border border-gray-200 p-2 px-4 mx-4 py-3`}>
                <View className="flex-row justify-center items-center">
                  <Text className="text-white ml-3 uppercase font-bold font-openSans">
                    Continue {selectedPlan && selectedPlan?.name && '-'}{' '}
=======
                    : 'bg-slate-400'
                } flex flex-row justify-between items-center mb-4 rounded-full border border-gray-200 p-2 px-4 mx-4 py-3`}>
                <View className="flex-row justify-center items-center">
                  <Text className="text-sm text-white  font-InterMedium  ml-3 uppercase">
                    Continue {selectedPlan && selectedPlan?.name && '-'}
>>>>>>> f31f635 (Mobile new features)
                    {selectedPlan && selectedPlan?.name && ''}
                    {selectedPlan && selectedPlan?.price}
                  </Text>
                </View>
<<<<<<< HEAD
                <AntDesign name="right" size={18} color="#fff" />
=======

                <ChevronRight width={14} height={14} color={'#fff'} />
>>>>>>> f31f635 (Mobile new features)
              </TouchableOpacity>
            </View>
          )}

          {!loading &&
            purchaseHistory?.length > 0 &&
            subscription?.plan !== 'free' &&
            subscription.status === 'active' && (
              <TouchableOpacity
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
                }}>
                <Text className="text-center font-bold text-black">
                  Cancel subscription
                </Text>
              </TouchableOpacity>
            )}

          {subscription?.plan !== 'free' &&
            subscription?.status === 'active' &&
            subscription?.platform !== Platform.OS && (
              <View
                style={{alignItems: 'center', marginVertical: 10}}
                className="mx-4">
                <Text className="text-center text-red-400 font-medium">
<<<<<<< HEAD
                  You have to manage subscription from your{' '}
=======
                  You have to manage subscription from your
>>>>>>> f31f635 (Mobile new features)
                  {subscription?.platform === 'ios'
                    ? 'Apple phone'
                    : 'Android phone'}
                </Text>
              </View>
            )}
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default ChooseAPlan;
