/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';

import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

import {checkServerConnection, userRequestReport} from '../../../utils/api';
import {appleAuth} from '@invertase/react-native-apple-authentication';
import {useDispatch, useSelector} from 'react-redux';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {format} from 'date-fns';
import {ChecklistIcon, MoreIcon, WarningIcon} from '../../../assets/icons';
import {useIAP} from 'react-native-iap';
import {signOut} from '@react-native-firebase/auth';
import {resetCategories} from '../../../redux/reducers/CategorySlice';
import {resetReceipts} from '../../../redux/reducers/ReceiptSlice';
import {resetSubscription} from '../../../redux/reducers/SubscriptionSlice';

const Payments = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(state => state.auth.user);
  const {t} = useTranslation();
  const [success, setSuccess] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [datePicked, setDatePicked] = useState(new Date());
  const {connected, purchaseHistory, getPurchaseHistory} = useIAP();

  const receipts = useSelector(state => state.receipts.receipts);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '963627114564-rmvn1ajb26oo4tj3fl4vq9v2i1lvclhi.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const handleLogout = async () => {
    dispatch(signOut());
    dispatch(resetCategories());
    dispatch(resetReceipts());
    dispatch(resetSubscription());
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
    } catch (err) {
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
    }
  };

  const showGenerateReportPrompt = () => {
    Alert.alert(
      'Generate Report',
      'Are you sure you want to generate the report?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => generateReport(),
        },
      ],
      {cancelable: false},
    );
  };

  const selectedMonthFormatted = moment(datePicked).format('MMMM YYYY');

  const filteredReceipts =
    receipts &&
    receipts?.filter(
      receipt =>
        moment(receipt.date).format('MMMM YYYY') === selectedMonthFormatted,
    );

  const currentDate = format(new Date(), 'EEEE, dd MMMM');

  const renderItem = ({item}) => (
    <View className="flex items-center justify-center pr-5 bg-white rounded-lg shadow-md my-3">
      <Image
        className="w-[295px] h-[164px] rounded-md"
        source={{uri: item.uri}}
      />
    </View>
  );

  const handleGetPurchaseHistory = async () => {
    try {
      setLoading(true);
      await getPurchaseHistory();
      setLoading(false);
    } catch (error) {
      setLoading(false);
      errorLog({message: 'handleGetPurchaseHistory', error});
    }
  };

  useEffect(() => {
    handleGetPurchaseHistory();
  }, [connected]);

  // console.log(purchaseHistory);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        className="p-3 bg-background flex-1 bg-white">
        {/* <View>
        

        <View className="flex-row justify-start items-center mb-2">
          <Image
            source={{uri: user?.img}}
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
            }}
          />
          <View className="ml-3">
            <Text className="text-lg font-openSans font-bold text-black">
              {user?.name}
            </Text>

            <Text className="text-sm font-openSans text-custom-black-russian-500 ">
              {currentDate}
            </Text>
          </View>
        </View>

        <View className="flex-row  my-4 items-center ">
          <Text className="text-lg text-[#191919] font-InterBold">
            {t('paymentHistory')}
          </Text>
        </View>

        <ScrollView contentContainerStyle={{paddingBottom: 232}}>
          {filteredReceipts &&
            filteredReceipts
              ?.filter(
                rcpt =>
                  moment(rcpt.date).format('MMMM YYYY') ===
                  selectedMonthFormatted,
              )
              ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              ?.map((rcpt, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() =>
                    navigation.navigate('ReceiptDetails', {receipt: rcpt})
                  }>
                  <View className="flex-row justify-between items-center rounded-md p-2 mb-2 border border-[#e6e6e6]">
                    <View className="justify-center items-center p-1 ">
                      <Image
                        source={require('../../../assets/img/rcpt.jpg')}
                        className="w-[75px] h-[75px] rounded-md"
                        resizeMode="cover"
                      />
                    </View>

                    <View className="flex-1 ml-3 justify-start ">
                      <View className=" flex-row justify-between items-center">
                        <Text className="text-xs text-[#313131] font-InterMedium my-3">
                          {rcpt?.supplierName}
                        </Text>
                      </View>
                      <View>
                        <Text className="text-xs my-1 text-[#ADADAD] font-InterRegular">
                          {moment(rcpt?.date).format('MMM D, YYYY')},
                          {moment(rcpt?.time, 'HH:mm:ss').format('hh:mm A')}
                        </Text>
                      </View>
                    </View>
                    <View className="mr-1">
                      <View className="ml-5 mb-4">
                        <MoreIcon width={14} height={14} color={'#000'} />
                      </View>

                      <View>
                        <Text className="text-[#FA6E5A] text-[16px] font-InterMedium ">
                          ${rcpt?.totalAmount}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
          <View className="pb-44 " />
        </ScrollView>
      </View> */}

        <View>
          <View className="">
            <View className="flex-row justify-start items-center mb-2">
              <Image
                source={{uri: user?.img}}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                }}
              />
              <View className="ml-3">
                <Text className="text-lg font-openSans font-bold text-black">
                  {user?.name}
                </Text>
                <Text className="text-sm font-openSans text-custom-black-russian-500">
                  {currentDate}
                </Text>
              </View>
            </View>

            <View className="flex-row my-4 items-center">
              <Text className="text-lg text-[#191919] font-InterBold">
                {t('paymentHistory')}
              </Text>
            </View>

            <View className="my-2">
              {loading && (
                <ActivityIndicator animating={true} color="#D45055" />
              )}

              {error && (
                <View className="flex-row items-center justify-center my-2">
                  <WarningIcon width={14} height={14} color={'#FE0000'} />
                  <Text className="text-red-500 ml-1 font-openSans">
                    {error}
                  </Text>
                </View>
              )}

              {!loading && purchaseHistory?.length === 0 && (
                <View>
                  <Text className="text-center text-black">
                    History not found
                  </Text>
                </View>
              )}
            </View>

            <ScrollView>
              <View>
                {!loading &&
                  purchaseHistory?.map((purchase, index) => {
                    return (
                      <View
                        key={index}
                        className="border border-gray-200 my-1 rounded-lg bg-white p-2">
                        <TouchableOpacity key={index}>
                          <View className="flex-row justify-between items-center rounded-md p-2 mb-2">
                            <View className="justify-center items-center p-1 ">
                              <Image
                                source={require('../../../assets/img/rcpt.jpg')}
                                className="w-[75px] h-[75px] rounded-md"
                                resizeMode="cover"
                              />
                            </View>

                            <View className="flex-1 ml-3 justify-start">
                              <View className=" flex-row justify-between items-center">
                                <Text className="text-md font-InterBold text-[#313131] my-3">
                                  {purchase?.productId === 'basicmonthly599'
                                    ? 'Basic Plan'
                                    : purchase?.productId ===
                                        'premiummonthly999'
                                      ? 'Premium'
                                      : 'Unspecified'}
                                </Text>
                              </View>
                              <View>
                                <Text className="text-xs my-1 text-[#ADADAD] font-InterRegular">
                                  {moment(purchase?.transactionDate).format(
                                    'YYYY-MM-DD HH:mm:ss',
                                  )}
                                </Text>
                              </View>
                            </View>

                            <View className="mr-1">
                              <View>
                                <Text className="text-[#FA6E5A] text-[16px] font-InterBold">
                                  {purchase?.productId === 'basicmonthly599'
                                    ? '$3.99'
                                    : purchase?.productId ===
                                        'premiummonthly999'
                                      ? '$6.99'
                                      : 'Unspecified'}
                                </Text>
                              </View>
                            </View>
                          </View>
                        </TouchableOpacity>
                      </View>
                    );
                  })}
              </View>

              <View className="pb-96" />
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Payments;
